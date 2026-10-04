import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Sparkles,
  Building,
  RotateCcw,
  Star,
  LayoutGrid,
  List,
  ShieldCheck,
  CheckCircle2,
  Waves,
  IndianRupee
} from 'lucide-react';
import { hotelService } from '../../src/services/hotelService';
import { HotelCard } from '../components/hotel/HotelCard';
import { HotelBookingModal } from '../components/hotel/HotelBookingModal';
import { pageVariants } from '../animations/motionVariants';
import { formatCurrency } from '../utils/formatCurrency';

const DESTINATION_OPTIONS = [
  { id: 'all', label: 'All Destinations' },
  { id: 'udaipur', label: 'Udaipur, Rajasthan', badge: 'Floating Palaces' },
  { id: 'goa', label: 'Goa', badge: 'Beach Resorts' },
  { id: 'jaipur', label: 'Jaipur, Rajasthan', badge: 'Royal Heritage' },
  { id: 'manali', label: 'Manali, Himachal', badge: 'Mountain Lodges' }
];

const PROPERTY_TYPES = [
  { id: 'all', label: 'All Types' },
  { id: 'Haveli', label: 'Heritage Havelis' },
  { id: 'Palace', label: 'Palace Stays' },
  { id: 'Resort', label: 'Luxury Resorts' },
  { id: 'Boutique', label: 'Boutique & Lakeside' }
];

const BUDGET_TIERS = [
  { id: 'all', label: 'All Budgets (₹2K – ₹40K+)', min: 0, max: 200000 },
  { id: 'budget', label: '₹2,000 – ₹5,000 (Budget)', min: 2000, max: 5000 },
  { id: 'mid', label: '₹5,000 – ₹12,000 (Heritage)', min: 5000, max: 12000 },
  { id: 'luxury', label: '₹12,000 – ₹20,000 (Luxury)', min: 12000, max: 20000 },
  { id: 'ultra', label: '₹20,000+ (Grand Palaces)', min: 20000, max: 200000 }
];

const RATING_FILTERS = [
  { val: 0, label: 'Any Rating' },
  { val: 4.8, label: '★ 4.8+' },
  { val: 4.9, label: '★ 4.9+ (Top Rated)' }
];

export function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDestination = searchParams.get('destination') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedBudgetTier, setSelectedBudgetTier] = useState('all');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(200000);
  const [minRating, setMinRating] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [bookingHotel, setBookingHotel] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const amenityList = hotelService.getAmenityFilters();

  const handleBudgetTierChange = (tier) => {
    setSelectedBudgetTier(tier.id);
    setPriceMin(tier.min);
    setPriceMax(tier.max);
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const handleResetFilters = () => {
    setSelectedDestination('all');
    setSearchQuery('');
    setSelectedType('all');
    setSelectedBudgetTier('all');
    setPriceMin(0);
    setPriceMax(200000);
    setMinRating(0);
    setSelectedAmenities([]);
    setSortBy('recommended');
    setSearchParams({});
  };

  const handleBookNow = (hotel) => {
    setBookingHotel(hotel);
    setIsBookingModalOpen(true);
  };

  const filteredHotels = useMemo(() => {
    return hotelService.filterHotels({
      destination: selectedDestination,
      query: searchQuery,
      type: selectedType,
      priceMin,
      priceMax,
      minRating,
      amenities: selectedAmenities,
      sortBy
    });
  }, [selectedDestination, searchQuery, selectedType, priceMin, priceMax, minRating, selectedAmenities, sortBy]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="hotels-page"
    >
      {/* Editorial Luxury Hero Header */}
      <section className="hotels-hero-section">
        <div className="hotels-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop"
            alt="Luxury Hotels in Udaipur"
            className="hotels-hero-img"
          />
          <div className="hotels-hero-gradient" />
        </div>

        <div className="container hotels-hero-content">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-3">
              <Sparkles size={13} /> Royal Rajputana & World-Class Palaces
            </span>
            <h1 className="heading-display text-white mb-3">
              Luxury Hotels & Heritage Stays
            </h1>
            <p className="text-white-muted text-lg mb-6 leading-relaxed">
              From the 18th-century floating marble sanctuary of <strong>Taj Lake Palace</strong> to hilltop fortresses overlooking the Aravallis, discover hand-picked luxury suites and lakeside havelis.
            </p>

            {/* Quick Destination Filter Pills */}
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

          {/* Quick Value Props Strip */}
          <div className="hotels-value-strip glass-panel mt-6">
            <div className="value-strip-item">
              <ShieldCheck size={18} className="text-accent" />
              <div>
                <strong>Guaranteed Reservations</strong>
                <span>Official property confirmation</span>
              </div>
            </div>
            <div className="value-strip-divider" />
            <div className="value-strip-item">
              <Waves size={18} className="text-accent" />
              <div>
                <strong>Lake & Palace Views</strong>
                <span>Direct Pichola water access</span>
              </div>
            </div>
            <div className="value-strip-divider" />
            <div className="value-strip-item">
              <IndianRupee size={18} className="text-accent" />
              <div>
                <strong>No Prepayment Required</strong>
                <span>Pay comfortably during check-in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Toolbar */}
      <div className="container section-padding">
        {/* Filter Toolbar Card */}
        <div className="card hotel-filter-toolbar p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Search Input with Icon */}
            <div className="search-input-wrapper md:col-span-2">
              <Search size={18} className="search-input-icon" />
              <input
                type="text"
                placeholder="Search hotel name, landmark (e.g. Lake Pichola, City Palace, Sisarma)..."
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
                <option value="price-low">Price: Low to High (From ₹2,000)</option>
                <option value="price-high">Price: High to Low (From ₹42,000)</option>
                <option value="rating-high">Highest Rated (★ 4.9+)</option>
                <option value="popularity">Most Popular Stays</option>
              </select>
            </div>
          </div>

          {/* Budget Tier Filters Row */}
          <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1 flex items-center gap-1">
              <IndianRupee size={13} className="text-accent" /> Budget:
            </span>
            {BUDGET_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => handleBudgetTierChange(tier)}
                className={`chip ${selectedBudgetTier === tier.id ? 'chip-active' : ''}`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Secondary Filter Row: Property Type & Rating */}
          <div className="mt-3 pt-3 border-t flex flex-wrap items-center justify-between gap-4">
            {/* Property Types */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1">
                Type:
              </span>
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`chip ${selectedType === type.id ? 'chip-active' : ''}`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Ratings Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1">
                Rating:
              </span>
              {RATING_FILTERS.map((rf) => (
                <button
                  key={rf.val}
                  onClick={() => setMinRating(rf.val)}
                  className={`chip ${minRating === rf.val ? 'chip-active' : ''}`}
                >
                  {rf.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Chips Row */}
          <div className="mt-3 pt-3 border-t flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted mr-2 flex items-center gap-1">
              <SlidersHorizontal size={13} /> Amenities:
            </span>
            {amenityList.map((amenity) => {
              const isSelected = selectedAmenities.includes(amenity);
              return (
                <button
                  key={amenity}
                  onClick={() => handleAmenityToggle(amenity)}
                  className={`chip ${isSelected ? 'chip-active' : ''}`}
                >
                  {amenity}
                </button>
              );
            })}

            {(selectedAmenities.length > 0 || selectedDestination !== 'all' || selectedType !== 'all' || selectedBudgetTier !== 'all' || minRating > 0 || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-accent hover:underline ml-auto flex items-center gap-1 font-semibold"
              >
                <RotateCcw size={12} /> Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & View Switcher */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h2 className="heading-2">
              Available Stays & Palaces <span className="text-muted font-normal text-lg">({filteredHotels.length})</span>
            </h2>
            {selectedDestination === 'udaipur' && (
              <p className="text-xs text-secondary mt-0.5 font-medium">
                👑 Showing Udaipur stays from ₹2,100 (budget lakefront suites) up to ₹42,000 / night (floating marble palaces).
              </p>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="view-mode-toggle flex items-center gap-1 bg-surface border p-1 rounded-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`}
              title="List View"
              aria-label="List View"
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Hotels Grid / List */}
        {filteredHotels.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onBookNow={handleBookNow}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="card text-center p-12 max-w-lg mx-auto">
            <Building size={48} className="text-muted mx-auto mb-4" />
            <h3 className="heading-3 mb-2">No Stays Match Your Filter Criteria</h3>
            <p className="text-muted mb-4">
              Try adjusting your destination filters or amenity selections to view available rooms.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary btn-sm mx-auto">
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <HotelBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        hotel={bookingHotel}
      />
    </motion.div>
  );
}
