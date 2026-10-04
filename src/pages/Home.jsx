import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  TrendingUp,
  Heart,
  ChevronLeft,
  ChevronRight,
  Building,
  Utensils
} from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { hotelService } from '../services/hotelService';
import { restaurantService } from '../services/restaurantService';
import { CATEGORIES, INSPIRATIONS, TRAVEL_STATS } from '../data/destinations';
import { DestinationCard } from '../components/destination/DestinationCard';
import { CategoryCard } from '../components/destination/CategoryCard';
import { HotelCard } from '../components/hotel/HotelCard';
import { HotelBookingModal } from '../components/hotel/HotelBookingModal';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import { RestaurantReservationModal } from '../components/restaurant/RestaurantReservationModal';
import { pageVariants, staggerContainer, fadeInScale } from '../animations/motionVariants';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const categoryScrollRef = React.useRef(null);

  // Booking states for Home page showcase modals
  const [bookingHotel, setBookingHotel] = useState(null);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isRestModalOpen, setIsRestModalOpen] = useState(false);

  // Drag-to-scroll & wheel state for horizontal category sliding
  const isDraggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const scrollLeftRef = React.useRef(0);
  const hasMovedRef = React.useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  // Smooth wheel horizontal scrolling
  React.useEffect(() => {
    const el = categoryScrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollDistance = 350;
      categoryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryMouseDown = (e) => {
    if (!categoryScrollRef.current) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    setIsDragging(true);
    startXRef.current = e.pageX - categoryScrollRef.current.offsetLeft;
    scrollLeftRef.current = categoryScrollRef.current.scrollLeft;
  };

  const handleCategoryMouseMove = (e) => {
    if (!isDraggingRef.current || !categoryScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - categoryScrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
    categoryScrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleCategoryMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const popularDestinations = destinationService.getPopularDestinations(6);
  const udaipurHotels = hotelService.getHotelsByDestination('udaipur').slice(0, 6);
  const udaipurRestaurants = restaurantService.getRestaurantsByDestination('udaipur').slice(0, 6);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  const handleCategoryFilter = (catId) => {
    if (hasMovedRef.current) {
      hasMovedRef.current = false;
      return;
    }
    setSelectedCategory(catId);
    if (catId === 'all') {
      navigate('/explore');
    } else {
      navigate(`/explore?category=${catId}`);
    }
  };

  const handleBookHotel = (hotel) => {
    setBookingHotel(hotel);
    setIsHotelModalOpen(true);
  };

  const handleReserveRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsRestModalOpen(true);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1800&auto=format&fit=crop"
            alt="Udaipur City Palace overlooking Lake Pichola"
            className="hero-bg-img"
          />
          <div className="hero-overlay-gradient" />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="hero-badge">
                <Sparkles size={14} /> The Intelligent Travel Experience
              </span>
            </motion.div>

            <motion.h1
              className="hero-heading heading-display text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Plan your next <br />
              <span className="hero-heading-italic font-serif">unforgettable journey.</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle text-white-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover handpicked destinations, reserve luxury palace stays & lakefront dining, design day-by-day itineraries, and manage bookings seamlessly.
            </motion.p>

            {/* Interactive Hero Search Bar */}
            <motion.form
              onSubmit={handleHeroSearch}
              className="hero-search-form glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="hero-search-input-group">
                <Search size={20} className="hero-search-icon" />
                <input
                  type="text"
                  className="hero-search-input"
                  placeholder="Where to? (e.g. Udaipur, Goa, Manali, Jaipur...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary hero-submit-btn">
                <span>Explore</span>
                <ArrowRight size={16} />
              </button>
            </motion.form>

            {/* Quick Hero Category Chips */}
            <motion.div
              className="hero-popular-searches"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-white-muted text-xs">Popular searches:</span>
              <div className="hero-quick-tags">
                {['Udaipur', 'Goa', 'Manali', 'Jaipur', 'Kerala', 'Varanasi'].map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => navigate(`/explore?search=${city}`)}
                    className="hero-quick-tag"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Featured Destination Spotlight Card (Pixel-Perfect Travel Spotlight) */}
          <motion.div
            className="hero-spotlight-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="spotlight-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=600&auto=format&fit=crop"
                alt="Udaipur City Palace overlooking Lake Pichola"
                className="spotlight-img"
              />
              <div className="spotlight-img-overlay" />

              {/* Floating Live Badge Top Left */}
              <div className="spotlight-badge-top-left">
                <span className="spotlight-live-pill">
                  <span className="spotlight-live-dot" />
                  <Sparkles size={11} /> Trending #1
                </span>
              </div>

              {/* Floating Rating Pill Top Right */}
              <div className="spotlight-badge-top-right">
                <span className="spotlight-rating-pill">
                  <Star size={12} fill="#FFB800" stroke="#FFB800" />
                  <span>4.9</span>
                </span>
              </div>
            </div>

            <div className="spotlight-card-body">
              <div className="spotlight-location-row">
                <MapPin size={13} className="spotlight-location-icon" />
                <span className="spotlight-location-text">Rajasthan, India</span>
                <span className="spotlight-category-chip">Royal Heritage</span>
              </div>

              <h3 className="spotlight-card-heading">Udaipur, Rajasthan</h3>

              <p className="spotlight-card-desc">
                "The City of Lakes & Royal Rajputana Romance"
              </p>

              <div className="spotlight-tags-row">
                <span className="spotlight-pill">🛶 Lake Pichola</span>
                <span className="spotlight-pill">🏰 City Palace</span>
                <span className="spotlight-pill">🌅 Ghats</span>
              </div>

              <div className="spotlight-card-footer">
                <div className="spotlight-price-col">
                  <span className="spotlight-price-sub">Est. Budget</span>
                  <div className="spotlight-price-val">
                    <span className="spotlight-currency">₹4,500</span>
                    <span className="spotlight-per">/ day</span>
                  </div>
                </div>
                <Link to="/explore/udaipur" className="btn btn-primary btn-sm spotlight-action-btn">
                  <span>View Guide</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore by Category Carousel */}
      <section className="section-padding bg-surface-alt">
        <div className="container">
          <div className="section-header-between mb-4">
            <div>
              <span className="section-badge">Browse Categories</span>
              <h2 className="heading-1">Choose your travel rhythm.</h2>
              <p className="subheading">
                Whether you crave mountain solitude, golden coastal sunsets, or royal heritage.
              </p>
            </div>

            {/* Header controls for easy sliding */}
            <div className="slider-nav-arrows desktop-only flex items-center gap-2">
              <button
                type="button"
                className="category-slider-arrow-static"
                onClick={() => scrollCategories('left')}
                aria-label="Previous categories"
                title="Slide Left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="category-slider-arrow-static"
                onClick={() => scrollCategories('right')}
                aria-label="Next categories"
                title="Slide Right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="category-slider-wrapper">
            <button
              type="button"
              className="category-slider-arrow left"
              onClick={() => scrollCategories('left')}
              aria-label="Previous categories"
              title="Slide Left"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              className={`category-pills-row ${isDragging ? 'is-dragging' : ''}`}
              ref={categoryScrollRef}
              onMouseDown={handleCategoryMouseDown}
              onMouseMove={handleCategoryMouseMove}
              onMouseUp={handleCategoryMouseUp}
              onMouseLeave={handleCategoryMouseUp}
            >
              {CATEGORIES.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  isSelected={selectedCategory === cat.id}
                  onSelect={handleCategoryFilter}
                />
              ))}
            </div>

            <button
              type="button"
              className="category-slider-arrow right"
              onClick={() => scrollCategories('right')}
              aria-label="Next categories"
              title="Slide Right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* LUXURY PALACE & LAKEFRONT STAYS SHOWCASE (Udaipur & Premier Stays) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-between">
            <div>
              <span className="section-badge">
                <Building size={14} /> Palace Stays & Boutique Resorts
              </span>
              <h2 className="heading-1">Signature Stays in Udaipur & Beyond</h2>
              <p className="subheading">
                Experience world-renowned floating marble palaces, heritage havelis near Lake Pichola, and scenic mountain lodges.
              </p>
            </div>
            <Link to="/hotels" className="btn btn-outline desktop-only">
              <span>Explore All Hotels</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {udaipurHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onBookNow={handleBookHotel}
              />
            ))}
          </div>

          <div className="text-center mt-8 mobile-only">
            <Link to="/hotels" className="btn btn-outline w-full">
              <span>View All Hotels</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ICONIC LAKEFRONT & ROOFTOP DINING SHOWCASE */}
      <section className="section-padding bg-surface-alt">
        <div className="container">
          <div className="section-header-between">
            <div>
              <span className="section-badge">
                <Utensils size={14} /> Sunset Dining & Royal Cuisine
              </span>
              <h2 className="heading-1">Iconic Lakefront Restaurants & Rooftops</h2>
              <p className="subheading">
                Reserve tables at candlelit lakeside decks facing Udaipur City Palace, romantic open-sky cabanas, and royal thali venues.
              </p>
            </div>
            <Link to="/restaurants" className="btn btn-outline desktop-only">
              <span>Explore All Restaurants</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {udaipurRestaurants.map((rest) => (
              <RestaurantCard
                key={rest.id}
                restaurant={rest}
                onReserveTable={handleReserveRestaurant}
              />
            ))}
          </div>

          <div className="text-center mt-8 mobile-only">
            <Link to="/restaurants" className="btn btn-outline w-full">
              <span>View All Restaurants</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-between">
            <div>
              <span className="section-badge">Iconic Getaways</span>
              <h2 className="heading-1">Explore places worth remembering.</h2>
              <p className="subheading">
                Handpicked destinations celebrated for culture, scenery, and soul.
              </p>
            </div>
            <Link to="/explore" className="btn btn-outline desktop-only">
              <span>View All Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="destinations-grid"
          >
            {popularDestinations.map((destination) => (
              <motion.div key={destination.id} variants={fadeInScale}>
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8 mobile-only">
            <Link to="/explore" className="btn btn-outline w-full">
              <span>View All Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How TripCanvas Works */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge-light">Simplicity by Design</span>
            <h2 className="heading-1 text-white">How TripCanvas Works</h2>
            <p className="subheading text-white-muted">
              Turn your dream destination into an effortless, day-by-day travel blueprint in three steps.
            </p>
          </div>

          <div className="how-it-works-grid">
            {/* Step 1 */}
            <div className="how-step-card">
              <div className="step-num-pill">01</div>
              <div className="step-icon-circle">
                <Compass size={28} />
              </div>
              <h3 className="step-title">Discover</h3>
              <p className="step-desc">
                Explore curated guides with real photography, attraction ticket costs, culinary spots, and seasonal climate insights.
              </p>
            </div>

            {/* Step 2 */}
            <div className="how-step-card">
              <div className="step-num-pill">02</div>
              <div className="step-icon-circle">
                <Calendar size={28} />
              </div>
              <h3 className="step-title">Book & Plan</h3>
              <p className="step-desc">
                Reserve luxury lakefront hotels, rooftop dining tables, and craft day-by-day schedules with ease.
              </p>
            </div>

            {/* Step 3 */}
            <div className="how-step-card">
              <div className="step-num-pill">03</div>
              <div className="step-icon-circle">
                <TrendingUp size={28} />
              </div>
              <h3 className="step-title">Travel & Manage</h3>
              <p className="step-desc">
                Keep live booking vouchers, interactive route maps, and category expense tracking at your fingertips.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/create-trip" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Start Planning Your Trip Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Inspiration Collections */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-left">
            <span className="section-badge">Curated Moodboards</span>
            <h2 className="heading-1">Travel Inspiration</h2>
            <p className="subheading">
              Thematic collections tailored for every travel personality.
            </p>
          </div>

          <div className="inspirations-grid">
            {INSPIRATIONS.map((insp) => (
              <div
                key={insp.id}
                onClick={() => navigate(`/explore?category=${insp.filterCategory}`)}
                className="inspiration-card card"
                role="button"
                tabIndex={0}
              >
                <img src={insp.image} alt={insp.title} className="inspiration-img" />
                <div className="inspiration-overlay" />
                <div className="inspiration-content">
                  <span className="inspiration-badge">{insp.filterCategory}</span>
                  <h3 className="inspiration-title">{insp.title}</h3>
                  <p className="inspiration-subtitle">{insp.subtitle}</p>
                  <div className="inspiration-dest-pills">
                    {insp.destinations.map((d) => (
                      <span key={d} className="insp-dest-tag">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="section-padding bg-surface-alt border-y">
        <div className="container">
          <div className="stats-banner-grid">
            {TRAVEL_STATS.map((stat, idx) => (
              <div key={idx} className="stat-counter-box">
                <h3 className="stat-counter-number">
                  {stat.value}
                  <span className="stat-counter-suffix">{stat.suffix}</span>
                </h3>
                <p className="stat-counter-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-banner-card card">
            <div className="cta-banner-content">
              <span className="section-badge">Ready for Adventure?</span>
              <h2 className="heading-1">Your canvas is waiting.</h2>
              <p className="subheading mb-6">
                Join thousands of travelers planning stress-free, beautiful journeys across Udaipur and premier destinations with TripCanvas.
              </p>
              <div className="cta-buttons-row">
                <Link to="/hotels" className="btn btn-primary btn-lg cta-btn-primary">
                  <Building size={18} />
                  <span>Book Luxury Stays</span>
                </Link>
                <Link to="/restaurants" className="btn btn-outline btn-lg cta-btn-reserve">
                  <Utensils size={18} />
                  <span>Reserve Tables</span>
                </Link>
              </div>
            </div>
            <div className="cta-banner-img-wrap desktop-only">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
                alt="Tropical travel journey"
                className="cta-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modals for Home Page */}
      <HotelBookingModal
        isOpen={isHotelModalOpen}
        onClose={() => setIsHotelModalOpen(false)}
        hotel={bookingHotel}
      />

      <RestaurantReservationModal
        isOpen={isRestModalOpen}
        onClose={() => setIsRestModalOpen(false)}
        restaurant={selectedRestaurant}
      />
    </motion.div>
  );
}
