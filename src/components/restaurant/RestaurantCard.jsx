import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  MapPin,
  Clock,
  Sparkles,
  Calendar,
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { formatCurrency, formatCompactNumber } from '../../utils/formatCurrency';

export function RestaurantCard({ restaurant, onReserveTable }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const images = [restaurant.heroImage, ...(restaurant.gallery || [])].filter(Boolean);

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
      className="card restaurant-card"
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Media Strip */}
      <div className="restaurant-card-media-wrapper">
        <img
          src={images[activeImgIdx] || restaurant.heroImage}
          alt={restaurant.name}
          className="restaurant-card-img"
          loading="lazy"
        />
        <div className="restaurant-card-gradient" />

        {/* Badges */}
        <div className="restaurant-badges-top">
          {restaurant.badge ? (
            <span className="badge badge-accent restaurant-hero-badge">
              <Sparkles size={12} /> {restaurant.badge}
            </span>
          ) : (
            <span className="badge badge-primary restaurant-hero-badge">
              {restaurant.cuisines?.[0] || 'Iconic Dining'}
            </span>
          )}
          <span className="badge badge-rating">
            <Star size={13} fill="currentColor" /> {restaurant.rating}
            <span className="reviews-count">({formatCompactNumber(restaurant.reviewsCount)})</span>
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

        {/* Cost For Two Pill */}
        <div className="restaurant-cost-badge">
          <span className="text-2xs uppercase tracking-wider text-white-muted">Cost for 2:</span>
          <span className="font-bold text-xs text-white">~{formatCurrency(restaurant.costForTwo)}</span>
        </div>
      </div>

      {/* Body - Fully Aligned Grid Structure */}
      <div className="restaurant-card-body">
        {/* Cuisines Row */}
        <div className="restaurant-cuisine-chips">
          {(restaurant.cuisines || []).slice(0, 3).map((cuisine, idx) => (
            <span key={idx} className="restaurant-cuisine-chip">
              {cuisine}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="restaurant-card-title" title={restaurant.name}>
          {restaurant.name}
        </h3>

        {/* Location Row */}
        <div className="restaurant-location-row">
          <MapPin size={14} className="text-accent flex-shrink-0" />
          <span className="restaurant-location-text" title={restaurant.nearLocation || restaurant.address}>
            {restaurant.nearLocation || restaurant.address}
          </span>
        </div>

        {/* Tagline */}
        <p className="restaurant-card-tagline" title={restaurant.tagline}>
          "{restaurant.tagline}"
        </p>

        {/* Signature Dishes Preview */}
        <div className="restaurant-specialties-box">
          <span className="text-2xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
            <Flame size={12} /> MUST TRY:
          </span>
          <p className="text-xs text-secondary mt-1 restaurant-specialties-text">
            {(restaurant.specialties || []).slice(0, 3).join(' • ')}
          </p>
        </div>

        {/* Operating Timing Row */}
        <div className="restaurant-timing-row">
          <Clock size={13} className="text-muted flex-shrink-0" />
          <span className="truncate">{restaurant.timing}</span>
        </div>

        {/* Card Footer CTA */}
        <div className="restaurant-card-footer">
          <button
            type="button"
            onClick={() => onReserveTable(restaurant)}
            className="btn btn-primary btn-sm w-full restaurant-reserve-btn"
          >
            <Calendar size={14} />
            <span>Reserve Table Online</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
