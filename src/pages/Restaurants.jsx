import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  Utensils,
  MapPin,
  Sparkles,
  RotateCcw,
  Flame,
  Clock,
  Wine,
  ShieldCheck,
  Award
} from 'lucide-react';
import { restaurantService } from '../../src/services/restaurantService';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import { RestaurantReservationModal } from '../components/restaurant/RestaurantReservationModal';
import { pageVariants } from '../animations/motionVariants';

const DESTINATION_OPTIONS = [
  { id: 'all', label: 'All Cities' },
  { id: 'udaipur', label: 'Udaipur, Rajasthan', badge: 'Lakefront & Rooftops' },
  { id: 'goa', label: 'Goa', badge: 'Beach Tavernas' },
  { id: 'jaipur', label: 'Jaipur, Rajasthan', badge: 'Fort Dining' }
];

const RESTAURANT_BUDGET_TIERS = [
  { id: 'all', label: 'All Budgets', min: 0, max: 20000 },
  { id: 'budget', label: 'Under ₹800 (Street & Royal Thalis)', min: 0, max: 800 },
  { id: 'mid', label: '₹800 – ₹2,000 (Lakeside & Cafes)', min: 800, max: 2000 },
  { id: 'fine', label: '₹2,000+ (Rooftops & Palace Dining)', min: 2000, max: 20000 }
];

export function Restaurants() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDestination = searchParams.get('destination') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedBudgetTier, setSelectedBudgetTier] = useState('all');
  const [minCostForTwo, setMinCostForTwo] = useState(0);
  const [maxCostForTwo, setMaxCostForTwo] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cuisineFilters = restaurantService.getCuisineFilters();

  const handleBudgetTierChange = (tier) => {
    setSelectedBudgetTier(tier.id);
    setMinCostForTwo(tier.min);
    setMaxCostForTwo(tier.max);
  };

  const handleCuisineToggle = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  const handleResetFilters = () => {
    setSelectedDestination('all');
    setSearchQuery('');
    setSelectedCuisines([]);
    setSelectedBudgetTier('all');
    setMinCostForTwo(0);
    setMaxCostForTwo(20000);
    setMinRating(0);
    setSortBy('recommended');
    setSearchParams({});
  };

  const handleReserveTable = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const filteredRestaurants = useMemo(() => {
    return restaurantService.filterRestaurants({
      destination: selectedDestination,
      query: searchQuery,
      cuisines: selectedCuisines,
      minCostForTwo,
      maxCostForTwo,
      minRating,
      sortBy
    });
  }, [selectedDestination, searchQuery, selectedCuisines, minCostForTwo, maxCostForTwo, minRating, sortBy]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="restaurants-page"
    >
      {/* Editorial Dining Hero Header */}
      <section className="hotels-hero-section">
        <div className="hotels-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop"
            alt="Udaipur Lakefront Dining & Restaurants"
            className="hotels-hero-img"
          />
          <div className="hotels-hero-gradient" />
        </div>

        <div className="container hotels-hero-content">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-3">
              <Sparkles size={13} /> Sunset Lakefront & Royal Cuisine
            </span>
            <h1 className="heading-display text-white mb-3">
              Reserve Tables at Premier Restaurants
            </h1>
            <p className="text-white-muted text-lg mb-6 leading-relaxed">
              From water-level candlelight tables facing Udaipur’s illuminated City Palace to royal island palaces and authentic 24-dish Mewari thalis.
            </p>

            {/* Quick Destination Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {DESTINATION_OPTIONS.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest.id)}
                  className={`btn btn-sm ${
                    selectedDestination === dest.id
                      ? 'btn-primary font-semibold'
                      : 'btn-glass text-white'
                  }`}
                >
                  <MapPin size={13} /> {dest.label}
                  {dest.badge && selectedDestination !== dest.id && (
                    <span className="text-2xs opacity-75 ml-1 font-normal">({dest.badge})</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Value Strip */}
          <div className="hotels-value-strip glass-panel mt-6">
            <div className="value-strip-item">
              <Award size={18} className="text-accent" />
              <div>
                <strong>Curated Culinary Excellence</strong>
                <span>Top-rated fine dining & rooftops</span>
              </div>
            </div>
            <div className="value-strip-divider" />
            <div className="value-strip-item">
              <Wine size={18} className="text-accent" />
              <div>
                <strong>Prime Lake & City Views</strong>
                <span>Sunset slots & private cabanas</span>
              </div>
            </div>
            <div className="value-strip-divider" />
            <div className="value-strip-item">
              <ShieldCheck size={18} className="text-accent" />
              <div>
                <strong>Zero Booking Fees</strong>
                <span>Instant confirmed table pass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container section-padding">
        {/* Filter Toolbar Card */}
        <div className="card hotel-filter-toolbar p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Search Input with Icon */}
            <div className="search-input-wrapper md:col-span-2">
              <Search size={18} className="search-input-icon" />
              <input
                type="text"
                placeholder="Search restaurant, cuisine, dish (e.g. Laal Maas, Ambrai, Thali)..."
                className="form-input search-input-with-icon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Destination Selector */}
            <div className="w-full">
              <select
                className="form-input form-select"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              >
                {DESTINATION_OPTIONS.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full">
              <select
                className="form-input form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Sort: Recommended</option>
                <option value="cost-low">Cost: Low to High (From ₹550)</option>
                <option value="cost-high">Cost: High to Low (From ₹5,500)</option>
                <option value="rating-high">Highest Rated (★ 4.9+)</option>
                <option value="popularity">Most Popular Dining</option>
              </select>
            </div>
          </div>

          {/* Budget Tier Filters Row */}
          <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1 flex items-center gap-1">
              <Sparkles size={13} className="text-accent" /> Budget for 2:
            </span>
            {RESTAURANT_BUDGET_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => handleBudgetTierChange(tier)}
                className={`chip ${selectedBudgetTier === tier.id ? 'chip-active' : ''}`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Cuisine Chips */}
          <div className="mt-3 pt-3 border-t flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mr-2 flex items-center gap-1">
              <SlidersHorizontal size={13} /> Cuisines & Themes:
            </span>
            {cuisineFilters.map((cuisine) => {
              const isSelected = selectedCuisines.includes(cuisine);
              return (
                <button
                  key={cuisine}
                  onClick={() => handleCuisineToggle(cuisine)}
                  className={`chip ${isSelected ? 'chip-active' : ''}`}
                >
                  {cuisine}
                </button>
              );
            })}

            {(selectedCuisines.length > 0 || selectedDestination !== 'all' || selectedBudgetTier !== 'all' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-accent hover:underline ml-auto flex items-center gap-1 font-semibold"
              >
                <RotateCcw size={12} /> Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="heading-2">
              Iconic Dining Experiences <span className="text-muted font-normal text-lg">({filteredRestaurants.length})</span>
            </h2>
            {selectedDestination === 'udaipur' && (
              <p className="text-xs text-secondary mt-0.5 font-medium">
                🍷 Showing {filteredRestaurants.length} Udaipur dining venues from ₹550 (unlimited thalis & lakeside cafes) to ₹5,500 (open-air palace terraces).
              </p>
            )}
          </div>
        </div>

        {/* Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onReserveTable={handleReserveTable}
              />
            ))}
          </div>
        ) : (
          <div className="card text-center p-12 max-w-lg mx-auto">
            <Utensils size={48} className="text-muted mx-auto mb-4" />
            <h3 className="heading-3 mb-2">No Dining Spots Found</h3>
            <p className="text-muted mb-4">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary btn-sm mx-auto">
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Reservation Modal */}
      <RestaurantReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        restaurant={selectedRestaurant}
      />
    </motion.div>
  );
}
