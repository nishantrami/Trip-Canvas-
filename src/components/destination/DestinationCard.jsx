import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Plus, ArrowUpRight, Clock, Wallet } from 'lucide-react';
import { FavoriteButton } from '../common/FavoriteButton';
import { AddToTripModal } from './AddToTripModal';
import { formatCurrency, formatCompactNumber } from '../../utils/formatCurrency';
import { cardHover } from '../../animations/motionVariants';

export function DestinationCard({ destination }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  if (!destination) return null;

  return (
    <>
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className="card destination-card"
      >
        {/* Card Media Header */}
        <div className="destination-card-media">
          <Link to={`/explore/${destination.id}`} className="destination-media-link" tabIndex={-1}>
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="destination-card-img"
              loading="lazy"
            />
            <div className="destination-media-overlay" />
          </Link>

          {/* Top Badges */}
          <div className="destination-card-top-bar">
            <span className="badge badge-accent category-badge">
              {destination.category}
            </span>
            <FavoriteButton
              destinationId={destination.id}
              destinationName={destination.name}
              size={18}
            />
          </div>

          {/* Bottom Floating Stats inside media */}
          <div className="destination-media-bottom">
            <span className="badge badge-rating">
              <Star size={13} fill="currentColor" /> {destination.rating}
              <span className="reviews-count">({formatCompactNumber(destination.reviewsCount)})</span>
            </span>
            {destination.idealDuration && (
              <span className="badge badge-primary duration-badge">
                <Clock size={12} /> {destination.idealDuration}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="destination-card-body">
          <div className="destination-card-location">
            <MapPin size={14} className="location-icon" />
            <span>
              {destination.state ? `${destination.state}, ` : ''}{destination.country}
            </span>
          </div>

          <h3 className="destination-card-title">
            <Link to={`/explore/${destination.id}`}>
              {destination.name}
            </Link>
          </h3>

          <p className="destination-card-tagline">
            {destination.tagline || destination.description?.substring(0, 75) + '...'}
          </p>

          {/* Tags preview */}
          {destination.tags && destination.tags.length > 0 && (
            <div className="destination-tags-row">
              {destination.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="destination-mini-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer with Budget & CTAs */}
          <div className="destination-card-footer">
            <div className="destination-budget-box">
              <span className="budget-label">Est. Budget</span>
              <span className="budget-value">
                {formatCurrency(destination.averageBudget)} <small>/ day</small>
              </span>
            </div>

            <div className="destination-card-actions">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="btn-add-trip-quick"
                title={`Add ${destination.name} to trip`}
                aria-label={`Add ${destination.name} to trip`}
              >
                <Plus size={16} />
              </button>

              <Link
                to={`/explore/${destination.id}`}
                className="btn btn-outline btn-sm btn-view-dest"
              >
                <span>View</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Add To Trip Modal */}
      <AddToTripModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        destination={destination}
      />
    </>
  );
}
