import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  Star,
  MapPin,
  ShieldCheck,
  CreditCard,
  Sparkles,
  ArrowRight,
  Bed,
  Layers,
  Clock,
  Download
} from 'lucide-react';
import { useBookings } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { calculateDaysBetween, formatDate } from '../../utils/helpers';

export function HotelBookingModal({ isOpen, onClose, hotel, preselectedRoom = null }) {
  const { bookHotel } = useBookings();
  const { user } = useAuth();

  // Get tomorrow and 3 days from now for realistic defaults
  const getDefaultDates = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const checkOut = new Date(tomorrow);
    checkOut.setDate(tomorrow.getDate() + 2);

    return {
      checkIn: tomorrow.toISOString().split('T')[0],
      checkOut: checkOut.toISOString().split('T')[0]
    };
  };

  const [dates, setDates] = useState(getDefaultDates);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (hotel) {
      const defaultRoom = preselectedRoom || (hotel.roomTypes && hotel.roomTypes[0]) || null;
      setSelectedRoomId(defaultRoom ? defaultRoom.id : '');
      setConfirmedBooking(null);

      if (user) {
        setGuestName(user.name || '');
        setGuestEmail(user.email || '');
      }
    }
  }, [hotel, preselectedRoom, user]);

  if (!isOpen || !hotel) return null;

  const currentRoom =
    (hotel.roomTypes || []).find((r) => r.id === selectedRoomId) ||
    (hotel.roomTypes && hotel.roomTypes[0]) ||
    {
      id: 'standard',
      name: 'Standard Heritage Room',
      price: hotel.pricePerNight,
      perks: ['Free Breakfast', 'Lake View']
    };

  const nights = Math.max(1, calculateDaysBetween(dates.checkIn, dates.checkOut) - 1);
  const roomPrice = currentRoom.price || hotel.pricePerNight;
  const baseSubtotal = roomPrice * nights * roomsCount;
  const taxes = Math.round(baseSubtotal * 0.12); // 12% GST
  const grandTotal = baseSubtotal + taxes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.trim() || !guestPhone.trim()) {
      alert('Please fill in all required guest details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const bookingData = {
        hotelId: hotel.id,
        hotelName: hotel.name,
        destinationId: hotel.destinationId || '',
        destinationName: hotel.destinationName || hotel.city || hotel.name,
        city: hotel.city || '',
        heroImage: hotel.heroImage,
        roomTypeId: currentRoom.id,
        roomTypeName: currentRoom.name,
        checkInDate: dates.checkIn,
        checkOutDate: dates.checkOut,
        nights,
        guests: { adults, children: childrenCount, rooms: roomsCount },
        guestName,
        guestEmail,
        guestPhone,
        specialRequests,
        pricePerNight: roomPrice,
        taxes,
        totalPrice: grandTotal,
        paymentMethod: 'Pay at Hotel / Instant Guarantee'
      };

      const result = bookHotel(bookingData);
      setConfirmedBooking(result);
      setIsSubmitting(false);
    }, 600);
  };

  const handleDownloadVoucher = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-container modal-lg hotel-booking-modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <div>
              <span className="badge badge-accent mb-1">
                <Sparkles size={12} /> Instant Hotel Reservation
              </span>
              <h2 className="heading-3">{hotel.name}</h2>
              <p className="text-xs text-muted flex items-center gap-1 mt-1">
                <MapPin size={12} className="text-accent" /> {hotel.nearLocation || hotel.address}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body p-6">
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div className="booking-success-view text-center py-4">
              <div className="success-icon-badge mx-auto mb-4">
                <CheckCircle2 size={48} className="text-success" />
              </div>
              <h2 className="heading-2 mb-2">Reservation Confirmed!</h2>
              <p className="text-muted mb-4">
                Your luxury stay has been locked in. A confirmation voucher has been generated.
              </p>

              <div className="card booking-receipt-card p-6 text-left mb-6 max-w-lg mx-auto">
                <div className="receipt-header-row mb-4 pb-3 border-b">
                  <div>
                    <span className="text-xs text-muted uppercase">Booking Reference</span>
                    <h3 className="text-lg font-bold text-accent">{confirmedBooking.id}</h3>
                  </div>
                  <span className="badge badge-success">Confirmed & Guaranteed</span>
                </div>

                <div className="receipt-grid text-sm gap-y-3">
                  <div className="receipt-row">
                    <span className="text-muted">Property:</span>
                    <strong className="text-primary">{confirmedBooking.hotelName}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Room Type:</span>
                    <strong>{confirmedBooking.roomTypeName}</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Dates:</span>
                    <strong>
                      {formatDate(confirmedBooking.checkInDate)} to {formatDate(confirmedBooking.checkOutDate)} ({confirmedBooking.nights} Nights)
                    </strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Primary Guest:</span>
                    <strong>{confirmedBooking.guestName} ({confirmedBooking.guestPhone})</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="text-muted">Total Amount (incl. 12% GST):</span>
                    <strong className="text-primary text-base">{formatCurrency(confirmedBooking.totalPrice)}</strong>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button type="button" onClick={handleDownloadVoucher} className="btn btn-outline btn-sm">
                  <Download size={15} /> Print / Save Voucher
                </button>
                <button type="button" onClick={onClose} className="btn btn-primary btn-sm">
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form Flow */
            <form onSubmit={handleSubmit} className="hotel-booking-grid-layout">
              {/* Left Column: Room & Dates */}
              <div className="booking-form-col-left">
                {/* Stay Dates Box */}
                <div className="card p-4 mb-4 bg-alt">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-accent" /> Select Dates & Duration
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="form-group mb-0">
                      <label className="form-label text-xs">Check-in</label>
                      <input
                        type="date"
                        className="form-input text-sm"
                        value={dates.checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group mb-0">
                      <label className="form-label text-xs">Check-out</label>
                      <input
                        type="date"
                        className="form-input text-sm"
                        value={dates.checkOut}
                        min={dates.checkIn}
                        onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted flex justify-between">
                    <span>Duration: <strong>{nights} Night{nights > 1 ? 's' : ''}</strong></span>
                    <span className="text-success font-medium">Free cancellation prior to 48 hrs</span>
                  </div>
                </div>

                {/* Room Types Selector */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
                    <Bed size={16} className="text-accent" /> Select Room Category
                  </h4>
                  <div className="room-options-list space-y-3">
                    {(hotel.roomTypes || []).map((room) => {
                      const isSelected = selectedRoomId === room.id;
                      return (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoomId(room.id)}
                          className={`card room-selection-card p-3 cursor-pointer transition-all ${
                            isSelected ? 'selected-room-active border-accent' : ''
                          }`}
                        >
                          <div className="flex gap-3">
                            <img
                              src={room.image || hotel.heroImage}
                              alt={room.name}
                              className="room-thumb-img w-20 h-20 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h5 className="font-semibold text-sm text-primary">{room.name}</h5>
                                <div className="text-right">
                                  <span className="text-sm font-bold text-accent">
                                    {formatCurrency(room.price)}
                                  </span>
                                  <span className="text-xs text-muted">/nt</span>
                                </div>
                              </div>
                              <div className="text-xs text-muted mt-1">
                                <span>{room.size}</span> • <span>{room.bed}</span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {(room.perks || []).map((perk, pIdx) => (
                                  <span key={pIdx} className="badge badge-sm badge-secondary text-2xs">
                                    ✓ {perk}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Guest Count */}
                <div className="card p-4 bg-alt">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
                    <Users size={16} className="text-accent" /> Guests & Rooms
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-xs text-muted block mb-1">Adults (12+)</label>
                      <select
                        className="form-input text-sm"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Adult' : 'Adults'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Children</label>
                      <select
                        className="form-input text-sm"
                        value={childrenCount}
                        onChange={(e) => setChildrenCount(Number(e.target.value))}
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num} Child{num !== 1 ? 'ren' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Rooms</label>
                      <select
                        className="form-input text-sm"
                        value={roomsCount}
                        onChange={(e) => setRoomsCount(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} Room{num > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Guest Details & Pricing Summary */}
              <div className="booking-form-col-right">
                <div className="card p-5 mb-4">
                  <h4 className="text-sm font-bold text-primary mb-3">Primary Guest Information</h4>
                  <div className="space-y-3">
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
                      <label className="form-label text-xs">Special Requests (Optional)</label>
                      <textarea
                        rows="2"
                        className="form-textarea text-xs"
                        placeholder="e.g. High floor lake view, quiet corner room, anniversary decorations..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Card */}
                <div className="card p-5 bg-alt mb-5">
                  <h4 className="text-sm font-bold text-primary mb-3">Price Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">
                        {formatCurrency(roomPrice)} × {nights} Night{nights > 1 ? 's' : ''} ({roomsCount} Room)
                      </span>
                      <span>{formatCurrency(baseSubtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Hotel Luxury GST (12%)</span>
                      <span>{formatCurrency(taxes)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-base text-primary">
                      <span>Grand Total</span>
                      <span className="text-accent">{formatCurrency(grandTotal)}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-2xs text-muted flex items-center gap-1">
                    <ShieldCheck size={14} className="text-success" />
                    <span>No pre-payment required. Pay comfortably during check-in.</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3 text-sm font-semibold"
                >
                  {isSubmitting ? (
                    <span>Confirming Reservation...</span>
                  ) : (
                    <span>Confirm & Book Stay • {formatCurrency(grandTotal)}</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
