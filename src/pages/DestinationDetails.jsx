import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  Clock,
  IndianRupee,
  Share2,
  Plus,
  Compass,
  Calendar,
  Utensils,
  Lightbulb,
  Check,
  ChevronLeft,
  Eye,
  Info,
  Layers,
  Building,
  Sparkles,
  SlidersHorizontal,
  Search,
  Tag,
  Map as MapIcon
} from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { hotelService } from '../services/hotelService';
import { restaurantService } from '../services/restaurantService';
import { FavoriteButton } from '../components/common/FavoriteButton';
import { AddToTripModal } from '../components/destination/AddToTripModal';
import { WeatherCard } from '../components/weather/WeatherCard';
import { MapView } from '../components/map/MapView';
import { HotelCard } from '../components/hotel/HotelCard';
import { HotelBookingModal } from '../components/hotel/HotelBookingModal';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import { RestaurantReservationModal } from '../components/restaurant/RestaurantReservationModal';
import { AttractionCard } from '../components/destination/AttractionCard';
import { formatCurrency, formatCompactNumber } from '../utils/formatCurrency';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';

const DETAIL_TABS = [
  { id: 'overview', label: 'Overview & Highlights', icon: Info },
  { id: 'hotels', label: 'Hotels & Palace Stays', icon: Building },
  { id: 'restaurants', label: 'Restaurants & Dining', icon: Utensils },
  { id: 'attractions', label: 'Top Attractions', icon: Layers },
  { id: 'weather', label: 'Weather & Climate', icon: Compass },
  { id: 'culinary', label: 'Local Flavors', icon: Utensils },
  { id: 'tips', label: 'Insider Travel Tips', icon: Lightbulb },
  { id: 'map', label: 'Attraction Map', icon: MapIcon }
];

export function DestinationDetails() {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAttractionForModal, setSelectedAttractionForModal] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(0);

  // Booking states
  const [selectedHotelForBooking, setSelectedHotelForBooking] = useState(null);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedRestaurantForReservation, setSelectedRestaurantForReservation] = useState(null);
  const [isRestModalOpen, setIsRestModalOpen] = useState(false);

  // In-tab Filter & Sort States for One-Place Directory Experience
  const [hotelSortBy, setHotelSortBy] = useState('recommended');
  const [hotelBudgetTier, setHotelBudgetTier] = useState('all');
  const [restSortBy, setRestSortBy] = useState('recommended');
  const [restBudgetTier, setRestBudgetTier] = useState('all');

  const destination = destinationService.getDestinationById(destinationId);
  const destinationHotels = hotelService.getHotelsByDestination(destinationId);
  const destinationRestaurants = restaurantService.getRestaurantsByDestination(destinationId);

  const processedHotels = useMemo(() => {
    let list = [...destinationHotels];
    if (hotelBudgetTier === 'budget') list = list.filter(h => h.pricePerNight >= 2000 && h.pricePerNight <= 5000);
    else if (hotelBudgetTier === 'mid') list = list.filter(h => h.pricePerNight > 5000 && h.pricePerNight <= 12000);
    else if (hotelBudgetTier === 'luxury') list = list.filter(h => h.pricePerNight > 12000 && h.pricePerNight <= 20000);
    else if (hotelBudgetTier === 'ultra') list = list.filter(h => h.pricePerNight > 20000);

    if (hotelSortBy === 'price-low') list.sort((a, b) => a.pricePerNight - b.pricePerNight);
    else if (hotelSortBy === 'price-high') list.sort((a, b) => b.pricePerNight - a.pricePerNight);
    else if (hotelSortBy === 'rating-high') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [destinationHotels, hotelBudgetTier, hotelSortBy]);

  const processedRestaurants = useMemo(() => {
    let list = [...destinationRestaurants];
    if (restBudgetTier === 'budget') list = list.filter(r => r.costForTwo <= 800);
    else if (restBudgetTier === 'mid') list = list.filter(r => r.costForTwo > 800 && r.costForTwo <= 2000);
    else if (restBudgetTier === 'fine') list = list.filter(r => r.costForTwo > 2000);

    if (restSortBy === 'cost-low') list.sort((a, b) => a.costForTwo - b.costForTwo);
    else if (restSortBy === 'cost-high') list.sort((a, b) => b.costForTwo - a.costForTwo);
    else if (restSortBy === 'rating-high') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [destinationRestaurants, restBudgetTier, restSortBy]);

  // Place Type and search filter states
  const [selectedPlaceType, setSelectedPlaceType] = useState('all');
  const [placeSearchQuery, setPlaceSearchQuery] = useState('');

  const availablePlaceTypes = useMemo(() => {
    if (!destination?.attractions) return [];
    const types = new Set();
    destination.attractions.forEach((att) => {
      if (att.placeType) types.add(att.placeType);
      else if (att.category) types.add(att.category);
    });
    return Array.from(types);
  }, [destination]);

  const filteredAttractions = useMemo(() => {
    let list = destination?.attractions || [];
    if (selectedPlaceType !== 'all') {
      list = list.filter((att) => (att.placeType || att.category) === selectedPlaceType);
    }
    if (placeSearchQuery.trim()) {
      const q = placeSearchQuery.toLowerCase().trim();
      list = list.filter((att) =>
        att.name.toLowerCase().includes(q) ||
        att.description.toLowerCase().includes(q) ||
        (att.placeType && att.placeType.toLowerCase().includes(q)) ||
        (att.category && att.category.toLowerCase().includes(q))
      );
    }
    return list;
  }, [destination, selectedPlaceType, placeSearchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [destinationId]);

  if (!destination) {
    return (
      <div className="container section-padding text-center">
        <h2 className="heading-1 mb-4">Destination Not Found</h2>
        <p className="text-muted mb-6">
          We couldn't locate details for "{destinationId}".
        </p>
        <Link to="/explore" className="btn btn-primary">
          <ChevronLeft size={16} /> Back to Explore
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Destination link copied to clipboard!', 'success');
    }
  };

  const handleAddAttractionToTrip = (attraction) => {
    setSelectedAttractionForModal(attraction);
    setIsAddModalOpen(true);
  };

  const handleBookHotel = (hotel) => {
    setSelectedHotelForBooking(hotel);
    setIsHotelModalOpen(true);
  };

  const handleReserveRestaurant = (restaurant) => {
    setSelectedRestaurantForReservation(restaurant);
    setIsRestModalOpen(true);
  };

  const galleryImages = [
    destination.heroImage,
    ...(destination.gallery || [])
  ].filter(Boolean);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="destination-details-page"
    >
      {/* Editorial Destination Hero */}
      <section className="destination-hero">
        <div className="destination-hero-bg">
          <img
            src={galleryImages[selectedGalleryImg] || destination.heroImage}
            alt={destination.name}
            className="dest-hero-main-img"
          />
          <div className="dest-hero-gradient" />
        </div>

        <div className="container destination-hero-inner">
          {/* Breadcrumbs */}
          <div className="dest-breadcrumbs">
            <Link to="/explore" className="breadcrumb-link">
              <ChevronLeft size={16} /> Explore
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{destination.name}</span>
          </div>

          <div className="dest-hero-content-row">
            <div className="dest-hero-text">
              <div className="dest-badges-row mb-3">
                <span className="badge badge-accent category-badge">
                  {destination.category}
                </span>
                <span className="badge badge-rating">
                  <Star size={13} fill="currentColor" /> {destination.rating}
                  <span className="reviews-count">({formatCompactNumber(destination.reviewsCount)} reviews)</span>
                </span>
                {destination.idealDuration && (
                  <span className="badge badge-primary">
                    <Clock size={12} /> {destination.idealDuration}
                  </span>
                )}
              </div>

              <h1 className="dest-hero-title heading-display text-white">
                {destination.name}
              </h1>

              <p className="dest-hero-location text-white-muted">
                <MapPin size={16} /> {destination.state ? `${destination.state}, ` : ''}{destination.country}
              </p>

              <p className="dest-hero-tagline text-white">
                "{destination.tagline}"
              </p>
            </div>

            {/* Action Card on Hero */}
            <div className="dest-hero-cta-box glass-panel">
              <div className="dest-budget-summary">
                <span className="text-xs text-muted">Est. Daily Budget</span>
                <h3 className="text-xl font-bold text-primary">
                  {formatCurrency(destination.averageBudget)} <small className="text-xs font-normal">/ day</small>
                </h3>
              </div>

              <div className="dest-cta-buttons-col">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAttractionForModal(null);
                    setIsAddModalOpen(true);
                  }}
                  className="btn btn-primary w-full"
                >
                  <Plus size={16} />
                  <span>Add to Trip</span>
                </button>

                <div className="dest-secondary-actions-row">
                  <FavoriteButton
                    destinationId={destination.id}
                    destinationName={destination.name}
                    variant="inline"
                    className="btn btn-outline flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleShare}
                    className="btn btn-outline btn-icon"
                    title="Share this guide"
                    aria-label="Share this guide"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery Strip */}
          {galleryImages.length > 1 && (
            <div className="dest-gallery-strip">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedGalleryImg(idx)}
                  className={`gallery-thumb-btn ${selectedGalleryImg === idx ? 'active' : ''}`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={imgUrl} alt={`${destination.name} preview ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Navigation Tabs Bar */}
      <div className="dest-tabs-bar-sticky">
        <div className="container dest-tabs-container">
          <div className="dest-tabs-scroller">
            {DETAIL_TABS.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              let count = null;
              if (tab.id === 'hotels') count = destinationHotels.length;
              if (tab.id === 'restaurants') count = destinationRestaurants.length;
              if (tab.id === 'attractions') count = destination.attractions?.length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`dest-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={16} />
                  <span>{tab.label}</span>
                  {count !== null && count > 0 && (
                    <span className="dest-tab-count-pill">{count}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tabbed Content */}
      <main className="container section-padding dest-content-main">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="dest-overview-layout">
            <div className="dest-overview-left">
              <div className="card mb-6 p-6">
                <h2 className="heading-2 mb-4">About {destination.name}</h2>
                <p className="body-text leading-relaxed text-secondary mb-6">
                  {destination.description}
                </p>

                {/* Highlights Tags */}
                {destination.tags && destination.tags.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      Destination Vibe & Themes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Featured Stays Quick Section in Overview */}
              {destinationHotels.length > 0 && (
                <div className="card p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="heading-3 flex items-center gap-2">
                      <Building size={18} className="text-accent" /> Featured Stays in {destination.name}
                    </h3>
                    <button
                      onClick={() => setActiveTab('hotels')}
                      className="text-xs font-semibold text-accent hover:underline"
                    >
                      View All ({destinationHotels.length}) →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destinationHotels.slice(0, 2).map((hotel) => (
                      <div key={hotel.id} className="card border p-3 flex gap-3 items-center">
                        <img
                          src={hotel.heroImage}
                          alt={hotel.name}
                          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm truncate text-primary">{hotel.name}</h4>
                          <p className="text-xs text-muted truncate">{hotel.nearLocation}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs font-bold text-accent">
                              {formatCurrency(hotel.pricePerNight)}<span className="text-2xs font-normal text-muted">/nt</span>
                            </span>
                            <button
                              onClick={() => handleBookHotel(hotel)}
                              className="btn btn-primary btn-xs"
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Activities Quick View */}
              {destination.activities && destination.activities.length > 0 && (
                <div className="card p-6">
                  <h3 className="heading-3 mb-4">
                    <Compass size={18} /> Top Recommended Experiences
                  </h3>
                  <div className="dest-activities-list">
                    {destination.activities.map((act, idx) => (
                      <div key={idx} className="dest-activity-bullet">
                        <div className="activity-bullet-check">
                          <Check size={14} />
                        </div>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Overview Right Sidebar */}
            <div className="dest-overview-right">
              {/* Quick Facts Card */}
              <div className="card p-6 mb-6">
                <h3 className="heading-3 mb-4">Travel Essentials</h3>
                <div className="fact-list">
                  <div className="fact-item">
                    <span className="fact-label">Best Season</span>
                    <span className="fact-val font-semibold">{destination.bestTime || 'October to March'}</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Ideal Duration</span>
                    <span className="fact-val font-semibold">{destination.idealDuration || '3 - 4 Days'}</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Budget Tier</span>
                    <span className="fact-val font-semibold">{destination.budgetTier || 'Moderate'}</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">State / Region</span>
                    <span className="fact-val font-semibold">{destination.state || destination.country}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/create-trip', { state: { prefillDestinationId: destination.id } })}
                  className="btn btn-primary w-full mt-6"
                >
                  <Calendar size={16} />
                  Plan Itinerary for {destination.name}
                </button>
              </div>

              {/* Weather Summary Card */}
              <WeatherCard
                coordinates={destination.coordinates}
                fallbackProfile={destination.weatherProfile}
                locationName={destination.name}
              />
            </div>
          </div>
        )}

        {/* TAB 2: HOTELS & PALACE STAYS */}
        {activeTab === 'hotels' && (
          <div className="dest-hotels-section">
            <div className="section-header-left mb-6 flex flex-wrap justify-between items-end gap-3">
              <div>
                <span className="badge badge-accent mb-2">
                  <Sparkles size={12} /> Curated Luxury & Budget Stays
                </span>
                <h2 className="heading-2">Hotels & Stays in {destination.name}</h2>
                <p className="subheading">
                  Ranging from ₹2,000 budget lakeside havelis to ₹20,000 - ₹42,000 floating marble palaces.
                </p>
              </div>
              <Link to={`/hotels?destination=${destination.id}`} className="btn btn-outline btn-sm">
                Explore Full Directory ({destinationHotels.length} Stays) →
              </Link>
            </div>

            {/* Quick In-Place Filter & Sort Toolbar */}
            <div className="card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1 flex items-center gap-1">
                  <IndianRupee size={13} className="text-accent" /> Budget:
                </span>
                {[
                  { id: 'all', label: 'All Budgets' },
                  { id: 'budget', label: '₹2,000 – ₹5,000' },
                  { id: 'mid', label: '₹5,000 – ₹12,000' },
                  { id: 'luxury', label: '₹12,000 – ₹20,000' },
                  { id: 'ultra', label: '₹20,000+' }
                ].map(tier => (
                  <button
                    key={tier.id}
                    onClick={() => setHotelBudgetTier(tier.id)}
                    className={`chip ${hotelBudgetTier === tier.id ? 'chip-active' : ''}`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs font-semibold text-muted">Sort:</span>
                <select
                  className="form-input form-select text-xs"
                  style={{ width: 'auto', minWidth: '190px', height: '36px', padding: '0.3rem 2rem 0.3rem 0.75rem' }}
                  value={hotelSortBy}
                  onChange={(e) => setHotelSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High (From ₹2,000)</option>
                  <option value="price-high">Price: High to Low (From ₹42,000)</option>
                  <option value="rating-high">Highest Rated</option>
                </select>
              </div>
            </div>

            {processedHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    onBookNow={handleBookHotel}
                  />
                ))}
              </div>
            ) : (
              <div className="card p-8 text-center">
                <Building size={36} className="text-muted mx-auto mb-3" />
                <p className="text-muted">No hotels found in this budget category.</p>
                <button onClick={() => setHotelBudgetTier('all')} className="btn btn-primary btn-sm mt-3">
                  Reset Budget Filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: RESTAURANTS & DINING */}
        {activeTab === 'restaurants' && (
          <div className="dest-restaurants-section">
            <div className="section-header-left mb-6 flex flex-wrap justify-between items-end gap-3">
              <div>
                <span className="badge badge-accent mb-2">
                  <Utensils size={12} /> Culinary Excellence
                </span>
                <h2 className="heading-2">Restaurants & Dining in {destination.name}</h2>
                <p className="subheading">
                  Ranging from ₹550 authentic unlimited royal thalis to ₹5,500 open-air palace terraces.
                </p>
              </div>
              <Link to={`/restaurants?destination=${destination.id}`} className="btn btn-outline btn-sm">
                Explore Full Directory ({destinationRestaurants.length} Venues) →
              </Link>
            </div>

            {/* Quick In-Place Filter & Sort Toolbar */}
            <div className="card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mr-1 flex items-center gap-1">
                  <Sparkles size={13} className="text-accent" /> Cost for 2:
                </span>
                {[
                  { id: 'all', label: 'All Budgets' },
                  { id: 'budget', label: 'Under ₹800' },
                  { id: 'mid', label: '₹800 – ₹2,000' },
                  { id: 'fine', label: '₹2,000+' }
                ].map(tier => (
                  <button
                    key={tier.id}
                    onClick={() => setRestBudgetTier(tier.id)}
                    className={`chip ${restBudgetTier === tier.id ? 'chip-active' : ''}`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs font-semibold text-muted">Sort:</span>
                <select
                  className="form-input form-select text-xs"
                  style={{ width: 'auto', minWidth: '190px', height: '36px', padding: '0.3rem 2rem 0.3rem 0.75rem' }}
                  value={restSortBy}
                  onChange={(e) => setRestSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="cost-low">Cost: Low to High (From ₹550)</option>
                  <option value="cost-high">Cost: High to Low (From ₹5,500)</option>
                  <option value="rating-high">Highest Rated</option>
                </select>
              </div>
            </div>

            {processedRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedRestaurants.map((rest) => (
                  <RestaurantCard
                    key={rest.id}
                    restaurant={rest}
                    onReserveTable={handleReserveRestaurant}
                  />
                ))}
              </div>
            ) : (
              <div className="card p-8 text-center">
                <Utensils size={36} className="text-muted mx-auto mb-3" />
                <p className="text-muted">No restaurants found in this budget category.</p>
                <button onClick={() => setRestBudgetTier('all')} className="btn btn-primary btn-sm mt-3">
                  Reset Budget Filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: ATTRACTIONS */}
        {activeTab === 'attractions' && (
          <div className="dest-attractions-section">
            <div className="section-header-left mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="heading-2">Key Attractions & Must-See Sights</h2>
                  <p className="subheading">
                    Explore ticket prices, opening durations, and all nearby hotels & restaurants for each place in {destination.name}.
                  </p>
                </div>

                {/* Search in Attractions */}
                <div className="relative max-w-xs w-full">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={placeSearchQuery}
                    onChange={(e) => setPlaceSearchQuery(e.target.value)}
                    placeholder="Search places, types..."
                    className="input-field pl-9 pr-4 py-2 text-sm w-full"
                  />
                  {placeSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setPlaceSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-primary"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Place Type Filter Pills */}
              {availablePlaceTypes.length > 0 && (
                <div className="place-type-filter-bar mt-4">
                  <span className="place-type-filter-label">
                    <Tag size={12} className="text-accent" /> Place Types:
                  </span>
                  <div className="place-type-pills-scroll">
                    <button
                      type="button"
                      onClick={() => setSelectedPlaceType('all')}
                      className={`place-type-filter-pill ${selectedPlaceType === 'all' ? 'active' : ''}`}
                    >
                      All Places ({destination.attractions?.length || 0})
                    </button>
                    {availablePlaceTypes.map((type) => {
                      const count = destination.attractions?.filter(
                        (a) => (a.placeType || a.category) === type
                      ).length;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedPlaceType(type)}
                          className={`place-type-filter-pill ${selectedPlaceType === type ? 'active' : ''}`}
                        >
                          {type} ({count})
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {filteredAttractions.length > 0 ? (
              <div className="attractions-grid">
                {filteredAttractions.map((att) => (
                  <AttractionCard
                    key={att.id}
                    attraction={att}
                    destinationId={destinationId}
                    destinationName={destination.name}
                    onAddToTrip={handleAddAttractionToTrip}
                    onBookHotel={handleBookHotel}
                    onReserveRestaurant={handleReserveRestaurant}
                    onViewOnMap={() => setActiveTab('map')}
                  />
                ))}
              </div>
            ) : (
              <div className="card p-8 text-center">
                <p className="text-muted">No attractions matched your filter criteria.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlaceType('all');
                    setPlaceSearchQuery('');
                  }}
                  className="btn btn-outline btn-sm mt-3"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: WEATHER & CLIMATE */}
        {activeTab === 'weather' && (
          <div className="dest-weather-tab-layout">
            <div className="max-w-3xl mx-auto">
              <div className="section-header text-center mb-6">
                <h2 className="heading-2">Climate & Packing Outlook</h2>
                <p className="subheading">
                  Real-time conditions and seasonal recommendations for {destination.name}.
                </p>
              </div>

              <WeatherCard
                coordinates={destination.coordinates}
                fallbackProfile={destination.weatherProfile}
                locationName={destination.name}
              />

              <div className="card p-6 mt-6">
                <h3 className="heading-3 mb-3">Best Time to Visit</h3>
                <p className="body-text text-secondary mb-4">
                  The ideal window to explore {destination.name} is <strong>{destination.bestTime}</strong> when temperatures are comfortable for outdoor explorations and sightseeing walks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CULINARY */}
        {activeTab === 'culinary' && (
          <div className="dest-culinary-section">
            <div className="section-header-left mb-6">
              <h2 className="heading-2">Local Flavors & Culinary Delights</h2>
              <p className="subheading">
                Authentic dishes, street food specialties, and culinary traditions of {destination.name}.
              </p>
            </div>

            <div className="culinary-dishes-grid">
              {(destination.localFood || []).map((dish, idx) => (
                <div key={idx} className="card culinary-dish-card p-5">
                  <div className="dish-icon-box">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <h3 className="dish-title">{dish}</h3>
                    <p className="text-sm text-muted">
                      Iconic local delicacy recommended by travelers and food connoisseurs.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: INSIDER TIPS */}
        {activeTab === 'tips' && (
          <div className="dest-tips-section max-w-3xl mx-auto">
            <div className="section-header text-center mb-8">
              <h2 className="heading-2">Insider Travel Advice</h2>
              <p className="subheading">
                Practical local tips to help you navigate smoothly, avoid queues, and travel safely.
              </p>
            </div>

            <div className="tips-list">
              {(destination.travelTips || []).map((tip, idx) => (
                <div key={idx} className="card tip-card p-5 mb-4">
                  <div className="tip-num-pill">{idx + 1}</div>
                  <div className="tip-text">
                    <p className="body-text font-medium text-primary">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: MAP */}
        {activeTab === 'map' && (
          <div className="dest-map-tab-section">
            <MapView
              centerCoordinates={destination.coordinates}
              attractions={destination.attractions || []}
              destinationName={destination.name}
              height="520px"
            />
          </div>
        )}
      </main>

      {/* Modals */}
      <AddToTripModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedAttractionForModal(null);
        }}
        destination={destination}
        attraction={selectedAttractionForModal}
      />

      <HotelBookingModal
        isOpen={isHotelModalOpen}
        onClose={() => {
          setIsHotelModalOpen(false);
          setSelectedHotelForBooking(null);
        }}
        hotel={selectedHotelForBooking}
      />

      <RestaurantReservationModal
        isOpen={isRestModalOpen}
        onClose={() => {
          setIsRestModalOpen(false);
          setSelectedRestaurantForReservation(null);
        }}
        restaurant={selectedRestaurantForReservation}
      />
    </motion.div>
  );
}
