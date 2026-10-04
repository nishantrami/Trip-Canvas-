import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building,
  Utensils,
  MapPin,
  CheckCircle2,
  Download,
  Trash2
} from 'lucide-react';
import { useBookings } from '../context/BookingContext';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/helpers';
import { pageVariants } from '../animations/motionVariants';

export function Bookings() {
  const {
    hotelBookings,
    restaurantBookings,
    cancelHotelBooking,
    cancelRestaurantBooking,
    deleteHotelBooking,
    deleteRestaurantBooking
  } = useBookings();

  const [activeTab, setActiveTab] = useState('hotels');
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const handleCancelHotel = (id, hotelName) => {
    if (window.confirm(`Are you sure you want to cancel your stay at ${hotelName}?`)) {
      cancelHotelBooking(id);
    }
  };

  const handleDeleteHotel = (id, hotelName) => {
    if (window.confirm(`Are you sure you want to permanently delete the booking record for ${hotelName}?`)) {
      deleteHotelBooking(id);
    }
  };

  const handleCancelRestaurant = (id, restName) => {
    if (window.confirm(`Are you sure you want to cancel your table reservation at ${restName}?`)) {
      cancelRestaurantBooking(id);
    }
  };

  const handleDeleteRestaurant = (id, restName) => {
    if (window.confirm(`Are you sure you want to permanently delete the reservation record for ${restName}?`)) {
      deleteRestaurantBooking(id);
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bookings-page"
    >
      {/* Hero */}
      <section className="explore-hero-compact">
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
            alt="My Bookings & Reservations"
            className="explore-hero-img"
          />
          <div className="explore-hero-gradient" />
        </div>

        <div className="container explore-hero-content">
          <span className="badge badge-accent mb-3">
            <CheckCircle2 size={13} /> Active Itinerary & Stays
          </span>
          <h1 className="heading-1 text-white mb-2">My Bookings & Reservations</h1>
          <p className="text-white-muted max-w-2xl">
            Manage your confirmed hotel luxury suites, lakeside room reservations, and table passes.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="container section-padding">
        {/* Modern Tabs Bar */}
        <div className="bookings-tabs-bar">
          <button
            type="button"
            onClick={() => setActiveTab('hotels')}
            className={`bookings-tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
          >
            <Building size={16} />
            <span>Hotel Bookings ({hotelBookings.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('restaurants')}
            className={`bookings-tab-btn ${activeTab === 'restaurants' ? 'active' : ''}`}
          >
            <Utensils size={16} />
            <span>Dining Reservations ({restaurantBookings.length})</span>
          </button>
        </div>

        {/* TAB 1: HOTELS */}
        {activeTab === 'hotels' && (
          <div>
            {hotelBookings.length > 0 ? (
              <div className="space-y-6">
                {hotelBookings.map((booking) => {
                  const isConfirmed = booking.status === 'Confirmed';
                  return (
                    <div key={booking.id} className="booking-card">
                      {/* Left Media Column */}
                      <div className="booking-card-media">
                        <img
                          src={booking.heroImage}
                          alt={booking.hotelName}
                          className="booking-card-img"
                        />
                        <span
                          className={`badge booking-status-badge ${
                            isConfirmed ? 'badge-success' : 'badge-danger'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>

                      {/* Right Content Column */}
                      <div className="booking-card-content">
                        <div>
                          <div className="booking-header-row">
                            <div>
                              <span className="booking-ref-badge">
                                REF: {booking.id}
                              </span>
                              <h3 className="booking-title">{booking.hotelName}</h3>
                              <p className="booking-location">
                                <MapPin size={13} className="text-accent shrink-0" />
                                <span>{booking.city || booking.destinationName}</span>
                              </p>
                            </div>
                            <div className="booking-price-block">
                              <span className="price-label">Total Paid / Due</span>
                              <div className="price-value">
                                {formatCurrency(booking.totalPrice)}
                              </div>
                            </div>
                          </div>

                          <div className="booking-meta-grid">
                            <div className="booking-meta-item">
                              <span className="meta-label">Room Type</span>
                              <strong className="meta-value">{booking.roomTypeName}</strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Stay Dates</span>
                              <strong className="meta-value">
                                {formatDate(booking.checkInDate)} – {formatDate(booking.checkOutDate)}
                              </strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Duration</span>
                              <strong className="meta-value">
                                {booking.nights} Night{booking.nights > 1 ? 's' : ''}
                              </strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Guest</span>
                              <strong className="meta-value">{booking.guestName}</strong>
                            </div>
                          </div>

                          {booking.specialRequests && (
                            <div className="booking-note-callout">
                              <span className="font-semibold">Note:</span> "{booking.specialRequests}"
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="booking-actions-row">
                          <button
                            type="button"
                            onClick={() => setSelectedVoucher(booking)}
                            className="btn btn-outline btn-sm"
                          >
                            <Download size={14} />
                            <span>View / Print Voucher</span>
                          </button>

                          {isConfirmed && (
                            <button
                              type="button"
                              onClick={() => handleCancelHotel(booking.id, booking.hotelName)}
                              className="btn btn-outline btn-sm text-danger hover:bg-danger-subtle"
                            >
                              Cancel Booking
                            </button>
                          )}

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => handleDeleteHotel(booking.id, booking.hotelName)}
                            className="btn btn-outline btn-sm btn-delete-booking"
                            title="Delete booking permanently"
                          >
                            <Trash2 size={14} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card text-center p-12 max-w-md mx-auto">
                <Building size={48} className="text-muted mx-auto mb-4" />
                <h3 className="heading-3 mb-2">No Hotel Bookings Yet</h3>
                <p className="text-muted mb-4">
                  Explore luxury palace stays and lakefront havelis in Udaipur.
                </p>
                <Link to="/hotels" className="btn btn-primary btn-sm mx-auto">
                  Browse Hotels
                </Link>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RESTAURANTS */}
        {activeTab === 'restaurants' && (
          <div>
            {restaurantBookings.length > 0 ? (
              <div className="space-y-6">
                {restaurantBookings.map((res) => {
                  const isConfirmed = res.status === 'Confirmed';
                  return (
                    <div key={res.id} className="booking-card">
                      {/* Left Media Column */}
                      <div className="booking-card-media">
                        <img
                          src={res.heroImage}
                          alt={res.restaurantName}
                          className="booking-card-img"
                        />
                        <span
                          className={`badge booking-status-badge ${
                            isConfirmed ? 'badge-success' : 'badge-danger'
                          }`}
                        >
                          {res.status}
                        </span>
                      </div>

                      {/* Right Content Column */}
                      <div className="booking-card-content">
                        <div>
                          <div className="booking-header-row">
                            <div>
                              <span className="booking-ref-badge">
                                PASS: {res.id}
                              </span>
                              <h3 className="booking-title">{res.restaurantName}</h3>
                              <p className="booking-location">
                                <MapPin size={13} className="text-accent shrink-0" />
                                <span>{res.city || res.destinationName}</span>
                              </p>
                            </div>
                            <div className="booking-price-block">
                              <span className="price-label">Reservation Status</span>
                              <div className="text-base font-bold text-success flex items-center gap-1 justify-end">
                                <CheckCircle2 size={16} /> Table Reserved
                              </div>
                            </div>
                          </div>

                          <div className="booking-meta-grid">
                            <div className="booking-meta-item">
                              <span className="meta-label">Dining Date</span>
                              <strong className="meta-value">{formatDate(res.date)}</strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Time Slot</span>
                              <strong className="meta-value text-accent">{res.timeSlot}</strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Party Size</span>
                              <strong className="meta-value">{res.partySize} Guests</strong>
                            </div>
                            <div className="booking-meta-item">
                              <span className="meta-label">Seating Area</span>
                              <strong className="meta-value">{res.seatingArea}</strong>
                            </div>
                          </div>

                          {(res.occasion || res.specialRequests) && (
                            <div className="booking-note-callout">
                              {res.occasion && (
                                <div>
                                  <span className="font-semibold">Occasion:</span> {res.occasion}
                                </div>
                              )}
                              {res.specialRequests && (
                                <div className={res.occasion ? 'mt-1' : ''}>
                                  <span className="font-semibold">Special Request:</span> "{res.specialRequests}"
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="booking-actions-row">
                          <button
                            type="button"
                            onClick={() => window.print()}
                            className="btn btn-outline btn-sm"
                          >
                            <Download size={14} />
                            <span>Print Table Pass</span>
                          </button>

                          {isConfirmed && (
                            <button
                              type="button"
                              onClick={() => handleCancelRestaurant(res.id, res.restaurantName)}
                              className="btn btn-outline btn-sm text-danger hover:bg-danger-subtle"
                            >
                              Cancel Reservation
                            </button>
                          )}

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => handleDeleteRestaurant(res.id, res.restaurantName)}
                            className="btn btn-outline btn-sm btn-delete-booking"
                            title="Delete reservation permanently"
                          >
                            <Trash2 size={14} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card text-center p-12 max-w-md mx-auto">
                <Utensils size={48} className="text-muted mx-auto mb-4" />
                <h3 className="heading-3 mb-2">No Dining Reservations</h3>
                <p className="text-muted mb-4">
                  Reserve candlelit lakeside tables facing Udaipur City Palace.
                </p>
                <Link to="/restaurants" className="btn btn-primary btn-sm mx-auto">
                  Browse Restaurants
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Voucher Modal */}
      {selectedVoucher && (
        <div className="modal-overlay" onClick={() => setSelectedVoucher(null)}>
          <div className="modal-container modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="heading-3">Hotel Voucher • {selectedVoucher.id}</h3>
              <button onClick={() => setSelectedVoucher(null)} className="modal-close-btn">
                ✕
              </button>
            </div>
            <div className="modal-body p-6 text-sm">
              <div className="card p-4 bg-alt mb-4">
                <h4 className="font-bold text-base text-primary mb-1">{selectedVoucher.hotelName}</h4>
                <p className="text-xs text-muted">{selectedVoucher.city}, India</p>
                <div className="divider my-2" />
                <p><strong>Room:</strong> {selectedVoucher.roomTypeName}</p>
                <p><strong>Check-in:</strong> {formatDate(selectedVoucher.checkInDate)} (From 02:00 PM)</p>
                <p><strong>Check-out:</strong> {formatDate(selectedVoucher.checkOutDate)} (Until 12:00 PM)</p>
                <p><strong>Guest:</strong> {selectedVoucher.guestName} ({selectedVoucher.guestPhone})</p>
                <p><strong>Amount:</strong> {formatCurrency(selectedVoucher.totalPrice)}</p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn btn-primary w-full"
              >
                <Download size={15} /> Print Official Confirmation
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
