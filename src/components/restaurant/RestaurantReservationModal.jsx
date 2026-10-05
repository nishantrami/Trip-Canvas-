import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Utensils,
  Sparkles,
  MapPin,
  Heart,
  Download
} from 'lucide-react';
import { useBookings } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { formatDate } from '../../utils/helpers';

export function RestaurantReservationModal({ isOpen, onClose, restaurant }) {
  const { reserveRestaurantTable } = useBookings();
  const { user } = useAuth();

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const [date, setDate] = useState(getTomorrowDate);
  const [timeSlot, setTimeSlot] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [seatingArea, setSeatingArea] = useState('');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  useEffect(() => {
    if (restaurant) {
      const defaultSlot = (restaurant.timeSlots && restaurant.timeSlots[0]) || '07:30 PM';
      const defaultSeating = (restaurant.seatingAreas && restaurant.seatingAreas[0]?.name) || 'Main Dining';
      setTimeSlot(defaultSlot);
      setSeatingArea(defaultSeating);
      setConfirmedReservation(null);

      if (user) {
        setGuestName(user.name || '');
        setGuestEmail(user.email || '');
      }
    }
  }, [restaurant, user]);

  if (!isOpen || !restaurant) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.trim() || !guestPhone.trim()) {
      alert('Please fill in your name, email, and phone.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const reservationData = {
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        destinationId: restaurant.destinationId || '',
        destinationName: restaurant.destinationName || restaurant.city || restaurant.name,
        city: restaurant.city || '',
        heroImage: restaurant.heroImage,
        date,
        timeSlot,
        partySize,
        seatingArea,
        occasion,
        guestName,
        guestEmail,
        guestPhone,
        specialRequests
      };

      const result = reserveRestaurantTable(reservationData);
      setConfirmedReservation(result);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrintPass = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-container modal-md restaurant-reservation-modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <div>
              <span className="badge badge-accent mb-1">
                <Utensils size={12} /> Table Reservation
              </span>
              <h2 className="heading-3">{restaurant.name}</h2>
              <p className="text-xs text-muted flex items-center gap-1 mt-1">
                <MapPin size={12} className="text-accent" /> {restaurant.nearLocation || restaurant.address}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body p-6">
          {confirmedReservation ? (
            /* Confirmation View */
            <div className="booking-success-view text-center py-4">
              <div className="success-icon-badge mx-auto mb-4">
                <CheckCircle2 size={48} className="text-success" />
              </div>
              <h2 className="heading-2 mb-2">Table Reserved Successfully!</h2>
              <p className="text-muted mb-4">
                Your dining table at <strong>{confirmedReservation.restaurantName}</strong> has been secured.
              </p>

              <div className="card booking-receipt-card p-6 text-left mb-6 max-w-md mx-auto">
                <div className="receipt-header-row mb-4 pb-3 border-b flex justify-between items-center">
                  <div>
                    <span className="text-xs text-muted uppercase">Reservation ID</span>
                    <h3 className="text-lg font-bold text-accent">{confirmedReservation.id}</h3>
                  </div>
                  <span className="badge badge-success">Table Held</span>
                </div>

                <div className="receipt-grid text-sm space-y-2">
                  <div className="receipt-row">
                    <span className="text-muted">Dining Date:</span>
                    <strong>{formatDate(confirmedReservation.date)}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Time Slot:</span>
                    <strong className="text-accent">{confirmedReservation.timeSlot}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Party Size:</span>
                    <strong>{confirmedReservation.partySize} Guests</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Seating Area:</span>
                    <strong>{confirmedReservation.seatingArea}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Occasion:</span>
                    <strong>{confirmedReservation.occasion}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Primary Guest:</span>
                    <strong>{confirmedReservation.guestName} ({confirmedReservation.guestPhone})</strong>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button type="button" onClick={handlePrintPass} className="btn btn-outline btn-sm">
                  <Download size={15} /> Save Dining Pass
                </button>
                <button type="button" onClick={onClose} className="btn btn-primary btn-sm">
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date & Guests Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group mb-0">
                  <label className="form-label text-xs">Reservation Date *</label>
                  <input
                    type="date"
                    className="form-input text-sm"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label text-xs">Party / Guest Count</label>
                  <select
                    className="form-input text-sm"
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((count) => (
                      <option key={count} value={count}>
                        {count} {count === 1 ? 'Guest (Solo)' : `${count} Guests`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots Selector */}
              <div>
                <label className="form-label text-xs mb-2 block font-semibold text-primary">
                  Select Dining Time Slot *
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {(restaurant.timeSlots || [
                    '12:30 PM', '01:30 PM', '06:30 PM', '07:30 PM', '08:30 PM', '09:30 PM'
                  ]).map((slot) => {
                    const isSelected = timeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`btn btn-sm ${
                          isSelected ? 'btn-primary font-bold' : 'btn-outline text-muted'
                        }`}
                      >
                        <Clock size={12} /> {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seating Area Selection */}
              {restaurant.seatingAreas && restaurant.seatingAreas.length > 0 && (
                <div>
                  <label className="form-label text-xs mb-2 block font-semibold text-primary">
                    Preferred Seating Atmosphere
                  </label>
                  <div className="space-y-2">
                    {restaurant.seatingAreas.map((area) => {
                      const isSelected = seatingArea === area.name;
                      return (
                        <div
                          key={area.id}
                          onClick={() => setSeatingArea(area.name)}
                          className={`p-3 rounded-lg border text-xs cursor-pointer flex justify-between items-center transition-all ${
                            isSelected ? 'border-accent bg-accent-subtle font-medium text-primary' : 'border-color bg-surface hover:bg-surface-hover'
                          }`}
                        >
                          <div>
                            <span className="font-semibold block">{area.name}</span>
                            <span className="text-2xs text-muted">{area.note}</span>
                          </div>
                          {area.fee > 0 && (
                            <span className="badge badge-accent text-2xs">+{area.fee}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Occasion */}
              <div className="form-group mb-0">
                <label className="form-label text-xs">Dining Occasion</label>
                <select
                  className="form-input text-sm"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="Romantic Date">Romantic Date / Candlelight</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Family Dinner">Family Dinner</option>
                  <option value="Business / Casual">Business / Casual Dining</option>
                </select>
              </div>

              {/* Guest Details */}
              <div className="card p-4 bg-alt space-y-2">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                  Contact Information
                </h4>
                <div className="form-group mb-0">
                  <label className="form-label text-xs">Full Name *</label>
                  <input
                    type="text"
                    className="form-input text-sm"
                    placeholder="e.g. Aryan Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="form-group mb-0">
                    <label className="form-label text-xs">Email *</label>
                    <input
                      type="email"
                      className="form-input text-sm"
                      placeholder="aryan@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-0">
                    <label className="form-label text-xs">Phone *</label>
                    <input
                      type="tel"
                      className="form-input text-sm"
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label text-xs">Special Dining Notes</label>
                  <input
                    type="text"
                    className="form-input text-xs"
                    placeholder="e.g. Pure veg Jain food, cake cutting request..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-3 font-semibold"
              >
                {isSubmitting ? 'Securing Your Table...' : 'Confirm Table Reservation • Free Instant Booking'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
