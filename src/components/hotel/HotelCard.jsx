import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  MapPin,
  Sparkles,
  Wifi,
  Waves,
  Utensils,
  Calendar,
  ShieldCheck,
  Bed,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import { formatCurrency, formatCompactNumber } from '../../utils/formatCurrency';

export function HotelCard({ hotel, onBookNow, viewMode = 'grid' }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const images = [hotel.heroImage, ...(hotel.gallery || [])].filter(Boolean);

  const getAmenityIcon = (amenity) => {
    const a = amenity.toLowerCase();
    if (a.includes('pool') || a.includes('boat') || a.includes('lake')) return <Waves size={13} />;
    if (a.includes('dining') || a.includes('tea') || a.includes('bar') || a.includes('breakfast')) return <Utensils size={13} />;
    if (a.includes('wi-fi')) return <Wifi size={13} />;
    return <Sparkles size={13} />;
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className={`card hotel-card ${viewMode === 'list' ? 'hotel-card-list-layout' : ''}`}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Media & Gallery Strip */}
      <div className="hotel-card-media-wrapper">
        <img
          src={images[activeImgIdx] || hotel.heroImage}
          alt={hotel.name}
          className="hotel-card-img"
          loading="lazy"
        />
        <div className="hotel-card-gradient" />

        {/* Badges Overlay */}
        <div className="hotel-badges-top">
          {hotel.badge ? (
            <span className="badge badge-accent hotel-hero-badge">
              <Sparkles size={12} /> {hotel.badge}
            </span>
          ) : (
            <span className="badge badge-primary hotel-hero-badge">
              {hotel.type || 'Luxury Stay'}
            </span>
          )}

          <span className="badge badge-rating">
            <Star size={13} fill="currentColor" /> {hotel.rating}
            <span className="reviews-count">({formatCompactNumber(hotel.reviewsCount)})</span>
          </span>
        </div>

        {/* Navigation Arrows on Hover */}
        {images.length > 1 && (
          <div className="hotel-card-nav-arrows">
            <button
              type="button"
              onClick={prevPhoto}
              className="hotel-card-nav-arrow left"
              aria-label="Previous photo"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              className="hotel-card-nav-arrow right"
              aria-label="Next photo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Thumbnail Dots */}
        {images.length > 1 && (
          <div className="hotel-card-thumbs">
            {images.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setActiveImgIdx(idx)}
                onClick={() => setActiveImgIdx(idx)}
                className={`hotel-card-thumb-dot ${activeImgIdx === idx ? 'active' : ''}`}
                aria-label={`Preview photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="hotel-card-body">
        <div className="hotel-header-meta">
          <span className="hotel-category-pill">{hotel.category}</span>
          <span className="hotel-city-tag">{hotel.city || hotel.destinationName}</span>
        </div>

        <h3 className="hotel-card-title">{hotel.name}</h3>

        <div className="hotel-location-row">
          <MapPin size={14} className="text-accent flex-shrink-0" />
          <span className="hotel-location-text" title={hotel.nearLocation || hotel.address}>
            {hotel.nearLocation || hotel.address}
          </span>
        </div>

        {/* Distance Highlights */}
        {hotel.distanceToLandmarks && hotel.distanceToLandmarks.length > 0 && (
          <div className="hotel-landmark-chips">
            {hotel.distanceToLandmarks.slice(0, 2).map((lm, idx) => (
              <span key={idx} className="landmark-chip">
                📍 {lm.landmark}: <strong>{lm.distance}</strong>
              </span>
            ))}
          </div>
        )}

        <p className="hotel-card-tagline">"{hotel.tagline}"</p>

        {/* Available Room Count Pill */}
        {hotel.roomTypes && hotel.roomTypes.length > 0 && (
          <div className="hotel-room-count-pill mb-3">
            <Bed size={13} className="text-accent" />
            <span>{hotel.roomTypes.length} Room Categories Available</span>
            <span className="text-muted text-2xs">({hotel.roomTypes[0].name})</span>
          </div>
        )}

        {/* Amenities Preview */}
        <div className="hotel-amenities-row">
          {(hotel.amenities || []).slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="hotel-amenity-item">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </span>
          ))}
          {(hotel.amenities || []).length > 3 && (
            <span className="hotel-amenity-item text-muted">
              +{hotel.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Free Cancellation Trust Pill */}
        <div className="hotel-trust-badge mb-3">
          <ShieldCheck size={13} className="text-success" />
          <span>Free cancellation up to 48 hrs • No prepayment</span>
        </div>

        {/* Divider & Pricing / CTA */}
        <div className="hotel-card-footer">
          <div className="hotel-price-box">
            <span className="text-2xs text-muted font-medium">Starting from</span>
            <div className="hotel-price-row">
              <span className="hotel-price-main">
                {formatCurrency(hotel.pricePerNight)}
              </span>
              <span className="text-xs text-muted">/ night</span>
            </div>
            {hotel.originalPrice && hotel.originalPrice > hotel.pricePerNight && (
              <span className="hotel-original-price">
                {formatCurrency(hotel.originalPrice)}
              </span>
            )}
          </div>

          <div className="hotel-actions-group">
            <button
              type="button"
              onClick={() => onBookNow(hotel)}
              className="btn btn-primary btn-sm hotel-book-btn"
            >
              <Calendar size={14} />
              <span>Book Room</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
