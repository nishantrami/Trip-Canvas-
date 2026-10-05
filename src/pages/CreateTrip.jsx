import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Calendar,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Search,
  Check,
  Building,
  Star,
  Bed,
  ShieldCheck
} from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { hotelService } from '../services/hotelService';
import { TRAVEL_STYLES, INTEREST_TAGS } from '../data/destinations';
import { formatCurrency } from '../utils/formatCurrency';
import { calculateDaysBetween } from '../utils/helpers';
import { useTrips } from '../context/TripContext';
import { pageVariants } from '../animations/motionVariants';

const STEPS = [
  { id: 1, title: 'Destination', subtitle: 'Where are you headed?' },
  { id: 2, title: 'Dates', subtitle: 'When are you traveling?' },
  { id: 3, title: 'Travelers', subtitle: 'Who is joining you?' },
  { id: 4, title: 'Hotel Stay', subtitle: 'Choose your accommodation (optional)' },
  { id: 5, title: 'Preferences', subtitle: 'What are your vibes?' },
  { id: 6, title: 'Budget', subtitle: 'What is your spending goal?' },
  { id: 7, title: 'Review', subtitle: 'Confirm & generate itinerary' }
];

const HOTEL_BUDGET_TIERS = [
  { id: 'all', label: 'All Stays' },
  { id: 'budget', label: '₹2,000 – ₹5,000 (Budget)' },
  { id: 'mid', label: '₹5,000 – ₹12,000 (Heritage)' },
  { id: 'luxury', label: '₹12,000 – ₹20,000 (Luxury)' },
  { id: 'ultra', label: '₹20,000+ (Grand Palaces)' }
];

export function CreateTrip() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createTrip } = useTrips();

  const prefillDestId = location.state?.prefillDestinationId || '';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCoverType, setSelectedCoverType] = useState('hotel'); // 'hotel' or 'destination'
  const [formData, setFormData] = useState(() => {
    const initialDestId = prefillDestId || 'udaipur';
    const initialHotels = hotelService.getHotelsByDestination(initialDestId);
    const topHotel = initialHotels.find(h => h.id === 'zostel-lake-pichola-udaipur') || initialHotels[0] || null;
    return {
      destinationId: initialDestId,
      title: '',
      startDate: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0], // 7 days from now
      endDate: new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0], // 10 days from now
      travelers: 2,
      travelStyle: 'Couple',
      selectedHotelId: topHotel ? topHotel.id : '',
      selectedHotel: topHotel,
      selectedRoom: topHotel?.roomTypes?.[0] || null,
      interests: ['Culture', 'Food & Dining', 'History & Forts'],
      budget: 18000,
      notes: ''
    };
  });

  const [destSearchQuery, setDestSearchQuery] = useState('');
  const [hotelFilterTier, setHotelFilterTier] = useState('all');
  const [hotelSortOrder, setHotelSortOrder] = useState('recommended');
  const [hotelSearchQuery, setHotelSearchQuery] = useState('');
  const [error, setError] = useState('');

  const allDestinations = destinationService.getAllDestinations();
  const selectedDest = destinationService.getDestinationById(formData.destinationId) || allDestinations[0];

  const durationDays = calculateDaysBetween(formData.startDate, formData.endDate);

  // Auto calculate suggested budget including hotel stay if selected
  useEffect(() => {
    if (selectedDest) {
      const dailyEstimate = (selectedDest.averageBudget || 4000) * durationDays * (formData.travelers || 1);
      const hotelTotal = formData.selectedHotel
        ? (formData.selectedRoom?.price || formData.selectedHotel.pricePerNight) * durationDays
        : 0;

      setFormData((prev) => ({
        ...prev,
        budget: prev.budget || (dailyEstimate + hotelTotal),
        title: prev.title || `${selectedDest.name} ${formData.travelStyle || 'Escape'}`
      }));
    }
  }, [formData.destinationId, durationDays, formData.travelers, formData.travelStyle, formData.selectedHotel, formData.selectedRoom]);

  const filteredDestList = allDestinations.filter((d) =>
    d.name.toLowerCase().includes(destSearchQuery.toLowerCase()) ||
    d.country.toLowerCase().includes(destSearchQuery.toLowerCase()) ||
    d.state?.toLowerCase().includes(destSearchQuery.toLowerCase())
  );

  const destinationHotels = useMemo(() => {
    return hotelService.getHotelsByDestination(formData.destinationId);
  }, [formData.destinationId]);

  const filteredHotels = useMemo(() => {
    let list = [...destinationHotels];
    if (hotelSearchQuery.trim()) {
      const q = hotelSearchQuery.toLowerCase().trim();
      list = list.filter(
        h =>
          h.name.toLowerCase().includes(q) ||
          h.nearLocation.toLowerCase().includes(q) ||
          h.type.toLowerCase().includes(q) ||
          h.tagline.toLowerCase().includes(q)
      );
    }

    if (hotelFilterTier === 'budget') list = list.filter(h => h.pricePerNight >= 2000 && h.pricePerNight <= 5000);
    else if (hotelFilterTier === 'mid') list = list.filter(h => h.pricePerNight > 5000 && h.pricePerNight <= 12000);
    else if (hotelFilterTier === 'luxury') list = list.filter(h => h.pricePerNight > 12000 && h.pricePerNight <= 20000);
    else if (hotelFilterTier === 'ultra') list = list.filter(h => h.pricePerNight > 20000);

    if (hotelSortOrder === 'price-low') list.sort((a, b) => a.pricePerNight - b.pricePerNight);
    else if (hotelSortOrder === 'price-high') list.sort((a, b) => b.pricePerNight - a.pricePerNight);
    else if (hotelSortOrder === 'rating-high') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [destinationHotels, hotelSearchQuery, hotelFilterTier, hotelSortOrder]);

  const handleSelectHotel = (hotel) => {
    if (formData.selectedHotelId === hotel.id) {
      setFormData(prev => ({
        ...prev,
        selectedHotelId: '',
        selectedHotel: null,
        selectedRoom: null
      }));
    } else {
      const defaultRoom = hotel.roomTypes?.[0] || null;
      setFormData(prev => ({
        ...prev,
        selectedHotelId: hotel.id,
        selectedHotel: hotel,
        selectedRoom: defaultRoom
      }));
    }
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSelectDestination = (destId) => {
    const hotels = hotelService.getHotelsByDestination(destId);
    const topHotel = hotels.find(h => h.id.includes('zostel')) || hotels[0] || null;
    setFormData((prev) => ({
      ...prev,
      destinationId: destId,
      selectedHotelId: topHotel ? topHotel.id : '',
      selectedHotel: topHotel,
      selectedRoom: topHotel?.roomTypes?.[0] || null
    }));
  };

  const handleNext = () => {
    setError('');
    if (currentStep === 1 && !formData.destinationId) {
      setError('Please select a destination');
      return;
    }
    if (currentStep === 2 && (!formData.startDate || !formData.endDate)) {
      setError('Please select valid start and end dates');
      return;
    }
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handlePrev = () => {
    setError('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = () => {
    const reviewCover = (selectedCoverType === 'hotel' && formData.selectedHotel?.heroImage)
      ? formData.selectedHotel.heroImage
      : selectedDest?.heroImage;

    const created = createTrip({
      title: formData.title || `${selectedDest?.name} Journey`,
      destinationId: formData.destinationId,
      destinationName: selectedDest?.name,
      coverImage: reviewCover,
      startDate: formData.startDate,
      endDate: formData.endDate,
      travelers: formData.travelers,
      travelStyle: formData.travelStyle,
      hotel: formData.selectedHotel,
      hotelRoom: formData.selectedRoom,
      interests: formData.interests,
      budget: formData.budget,
      notes: formData.notes
    });

    // Launch celebratory confetti!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback safe
    }

    // Redirect straight to new trip workspace
    navigate(`/my-trips/${created.id}`);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="create-trip-page section-padding"
    >
      <div className="container container-narrow">
        {/* Wizard Header & Progress Bar */}
        <div className="wizard-header text-center mb-8">
          <span className="section-badge">
            <Sparkles size={13} /> Step {currentStep} of {STEPS.length}
          </span>
          <h1 className="heading-1">{STEPS[currentStep - 1].title}</h1>
          <p className="subheading">{STEPS[currentStep - 1].subtitle}</p>

          {/* Stepper Dots */}
          <div className="wizard-progress-bar-wrap">
            <div className="wizard-stepper-dots">
              {STEPS.map((step) => {
                const isPassed = currentStep >= step.id;
                const isCurrent = currentStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                    className={`wizard-step-dot ${isPassed ? 'completed' : ''} ${isCurrent ? 'active' : ''}`}
                    title={step.title}
                  >
                    {currentStep > step.id ? <Check size={14} /> : step.id}
                  </div>
                );
              })}
            </div>
            <div className="wizard-track-line">
              <div
                className="wizard-track-fill"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Wizard Main Card */}
        <div className="card wizard-main-card p-8">
          {error && <div className="alert-error-banner mb-6">{error}</div>}

          {/* STEP 1: DESTINATION SELECTION */}
          {currentStep === 1 && (
            <div className="wizard-step-content">
              <div className="dest-search-input-box mb-6">
                <Search size={18} className="text-muted" />
                <input
                  type="text"
                  placeholder="Search destinations (e.g. Udaipur, Goa, Paris, Tokyo...)"
                  className="form-control"
                  value={destSearchQuery}
                  onChange={(e) => setDestSearchQuery(e.target.value)}
                />
              </div>

              <div className="wizard-destinations-grid">
                {filteredDestList.map((dest) => {
                  const isSelected = formData.destinationId === dest.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => handleSelectDestination(dest.id)}
                      className={`wizard-dest-card ${isSelected ? 'selected' : ''}`}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={dest.heroImage} alt={dest.name} className="wizard-dest-img" />
                      <div className="wizard-dest-overlay" />
                      <div className="wizard-dest-info">
                        <span className="badge badge-accent mb-1">{dest.category}</span>
                        <h4 className="wizard-dest-name">{dest.name}</h4>
                        <p className="wizard-dest-loc">{dest.country}</p>
                      </div>
                      {isSelected && (
                        <div className="wizard-dest-check">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: DATES & DURATION */}
          {currentStep === 2 && (
            <div className="wizard-step-content max-w-md mx-auto">
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="start-date">
                  <Calendar size={16} /> Start Date
                </label>
                <input
                  id="start-date"
                  type="date"
                  className="form-control"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>

              <div className="form-group mb-6">
                <label className="form-label" htmlFor="end-date">
                  <Calendar size={16} /> End Date
                </label>
                <input
                  id="end-date"
                  type="date"
                  className="form-control"
                  min={formData.startDate}
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>

              <div className="duration-highlight-box text-center p-4 bg-surface-alt rounded-lg">
                <span className="text-xs text-muted uppercase tracking-wider">Calculated Duration</span>
                <h3 className="text-2xl font-bold text-accent mt-1">
                  {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
                </h3>
              </div>
            </div>
          )}

          {/* STEP 3: TRAVELERS & STYLE */}
          {currentStep === 3 && (
            <div className="wizard-step-content max-w-lg mx-auto">
              <div className="form-group mb-6">
                <label className="form-label mb-2">Number of Travelers</label>
                <div className="travelers-counter-row">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, travelers: num })}
                      className={`counter-pill ${formData.travelers === num ? 'active' : ''}`}
                    >
                      {num === 6 ? '6+' : num} {num === 1 ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label mb-2">Travel Group Style</label>
                <div className="flex flex-wrap gap-2">
                  {TRAVEL_STYLES.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setFormData({ ...formData, travelStyle: style })}
                      className={`chip ${formData.travelStyle === style ? 'active-accent' : ''}`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: HOTEL & ACCOMMODATION SELECTION */}
          {currentStep === 4 && (
            <div className="wizard-step-content">
              {/* Hotel Header & Skip Option */}
              <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                <div>
                  <h3 className="heading-3 mb-1">
                    Select Your Stay in {selectedDest?.name}
                  </h3>
                  <p className="text-muted text-xs">
                    Choose a verified palace, boutique haveli, or lakeside resort ({filteredHotels.length} available from ₹2,000 to ₹42,000)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, selectedHotelId: '', selectedHotel: null, selectedRoom: null }));
                    handleNext();
                  }}
                  className="btn btn-ghost btn-sm text-accent"
                >
                  Skip for now (Decide later) →
                </button>
              </div>

              {/* Selection status notification */}
              {formData.selectedHotel && (
                <div className="card p-3 mb-4 bg-accent-subtle border-accent flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary">
                      Selected: <strong>{formData.selectedHotel.name}</strong> ({formData.selectedRoom?.name || 'Standard'}) — {formatCurrency((formData.selectedRoom?.price || formData.selectedHotel.pricePerNight) * durationDays)} for {durationDays} nights
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, selectedHotelId: '', selectedHotel: null, selectedRoom: null }))}
                    className="text-xs text-danger font-semibold hover:underline"
                  >
                    Remove Stay
                  </button>
                </div>
              )}

              {/* Filter & Sort Toolbar for Wizard */}
              <div className="wizard-hotel-toolbar mb-4 flex flex-wrap items-center justify-between gap-3">
                {/* Search Input */}
                <div className="search-input-wrapper flex-1" style={{ minWidth: '220px' }}>
                  <Search size={15} className="search-input-icon" />
                  <input
                    type="text"
                    placeholder="Filter hotel name, landmark..."
                    className="form-input search-input-with-icon"
                    style={{ height: '40px', fontSize: '0.85rem' }}
                    value={hotelSearchQuery}
                    onChange={(e) => setHotelSearchQuery(e.target.value)}
                  />
                </div>

                {/* Sort Selector */}
                <select
                  className="form-input form-select"
                  style={{ width: 'auto', minWidth: '200px', height: '40px', fontSize: '0.82rem' }}
                  value={hotelSortOrder}
                  onChange={(e) => setHotelSortOrder(e.target.value)}
                >
                  <option value="recommended">Sort: Recommended</option>
                  <option value="price-low">Price: Low to High (From ₹2,000)</option>
                  <option value="price-high">Price: High to Low (From ₹42,000)</option>
                  <option value="rating-high">Highest Rated (★ 4.9+)</option>
                </select>
              </div>

              {/* Budget Tier Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-2xs font-bold text-muted uppercase mr-1">Budget:</span>
                {HOTEL_BUDGET_TIERS.map(tier => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHotelFilterTier(tier.id)}
                    className={`chip text-2xs ${hotelFilterTier === tier.id ? 'chip-active' : ''}`}
                    style={{ padding: '0.2rem 0.6rem' }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              {/* Hotels Grid */}
              {filteredHotels.length > 0 ? (
                <div className="wizard-hotels-grid">
                  {filteredHotels.map(hotel => {
                    const isSelected = formData.selectedHotelId === hotel.id;
                    const totalStayCost = hotel.pricePerNight * durationDays;

                    return (
                      <div
                        key={hotel.id}
                        onClick={() => handleSelectHotel(hotel)}
                        className={`wizard-hotel-card ${isSelected ? 'selected' : ''}`}
                      >
                        <div className="wizard-hotel-media">
                          <img src={hotel.heroImage} alt={hotel.name} className="wizard-hotel-img" loading="lazy" />
                          {hotel.badge && (
                            <span className="badge badge-accent wizard-hotel-badge">
                              {hotel.badge}
                            </span>
                          )}
                          <span className="badge badge-rating wizard-hotel-rating">
                            <Star size={11} fill="currentColor" /> {hotel.rating}
                          </span>
                          {isSelected && (
                            <div className="wizard-hotel-check">
                              <Check size={14} />
                            </div>
                          )}
                        </div>

                        <div className="wizard-hotel-body">
                          <div className="flex justify-between items-start gap-1 mb-1">
                            <span className="text-2xs font-bold uppercase tracking-wider text-accent">{hotel.type}</span>
                            <span className="text-2xs text-muted">₹{hotel.pricePerNight.toLocaleString('en-IN')}/night</span>
                          </div>

                          <h4 className="wizard-hotel-title" title={hotel.name}>{hotel.name}</h4>
                          <p className="wizard-hotel-loc" title={hotel.nearLocation}>{hotel.nearLocation}</p>

                          <div className="wizard-hotel-footer">
                            <div className="wizard-hotel-price-summary">
                              <span className="text-2xs text-muted">{durationDays} Nights Stay:</span>
                              <strong className="text-sm font-bold text-primary">{formatCurrency(totalStayCost)}</strong>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectHotel(hotel);
                              }}
                              className={`btn btn-xs ${isSelected ? 'btn-primary font-bold' : 'btn-outline'}`}
                            >
                              {isSelected ? '✓ Selected' : 'Select'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center p-6 bg-surface-alt rounded-lg">
                  <Building size={32} className="text-muted mx-auto mb-2" />
                  <p className="text-xs text-muted mb-2">No hotels found matching your filter criteria.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setHotelFilterTier('all');
                      setHotelSearchQuery('');
                    }}
                    className="btn btn-outline btn-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: PREFERENCES & VIBES */}
          {currentStep === 5 && (
            <div className="wizard-step-content max-w-lg mx-auto">
              <p className="text-muted text-sm mb-4 text-center">
                Select the themes you want to prioritize in your itinerary suggestions:
              </p>

              <div className="interest-chips-grid">
                {INTEREST_TAGS.map((interest) => {
                  const isChecked = formData.interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`interest-card-chip ${isChecked ? 'selected' : ''}`}
                    >
                      <span>{interest}</span>
                      {isChecked && <Check size={14} className="text-accent" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: BUDGET GOAL */}
          {currentStep === 6 && (
            <div className="wizard-step-content max-w-md mx-auto">
              <div className="form-group mb-6">
                <label className="form-label" htmlFor="trip-budget">
                  <IndianRupee size={16} /> Total Target Budget (₹)
                </label>
                <input
                  id="trip-budget"
                  type="number"
                  min="1000"
                  step="500"
                  className="form-control text-lg font-bold"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              {/* Preset Budget Chips */}
              <div className="budget-preset-chips-row mb-6">
                {[10000, 18000, 25000, 45000, 75000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: amount })}
                    className={`chip ${Number(formData.budget) === amount ? 'active' : ''}`}
                  >
                    {formatCurrency(amount)}
                  </button>
                ))}
              </div>

              <div className="budget-summary-box p-4 bg-surface-alt rounded-lg text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-muted">Per Traveler:</span>
                  <strong>{formatCurrency(Math.round(formData.budget / formData.travelers))}</strong>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted">Per Day:</span>
                  <strong>{formatCurrency(Math.round(formData.budget / durationDays))}</strong>
                </div>
                {formData.selectedHotel && (
                  <div className="flex justify-between pt-2 border-t mt-2 text-xs">
                    <span className="text-accent font-semibold">Included Hotel Stay:</span>
                    <strong>{formatCurrency((formData.selectedRoom?.price || formData.selectedHotel.pricePerNight) * durationDays)}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 7: REVIEW & GENERATE */}
          {currentStep === 7 && (
            <div className="wizard-step-content">
              <div className="trip-review-summary-card mb-6">
                <div className="review-media-header">
                  <img
                    src={selectedCoverType === 'hotel' && formData.selectedHotel?.heroImage ? formData.selectedHotel.heroImage : (selectedDest?.heroImage || formData.selectedHotel?.heroImage)}
                    alt={formData.title || selectedDest?.name}
                    className="review-cover-img"
                  />
                  <div className="review-media-overlay" />
                  <div className="review-header-info">
                    <span className="badge badge-accent mb-1">
                      {selectedCoverType === 'hotel' && formData.selectedHotel ? (formData.selectedHotel.badge || formData.selectedHotel.type) : selectedDest?.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedCoverType === 'hotel' && formData.selectedHotel ? formData.selectedHotel.name : selectedDest?.name}
                    </h3>
                    <p className="text-white-muted text-sm">
                      {selectedCoverType === 'hotel' && formData.selectedHotel
                        ? `${formData.selectedHotel.nearLocation}, ${selectedDest?.name}`
                        : `${selectedDest?.name}, ${selectedDest?.country}`}
                    </p>
                  </div>

                  {/* Cover Photo Toggle */}
                  {formData.selectedHotel && (
                    <div className="review-cover-toggle-pills">
                      <button
                        type="button"
                        onClick={() => setSelectedCoverType('destination')}
                        className={`review-cover-pill ${selectedCoverType === 'destination' ? 'active' : ''}`}
                      >
                        Destination View
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedCoverType('hotel')}
                        className={`review-cover-pill ${selectedCoverType === 'hotel' ? 'active' : ''}`}
                      >
                        Stay View
                      </button>
                    </div>
                  )}
                </div>

                <div className="review-details-grid p-6">
                  <div className="review-item">
                    <span className="text-xs text-muted uppercase">Trip Title</span>
                    <input
                      type="text"
                      className="form-control mt-1"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Udaipur Royal Escape"
                    />
                  </div>

                  <div className="review-stats-row mt-4">
                    <div>
                      <span className="text-xs text-muted">Duration</span>
                      <p className="font-semibold">{durationDays} Days ({formData.startDate} to {formData.endDate})</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted">Travelers</span>
                      <p className="font-semibold">{formData.travelers} ({formData.travelStyle})</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted">Budget Goal</span>
                      <p className="font-semibold text-accent">{formatCurrency(formData.budget)}</p>
                    </div>
                  </div>

                  {/* Selected Hotel Showcase Card in Step 7 */}
                  <div className="review-section-block mt-6 pt-5 border-t">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                          <Building size={14} className="text-accent" /> Reserved Accommodation (Step 4)
                        </span>
                        <p className="text-xs text-muted">
                          Your selected stay and room type for {durationDays} nights in {selectedDest?.name}
                        </p>
                      </div>
                      {formData.selectedHotel && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="btn btn-outline btn-xs"
                        >
                          Change Stay
                        </button>
                      )}
                    </div>

                    {formData.selectedHotel ? (
                      <div className="review-hotel-showcase-card">
                        <div className="review-hotel-media">
                          <img
                            src={formData.selectedHotel.heroImage}
                            alt={formData.selectedHotel.name}
                            className="review-hotel-img"
                          />
                          <div className="review-hotel-gradient" />

                          {/* Overlay Badges */}
                          <div className="review-hotel-badges-top">
                            <span className="badge badge-accent review-badge-pill">
                              <Sparkles size={11} /> {formData.selectedHotel.badge || 'Top Rated Stay'}
                            </span>
                            <span className="badge badge-rating review-badge-pill">
                              <Star size={11} fill="currentColor" /> {formData.selectedHotel.rating}
                            </span>
                          </div>

                          {formData.selectedRoom && (
                            <div className="review-hotel-room-tag">
                              <Bed size={12} />
                              <span>{formData.selectedRoom.name}</span>
                            </div>
                          )}
                        </div>

                        <div className="review-hotel-content">
                          <div className="review-hotel-header-row">
                            <div className="flex-1 min-w-0 pr-2">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="badge badge-primary text-3xs py-0.5 px-2 font-semibold">
                                  {formData.selectedHotel.type || 'Boutique'}
                                </span>
                                {formData.selectedHotel.category && (
                                  <span className="text-2xs text-muted">
                                    {formData.selectedHotel.category}
                                  </span>
                                )}
                              </div>
                              <h4 className="review-hotel-title">{formData.selectedHotel.name}</h4>
                              <p className="review-hotel-location flex items-center gap-1 text-xs text-muted mt-0.5">
                                <MapPin size={12} className="text-accent flex-shrink-0" />
                                <span className="truncate">{formData.selectedHotel.nearLocation || formData.selectedHotel.address}</span>
                              </p>
                            </div>

                            <div className="review-hotel-price-badge-block">
                              <span className="text-2xs text-muted block">Price per night</span>
                              <div className="text-lg font-bold text-accent">
                                {formatCurrency(formData.selectedHotel.pricePerNight)}
                              </div>
                              <span className="text-3xs text-muted block">excl. taxes</span>
                            </div>
                          </div>

                          {/* Amenities Chips */}
                          <div className="review-hotel-amenities-row">
                            {(formData.selectedHotel.amenities || []).slice(0, 4).map((amenity, idx) => (
                              <span key={idx} className="review-amenity-chip">
                                <Check size={11} className="text-accent" /> {amenity}
                              </span>
                            ))}
                          </div>

                          {/* Policy / Trust Bar */}
                          <div className="review-hotel-policy-row">
                            <div className="flex items-center gap-1 text-2xs text-success font-medium">
                              <ShieldCheck size={13} />
                              <span>{formData.selectedHotel.policies?.cancellation || 'Free cancellation up to 24 hrs'}</span>
                            </div>
                            <span className="policy-dot">•</span>
                            <div className="text-2xs text-muted">
                              Check-in: <strong>{formData.selectedHotel.policies?.checkIn || '12:00 PM'}</strong>
                            </div>
                          </div>

                          {/* Pricing Calculation Footer */}
                          <div className="review-hotel-footer-calc">
                            <div className="review-calc-col">
                              <span className="text-2xs text-muted">Total Accommodation for {durationDays} Nights:</span>
                              <div className="review-total-price">
                                {formatCurrency((formData.selectedRoom?.price || formData.selectedHotel.pricePerNight) * durationDays)}
                              </div>
                            </div>

                            <div className="review-hotel-actions">
                              <button
                                type="button"
                                onClick={() => setCurrentStep(4)}
                                className="btn btn-outline btn-xs"
                              >
                                Change Stay
                              </button>
                              <button
                                type="button"
                                onClick={() => handleSelectHotel(formData.selectedHotel)}
                                className="btn btn-ghost btn-xs text-muted hover:text-danger"
                                title="Remove stay"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="review-hotel-empty-card">
                        <div className="review-empty-icon-wrap">
                          <Building size={24} className="text-muted" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-sm text-primary">No hotel selected for this trip</h5>
                          <p className="text-xs text-muted">You can add a luxury palace or boutique stay in {selectedDest?.name} anytime.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="btn btn-primary btn-sm"
                        >
                          <Building size={14} />
                          <span>Select Hotel in {selectedDest?.name}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <span className="text-xs text-muted">Selected Vibes & Interests</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {formData.interests.map((int) => (
                        <span key={int} className="badge badge-primary text-xs">
                          {int}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wizard Footer Controls */}
          <div className="wizard-footer-nav mt-8">
            {currentStep > 1 ? (
              <button type="button" onClick={handlePrev} className="btn btn-outline">
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button type="button" onClick={handleNext} className="btn btn-primary btn-lg">
              {currentStep === 7 ? (
                <>
                  <Sparkles size={18} />
                  <span>Generate Itinerary</span>
                </>
              ) : (
                <>
                  <span>Next Step</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
