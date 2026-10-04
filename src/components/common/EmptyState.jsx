import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Heart, Calendar, Search, MapPin, Plus } from 'lucide-react';

export function EmptyState({
  type = 'default',
  title,
  description,
  actionText,
  actionLink,
  onActionClick,
  icon: CustomIcon
}) {
  const getIcon = () => {
    if (CustomIcon) return <CustomIcon size={44} strokeWidth={1.5} />;
    switch (type) {
      case 'favorites':
        return <Heart size={44} strokeWidth={1.5} className="empty-icon-heart" />;
      case 'trips':
        return <Calendar size={44} strokeWidth={1.5} className="empty-icon-calendar" />;
      case 'search':
        return <Search size={44} strokeWidth={1.5} className="empty-icon-search" />;
      case 'itinerary':
        return <MapPin size={44} strokeWidth={1.5} className="empty-icon-map" />;
      case 'default':
      default:
        return <Compass size={44} strokeWidth={1.5} className="empty-icon-compass" />;
    }
  };

  const getDefaultTitle = () => {
    if (title) return title;
    switch (type) {
      case 'favorites':
        return 'Your travel wishlist is waiting';
      case 'trips':
        return 'No journeys planned yet';
      case 'search':
        return 'No matching destinations found';
      case 'itinerary':
        return 'No activities for this day yet';
      default:
        return 'Nothing to display here';
    }
  };

  const getDefaultDesc = () => {
    if (description) return description;
    switch (type) {
      case 'favorites':
        return 'Tap the heart icon on any destination or attraction to save places that inspire your wanderlust.';
      case 'trips':
        return 'Your next unforgettable adventure starts with a plan. Create a personalized itinerary in minutes.';
      case 'search':
        return 'Try adjusting your search terms, changing categories, or clearing active filters.';
      case 'itinerary':
        return 'Add sightseeing spots, local food stops, or relaxing pauses to craft your perfect day.';
      default:
        return 'Check back later or explore new adventures.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="empty-state-wrapper"
    >
      <div className="empty-state-icon-circle">{getIcon()}</div>
      <h3 className="empty-state-title">{getDefaultTitle()}</h3>
      <p className="empty-state-desc">{getDefaultDesc()}</p>
      
      {actionText && (
        <div className="empty-state-action">
          {actionLink ? (
            <Link to={actionLink} className="btn btn-primary">
              <Compass size={16} />
              {actionText}
            </Link>
          ) : (
            <button onClick={onActionClick} className="btn btn-primary">
              <Plus size={16} />
              {actionText}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}
