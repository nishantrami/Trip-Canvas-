import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Building,
  Utensils,
  User,
  Mail,
  Phone,
  IndianRupee,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { useToast } from '../../context/ToastContext';
import { formatCurrency } from '../../utils/formatCurrency';

export function AddBookingModal({ isOpen, onClose }) {
  const { allDestinations, allHotels, allRestaurants, logAdminAction } = useAdmin();
  const { showToast } = useToast();

  const [bookingType, setBookingType] = useState('hotel'); // 'hotel' or 'restaurant'
  const [error, setError] = useState('');

  // Default dates
  const todayStr = new Date().toISOString().split('T')[0];
  const nextWeekStr = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
  const nextWeekEndStr = new Date(Date.now() + 86400000 * 6).toISOString().split('T')[0];

  // Form State
  const [destinationId, setDestinationId] = useState(allDestinations[0]?.id || 'udaipur');
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [roomType, setRoomType] = useState('Executive Heritage Suite');
  const [checkIn, setCheckIn] = useState(nextWeekStr);
  const [checkOut, setCheckOut] = useState(nextWeekEndStr);
  const [totalPrice, setTotalPrice] = useState('18500');

  // Restaurant Fields
  const [selectedRestId, setSelectedRestId] = useState('');
  const [tableType, setTableType] = useState('Prime Waterfront Table');
  const [reservationDate, setReservationDate] = useState(nextWeekStr);
  const [timeSlot, setTimeSlot] = useState('08:00 PM');
  const [specialRequests, setSpecialRequests] = useState('');

  // Common Fields
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('+91 98');
  const [status, setStatus] = useState('Confirmed');

  // Filtered lists
  const availableHotels = useMemo(() => {
    return (allHotels || []).filter(
      (h) => h.destinationId === destinationId || h.city?.toLowerCase() === destinationId.toLowerCase()
    );
  }, [allHotels, destinationId]);

  const availableRestaurants = useMemo(() => {
    return (allRestaurants || []).filter(
      (r) => r.destinationId === destinationId || r.city?.toLowerCase() === destinationId.toLowerCase()
    );
  }, [allRestaurants, destinationId]);

  // Selected entities
  const activeHotel = useMemo(() => {
    return availableHotels.find((h) => h.id === selectedHotelId) || availableHotels[0] || null;
  }, [availableHotels, selectedHotelId]);

  const activeRestaurant = useMemo(() => {
    return availableRestaurants.find((r) => r.id === selectedRestId) || availableRestaurants[0] || null;
  }, [availableRestaurants, selectedRestId]);

  const currentDestination = useMemo(() => {
    return allDestinations.find((d) => d.id === destinationId) || allDestinations[0] || { name: 'India' };
  }, [allDestinations, destinationId]);

  // Calculate nights
  const nightsCount = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const diff = Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  // Handle hotel selection change
  const handleHotelChange = (e) => {
    const hId = e.target.value;
    setSelectedHotelId(hId);
    const chosen = availableHotels.find((h) => h.id === hId);
    if (chosen) {
      const price = (chosen.pricePerNight || 6000) * nightsCount;
      setTotalPrice(String(price));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!guestName.trim()) {
      setError('Please provide the guest full name.');
      return;
    }

    if (!guestEmail.trim() || !guestEmail.includes('@')) {
      setError('Please provide a valid guest email address.');
      return;
    }

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const destCode = (currentDestination.id || 'IN').slice(0, 2).toUpperCase();

    try {
      if (bookingType === 'hotel') {
        const hotelToBook = activeHotel || { name: 'Selected Luxury Stay', id: 'hotel-custom' };
        const newHotelBooking = {
          id: `HTL-${destCode}-${randomSuffix}`,
          destinationId: currentDestination.id,
          destinationName: currentDestination.name,
          hotelId: hotelToBook.id,
          hotelName: hotelToBook.name,
          roomType: roomType || 'Luxury Suite',
          nights: Number(nightsCount),
          guests: Number(guests) || 2,
          checkIn,
          checkOut,
          totalPrice: Number(totalPrice) || 12000,
          guestName: guestName.trim(),
          guestEmail: guestEmail.trim(),
          guestPhone: guestPhone.trim(),
          status,
          bookedAt: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('tripcanvas_hotel_bookings') || '[]');
        const updated = [newHotelBooking, ...existing];
        localStorage.setItem('tripcanvas_hotel_bookings', JSON.stringify(updated));

        window.dispatchEvent(new Event('storage'));
        logAdminAction('Created Hotel Booking', `Created booking ${newHotelBooking.id} for ${guestName} at ${newHotelBooking.hotelName}`);
        showToast(`Hotel booking ${newHotelBooking.id} successfully recorded!`, 'success');
      } else {
        const restToBook = activeRestaurant || { name: 'Curated Dining Experience', id: 'rest-custom' };
        const newRestBooking = {
          id: `RES-${destCode}-${randomSuffix}`,
          destinationId: currentDestination.id,
          destinationName: currentDestination.name,
          restaurantId: restToBook.id,
          restaurantName: restToBook.name,
          tableType: tableType || 'Standard Table',
          guests: Number(guests) || 2,
          reservationDate,
          timeSlot,
          specialRequests: specialRequests.trim(),
          guestName: guestName.trim(),
          guestEmail: guestEmail.trim(),
          guestPhone: guestPhone.trim(),
          status,
          bookedAt: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('tripcanvas_restaurant_bookings') || '[]');
        const updated = [newRestBooking, ...existing];
        localStorage.setItem('tripcanvas_restaurant_bookings', JSON.stringify(updated));

        window.dispatchEvent(new Event('storage'));
        logAdminAction('Created Dining Reservation', `Created table reservation ${newRestBooking.id} for ${guestName} at ${newRestBooking.restaurantName}`);
        showToast(`Dining reservation ${newRestBooking.id} recorded!`, 'success');
      }

      onClose();
    } catch (err) {
      console.error(err);
      setError('Failed to record booking. Please check storage permissions.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="admin-modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="admin-dialog-card admin-modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="admin-dialog-header">
            <div className="flex items-center gap-2.5">
              <div className="admin-dialog-icon">
                <Calendar size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Create New Booking</h3>
                <p className="admin-dialog-subtitle">Record an official stay reservation or dining table booking</p>
              </div>
            </div>
            <button onClick={onClose} className="admin-dialog-close-btn" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="admin-dialog-body">
            {error && (
              <div className="admin-error-banner mb-4">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Booking Type Toggle */}
            <div className="admin-form-group mb-4">
              <label className="admin-form-label">Booking Category</label>
              <div className="grid grid-cols-2 gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setBookingType('hotel')}
                  className={`admin-booking-type-toggle ${bookingType === 'hotel' ? 'active' : ''}`}
                >
                  <Building size={18} />
                  <div>
                    <div className="font-semibold text-sm">Hotel Stay</div>
                    <div className="text-xs text-muted">Suites, villas, & resort rooms</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingType('restaurant')}
                  className={`admin-booking-type-toggle ${bookingType === 'restaurant' ? 'active' : ''}`}
                >
                  <Utensils size={18} />
                  <div>
                    <div className="font-semibold text-sm">Dining Reservation</div>
                    <div className="text-xs text-muted">Waterfront tables & banquet meals</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Destination Selection */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">
                  <MapPin size={14} /> Destination Territory
                </label>
                <select
                  className="admin-select-input w-full"
                  value={destinationId}
                  onChange={(e) => {
                    setDestinationId(e.target.value);
                    setSelectedHotelId('');
                    setSelectedRestId('');
                  }}
                >
                  {allDestinations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.state})
                    </option>
                  ))}
                </select>
              </div>

              {bookingType === 'hotel' ? (
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Building size={14} /> Select Hotel Property
                  </label>
                  <select
                    className="admin-select-input w-full"
                    value={selectedHotelId || (activeHotel?.id || '')}
                    onChange={handleHotelChange}
                  >
                    {availableHotels.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name} — {formatCurrency(h.pricePerNight || 0)}/N
                      </option>
                    ))}
                    {availableHotels.length === 0 && (
                      <option value="">No hotels registered in this destination</option>
                    )}
                  </select>
                </div>
              ) : (
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Utensils size={14} /> Select Restaurant
                  </label>
                  <select
                    className="admin-select-input w-full"
                    value={selectedRestId || (activeRestaurant?.id || '')}
                    onChange={(e) => setSelectedRestId(e.target.value)}
                  >
                    {availableRestaurants.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                    {availableRestaurants.length === 0 && (
                      <option value="">No restaurants registered in this destination</option>
                    )}
                  </select>
                </div>
              )}
            </div>

            {/* Type Specific Fields */}
            {bookingType === 'hotel' ? (
              <>
                <div className="admin-form-grid-3">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Room / Suite Tier</label>
                    <input
                      type="text"
                      className="admin-text-input"
                      placeholder="e.g. Royal Lake View Suite"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Check-In Date</label>
                    <input
                      type="date"
                      className="admin-text-input"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Check-Out Date</label>
                    <input
                      type="date"
                      className="admin-text-input"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                <div className="admin-form-grid-3">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Duration (Nights)</label>
                    <input
                      type="text"
                      className="admin-text-input bg-surface-alt font-mono"
                      value={`${nightsCount} Nights`}
                      disabled
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Guest Count</label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      className="admin-text-input"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Total Booking Price (₹)</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="admin-text-input font-bold text-accent"
                        placeholder="18500"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="admin-form-grid-3">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Table Preference</label>
                    <input
                      type="text"
                      className="admin-text-input"
                      placeholder="e.g. Prime Waterfront Table"
                      value={tableType}
                      onChange={(e) => setTableType(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Reservation Date</label>
                    <input
                      type="date"
                      className="admin-text-input"
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Time Slot</label>
                    <select
                      className="admin-select-input w-full"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option value="12:30 PM">12:30 PM (Lunch)</option>
                      <option value="01:30 PM">01:30 PM (Lunch)</option>
                      <option value="07:00 PM">07:00 PM (Sunset Dinner)</option>
                      <option value="08:00 PM">08:00 PM (Prime Dinner)</option>
                      <option value="09:00 PM">09:00 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                <div className="admin-form-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Guests Count</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="admin-text-input"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Special Dietary / Table Requests</label>
                    <input
                      type="text"
                      className="admin-text-input"
                      placeholder="e.g. Candlelight anniversary table, vegetarian preferences"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Guest Contact Details */}
            <div className="admin-section-divider mt-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Primary Guest Details</span>
            </div>

            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">
                  <User size={14} /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="admin-text-input"
                  placeholder="e.g. Vikramaditya Rathore"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <Mail size={14} /> Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="admin-text-input"
                  placeholder="e.g. guest@domain.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <Phone size={14} /> Contact Phone
                </label>
                <input
                  type="tel"
                  className="admin-text-input"
                  placeholder="+91 98290 12345"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Initial Status */}
            <div className="admin-form-group mt-2">
              <label className="admin-form-label">Booking Status</label>
              <div className="flex items-center gap-3 mt-1">
                {['Confirmed', 'Completed', 'Cancelled'].map((st) => (
                  <label key={st} className="flex items-center gap-2 cursor-pointer text-xs font-medium text-primary">
                    <input
                      type="radio"
                      name="bookingStatus"
                      value={st}
                      checked={status === st}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <span>{st}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="admin-dialog-actions mt-5">
              <button type="button" onClick={onClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm flex items-center gap-2 font-bold">
                <CheckCircle2 size={16} /> Record Booking
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
