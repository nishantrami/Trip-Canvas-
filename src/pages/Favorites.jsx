import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, Plus, ArrowRight, MapPin } from 'lucide-react';
import { useFavorites } from '../context/FavoriteContext';
import { DestinationCard } from '../components/destination/DestinationCard';
import { EmptyState } from '../components/common/EmptyState';
import { pageVariants, staggerContainer, fadeInScale } from '../animations/motionVariants';

export function Favorites() {
  const { getFavoriteDestinations, favoritesCount } = useFavorites();
  const favoriteDestinations = getFavoriteDestinations();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="favorites-page section-padding"
    >
      <div className="container">
        {/* Header */}
        <div className="favorites-header-row mb-8">
          <div>
            <span className="section-badge">
              <Heart size={13} fill="#E8794F" /> Saved Wishlist
            </span>
            <h1 className="heading-1">Dream Destinations</h1>
            <p className="subheading">
              Curated spots and bucket-list places you're planning to explore.
            </p>
          </div>

          {favoritesCount > 0 && (
            <Link to="/explore" className="btn btn-outline flex items-center gap-2">
              <Compass size={16} />
              <span>Explore More Places</span>
            </Link>
          )}
        </div>

        {/* Saved Destinations Grid */}
        {favoriteDestinations.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="destinations-grid"
          >
            <AnimatePresence>
              {favoriteDestinations.map((destination) => (
                <motion.div key={destination.id} variants={fadeInScale} layout exit={{ opacity: 0, scale: 0.9 }}>
                  <DestinationCard destination={destination} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <EmptyState
            type="favorites"
            title="Your travel wishlist is waiting"
            description="You haven't saved any destinations to your wishlist yet. Tap the heart icon on any destination to save places for your future itineraries."
            actionText="Explore Destinations"
            actionLink="/explore"
          />
        )}
      </div>
    </motion.div>
  );
}
