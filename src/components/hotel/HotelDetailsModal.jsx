import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Star,
  MapPin,
  Sparkles,
  Wifi,
  Waves,
  Utensils,
  ShieldCheck,
  Bed,
  Check,
  CheckCircle2,
  Clock,
  Car,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
  Navigation,
  AlertTriangle
} from 'lucide-react';
import { formatCurrency, formatCompactNumber } from '../../utils/formatCurrency';

export function HotelDetailsModal({
  isOpen,
  onClose,
  hotel,
  nights = 2,
  hotelBudget = 3000,
  isSelected = false,
  selectedRoom = null,
  onSelectHotel = () => {}
}) {
  if (!isOpen || !hotel) return null;

  const images = [hotel.heroImage, ...(hotel.gallery || [])].filter(Boolean);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [chosenRoomId, setChosenRoomId] = useState(
    selectedRoom?.id || (hotel.roomTypes && hotel.roomTypes[0]?.id) || ''
  );

  const activeRoom = (hotel.roomTypes || []).find((r) => r.id === chosenRoomId) || (hotel.roomTypes && hotel.roomTypes[0]) || null;
  const currentPricePerNight = activeRoom?.price || hotel.pricePerNight || 2000;
  const totalStayCost = currentPricePerNight * nights;
  const isOverBudget = totalStayCost > hotelBudget;
  const overBudgetAmount = isOverBudget ? totalStayCost - hotelBudget : 0;
  const remainingHotelBudget = Math.max(0, hotelBudget - totalStayCost);

  const getAmenityIcon = (amenity) => {
    const a = amenity.toLowerCase();
    if (a.includes('pool') || a.includes('boat') || a.includes('lake')) return <Waves size={14} className="text-accent" />;
    if (a.includes('dining') || a.includes('tea') || a.includes('bar') || a.includes('breakfast') || a.includes('cafe'))
      return <Utensils size={14} className="text-accent" />;
    if (a.includes('wi-fi')) return <Wifi size={14} className="text-accent" />;
    return <Sparkles size={14} className="text-accent" />;
  };

  const handleSelect = () => {
    onSelectHotel(hotel, activeRoom);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="hotel-details-modal-overlay" onClick={onClose}>
        <motion.div
          className="hotel-details-modal-card card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="hotel-modal-close-btn"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Modal Header Media Gallery */}
          <div className="hotel-modal-media-header">
            <div className="hotel-modal-main-img-box">
              <img
                src={images[activeImgIdx] || hotel.heroImage}
                alt={hotel.name}
                className="hotel-modal-main-img"
              />
              <div className="hotel-modal-img-gradient" />

              {/* Gallery Arrow Controls */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImgIdx((prev) => (prev - 1 + images.length) % images.length)}
                    className="modal-gallery-nav-btn left"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImgIdx((prev) => (prev + 1) % images.length)}
                    className="modal-gallery-nav-btn right"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Top Badges */}
              <div className="hotel-modal-badges-top">
                {hotel.badge && (
                  <span className="badge badge-accent">
                    <Sparkles size={12} /> {hotel.badge}
                  </span>
                )}
                <span className="badge badge-rating">
                  <Star size={13} fill="currentColor" /> {hotel.rating}
                  <span className="reviews-count">({formatCompactNumber(hotel.reviewsCount)} verified reviews)</span>
                </span>
              </div>

              {/* Bottom Info on Image */}
              <div className="hotel-modal-hero-title-wrap">
                <span className="badge badge-primary text-xs mb-1">
                  {hotel.category || hotel.type}
                </span>
                <h2 className="hotel-modal-title">{hotel.name}</h2>
                <p className="hotel-modal-location-text flex items-center gap-1.5 text-xs text-white-muted">
                  <MapPin size={13} className="text-accent flex-shrink-0" />
                  <span>{hotel.nearLocation || hotel.address}</span>
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="hotel-modal-thumbnails-strip">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIdx(idx)}
                    className={`hotel-modal-thumb-btn ${activeImgIdx === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="hotel-modal-body">
            {/* Tagline & Overview Description */}
            <div className="hotel-modal-section">
              <p className="hotel-modal-tagline font-medium text-primary mb-2">
                "{hotel.tagline}"
              </p>
              <p className="hotel-modal-desc text-muted text-sm leading-relaxed">
                {hotel.description}
              </p>
            </div>

            {/* Landmark Proximity & Local Transportation Costs */}
            <div className="hotel-modal-section">
              <h4 className="hotel-section-heading flex items-center gap-2">
                <Navigation size={15} className="text-accent" />
                <span>Verified Proximity to Major Attractions</span>
              </h4>

              {hotel.distanceToLandmarks && hotel.distanceToLandmarks.length > 0 ? (
                <div className="hotel-landmarks-grid">
                  {hotel.distanceToLandmarks.map((lm, idx) => (
                    <div key={idx} className="landmark-detail-card">
                      <div className="landmark-name-row">
                        <MapPin size={13} className="text-accent" />
                        <span className="font-semibold text-xs text-primary">{lm.landmark}</span>
                      </div>
                      <div className="landmark-dist-row">
                        <span className="badge badge-surface text-2xs font-bold text-accent">
                          {lm.distance}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted">Located conveniently within {hotel.city || 'the destination'}.</p>
              )}

              {/* Estimated Local Transportation */}
              {hotel.estimatedTransitCost && (
                <div className="hotel-transit-estimate-box mt-3 p-3 bg-surface-alt rounded-lg flex items-center gap-3">
                  <div className="transit-icon-wrap p-2 bg-accent-subtle rounded-md text-accent">
                    <Car size={18} />
                  </div>
                  <div>
                    <span className="text-2xs text-muted uppercase font-bold block">
                      Estimated Local Transportation
                    </span>
                    <strong className="text-xs text-primary block">
                      {hotel.estimatedTransitCost.costStr}
                    </strong>
                    <span className="text-2xs text-muted block">
                      {hotel.estimatedTransitCost.note}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Available Room Types */}
            {hotel.roomTypes && hotel.roomTypes.length > 0 && (
              <div className="hotel-modal-section">
                <h4 className="hotel-section-heading flex items-center gap-2">
                  <Bed size={15} className="text-accent" />
                  <span>Available Room Categories ({hotel.roomTypes.length})</span>
                </h4>

                <div className="hotel-rooms-list">
                  {hotel.roomTypes.map((room) => {
                    const isRoomSelected = chosenRoomId === room.id;
                    const roomStayTotal = (room.price || currentPricePerNight) * nights;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setChosenRoomId(room.id)}
                        className={`hotel-room-option-card ${isRoomSelected ? 'selected' : ''}`}
                      >
                        <div className="room-option-left">
                          <input
                            type="radio"
                            name="hotel-room-choice"
                            checked={isRoomSelected}
                            onChange={() => setChosenRoomId(room.id)}
                            className="mr-2"
                          />
                          <div>
                            <h5 className="font-bold text-xs text-primary">{room.name}</h5>
                            <div className="flex items-center gap-3 text-2xs text-muted mt-0.5">
                              {room.size && <span>{room.size}</span>}
                              {room.bed && <span>• {room.bed}</span>}
                              {room.maxGuests && <span>• Up to {room.maxGuests} guests</span>}
                            </div>
                            {room.perks && room.perks.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {room.perks.map((p, pIdx) => (
                                  <span key={pIdx} className="badge badge-surface text-3xs text-success">
                                    ✓ {p}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="room-option-right text-right">
                          <span className="text-2xs text-muted block">{formatCurrency(room.price)} / night</span>
                          <strong className="text-xs text-accent block">
                            {formatCurrency(roomStayTotal)}
                          </strong>
                          <span className="text-3xs text-muted">for {nights} nights</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Verified Amenities */}
            <div className="hotel-modal-section">
              <h4 className="hotel-section-heading flex items-center gap-2">
                <Sparkles size={15} className="text-accent" />
                <span>Verified Hotel Amenities</span>
              </h4>

              <div className="hotel-modal-amenities-grid">
                {(hotel.amenities || []).map((amenity, idx) => (
                  <div key={idx} className="modal-amenity-chip">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Check-In / Check-Out Policies */}
            <div className="hotel-modal-section">
              <h4 className="hotel-section-heading flex items-center gap-2">
                <Clock size={15} className="text-accent" />
                <span>Stay Policies & Cancellation</span>
              </h4>

              <div className="hotel-policies-row">
                <div className="policy-block">
                  <span className="text-2xs text-muted">Check-In:</span>
                  <strong className="text-xs text-primary">{hotel.policies?.checkIn || '12:00 PM'}</strong>
                </div>
                <div className="policy-block">
                  <span className="text-2xs text-muted">Check-Out:</span>
                  <strong className="text-xs text-primary">{hotel.policies?.checkOut || '11:00 AM'}</strong>
                </div>
                <div className="policy-block full-width flex items-center gap-2 mt-1">
                  <ShieldCheck size={14} className="text-success flex-shrink-0" />
                  <span className="text-xs text-success font-medium">
                    {hotel.policies?.cancellation || 'Free cancellation up to 24 hours before check-in'}
                  </span>
                </div>
              </div>
            </div>

            {/* Budget Impact Notice */}
            <div className={`hotel-budget-impact-banner p-3.5 rounded-lg mb-2 ${isOverBudget ? 'bg-danger-subtle border border-danger' : 'bg-accent-subtle border border-accent'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-2xs font-bold uppercase tracking-wider block">
                    {isOverBudget ? 'Budget Alert' : 'Budget Compatibility'}
                  </span>
                  {isOverBudget ? (
                    <p className="text-xs text-danger font-medium mt-0.5">
                      ⚠️ This stay exceeds your recommended accommodation budget of {formatCurrency(hotelBudget)} by{' '}
                      <strong>{formatCurrency(overBudgetAmount)}</strong>.
                    </p>
                  ) : (
                    <p className="text-xs text-primary font-medium mt-0.5">
                      ✓ Fits comfortably in your accommodation allowance ({formatCurrency(hotelBudget)}). You will retain{' '}
                      <strong>{formatCurrency(remainingHotelBudget)}</strong> for dining, sightseeing & transit.
                    </p>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-2xs text-muted block">Stay Total ({nights} Nights)</span>
                  <strong className={`text-base font-bold ${isOverBudget ? 'text-danger' : 'text-accent'}`}>
                    {formatCurrency(totalStayCost)}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="hotel-modal-footer">
            <div className="modal-footer-price-col">
              <span className="text-2xs text-muted">{nights} Nights Total Stay:</span>
              <div className="text-lg font-extrabold text-primary">
                {formatCurrency(totalStayCost)}
                <span className="text-3xs font-normal text-muted ml-1.5">(excl. taxes)</span>
              </div>
            </div>

            <div className="modal-footer-actions">
              <button type="button" onClick={onClose} className="btn btn-outline btn-sm">
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSelect}
                className={`btn btn-sm ${isSelected ? 'btn-success font-bold' : isOverBudget ? 'btn-outline border-danger text-danger' : 'btn-primary'}`}
              >
                {isSelected ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Selected</span>
                  </>
                ) : isOverBudget ? (
                  <>
                    <AlertTriangle size={15} />
                    <span>Select Anyway (+{formatCurrency(overBudgetAmount)})</span>
                  </>
                ) : (
                  <>
                    <Check size={16} />
                    <span>Select This Stay</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
