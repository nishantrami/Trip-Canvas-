import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  IndianRupee,
  MapPin,
  Clock,
  Share2,
  Trash2,
  Edit2,
  Check,
  X,
  Compass,
  Layers,
  PieChart,
  CloudSun,
  Map as MapIcon,
  ChevronLeft,
  Sparkles,
  FileText,
  Building,
  Star,
  BedDouble,
  CheckCircle2,
  Navigation,
  ArrowRight,
  Plus,
  ShieldCheck,
  Coffee,
  Wifi,
  Search,
  Tag,
  RotateCcw
} from 'lucide-react';
import { useTrips } from '../context/TripContext';
import { destinationService } from '../services/destinationService';
import { HOTELS } from '../data/hotels';
import { ItineraryTimeline } from '../components/trip/ItineraryTimeline';
import { BudgetCard } from '../components/budget/BudgetCard';
import { WeatherCard } from '../components/weather/WeatherCard';
import { MapView } from '../components/map/MapView';
import { AttractionCard } from '../components/destination/AttractionCard';
import { AddToTripModal } from '../components/destination/AddToTripModal';
import { HotelBookingModal } from '../components/hotel/HotelBookingModal';
import { RestaurantReservationModal } from '../components/restaurant/RestaurantReservationModal';
import { formatDateRange } from '../utils/helpers';
import { formatCurrency } from '../utils/formatCurrency';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';

const TRIP_DETAIL_TABS = [
  { id: 'overview', label: 'Trip Overview', icon: Sparkles },
  { id: 'hotel', label: 'Hotel & Stay', icon: Building },
  { id: 'itinerary', label: 'Itinerary Builder', icon: Layers },
  { id: 'budget', label: 'Budget & Expenses', icon: PieChart },
  { id: 'places', label: 'Key Landmarks', icon: MapPin },
  { id: 'weather', label: 'Live Weather', icon: CloudSun },
  { id: 'map', label: 'Interactive Map', icon: MapIcon }
];

export function TripDetails() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const { trips, updateTrip, deleteTrip } = useTrips();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notesInput, setNotesInput] = useState('');

  // Hotel accommodation management state
  const [isChangingHotel, setIsChangingHotel] = useState(false);
  const [hotelSearchQuery, setHotelSearchQuery] = useState('');
  const [hotelFilterTier, setHotelFilterTier] = useState('all');
  const [hotelSortOrder, setHotelSortOrder] = useState('recommended');

  const trip = trips.find((t) => t.id === tripId);
  const destination = trip ? destinationService.getDestinationById(trip.destinationId) : null;

  const HOTEL_BUDGET_TIERS = [
    { id: 'all', label: 'All Stays' },
    { id: '2k-5k', label: '₹2,000 - ₹5,000 (Budget & Haveli)' },
    { id: '5k-12k', label: '₹5,000 - ₹12,000 (Heritage Boutique)' },
    { id: '12k-20k', label: '₹12,000 - ₹20,000 (Lakeview Luxury)' },
    { id: '20k+', label: '₹20,000+ (Grand Palaces)' }
  ];

  useEffect(() => {
    if (trip) {
      setTitleInput(trip.title);
      setNotesInput(trip.notes || '');
    }
  }, [trip]);

  // Compute available hotels for the trip destination
  const destinationHotels = React.useMemo(() => {
    if (!trip) return [];
    let list = HOTELS.filter((h) => h.destinationId === trip.destinationId);
    if (list.length === 0) {
      list = HOTELS;
    }

    if (hotelSearchQuery.trim()) {
      const q = hotelSearchQuery.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          (h.nearLocation && h.nearLocation.toLowerCase().includes(q)) ||
          (h.type && h.type.toLowerCase().includes(q))
      );
    }

    if (hotelFilterTier !== 'all') {
      if (hotelFilterTier === '2k-5k') {
        list = list.filter((h) => h.pricePerNight >= 2000 && h.pricePerNight <= 5000);
      } else if (hotelFilterTier === '5k-12k') {
        list = list.filter((h) => h.pricePerNight > 5000 && h.pricePerNight <= 12000);
      } else if (hotelFilterTier === '12k-20k') {
        list = list.filter((h) => h.pricePerNight > 12000 && h.pricePerNight <= 20000);
      } else if (hotelFilterTier === '20k+') {
        list = list.filter((h) => h.pricePerNight > 20000);
      }
    }

    if (hotelSortOrder === 'price-low') {
      list = [...list].sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (hotelSortOrder === 'price-high') {
      list = [...list].sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (hotelSortOrder === 'rating-high') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [trip, hotelSearchQuery, hotelFilterTier, hotelSortOrder]);

  // Place Type and search filter states for Landmarks tab
  const [selectedPlaceType, setSelectedPlaceType] = useState('all');
  const [placeSearchQuery, setPlaceSearchQuery] = useState('');

  // Booking and Reservation modal states
  const [selectedHotelForBooking, setSelectedHotelForBooking] = useState(null);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedRestaurantForReservation, setSelectedRestaurantForReservation] = useState(null);
  const [isRestModalOpen, setIsRestModalOpen] = useState(false);
  const [selectedAttractionForModal, setSelectedAttractionForModal] = useState(null);
  const [isAddToTripModalOpen, setIsAddToTripModalOpen] = useState(false);

  const availablePlaceTypes = React.useMemo(() => {
    if (!destination?.attractions) return [];
    const types = new Set();
    destination.attractions.forEach((att) => {
      if (att.placeType) types.add(att.placeType);
      else if (att.category) types.add(att.category);
    });
    return Array.from(types);
  }, [destination]);

  const filteredAttractions = React.useMemo(() => {
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

  if (!trip) {
    return (
      <div className="container section-padding text-center">
        <h2 className="heading-1 mb-4">Trip Not Found</h2>
        <p className="text-muted mb-6">The requested trip could not be found or has been removed.</p>
        <Link to="/my-trips" className="btn btn-primary">
          <ChevronLeft size={16} /> Back to My Trips
        </Link>
      </div>
    );
  }

  const handleSaveTitle = (e) => {
    e.preventDefault();
    if (!titleInput.trim()) return;
    updateTrip(trip.id, { title: titleInput.trim() });
    setIsEditingTitle(false);
  };

  const handleSaveNotes = () => {
    updateTrip(trip.id, { notes: notesInput });
    setIsEditingNotes(false);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Trip link copied to clipboard!', 'success');
    }
  };

  const handleDeleteTrip = () => {
    if (window.confirm(`Are you sure you want to delete "${trip.title}"?`)) {
      deleteTrip(trip.id);
      navigate('/my-trips');
    }
  };

  const handleSelectHotel = (hotel, room = null) => {
    const selectedRoom = room || hotel.roomTypes?.[0] || null;
    const pricePerNight = selectedRoom?.price || hotel.pricePerNight || 0;
    const totalStayCost = pricePerNight * (trip.daysCount || 1);

    // Update expenses: replace or add hotel expense
    const filteredExpenses = (trip.expenses || []).filter((e) => e.category !== 'hotel');
    const newExpenses = [
      ...filteredExpenses,
      {
        id: `exp_hotel_${Date.now()}`,
        title: `${hotel.name} (${trip.daysCount || 1} Nights Stay)`,
        category: 'hotel',
        amount: totalStayCost,
        date: trip.startDate
      }
    ];

    // Update Day 1 itinerary: replace or add Check-in activity
    const updatedItinerary = (trip.itinerary || []).map((day, idx) => {
      if (idx === 0) {
        const nonCheckinActivities = (day.activities || []).filter(
          (a) => !a.title?.toLowerCase().includes('check-in')
        );
        return {
          ...day,
          activities: [
            {
              id: `act_checkin_${Date.now()}`,
              time: hotel.policies?.checkIn || "02:00 PM",
              title: `Check-in: ${hotel.name}`,
              category: "Stay",
              cost: 0,
              location: hotel.nearLocation || hotel.address || "Hotel",
              notes: `${selectedRoom?.name || 'Reserved Room'}. Check-in from ${hotel.policies?.checkIn || '02:00 PM'}.`,
              completed: false
            },
            ...nonCheckinActivities
          ]
        };
      }
      return day;
    });

    updateTrip(trip.id, {
      selectedHotel: hotel,
      selectedRoom: selectedRoom,
      expenses: newExpenses,
      itinerary: updatedItinerary
    });

    setIsChangingHotel(false);
    showToast(`Attached ${hotel.name} to your trip!`, 'success');
  };

  const handleRemoveHotel = () => {
    if (!window.confirm(`Are you sure you want to remove ${trip.selectedHotel?.name} from this trip?`)) return;

    const filteredExpenses = (trip.expenses || []).filter((e) => e.category !== 'hotel');
    const updatedItinerary = (trip.itinerary || []).map((day, idx) => {
      if (idx === 0) {
        return {
          ...day,
          activities: (day.activities || []).filter(
            (a) => !a.title?.toLowerCase().includes('check-in')
          )
        };
      }
      return day;
    });

    updateTrip(trip.id, {
      selectedHotel: null,
      selectedRoom: null,
      expenses: filteredExpenses,
      itinerary: updatedItinerary
    });

    showToast('Removed hotel accommodation from trip', 'info');
  };

  // Compute total planned activities
  const totalActivitiesCount = (trip.itinerary || []).reduce(
    (acc, day) => acc + (day.activities?.length || 0),
    0
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="trip-workspace-page"
    >
      {/* Trip Hero / Header Banner */}
      <section className="trip-workspace-hero">
        <div className="trip-hero-media">
          <img src={trip.coverImage} alt={trip.title} className="trip-hero-img" />
          <div className="trip-hero-overlay" />
        </div>

        <div className="container trip-hero-container">
          <div className="trip-hero-breadcrumbs mb-3">
            <Link to="/my-trips" className="breadcrumb-link">
              <ChevronLeft size={16} /> My Trips
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{trip.destinationName || 'Destination'}</span>
          </div>

          <div className="trip-hero-main-row">
            <div className="trip-hero-info">
              {/* Title & Edit */}
              {isEditingTitle ? (
                <form onSubmit={handleSaveTitle} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control text-2xl font-bold bg-white text-primary"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    <Check size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingTitle(false)}
                    className="btn btn-ghost btn-sm text-white"
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="trip-workspace-title heading-1 text-white">{trip.title}</h1>
                  <button
                    onClick={() => setIsEditingTitle(true)}
                    className="btn-edit-title text-white-muted hover:text-white"
                    title="Edit Trip Title"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>
              )}

              {/* Meta Tags */}
              <div className="trip-meta-tags-row">
                <span className="trip-meta-pill">
                  <MapPin size={13} /> {trip.destinationName}
                </span>
                <span className="trip-meta-pill">
                  <Calendar size={13} /> {formatDateRange(trip.startDate, trip.endDate)} ({trip.daysCount} Days)
                </span>
                <span className="trip-meta-pill">
                  <Users size={13} /> {trip.travelers} {trip.travelers === 1 ? 'Traveler' : 'Travelers'} ({trip.travelStyle})
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="trip-hero-actions">
              <button
                type="button"
                onClick={handleShare}
                className="btn btn-white btn-sm"
                title="Copy shareable link"
              >
                <Share2 size={15} />
                <span>Share</span>
              </button>

              <button
                type="button"
                onClick={handleDeleteTrip}
                className="btn btn-danger btn-sm"
                title="Delete this trip"
              >
                <Trash2 size={15} />
                <span className="desktop-only">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Navigation Tabs Bar */}
      <div className="trip-workspace-tabs-bar sticky-top">
        <div className="container">
          <div className="trip-tabs-scroller">
            {TRIP_DETAIL_TABS.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsChangingHotel(false);
                  }}
                  className={`workspace-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={16} />
                  <span>{tab.label}</span>
                  {tab.id === 'itinerary' && (
                    <span className="tab-pill-badge">{totalActivitiesCount}</span>
                  )}
                  {tab.id === 'hotel' && trip.selectedHotel && (
                    <span
                      className="tab-pill-badge"
                      style={{ background: 'var(--color-success)', color: '#fff', fontSize: '0.65rem' }}
                    >
                      ✓ Saved
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tab View */}
      <main className="container section-padding trip-workspace-main">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="trip-overview-grid">
            <div className="card p-6 mb-6">
              <h3 className="heading-3 mb-4">Trip Highlights & Quick Metrics</h3>
              <div className="overview-stats-grid">
                <div className="stat-card-box">
                  <Calendar size={20} className="text-accent mb-2" />
                  <span className="text-xs text-muted">Duration</span>
                  <h4 className="text-lg font-bold">{trip.daysCount} Days</h4>
                </div>
                <div className="stat-card-box">
                  <Layers size={20} className="text-accent mb-2" />
                  <span className="text-xs text-muted">Planned Activities</span>
                  <h4 className="text-lg font-bold">{totalActivitiesCount} Items</h4>
                </div>
                <div className="stat-card-box">
                  <IndianRupee size={20} className="text-accent mb-2" />
                  <span className="text-xs text-muted">Target Budget</span>
                  <h4 className="text-lg font-bold">{formatCurrency(trip.budget?.total || 0)}</h4>
                </div>
                <div className="stat-card-box">
                  <Users size={20} className="text-accent mb-2" />
                  <span className="text-xs text-muted">Travelers</span>
                  <h4 className="text-lg font-bold">{trip.travelers} ({trip.travelStyle})</h4>
                </div>
              </div>
            </div>

            {/* Reserved Accommodation / Hotel Snapshot Card */}
            {trip.selectedHotel ? (
              <div className="card p-6 mb-6">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Building size={20} className="text-accent" />
                    <h3 className="heading-3 mb-0">Reserved Accommodation</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('hotel');
                      setIsChangingHotel(false);
                    }}
                    className="btn btn-ghost btn-xs text-accent font-semibold flex items-center gap-1"
                  >
                    Manage Stay Details <ArrowRight size={14} />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-surface-alt rounded-xl border">
                  <img
                    src={trip.selectedHotel.heroImage}
                    alt={trip.selectedHotel.name}
                    className="w-28 h-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-accent text-3xs">{trip.selectedHotel.type || 'Hotel'}</span>
                      <span className="badge badge-rating text-3xs">
                        <Star size={10} fill="currentColor" /> {trip.selectedHotel.rating}
                      </span>
                      {trip.selectedHotel.badge && (
                        <span className="text-2xs text-muted font-semibold truncate desktop-only">
                          • {trip.selectedHotel.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-primary truncate mb-1">{trip.selectedHotel.name}</h4>
                    <p className="text-xs text-muted flex items-center gap-1 mb-2">
                      <MapPin size={12} className="flex-shrink-0 text-accent" />{' '}
                      {trip.selectedHotel.nearLocation || trip.selectedHotel.address}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span>Room: <strong className="text-primary">{trip.selectedRoom?.name || 'Standard Room'}</strong></span>
                      <span>Stay: <strong className="text-primary">{trip.daysCount} Nights</strong></span>
                      <span>Total: <strong className="text-accent font-bold">{formatCurrency((trip.selectedRoom?.price || trip.selectedHotel.pricePerNight) * (trip.daysCount || 1))}</strong></span>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 align-self-stretch md:align-self-center justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('hotel');
                        setIsChangingHotel(false);
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('hotel');
                        setIsChangingHotel(true);
                      }}
                      className="btn btn-ghost btn-sm text-accent"
                    >
                      Change Hotel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-5 mb-6 border-dashed border-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface-alt">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent-subtle rounded-xl text-accent flex-shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-0.5">No Hotel Stay Reserved Yet</h4>
                    <p className="text-xs text-muted">
                      Add a verified palace or boutique stay in {trip.destinationName} (from ₹2,000/night) to auto-schedule your Day 1 check-in and hotel expense.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('hotel');
                    setIsChangingHotel(true);
                  }}
                  className="btn btn-primary btn-sm flex-shrink-0"
                >
                  <Plus size={14} /> Add Hotel Stay
                </button>
              </div>
            )}

            {/* Traveler Notes Card */}
            <div className="card p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="heading-3">
                  <FileText size={18} /> Trip Notes & Packing Reminders
                </h3>
                {!isEditingNotes && (
                  <button
                    onClick={() => setIsEditingNotes(true)}
                    className="btn btn-outline btn-sm"
                  >
                    <Edit2 size={13} /> Edit Notes
                  </button>
                )}
              </div>

              {isEditingNotes ? (
                <div>
                  <textarea
                    rows="4"
                    className="form-control mb-3"
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                    placeholder="Write tips, booking references, emergency contacts, packing checklists..."
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSaveNotes} className="btn btn-primary btn-sm">
                      <Check size={14} /> Save Notes
                    </button>
                    <button
                      onClick={() => setIsEditingNotes(false)}
                      className="btn btn-ghost btn-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="body-text text-secondary whitespace-pre-line">
                  {trip.notes || 'No notes added yet. Click "Edit Notes" to write booking details or reminders.'}
                </p>
              )}
            </div>

            {/* Weather Widget */}
            {destination && (
              <WeatherCard
                coordinates={destination.coordinates}
                fallbackProfile={destination.weatherProfile}
                locationName={destination.name}
              />
            )}
          </div>
        )}

        {/* TAB 2: HOTEL & STAY */}
        {activeTab === 'hotel' && (
          <div className="trip-hotel-tab">
            {trip.selectedHotel && !isChangingHotel ? (
              <div className="trip-hotel-selected-view">
                {/* Stay Header & Actions */}
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <div>
                    <span className="badge badge-accent mb-1">Confirmed Accommodation</span>
                    <h2 className="heading-2">{trip.selectedHotel.name}</h2>
                    <p className="text-muted text-sm flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {trip.selectedHotel.address || trip.selectedHotel.nearLocation}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setIsChangingHotel(true)}
                      className="btn btn-outline btn-sm flex items-center gap-1.5"
                    >
                      <RotateCcw size={14} /> Change Hotel
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveHotel}
                      className="btn btn-danger btn-sm flex items-center gap-1.5"
                    >
                      <Trash2 size={14} /> Remove Stay
                    </button>
                    <Link
                      to="/hotels"
                      className="btn btn-ghost btn-sm text-accent"
                    >
                      Browse All Hotels →
                    </Link>
                  </div>
                </div>

                {/* Main Hero Card with Gallery & Key Info */}
                <div className="card p-0 mb-6 overflow-hidden">
                  <div className="relative" style={{ height: '320px' }}>
                    <img
                      src={trip.selectedHotel.heroImage}
                      alt={trip.selectedHotel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="trip-hero-overlay" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="badge badge-accent font-bold">
                        {trip.selectedHotel.type || 'Luxury Stay'}
                      </span>
                      {trip.selectedHotel.badge && (
                        <span className="badge badge-white font-bold text-primary">
                          {trip.selectedHotel.badge}
                        </span>
                      )}
                    </div>

                    <div
                      className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full font-bold text-sm backdrop-blur"
                      style={{ background: 'rgba(23, 32, 28, 0.85)', color: '#FFB800' }}
                    >
                      <Star size={14} fill="currentColor" /> {trip.selectedHotel.rating} ({trip.selectedHotel.reviewsCount || '1.2k+'} reviews)
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm mb-1 italic" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        "{trip.selectedHotel.tagline || 'Experience timeless hospitality and tranquil lakefront grandeur'}"
                      </p>
                    </div>
                  </div>

                  {/* 4 Metric Stats Row */}
                  <div className="overview-stats-grid p-6 border-b bg-surface-alt">
                    <div className="stat-card-box">
                      <Calendar size={18} className="text-accent mb-1" />
                      <span className="text-2xs text-muted uppercase">Check-in</span>
                      <h4 className="text-sm font-bold text-primary">{trip.startDate}</h4>
                      <span className="text-3xs text-muted">From {trip.selectedHotel.policies?.checkIn || '02:00 PM'}</span>
                    </div>

                    <div className="stat-card-box">
                      <Calendar size={18} className="text-accent mb-1" />
                      <span className="text-2xs text-muted uppercase">Check-out</span>
                      <h4 className="text-sm font-bold text-primary">{trip.endDate}</h4>
                      <span className="text-3xs text-muted">Until {trip.selectedHotel.policies?.checkOut || '11:00 AM'}</span>
                    </div>

                    <div className="stat-card-box">
                      <Users size={18} className="text-accent mb-1" />
                      <span className="text-2xs text-muted uppercase">Duration & Guests</span>
                      <h4 className="text-sm font-bold text-primary">{trip.daysCount} Nights</h4>
                      <span className="text-3xs text-muted">{trip.travelers} Guests ({trip.travelStyle})</span>
                    </div>

                    <div className="stat-card-box">
                      <IndianRupee size={18} className="text-accent mb-1" />
                      <span className="text-2xs text-muted uppercase">Total Stay Cost</span>
                      <h4 className="text-base font-bold text-accent">
                        {formatCurrency((trip.selectedRoom?.price || trip.selectedHotel.pricePerNight) * (trip.daysCount || 1))}
                      </h4>
                      <span className="text-3xs text-muted">
                        {formatCurrency(trip.selectedRoom?.price || trip.selectedHotel.pricePerNight)} / night
                      </span>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left 2 Cols: Room details, Description, Amenities */}
                    <div className="md:col-span-2">
                      {/* Reserved Room Specs */}
                      <div className="p-4 bg-surface rounded-xl border mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <BedDouble size={18} className="text-accent" />
                          <h4 className="text-base font-bold text-primary">
                            Room: {trip.selectedRoom?.name || 'Deluxe Heritage Room'}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-muted mb-3">
                          {trip.selectedRoom?.size && <span>Size: <strong>{trip.selectedRoom.size}</strong></span>}
                          {trip.selectedRoom?.bed && <span>Bed: <strong>{trip.selectedRoom.bed}</strong></span>}
                          {trip.selectedRoom?.maxGuests && <span>Capacity: <strong>Up to {trip.selectedRoom.maxGuests} Guests</strong></span>}
                        </div>
                        {trip.selectedRoom?.perks && trip.selectedRoom.perks.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {trip.selectedRoom.perks.map((perk, i) => (
                              <span key={i} className="chip text-2xs bg-accent-subtle text-accent font-semibold">
                                ✓ {perk}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Hotel Description */}
                      <div className="mb-6">
                        <h4 className="heading-3 mb-2">About this Property</h4>
                        <p className="body-text text-secondary leading-relaxed">
                          {trip.selectedHotel.description || 'Built with classical Mewari architecture, offering sweeping views, royal courtyard dining, and exceptional personalized hospitality.'}
                        </p>
                      </div>

                      {/* Amenities */}
                      {trip.selectedHotel.amenities && (
                        <div>
                          <h4 className="heading-3 mb-3">Included Amenities & Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.selectedHotel.amenities.map((item, i) => (
                              <span key={i} className="chip text-xs">
                                <CheckCircle2 size={13} className="text-accent" /> {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right 1 Col: Landmark Proximity & Policies */}
                    <div className="space-y-4">
                      {/* Landmark Proximities */}
                      {trip.selectedHotel.distanceToLandmarks && (
                        <div className="card p-4 border bg-surface-alt">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-muted mb-3 flex items-center gap-1.5">
                            <Navigation size={14} className="text-accent" /> Distance to Key Attractions
                          </h4>
                          <ul className="space-y-2 text-xs">
                            {trip.selectedHotel.distanceToLandmarks.map((lm, i) => (
                              <li key={i} className="flex justify-between items-center py-1 border-b border-subtle">
                                <span className="font-semibold text-primary">{lm.landmark}</span>
                                <span className="text-muted font-mono">{lm.distance}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Stay Policies */}
                      <div className="card p-4 border bg-surface-alt">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-muted mb-3 flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-accent" /> Stay Policies
                        </h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted">Check-in:</span>
                            <strong>{trip.selectedHotel.policies?.checkIn || '02:00 PM'}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted">Check-out:</span>
                            <strong>{trip.selectedHotel.policies?.checkOut || '11:00 AM'}</strong>
                          </div>
                          <div className="pt-2 border-t text-2xs text-muted">
                            {trip.selectedHotel.policies?.cancellation || 'Free cancellation up to 48 hours prior to check-in.'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* HOTEL PICKER / SELECTOR VIEW */
              <div className="trip-hotel-picker-view">
                <div className="section-header-left mb-6 flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h2 className="heading-2">
                      {isChangingHotel ? 'Change Hotel Stay' : `Select Accommodation in ${trip.destinationName}`}
                    </h2>
                    <p className="subheading">
                      Choose from {destinationHotels.length} verified stays ({trip.destinationName}). Adding a stay automatically schedules your Day 1 Check-in and logs hotel expenses in your budget.
                    </p>
                  </div>

                  {isChangingHotel && (
                    <button
                      type="button"
                      onClick={() => setIsChangingHotel(false)}
                      className="btn btn-ghost btn-sm"
                    >
                      ← Keep Current Hotel ({trip.selectedHotel?.name})
                    </button>
                  )}
                </div>

                {/* Search & Filter Toolbar */}
                <div className="card p-4 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="search-input-wrapper flex-1" style={{ minWidth: '220px' }}>
                      <Search size={15} className="search-input-icon" />
                      <input
                        type="text"
                        placeholder="Search hotel name, location..."
                        className="form-input search-input-with-icon"
                        value={hotelSearchQuery}
                        onChange={(e) => setHotelSearchQuery(e.target.value)}
                      />
                    </div>

                    <select
                      className="form-input form-select"
                      style={{ width: 'auto', minWidth: '200px' }}
                      value={hotelSortOrder}
                      onChange={(e) => setHotelSortOrder(e.target.value)}
                    >
                      <option value="recommended">Sort: Recommended</option>
                      <option value="price-low">Price: Low to High (From ₹2,000)</option>
                      <option value="price-high">Price: High to Low (From ₹42,000)</option>
                      <option value="rating-high">Highest Rated (★ 4.9+)</option>
                    </select>
                  </div>

                  {/* Budget Filter Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-2xs font-bold text-muted uppercase mr-1">Price Tier:</span>
                    {HOTEL_BUDGET_TIERS.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setHotelFilterTier(tier.id)}
                        className={`chip text-2xs ${hotelFilterTier === tier.id ? 'chip-active' : ''}`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hotels Grid */}
                {destinationHotels.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinationHotels.map((hotel) => {
                      const isCurrentlySelected = trip.selectedHotel?.id === hotel.id;
                      const totalCost = hotel.pricePerNight * (trip.daysCount || 1);

                      return (
                        <div
                          key={hotel.id}
                          className={`card hotel-card-trip flex flex-col overflow-hidden transition-all ${
                            isCurrentlySelected ? 'border-accent shadow-md' : ''
                          }`}
                        >
                          <div className="relative" style={{ height: '170px' }}>
                            <img
                              src={hotel.heroImage}
                              alt={hotel.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {hotel.badge && (
                              <span className="badge badge-accent absolute top-3 left-3 text-3xs font-bold">
                                {hotel.badge}
                              </span>
                            )}
                            <span className="badge badge-rating absolute top-3 right-3 text-2xs font-bold">
                              <Star size={11} fill="currentColor" /> {hotel.rating}
                            </span>
                          </div>

                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-3xs uppercase font-bold text-accent tracking-wider">
                                {hotel.type || 'Hotel'}
                              </span>
                              <span className="text-2xs text-muted">
                                ₹{hotel.pricePerNight.toLocaleString('en-IN')}/night
                              </span>
                            </div>

                            <h4 className="font-bold text-base mb-1 text-primary line-clamp-1" title={hotel.name}>
                              {hotel.name}
                            </h4>
                            <p className="text-xs text-muted line-clamp-1 mb-3">
                              {hotel.nearLocation}
                            </p>

                            {/* Distance to Nearest Landmark */}
                            {hotel.distanceToLandmarks && hotel.distanceToLandmarks[0] && (
                              <div className="text-2xs text-muted bg-surface-alt p-2 rounded mb-4 flex items-center justify-between">
                                <span>{hotel.distanceToLandmarks[0].landmark}</span>
                                <strong className="text-primary">{hotel.distanceToLandmarks[0].distance}</strong>
                              </div>
                            )}

                            <div className="mt-auto pt-3 border-t flex items-center justify-between gap-2">
                              <div>
                                <span className="text-3xs text-muted block">{trip.daysCount} Nights Total:</span>
                                <strong className="text-sm font-bold text-primary">{formatCurrency(totalCost)}</strong>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleSelectHotel(hotel)}
                                className={`btn btn-xs ${
                                  isCurrentlySelected ? 'btn-primary font-bold' : 'btn-outline'
                                }`}
                              >
                                {isCurrentlySelected ? '✓ Currently Selected' : 'Select & Link Stay'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="card p-8 text-center bg-surface-alt">
                    <Building size={36} className="text-muted mx-auto mb-2" />
                    <p className="text-sm text-muted mb-3">No hotels found matching your filter criteria.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setHotelFilterTier('all');
                        setHotelSearchQuery('');
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ITINERARY BUILDER */}
        {activeTab === 'itinerary' && <ItineraryTimeline trip={trip} />}

        {/* TAB 3: BUDGET & EXPENSES */}
        {activeTab === 'budget' && <BudgetCard trip={trip} />}

        {/* TAB 4: KEY PLACES */}
        {activeTab === 'places' && (
          <div className="trip-places-tab">
            <div className="section-header-left mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="heading-2">Attractions & Nearby Places in {trip.destinationName}</h2>
                  <p className="subheading">
                    Explore top attractions, nearby hotels & restaurants, and add them directly into your itinerary.
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
                      All Places ({destination?.attractions?.length || 0})
                    </button>
                    {availablePlaceTypes.map((type) => {
                      const count = destination?.attractions?.filter(
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

            {filteredAttractions && filteredAttractions.length > 0 ? (
              <div className="attractions-grid">
                {filteredAttractions.map((att) => (
                  <AttractionCard
                    key={att.id}
                    attraction={att}
                    destinationId={trip.destinationId}
                    destinationName={trip.destinationName}
                    actionButtonLabel="Add to Trip Itinerary"
                    onAddToTrip={(attractionItem) => {
                      setSelectedAttractionForModal(attractionItem);
                      setIsAddToTripModalOpen(true);
                    }}
                    onBookHotel={(hotel) => {
                      setSelectedHotelForBooking(hotel);
                      setIsHotelModalOpen(true);
                    }}
                    onReserveRestaurant={(restaurant) => {
                      setSelectedRestaurantForReservation(restaurant);
                      setIsRestModalOpen(true);
                    }}
                    onViewOnMap={() => setActiveTab('map')}
                  />
                ))}
              </div>
            ) : (
              <div className="card p-8 text-center">
                <MapPin size={36} className="text-muted mb-2 mx-auto" />
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

        {/* TAB 5: WEATHER */}
        {activeTab === 'weather' && destination && (
          <div className="max-w-2xl mx-auto">
            <WeatherCard
              coordinates={destination.coordinates}
              fallbackProfile={destination.weatherProfile}
              locationName={destination.name}
            />
          </div>
        )}

        {/* TAB 6: INTERACTIVE MAP */}
        {activeTab === 'map' && destination && (
          <MapView
            centerCoordinates={destination.coordinates}
            attractions={destination.attractions || []}
            destinationName={destination.name}
            height="560px"
          />
        )}
      </main>

      {/* Booking and Itinerary Modals */}
      <AddToTripModal
        isOpen={isAddToTripModalOpen}
        onClose={() => {
          setIsAddToTripModalOpen(false);
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
