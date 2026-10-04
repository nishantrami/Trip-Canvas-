import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../context/FavoriteContext';
import { heartPopVariants } from '../../animations/motionVariants';

export function FavoriteButton({
  destinationId,
  destinationName = '',
  className = '',
  size = 20,
  variant = 'circle'
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(destinationId);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(destinationId, destinationName);
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.85 }}
      variants={heartPopVariants}
      animate={active ? 'pop' : 'idle'}
      onClick={handleClick}
      className={`favorite-btn ${variant === 'circle' ? 'favorite-btn-circle' : 'favorite-btn-inline'} ${active ? 'active' : ''} ${className}`}
      aria-label={active ? `Remove ${destinationName} from favorites` : `Add ${destinationName} to favorites`}
      title={active ? "Saved to Wishlist" : "Save to Wishlist"}
    >
      <Heart
        size={size}
        fill={active ? '#E8794F' : 'none'}
        stroke={active ? '#E8794F' : 'currentColor'}
        strokeWidth={2}
      />
    </motion.button>
  );
}
