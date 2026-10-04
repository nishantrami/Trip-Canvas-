import React from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from './DestinationCard';
import { DestinationCardSkeleton } from '../common/Skeleton';
import { EmptyState } from '../common/EmptyState';
import { staggerContainer, fadeInScale } from '../../animations/motionVariants';

export function DestinationGrid({
  destinations = [],
  loading = false,
  emptyTitle,
  emptyDesc,
  onResetFilters
}) {
  if (loading) {
    return (
      <div className="destinations-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <DestinationCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!destinations || destinations.length === 0) {
    return (
      <EmptyState
        type="search"
        title={emptyTitle || 'No destinations match your criteria'}
        description={emptyDesc || 'Try adjusting your budget range, changing categories, or clearing active filters.'}
        actionText={onResetFilters ? 'Clear All Filters' : 'Explore All Destinations'}
        onActionClick={onResetFilters}
        actionLink={!onResetFilters ? '/explore' : undefined}
      />
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="destinations-grid"
    >
      {destinations.map((destination) => (
        <motion.div key={destination.id} variants={fadeInScale} layout>
          <DestinationCard destination={destination} />
        </motion.div>
      ))}
    </motion.div>
  );
}
