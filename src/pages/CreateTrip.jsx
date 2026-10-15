import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Search,
  Check,
  Building,
  Star,
  ShieldCheck,
  AlertTriangle,
  Car,
  Utensils,
  Ticket,
  Eye
} from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { hotelService } from '../services/hotelService';
import { formatCurrency, formatCompactNumber } from '../utils/formatCurrency';
import { calculateDaysBetween, calculateNightsBetween } from '../utils/helpers';
import { useTrips } from '../context/TripContext';
import { pageVariants } from '../animations/motionVariants';
import { HotelDetailsModal } from '../components/hotel/HotelDetailsModal';
import { BudgetSummarySidebar } from '../components/hotel/BudgetSummarySidebar';
import './CreateTrip.css';

const STEPS = [
  { id: 1, title: 'Destination', subtitle: 'Step 1: Select your travel destination' },
  { id: 2, title: 'Travel Dates', subtitle: 'Step 2: Choose check-in & check-out dates' },
  { id: 3, title: 'Trip Budget', subtitle: 'Step 3: Enter your travel budget (Budget-First)' },
  { id: 4, title: 'Recommended Hotels', subtitle: 'Step 4: Smart hotels matching your stay allowance' },
  { id: 5, title: 'Trip Itinerary', subtitle: 'Step 5: Review & generate complete travel plan' }
];

const BUDGET_PRESETS = [3000, 5000, 10000, 15000, 25000];

const HOTEL_CATEGORIES = [
  { id: 'all', label: 'All Stays' },
  { id: 'Haveli', label: 'Heritage & Havelis' },
  { id: 'Palace', label: 'Royal Palaces' },
  { id: 'Resort', label: 'Resorts & Villas' },
  { id: 'Boutique', label: 'Boutique & Lodges' },
  { id: 'Chalet', label: 'Mountain Chalets' }
];

const getInitialDates = () => {
  const now = Date.now();
  const checkIn = new Date(now + 86400000 * 7).toISOString().split('T')[0];
  const checkOut = new Date(now + 86400000 * 9).toISOString().split('T')[0];
  return { checkIn, checkOut };
};

export function CreateTrip() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createTrip } = useTrips();

  const searchParams = new URLSearchParams(location.search);
  const queryDestId = searchParams.get('destination') || '';
  const prefillDestId = location.state?.prefillDestinationId || queryDestId || '';

  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  // Step 1: Destination
  const [destSearchQuery, setDestSearchQuery] = useState('');
  const [selectedDestCategory, setSelectedDestCategory] = useState('all');

  // Core Form Data
  const [formData, setFormData] = useState(() => {
    const { checkIn, checkOut } = getInitialDates();
    return {
      destinationId: prefillDestId || 'udaipur',
      startDate: checkIn,
      endDate: checkOut,
      travelers: 2,
      travelStyle: 'Couple',
      interests: ['Culture', 'Sightseeing', 'Food & Dining'],
      budget: 10000,
      isAccommodationOnly: false,
      customAllocations: {
        hotel: 3000,
        food: 2000,
        transportation: 2000,
        activities: 1500,
        emergencyReserve: 1500
      },
      selectedHotel: null,
      selectedRoom: null,
      title: '',
      notes: ''
    };
  });

  // Modal State for "View Details"
  const [viewDetailsHotel, setViewDetailsHotel] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // Hotel Recommendation UI State (Step 4)
  const [recCategoryTab, setRecCategoryTab] = useState('budgetFriendly'); // 'budgetFriendly' | 'bestValue' | 'premiumStay' | 'aboveBudget'
  const [hotelSearchQuery, setHotelSearchQuery] = useState('');
  const [hotelCategoryFilter, setHotelCategoryFilter] = useState('all');
  const [hotelRatingFilter, setHotelRatingFilter] = useState(0);
  const [hotelMaxDistance, setHotelMaxDistance] = useState(0);
  const [hotelFreeCancellation, setHotelFreeCancellation] = useState(false);
  const [hotelBreakfastIncluded, setHotelBreakfastIncluded] = useState(false);
  const [hotelSortBy, setHotelSortBy] = useState('recommended');
  const [hotelPriceDisplayMode, setHotelPriceDisplayMode] = useState('totalStay'); // 'totalStay' | 'perNight'

  // Calculate nights and days
  const nightsCount = calculateNightsBetween(formData.startDate, formData.endDate);
  const daysCount = calculateDaysBetween(formData.startDate, formData.endDate);

  const allDestinations = destinationService.getAllDestinations();
  const selectedDest = destinationService.getDestinationById(formData.destinationId);

  // Compute calculated budget allocation
  const currentBudgetAllocation = useMemo(() => {
    return hotelService.calculateBudgetAllocation({
      totalBudget: formData.budget,
      isAccommodationOnly: formData.isAccommodationOnly,
      customAllocations: formData.customAllocations
    });
  }, [formData.budget, formData.isAccommodationOnly, formData.customAllocations]);

  const hotelAllowance = currentBudgetAllocation.hotel;

  // Sync initial allocation when total budget changes (if not accommodation only)
  const handleBudgetChange = (newBudget) => {
    const val = Math.max(1000, Number(newBudget) || 1000);
    const updated = hotelService.calculateBudgetAllocation({
      totalBudget: val,
      isAccommodationOnly: formData.isAccommodationOnly
    });
    setFormData((prev) => ({
      ...prev,
      budget: val,
      customAllocations: {
        hotel: updated.hotel,
        food: updated.food,
        transportation: updated.transportation,
        activities: updated.activities,
        emergencyReserve: updated.emergencyReserve
      }
    }));
  };

  // Adjust specific category allocation in Step 3
  const handleAllocationSliderChange = (category, value) => {
    const numVal = Math.max(0, Number(value));
    setFormData((prev) => {
      const nextAlloc = { ...prev.customAllocations, [category]: numVal };
      // Keep reserve balanced
      const committed = (nextAlloc.hotel || 0) + (nextAlloc.food || 0) + (nextAlloc.transportation || 0) + (nextAlloc.activities || 0);
      nextAlloc.emergencyReserve = Math.max(0, prev.budget - committed);
      return {
        ...prev,
        customAllocations: nextAlloc
      };
    });
  };

  // Apply quick allocation presets
  const handleApplyAllocationPreset = (type) => {
    const b = formData.budget;
    if (type === 'standard') {
      // 30% Stay, 20% Food, 20% Trans, 15% Act, 15% Reserve
      setFormData((prev) => ({
        ...prev,
        customAllocations: {
          hotel: Math.round(b * 0.30),
          food: Math.round(b * 0.20),
          transportation: Math.round(b * 0.20),
          activities: Math.round(b * 0.15),
          emergencyReserve: Math.round(b * 0.15)
        }
      }));
    } else if (type === 'stayFocused') {
      // 45% Stay, 15% Food, 15% Trans, 15% Act, 10% Reserve
      setFormData((prev) => ({
        ...prev,
        customAllocations: {
          hotel: Math.round(b * 0.45),
          food: Math.round(b * 0.15),
          transportation: Math.round(b * 0.15),
          activities: Math.round(b * 0.15),
          emergencyReserve: Math.round(b * 0.10)
        }
      }));
    } else if (type === 'experience') {
      // 25% Stay, 25% Food, 20% Trans, 20% Act, 10% Reserve
      setFormData((prev) => ({
        ...prev,
        customAllocations: {
          hotel: Math.round(b * 0.25),
          food: Math.round(b * 0.25),
          transportation: Math.round(b * 0.20),
          activities: Math.round(b * 0.20),
          emergencyReserve: Math.round(b * 0.10)
        }
      }));
    }
  };

  // Smart hotel recommendations from engine
  const recommendations = useMemo(() => {
    return hotelService.getSmartHotelRecommendations({
      destinationId: formData.destinationId,
      hotelBudget: hotelAllowance,
      nights: nightsCount,
      travelers: formData.travelers,
      filters: {
        query: hotelSearchQuery,
        category: hotelCategoryFilter,
        minRating: hotelRatingFilter,
        maxDistance: hotelMaxDistance,
        freeCancellationOnly: hotelFreeCancellation,
        breakfastIncludedOnly: hotelBreakfastIncluded,
        amenities: [],
        priceType: hotelPriceDisplayMode
      },
      sortBy: hotelSortBy
    });
  }, [
    formData.destinationId,
    hotelAllowance,
    nightsCount,
    formData.travelers,
    hotelSearchQuery,
    hotelCategoryFilter,
    hotelRatingFilter,
    hotelMaxDistance,
    hotelFreeCancellation,
    hotelBreakfastIncluded,
    hotelPriceDisplayMode,
    hotelSortBy
  ]);

  // Derived selected hotel if user hasn't explicitly chosen one yet
  const effectiveSelectedHotel = formData.selectedHotel || recommendations.bestValue[0] || recommendations.budgetFriendly[0] || recommendations.allWithinBudget[0] || null;
  const effectiveSelectedRoom = formData.selectedHotel ? formData.selectedRoom : (effectiveSelectedHotel?.roomTypes?.[0] || null);

  // Filtered destination list for Step 1
  const filteredDestList = useMemo(() => {
    return allDestinations.filter((d) => {
      const q = destSearchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        (d.country || '').toLowerCase().includes(q) ||
        (d.state || '').toLowerCase().includes(q);

      const matchCategory =
        selectedDestCategory === 'all' ||
        (d.category || '').toLowerCase() === selectedDestCategory.toLowerCase();

      return matchQuery && matchCategory;
    });
  }, [allDestinations, destSearchQuery, selectedDestCategory]);

  // Current hotels list to display based on active category tab
  const activeTabHotels = useMemo(() => {
    switch (recCategoryTab) {
      case 'budgetFriendly':
        return recommendations.budgetFriendly;
      case 'bestValue':
        return recommendations.bestValue;
      case 'premiumStay':
        return recommendations.premiumStay;
      case 'aboveBudget':
        return recommendations.aboveBudget;
      default:
        return recommendations.allWithinBudget;
    }
  }, [recCategoryTab, recommendations]);

  // Handle hotel selection
  const handleSelectHotel = (hotel, room = null) => {
    if (formData.selectedHotel?.id === hotel.id && !room) {
      // Toggle off
      setFormData((prev) => ({
        ...prev,
        selectedHotel: null,
        selectedRoom: null
      }));
    } else {
      const chosenRoom = room || hotel.roomTypes?.[0] || null;
      setFormData((prev) => ({
        ...prev,
        selectedHotel: hotel,
        selectedRoom: chosenRoom
      }));
    }
  };

  // Open "View Details" modal
  const handleOpenDetails = (hotel) => {
    setViewDetailsHotel(hotel);
    setIsDetailsModalOpen(true);
  };

  // Step navigation handlers
  const handleNext = () => {
    setError('');

    if (currentStep === 1) {
      if (!formData.destinationId) {
        setError('Please select a destination to continue.');
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.startDate || !formData.endDate) {
        setError('Please select valid check-in and check-out dates.');
        return;
      }
      if (new Date(formData.endDate) <= new Date(formData.startDate)) {
        setError('Check-out date must be after check-in date.');
        return;
      }
    }

    if (currentStep === 3) {
      if (!formData.budget || formData.budget < 1000) {
        setError('Please enter a valid trip budget of at least ₹1,000.');
        return;
      }
    }

    if (currentStep === 4) {
      // If no hotel selected, offer friendly confirmation or allow skip
      // Proceed to review
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleFinalSubmit();
    }
  };

  const handlePrev = () => {
    setError('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Final trip creation & submit
  const handleFinalSubmit = () => {
    const finalDest = selectedDest || destinationService.getDestinationById(formData.destinationId);
    const finalTitle = formData.title.trim() || `${finalDest?.name || 'Dream'} Journey`;
    const chosenHotel = formData.selectedHotel || effectiveSelectedHotel;
    const chosenRoom = formData.selectedHotel ? formData.selectedRoom : effectiveSelectedRoom;
    const coverPhoto = chosenHotel?.heroImage || finalDest?.heroImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop';

    const created = createTrip({
      title: finalTitle,
      destinationId: formData.destinationId,
      destinationName: finalDest?.name || 'Custom Destination',
      destinationState: finalDest?.state || '',
      destinationCountry: finalDest?.country || 'India',
      coverImage: coverPhoto,
      startDate: formData.startDate,
      endDate: formData.endDate,
      nightsCount: nightsCount,
      travelers: formData.travelers,
      travelStyle: formData.travelStyle,
      interests: formData.interests,
      budget: formData.budget,
      isAccommodationOnly: formData.isAccommodationOnly,
      hotelBudget: hotelAllowance,
      allocatedExpenses: formData.customAllocations,
      hotel: chosenHotel,
      hotelRoom: chosenRoom,
      notes: formData.notes
    });

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback safe
    }

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
      <div className="container">
        {/* Wizard Header & Stepper Indicator */}
        <div className="text-center mb-6">
          <span className="wizard-header-badge">
            <Sparkles size={13} />
            Budget-First Trip Planner
          </span>
          <h1 className="heading-1 mt-1 mb-2">{STEPS[currentStep - 1].title}</h1>
          <p className="subheading">{STEPS[currentStep - 1].subtitle}</p>

          {/* 5-Step Process Bar: Destination → Dates → Budget → Hotels → Itinerary */}
          <div className="wizard-stepper-container">
            <div className="wizard-stepper-track">
              <div
                className="wizard-stepper-track-fill"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
            <div className="wizard-stepper-steps">
              {STEPS.map((step) => {
                const isPassed = currentStep > step.id;
                const isCurrent = currentStep === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                    className={`wizard-stepper-step ${isPassed ? 'completed' : ''} ${isCurrent ? 'active' : ''}`}
                    title={step.title}
                  >
                    <div className="wizard-step-circle">
                      {isPassed ? <Check size={16} /> : step.id}
                    </div>
                    <span className="wizard-step-label">{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wizard Main Card */}
        <div className="card p-6 md:p-8 max-w-5xl mx-auto shadow-lg">
          {error && <div className="alert-error-banner mb-6">{error}</div>}

          {/* ==========================================================================
              STEP 1: SELECT DESTINATION
              ========================================================================== */}
          {currentStep === 1 && (
            <div className="wizard-step-content">
              {/* Search Bar */}
              <div className="dest-search-bar mb-4">
                <Search size={18} className="text-muted flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search destination (e.g. Udaipur, Jaipur, Goa, Manali, Ahmedabad, Paris...)"
                  className="dest-search-input"
                  value={destSearchQuery}
                  onChange={(e) => setDestSearchQuery(e.target.value)}
                  autoFocus
                />
                {destSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setDestSearchQuery('')}
                    className="text-xs text-muted hover:text-primary font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="dest-category-pills">
                {['all', 'Historical', 'Beach', 'Mountain', 'Wildlife'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedDestCategory(cat)}
                    className={`chip ${selectedDestCategory === cat ? 'active' : ''}`}
                  >
                    {cat === 'all' ? 'All Destinations' : cat}
                  </button>
                ))}
              </div>

              {/* Destinations Grid */}
              <div className="dest-grid">
                {filteredDestList.map((dest) => {
                  const isSelected = formData.destinationId === dest.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          destinationId: dest.id,
                          title: `${dest.name} ${prev.travelStyle || 'Getaway'}`
                        }));
                        setError('');
                      }}
                      className={`dest-card ${isSelected ? 'selected' : ''}`}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={dest.heroImage} alt={dest.name} className="dest-card-img" loading="lazy" />
                      <div className="dest-card-overlay" />
                      <div className="dest-card-info">
                        <span className="dest-card-badge">{dest.category}</span>
                        <h4 className="dest-card-name">{dest.name}</h4>
                        <p className="dest-card-loc">{dest.state ? `${dest.state}, ` : ''}{dest.country}</p>
                      </div>
                      {isSelected && (
                        <div className="dest-card-check">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedDest && (
                <div className="mt-4 p-3 bg-surface-alt rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-xs font-semibold text-primary">
                      Selected: <strong>{selectedDest.name}</strong> ({selectedDest.country})
                    </span>
                  </div>
                  <span className="text-2xs text-muted">
                    Average Daily Cost: {formatCurrency(selectedDest.averageBudget || 4000)}/day
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ==========================================================================
              STEP 2: SELECT TRAVEL DATES & CALCULATE NIGHTS
              ========================================================================== */}
          {currentStep === 2 && (
            <div className="wizard-step-content max-w-xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-xs text-muted uppercase tracking-wider font-bold">
                  Trip to {selectedDest?.name || 'Your Destination'}
                </span>
                <h3 className="heading-3 mt-1">Select Check-in and Check-out Dates</h3>
                <p className="text-muted text-xs">
                  We automatically compute total nights to calculate exact accommodation prices.
                </p>
              </div>

              <div className="dates-picker-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkin-date">
                    <Calendar size={16} className="text-accent" /> Check-in Date
                  </label>
                  <input
                    id="checkin-date"
                    type="date"
                    className="form-control"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="checkout-date">
                    <Calendar size={16} className="text-accent" /> Check-out Date
                  </label>
                  <input
                    id="checkout-date"
                    type="date"
                    min={formData.startDate}
                    className="form-control"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              {/* Automatic Duration & Nights Highlight Box */}
              <div className="dates-duration-summary-box">
                <div className="flex justify-center items-center gap-3">
                  <div className="dates-badge-pill">
                    <Calendar size={15} />
                    <span>
                      {nightsCount} {nightsCount === 1 ? 'Night' : 'Nights'} Stay
                    </span>
                  </div>
                  <span className="text-muted text-xs">•</span>
                  <div className="dates-badge-pill">
                    <span>
                      {daysCount} {daysCount === 1 ? 'Day' : 'Days'} Total
                    </span>
                  </div>
                </div>

                <p className="text-2xs text-muted mt-2">
                  Dates: <strong>{formData.startDate}</strong> to <strong>{formData.endDate}</strong>
                </p>
              </div>
            </div>
          )}

          {/* ==========================================================================
              STEP 3: ENTER TOTAL BUDGET (BUDGET-FIRST)
              ========================================================================== */}
          {currentStep === 3 && (
            <div className="wizard-step-content max-w-2xl mx-auto">
              {/* Question Headline */}
              <div className="text-center mb-6">
                <h2 className="heading-2">What's Your Total Trip Budget?</h2>
                <p className="text-muted text-xs mt-1">
                  We recommend verified hotels based on your available accommodation budget.
                </p>
              </div>

              {/* Total Budget Hero Input */}
              <div className="budget-hero-input-wrap mb-3">
                <span className="budget-rupee-sign">₹</span>
                <input
                  type="number"
                  min="1000"
                  step="500"
                  className="budget-hero-input"
                  value={formData.budget}
                  onChange={(e) => handleBudgetChange(e.target.value)}
                  placeholder="Enter budget in INR"
                />
              </div>

              {/* Suggested Budget Option Chips */}
              <div className="budget-presets-row">
                <span className="text-2xs font-bold text-muted uppercase self-center mr-1">
                  Suggested Options:
                </span>
                {BUDGET_PRESETS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleBudgetChange(amount)}
                    className={`budget-preset-pill ${Number(formData.budget) === amount ? 'active' : ''}`}
                  >
                    {formatCurrency(amount)}
                  </button>
                ))}
              </div>

              {/* Number of Travelers */}
              <div className="form-group mb-5">
                <label className="form-label mb-2">Number of Travelers</label>
                <div className="travelers-counter-row flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, travelers: num })}
                      className={`counter-pill ${formData.travelers === num ? 'active' : ''}`}
                    >
                      {num === 6 ? '6+' : num} {num === 1 ? 'Traveler' : 'Travelers'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Scope: Total Trip vs Accommodation Only */}
              <div className="form-group mb-5">
                <label className="form-label mb-2">
                  What does this budget cover?
                </label>
                <div className="budget-scope-toggle-group">
                  <div
                    onClick={() => setFormData((prev) => ({ ...prev, isAccommodationOnly: false }))}
                    className={`budget-scope-card ${!formData.isAccommodationOnly ? 'active' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="budget-scope-card-title">
                      <span>Total Trip Budget (All-Inclusive)</span>
                      {!formData.isAccommodationOnly && <Check size={16} className="text-accent" />}
                    </div>
                    <p className="budget-scope-card-desc">
                      Covers hotels, food, transportation, activities, and an emergency reserve.
                    </p>
                  </div>

                  <div
                    onClick={() => setFormData((prev) => ({ ...prev, isAccommodationOnly: true }))}
                    className={`budget-scope-card ${formData.isAccommodationOnly ? 'active' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="budget-scope-card-title">
                      <span>Accommodation Only (Hotel Budget)</span>
                      {formData.isAccommodationOnly && <Check size={16} className="text-accent" />}
                    </div>
                    <p className="budget-scope-card-desc">
                      Entire budget is dedicated strictly to hotel stay. Other trip expenses are handled separately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Illustrative Expense Allocation Breakdown (when Total Trip Budget) */}
              {!formData.isAccommodationOnly && (
                <div className="allocation-breakdown-panel">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                        Estimated Trip Expense Allocation
                      </h4>
                      <p className="text-3xs text-muted">
                        Adjust sliders to customize your stay allowance and expense distribution:
                      </p>
                    </div>

                    {/* Presets */}
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleApplyAllocationPreset('standard')}
                        className="btn btn-ghost btn-xs text-3xs"
                        title="30% Stay, 20% Food, 20% Trans, 15% Act, 15% Reserve"
                      >
                        Balanced (30%)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyAllocationPreset('stayFocused')}
                        className="btn btn-ghost btn-xs text-3xs"
                        title="45% Stay, 15% Food, 15% Trans, 15% Act, 10% Reserve"
                      >
                        Stay Focus (45%)
                      </button>
                    </div>
                  </div>

                  {/* Hotel Stay Slider */}
                  <div className="allocation-slider-row">
                    <div className="allocation-slider-label">
                      <Building size={14} className="text-accent" />
                      <span>Hotels & Stays (Stay Allowance):</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max={formData.budget}
                      step="250"
                      value={formData.customAllocations.hotel}
                      onChange={(e) => handleAllocationSliderChange('hotel', e.target.value)}
                      className="allocation-slider-input"
                    />
                    <div className="allocation-slider-val text-accent">
                      {formatCurrency(formData.customAllocations.hotel)}
                    </div>
                  </div>

                  {/* Food Slider */}
                  <div className="allocation-slider-row">
                    <div className="allocation-slider-label">
                      <Utensils size={14} className="text-accent" />
                      <span>Food & Dining:</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={formData.budget}
                      step="250"
                      value={formData.customAllocations.food}
                      onChange={(e) => handleAllocationSliderChange('food', e.target.value)}
                      className="allocation-slider-input"
                    />
                    <div className="allocation-slider-val">
                      {formatCurrency(formData.customAllocations.food)}
                    </div>
                  </div>

                  {/* Transportation Slider */}
                  <div className="allocation-slider-row">
                    <div className="allocation-slider-label">
                      <Car size={14} className="text-accent" />
                      <span>Local Transportation:</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={formData.budget}
                      step="250"
                      value={formData.customAllocations.transportation}
                      onChange={(e) => handleAllocationSliderChange('transportation', e.target.value)}
                      className="allocation-slider-input"
                    />
                    <div className="allocation-slider-val">
                      {formatCurrency(formData.customAllocations.transportation)}
                    </div>
                  </div>

                  {/* Activities Slider */}
                  <div className="allocation-slider-row">
                    <div className="allocation-slider-label">
                      <Ticket size={14} className="text-accent" />
                      <span>Activities & Sightseeing:</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={formData.budget}
                      step="250"
                      value={formData.customAllocations.activities}
                      onChange={(e) => handleAllocationSliderChange('activities', e.target.value)}
                      className="allocation-slider-input"
                    />
                    <div className="allocation-slider-val">
                      {formatCurrency(formData.customAllocations.activities)}
                    </div>
                  </div>

                  {/* Emergency Reserve */}
                  <div className="allocation-slider-row pt-2 border-t border-dashed">
                    <div className="allocation-slider-label">
                      <ShieldCheck size={14} className="text-success" />
                      <span>Emergency Reserve / Buffer:</span>
                    </div>
                    <div className="flex-1 text-2xs text-muted">
                      Unallocated contingency fund
                    </div>
                    <div className="allocation-slider-val text-success">
                      {formatCurrency(formData.customAllocations.emergencyReserve)}
                    </div>
                  </div>
                </div>
              )}

              {/* Summary Highlight Box */}
              <div className="mt-4 p-4 bg-surface rounded-lg border flex flex-wrap justify-between items-center gap-3">
                <div>
                  <span className="text-2xs text-muted uppercase font-bold block">
                    Available Accommodation Budget
                  </span>
                  <div className="text-xl font-extrabold text-accent">
                    {formatCurrency(hotelAllowance)}
                    <span className="text-xs font-normal text-muted ml-1.5">
                      ({formatCurrency(Math.round(hotelAllowance / nightsCount))}/night for {nightsCount} nights)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xs text-muted uppercase font-bold block">
                    Per Traveler / Day
                  </span>
                  <div className="text-xs font-bold text-primary">
                    {formatCurrency(Math.round(formData.budget / formData.travelers))} / traveler • {formatCurrency(Math.round(formData.budget / daysCount))} / day
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================================================
              STEP 4: SMART HOTEL RECOMMENDATIONS & HOTEL SELECTION
              ========================================================================== */}
          {currentStep === 4 && (
            <div className="wizard-step-content">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                <div>
                  <span className="badge badge-accent text-3xs font-bold uppercase mb-1">
                    Smart Recommendations • {selectedDest?.name}
                  </span>
                  <h3 className="heading-3">
                    Hotels Recommended for Your Stay Budget ({formatCurrency(hotelAllowance)})
                  </h3>
                  <p className="text-xs text-muted">
                    Displaying verified options for {nightsCount} nights stay ({formData.startDate} to {formData.endDate}).
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="btn btn-outline btn-xs"
                >
                  Adjust Budget (Current: {formatCurrency(formData.budget)})
                </button>
              </div>

              {/* Main Step 4 Layout: Hotels on Left, Live Budget Sidebar on Right */}
              <div className="hotels-wizard-layout">
                {/* Left Column: Recommendation Tabs, Filters & Hotel Grid */}
                <div className="hotels-main-column">
                  {/* Category Tabs: Budget-Friendly, Best Value, Premium Stay, Above Budget */}
                  <div className="recommendation-category-tabs">
                    <button
                      type="button"
                      onClick={() => setRecCategoryTab('budgetFriendly')}
                      className={`rec-category-tab ${recCategoryTab === 'budgetFriendly' ? 'active' : ''}`}
                    >
                      <span>Budget-Friendly</span>
                      <span className="rec-tab-count">{recommendations.budgetFriendly.length}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRecCategoryTab('bestValue')}
                      className={`rec-category-tab ${recCategoryTab === 'bestValue' ? 'active' : ''}`}
                    >
                      <Sparkles size={13} />
                      <span>Best Value</span>
                      <span className="rec-tab-count">{recommendations.bestValue.length}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRecCategoryTab('premiumStay')}
                      className={`rec-category-tab ${recCategoryTab === 'premiumStay' ? 'active' : ''}`}
                    >
                      <Star size={13} />
                      <span>Premium Stay</span>
                      <span className="rec-tab-count">{recommendations.premiumStay.length}</span>
                    </button>

                    {recommendations.aboveBudget.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setRecCategoryTab('aboveBudget')}
                        className={`rec-category-tab tab-above-budget ${recCategoryTab === 'aboveBudget' ? 'active' : ''}`}
                      >
                        <AlertTriangle size={13} />
                        <span>Above Budget Options</span>
                        <span className="rec-tab-count">{recommendations.aboveBudget.length}</span>
                      </button>
                    )}
                  </div>

                  {/* Informative Tab Banner */}
                  <div className="mb-3 text-xs text-muted flex items-center justify-between">
                    <div>
                      {recCategoryTab === 'budgetFriendly' && (
                        <span>✨ Prioritizing lowest verified prices fitting comfortably within your stay allowance.</span>
                      )}
                      {recCategoryTab === 'bestValue' && (
                        <span>⭐ Balancing price, location proximity, amenities count, and guest ratings.</span>
                      )}
                      {recCategoryTab === 'premiumStay' && (
                        <span>🏰 Higher-quality boutique havelis and luxury stays that still fit within your hotel budget.</span>
                      )}
                      {recCategoryTab === 'aboveBudget' && (
                        <span className="text-danger font-semibold">
                          ⚠️ These properties exceed your current stay budget of {formatCurrency(hotelAllowance)}. Additional costs clearly marked.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Filter & Sort Toolbar */}
                  <div className="hotel-filters-toolbar">
                    <div className="hotel-toolbar-main-row">
                      {/* Search */}
                      <div className="hotel-search-input-box">
                        <Search size={15} className="text-muted" />
                        <input
                          type="text"
                          placeholder="Filter name, landmark..."
                          value={hotelSearchQuery}
                          onChange={(e) => setHotelSearchQuery(e.target.value)}
                        />
                      </div>

                      {/* Property Type Filter */}
                      <select
                        className="hotel-filter-select"
                        value={hotelCategoryFilter}
                        onChange={(e) => setHotelCategoryFilter(e.target.value)}
                      >
                        {HOTEL_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>

                      {/* Sort Selector */}
                      <select
                        className="hotel-filter-select"
                        value={hotelSortBy}
                        onChange={(e) => setHotelSortBy(e.target.value)}
                      >
                        <option value="recommended">Sort: Smart Recommended</option>
                        <option value="price-low">Price: Lowest Total Price</option>
                        <option value="best-value">Best Value (Score)</option>
                        <option value="rating-high">Highest Verified Rating (★)</option>
                        <option value="closest-attractions">Closest to Attractions</option>
                      </select>

                      {/* Price Display Mode Toggle */}
                      <button
                        type="button"
                        onClick={() => setHotelPriceDisplayMode((prev) => (prev === 'totalStay' ? 'perNight' : 'totalStay'))}
                        className="btn btn-outline btn-xs"
                      >
                        {hotelPriceDisplayMode === 'totalStay' ? `Showing: Total ${nightsCount}N Price` : 'Showing: Per Night'}
                      </button>
                    </div>

                    {/* Secondary Toggles Row */}
                    <div className="hotel-filter-chips-row">
                      {/* Rating Filters */}
                      {[0, 4.5, 4.8].map((rate) => (
                        <button
                          key={rate}
                          type="button"
                          onClick={() => setHotelRatingFilter(rate)}
                          className={`filter-chip-toggle ${hotelRatingFilter === rate ? 'active' : ''}`}
                        >
                          <Star size={11} fill="currentColor" />
                          <span>{rate === 0 ? 'All Ratings' : `${rate}+`}</span>
                        </button>
                      ))}

                      {/* Distance Filter */}
                      {[0, 1.0, 3.0].map((dist) => (
                        <button
                          key={dist}
                          type="button"
                          onClick={() => setHotelMaxDistance(dist)}
                          className={`filter-chip-toggle ${hotelMaxDistance === dist ? 'active' : ''}`}
                        >
                          <MapPin size={11} />
                          <span>{dist === 0 ? 'Any Distance' : `< ${dist} km to sight`}</span>
                        </button>
                      ))}

                      {/* Free Cancellation Toggle */}
                      <button
                        type="button"
                        onClick={() => setHotelFreeCancellation(!hotelFreeCancellation)}
                        className={`filter-chip-toggle ${hotelFreeCancellation ? 'active' : ''}`}
                      >
                        <ShieldCheck size={11} />
                        <span>Free Cancellation</span>
                      </button>

                      {/* Breakfast Included Toggle */}
                      <button
                        type="button"
                        onClick={() => setHotelBreakfastIncluded(!hotelBreakfastIncluded)}
                        className={`filter-chip-toggle ${hotelBreakfastIncluded ? 'active' : ''}`}
                      >
                        <Utensils size={11} />
                        <span>Breakfast Included</span>
                      </button>

                      {(hotelSearchQuery || hotelCategoryFilter !== 'all' || hotelRatingFilter > 0 || hotelMaxDistance > 0 || hotelFreeCancellation || hotelBreakfastIncluded) && (
                        <button
                          type="button"
                          onClick={() => {
                            setHotelSearchQuery('');
                            setHotelCategoryFilter('all');
                            setHotelRatingFilter(0);
                            setHotelMaxDistance(0);
                            setHotelFreeCancellation(false);
                            setHotelBreakfastIncluded(false);
                          }}
                          className="text-2xs text-muted hover:text-danger underline ml-auto"
                        >
                          Reset Filters
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Hotels List Grid */}
                  {activeTabHotels.length > 0 ? (
                    <div className="recommended-hotels-grid">
                      {activeTabHotels.map((hotel) => {
                        const isSelected = formData.selectedHotel?.id === hotel.id;
                        const isOver = hotel.totalStayCost > hotelAllowance;

                        return (
                          <div
                            key={hotel.id}
                            className={`rec-hotel-card ${isSelected ? 'selected' : ''} ${isOver ? 'card-over-budget' : ''}`}
                          >
                            {/* Media Header */}
                            <div className="rec-hotel-media-wrap">
                              <img
                                src={hotel.heroImage}
                                alt={hotel.name}
                                className="rec-hotel-img"
                                loading="lazy"
                              />

                              {/* Badges */}
                              {hotel.badge && (
                                <span className="badge badge-accent rec-hotel-badge">
                                  {hotel.badge}
                                </span>
                              )}

                              <span className="badge badge-rating rec-hotel-rating">
                                <Star size={11} fill="currentColor" /> {hotel.rating}
                                <span className="text-3xs text-muted ml-0.5">({formatCompactNumber(hotel.reviewsCount)})</span>
                              </span>

                              {isSelected && (
                                <div className="rec-hotel-selected-badge">
                                  <Check size={12} />
                                  <span>Selected</span>
                                </div>
                              )}
                            </div>

                            {/* Card Body */}
                            <div className="rec-hotel-body">
                              <div className="rec-hotel-type-row">
                                <span className="rec-hotel-type-tag">{hotel.type || hotel.category}</span>
                                {isOver ? (
                                  <span className="badge badge-danger text-3xs font-bold">
                                    +{formatCurrency(hotel.overBudgetAmount)} above budget
                                  </span>
                                ) : (
                                  <span className="text-3xs text-success font-semibold">
                                    ✓ Within Stay Budget
                                  </span>
                                )}
                              </div>

                              <h4 className="rec-hotel-title" title={hotel.name}>
                                {hotel.name}
                              </h4>

                              <p className="rec-hotel-loc-row truncate" title={hotel.nearLocation || hotel.address}>
                                <MapPin size={12} className="text-accent flex-shrink-0" />
                                <span>{hotel.nearLocation || hotel.address}</span>
                              </p>

                              {/* Distance to major attraction */}
                              {hotel.closestLandmark && (
                                <div className="rec-landmark-proximity-pill">
                                  <span>📍 {hotel.closestLandmark.landmark}:</span>
                                  <strong>{hotel.closestLandmark.distanceStr}</strong>
                                </div>
                              )}

                              {/* Estimated Transit Cost */}
                              {hotel.estimatedTransitCost && (
                                <div className="rec-transit-cost-pill">
                                  <Car size={11} className="text-accent flex-shrink-0" />
                                  <span>Est. auto/cab: <strong>{hotel.estimatedTransitCost.costStr}</strong></span>
                                </div>
                              )}

                              {/* Amenities preview */}
                              <div className="rec-amenities-strip">
                                {(hotel.amenities || []).slice(0, 3).map((a, aIdx) => (
                                  <span key={aIdx} className="rec-amenity-tag">
                                    {a}
                                  </span>
                                ))}
                                {(hotel.amenities || []).length > 3 && (
                                  <span className="rec-amenity-tag text-muted">
                                    +{hotel.amenities.length - 3} more
                                  </span>
                                )}
                              </div>

                              {/* Footer Pricing & Actions */}
                              <div className="rec-hotel-footer">
                                <div className="rec-price-block">
                                  <span className="rec-nightly-rate">
                                    {formatCurrency(hotel.pricePerNight)} / night
                                  </span>
                                  <div className="rec-total-stay-price">
                                    {formatCurrency(hotel.totalStayCost)}
                                    <span className="text-3xs font-normal text-muted ml-1">
                                      for {nightsCount} nights
                                    </span>
                                  </div>
                                </div>

                                <div className="rec-hotel-actions">
                                  <button
                                    type="button"
                                    onClick={() => handleOpenDetails(hotel)}
                                    className="btn btn-outline btn-xs"
                                    title="View hotel details & room options"
                                  >
                                    <Eye size={12} />
                                    <span>Details</span>
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => handleSelectHotel(hotel)}
                                    className={`btn btn-xs ${isSelected ? 'btn-primary font-bold' : 'btn-outline'}`}
                                  >
                                    {isSelected ? '✓ Selected' : 'Select'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-surface-alt rounded-lg border">
                      <Building size={36} className="text-muted mx-auto mb-2" />
                      <h4 className="font-bold text-sm text-primary">No hotels match your filters</h4>
                      <p className="text-xs text-muted mb-3">
                        Try resetting filters or exploring other recommendation categories.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setHotelSearchQuery('');
                          setHotelCategoryFilter('all');
                          setHotelRatingFilter(0);
                          setHotelMaxDistance(0);
                          setHotelFreeCancellation(false);
                          setHotelBreakfastIncluded(false);
                        }}
                        className="btn btn-outline btn-xs"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Column: Live Dynamic Budget Sidebar */}
                <BudgetSummarySidebar
                  totalBudget={formData.budget}
                  hotelBudget={hotelAllowance}
                  selectedHotel={formData.selectedHotel || effectiveSelectedHotel}
                  selectedRoom={formData.selectedHotel ? formData.selectedRoom : effectiveSelectedRoom}
                  nights={nightsCount}
                  allocatedExpenses={formData.customAllocations}
                  isAccommodationOnly={formData.isAccommodationOnly}
                  affordableAlternatives={recommendations.budgetFriendly}
                  onSelectAlternative={(alt) => handleSelectHotel(alt)}
                  onAdjustBudgetClick={() => setCurrentStep(3)}
                />
              </div>
            </div>
          )}

          {/* ==========================================================================
              STEP 5: REVIEW & GENERATE COMPLETE TRIP PLAN
              ========================================================================== */}
          {currentStep === 5 && (
            <div className="wizard-step-content max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <span className="badge badge-accent text-3xs font-bold uppercase mb-1">
                  Final Step • Personalized Itinerary
                </span>
                <h2 className="heading-2">Your Complete Journey Summary</h2>
                <p className="text-xs text-muted">
                  Your customized itinerary has been generated respecting your remaining budget.
                </p>
              </div>

              {/* Trip Overview Card */}
              <div className="card p-5 mb-5 bg-surface border">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b">
                  <div>
                    <span className="text-2xs font-bold text-muted uppercase">Destination</span>
                    <h3 className="heading-3 mt-0.5">{selectedDest?.name}, {selectedDest?.country}</h3>
                    <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                      <Calendar size={13} className="text-accent" />
                      <span>{formData.startDate} to {formData.endDate} ({nightsCount} Nights / {daysCount} Days)</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-2xs font-bold text-muted uppercase">Travelers</span>
                    <div className="text-base font-bold text-primary mt-0.5">
                      {formData.travelers} {formData.travelers === 1 ? 'Traveler' : 'Travelers'} ({formData.travelStyle})
                    </div>
                    <span className="text-2xs text-accent font-semibold">
                      Budget: {formatCurrency(formData.budget)}
                    </span>
                  </div>
                </div>

                {/* Confirmed Reserved Hotel Stay Card */}
                <div className="mt-4">
                  <span className="text-2xs font-bold text-muted uppercase tracking-wider block mb-2">
                    Confirmed Stay Reservation:
                  </span>

                  {(formData.selectedHotel || effectiveSelectedHotel) ? (
                    (() => {
                      const reviewHotel = formData.selectedHotel || effectiveSelectedHotel;
                      const reviewRoom = formData.selectedHotel ? formData.selectedRoom : effectiveSelectedRoom;
                      const roomPrice = reviewRoom?.price || reviewHotel.pricePerNight || 0;
                      return (
                        <div className="p-3.5 bg-surface-alt rounded-lg border flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={reviewHotel.heroImage}
                              alt={reviewHotel.name}
                              className="w-16 h-14 object-cover rounded-md"
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="badge badge-primary text-3xs py-0.5 px-1.5 font-bold">
                                  {reviewHotel.type || 'Stay'}
                                </span>
                                <span className="badge badge-rating text-3xs py-0.5 px-1.5">
                                  ★ {reviewHotel.rating}
                                </span>
                              </div>
                              <h4 className="font-bold text-sm text-primary mt-0.5">
                                {reviewHotel.name}
                              </h4>
                              <p className="text-2xs text-muted">
                                {reviewRoom?.name || 'Standard Room'} • {reviewHotel.nearLocation}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-2xs text-muted block">{nightsCount} Nights Accommodation:</span>
                            <div className="text-base font-extrabold text-accent">
                              {formatCurrency(roomPrice * nightsCount)}
                            </div>
                            <button
                              type="button"
                              onClick={() => setCurrentStep(4)}
                              className="text-2xs text-accent hover:underline mt-0.5"
                            >
                              Change Hotel
                            </button>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="p-3 bg-surface-alt rounded-lg border text-center">
                      <span className="text-xs text-muted">No hotel selected.</span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="btn btn-outline btn-xs ml-3 text-accent"
                      >
                        Choose a Stay
                      </button>
                    </div>
                  )}
                </div>

                {/* Committed vs Estimated Expenses Table */}
                {!formData.isAccommodationOnly && (
                  <div className="review-budget-table-box mt-4">
                    <table className="review-budget-table">
                      <thead>
                        <tr>
                          <th>Expense Category</th>
                          <th>Status</th>
                          <th>Allocation Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong className="flex items-center gap-1.5">
                              <Building size={14} className="text-accent" /> Hotel Accommodation
                            </strong>
                          </td>
                          <td>
                            <span className="badge badge-success text-3xs font-semibold">
                              ✓ Confirmed Stay
                            </span>
                          </td>
                          <td>
                            <strong>
                              {formData.selectedHotel
                                ? formatCurrency((formData.selectedRoom?.price || formData.selectedHotel.pricePerNight) * nightsCount)
                                : formatCurrency(hotelAllowance)}
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="flex items-center gap-1.5">
                              <Utensils size={14} className="text-accent" /> Food & Dining
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-surface text-3xs text-muted">
                              Estimated Budget
                            </span>
                          </td>
                          <td>{formatCurrency(formData.customAllocations.food)}</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="flex items-center gap-1.5">
                              <Car size={14} className="text-accent" /> Local Transportation
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-surface text-3xs text-muted">
                              Estimated Budget
                            </span>
                          </td>
                          <td>{formatCurrency(formData.customAllocations.transportation)}</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="flex items-center gap-1.5">
                              <Ticket size={14} className="text-accent" /> Sightseeing & Passes
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-surface text-3xs text-muted">
                              Estimated Budget
                            </span>
                          </td>
                          <td>{formatCurrency(formData.customAllocations.activities)}</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="flex items-center gap-1.5 text-success font-semibold">
                              <ShieldCheck size={14} /> Emergency Reserve / Buffer
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-success text-3xs font-semibold">
                              Available Surplus
                            </span>
                          </td>
                          <td className="text-success font-bold">
                            {formatCurrency(formData.customAllocations.emergencyReserve)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Day-by-Day Travel Plan Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  Day-by-Day Travel Plan Preview ({daysCount} Days)
                </h4>

                <div className="space-y-2">
                  {Array.from({ length: daysCount }).map((_, idx) => {
                    const dayAttractions = selectedDest?.attractions?.slice(idx * 2, idx * 2 + 2) || [];
                    return (
                      <div key={idx} className="review-itinerary-preview-card">
                        <div className="flex justify-between items-center mb-1">
                          <strong className="text-xs text-primary font-bold">
                            Day {idx + 1}: {idx === 0 ? 'Arrival & Sightseeing' : `Day ${idx + 1} Explorations`}
                          </strong>
                          <span className="text-3xs text-muted font-medium">
                            {idx === 0 && formData.selectedHotel ? 'Check-in: 02:00 PM • ' : ''}
                            {dayAttractions.length > 0 ? `${dayAttractions.length} Curated Sights` : 'Local Experiences'}
                          </span>
                        </div>
                        <p className="text-2xs text-muted">
                          {dayAttractions.length > 0
                            ? dayAttractions.map((a) => a.name).join(' → ')
                            : `Discover signature heritage alleys, local culinary spots, and evening lakeside sunset in ${selectedDest?.name || 'the city'}.`}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trip Title & Notes (Optional customization) */}
              <div className="form-group mb-6">
                <label className="form-label" htmlFor="trip-custom-title">
                  Trip Title (Optional)
                </label>
                <input
                  id="trip-custom-title"
                  type="text"
                  className="form-control"
                  placeholder={`e.g. ${selectedDest?.name || 'Dream'} Escape`}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Wizard Footer Navigation Controls */}
          <div className="wizard-footer-nav mt-8 pt-4 border-t flex items-center justify-between">
            {currentStep > 1 ? (
              <button type="button" onClick={handlePrev} className="btn btn-outline">
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button type="button" onClick={handleNext} className="btn btn-primary btn-lg">
              {currentStep === 5 ? (
                <>
                  <Sparkles size={18} />
                  <span>Generate Complete Trip Plan</span>
                </>
              ) : currentStep === 3 ? (
                <>
                  <span>View Hotel Recommendations</span>
                  <ArrowRight size={18} />
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

      {/* Hotel Details Modal ("View Details") */}
      {viewDetailsHotel && (
        <HotelDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => {
            setIsDetailsModalOpen(false);
            setViewDetailsHotel(null);
          }}
          hotel={viewDetailsHotel}
          nights={nightsCount}
          hotelBudget={hotelAllowance}
          isSelected={formData.selectedHotel?.id === viewDetailsHotel.id}
          selectedRoom={formData.selectedHotel?.id === viewDetailsHotel.id ? formData.selectedRoom : null}
          onSelectHotel={(hotel, room) => handleSelectHotel(hotel, room)}
        />
      )}
    </motion.div>
  );
}
