import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Star,
  IndianRupee,
  RotateCcw,
  Sparkles,
  Compass,
  ArrowUpDown
} from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { DestinationGrid } from '../components/destination/DestinationGrid';
import { Drawer } from '../components/common/Drawer';
import { formatCurrency } from '../utils/formatCurrency';
import { pageVariants } from '../animations/motionVariants';

const SORT_OPTIONS = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'popular', label: 'Most Popular' },
  { id: 'highest-rated', label: 'Highest Rated (★)' },
  { id: 'budget-low', label: 'Budget: Low to High' },
  { id: 'budget-high', label: 'Budget: High to Low' }
];

export function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search and filter state initialized from URL query params
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [budgetLimit, setBudgetLimit] = useState(Number(searchParams.get('budget')) || 20000);
  const [minRating, setMinRating] = useState(Number(searchParams.get('rating')) || 0);
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'recommended');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state when URL params change
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    const urlCat = searchParams.get('category');
    if (urlSearch !== null) setQuery(urlSearch);
    if (urlCat !== null) setSelectedCategory(urlCat);
  }, [searchParams]);

  const categories = destinationService.getCategories();

  // Compute filtered destinations
  const filteredDestinations = useMemo(() => {
    return destinationService.filterDestinations({
      query,
      category: selectedCategory,
      budgetRange: budgetLimit,
      minRating: minRating,
      sortBy: sortBy
    });
  }, [query, selectedCategory, budgetLimit, minRating, sortBy]);

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setBudgetLimit(20000);
    setMinRating(0);
    setSortBy('recommended');
    setSearchParams({});
  };

  const hasActiveFilters =
    query.trim() !== '' ||
    selectedCategory !== 'all' ||
    budgetLimit < 20000 ||
    minRating > 0;

  const FilterPanelContent = (
    <div className="filter-panel-inner">
      <div className="filter-header-row">
        <h3 className="filter-heading">
          <SlidersHorizontal size={18} /> Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="filter-reset-btn"
            title="Reset all filters"
          >
            <RotateCcw size={13} /> Reset
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <label className="filter-group-label">Category</label>
        <div className="filter-category-list">
          {categories.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.id.toLowerCase();
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-cat-btn ${isSelected ? 'active' : ''}`}
              >
                <span>{cat.name}</span>
                <span className="filter-cat-count">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Maximum Daily Budget Slider */}
      <div className="filter-group">
        <div className="flex justify-between items-center mb-1">
          <label className="filter-group-label mb-0">Max Daily Budget</label>
          <span className="budget-slider-val font-semibold text-accent">
            {formatCurrency(budgetLimit)}
          </span>
        </div>
        <input
          type="range"
          min="2500"
          max="20000"
          step="500"
          value={budgetLimit}
          onChange={(e) => setBudgetLimit(Number(e.target.value))}
          className="budget-slider"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>₹2,500</span>
          <span>₹20,000+</span>
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="filter-group">
        <label className="filter-group-label">Minimum Rating</label>
        <div className="rating-filter-chips">
          {[
            { val: 0, label: 'All' },
            { val: 4.5, label: '★ 4.5+' },
            { val: 4.8, label: '★ 4.8+' },
            { val: 4.9, label: '★ 4.9+' }
          ].map((r) => (
            <button
              key={r.val}
              type="button"
              onClick={() => setMinRating(r.val)}
              className={`chip ${minRating === r.val ? 'active-accent' : ''}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="explore-page section-padding"
    >
      <div className="container">
        {/* Explore Header */}
        <div className="explore-header-row mb-8">
          <div>
            <span className="section-badge">
              <Compass size={13} /> Destination Directory
            </span>
            <h1 className="heading-1">Explore the World</h1>
            <p className="subheading">
              Find your next extraordinary journey across {categories[0]?.count || '18+'} world-class destinations.
            </p>
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="btn btn-outline mobile-only flex items-center gap-2"
          >
            <Filter size={16} /> Filters {hasActiveFilters && '(Active)'}
          </button>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="explore-controls-bar card mb-6">
          <div className="explore-search-input-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by city, state, country, attraction, or theme..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="explore-search-input"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="explore-sort-box">
            <label htmlFor="sort-select" className="sort-label">
              <ArrowUpDown size={14} /> Sort:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="active-filters-row mb-6">
            <span className="active-filters-label">Active:</span>

            {query && (
              <span className="active-filter-pill">
                "{query}"
                <button onClick={() => setQuery('')} aria-label="Remove search query">
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="active-filter-pill">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} aria-label="Remove category filter">
                  <X size={12} />
                </button>
              </span>
            )}

            {budgetLimit < 20000 && (
              <span className="active-filter-pill">
                Under {formatCurrency(budgetLimit)}/day
                <button onClick={() => setBudgetLimit(20000)} aria-label="Remove budget filter">
                  <X size={12} />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="active-filter-pill">
                Rating {minRating}+ ★
                <button onClick={() => setMinRating(0)} aria-label="Remove rating filter">
                  <X size={12} />
                </button>
              </span>
            )}

            <button onClick={handleResetFilters} className="clear-all-text-btn">
              Clear All
            </button>
          </div>
        )}

        {/* Main Split Layout: Sidebar + Grid */}
        <div className="explore-layout-grid">
          {/* Desktop Left Filter Sidebar */}
          <aside className="explore-sidebar desktop-only">
            <div className="card sticky-sidebar-card">{FilterPanelContent}</div>
          </aside>

          {/* Right Destination Grid */}
          <main className="explore-results-main">
            <div className="results-count-bar mb-4">
              <span className="results-count-text">
                Showing <strong>{filteredDestinations.length}</strong> {filteredDestinations.length === 1 ? 'destination' : 'destinations'}
              </span>
            </div>

            <DestinationGrid
              destinations={filteredDestinations}
              onResetFilters={hasActiveFilters ? handleResetFilters : undefined}
            />
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <Drawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        title="Filter Destinations"
      >
        <div style={{ padding: '1rem' }}>{FilterPanelContent}</div>
      </Drawer>
    </motion.div>
  );
}
