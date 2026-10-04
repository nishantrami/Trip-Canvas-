import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { DESTINATIONS } from '../data/destinations';

const FavoriteContext = createContext();

const INITIAL_FAVORITES = ['udaipur', 'kashmir', 'goa', 'bali'];

export function FavoriteProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('tripcanvas_favorites', INITIAL_FAVORITES);
  const { showToast } = useToast();

  const isFavorite = useCallback(
    (destinationId) => {
      if (!destinationId) return false;
      return favoriteIds.includes(destinationId.toLowerCase());
    },
    [favoriteIds]
  );

  const toggleFavorite = useCallback(
    (destinationId, destinationName = '') => {
      if (!destinationId) return;
      const cleanId = destinationId.toLowerCase();
      const dest = DESTINATIONS.find((d) => d.id === cleanId);
      const name = destinationName || dest?.name || 'Destination';

      const exists = favoriteIds.includes(cleanId);
      if (exists) {
        setFavoriteIds((prev) => prev.filter((id) => id !== cleanId));
        showToast(`Removed "${name}" from your wishlist`, 'info');
      } else {
        setFavoriteIds((prev) => [...prev, cleanId]);
        showToast(`Saved "${name}" to your wishlist!`, 'favorite');
      }
    },
    [favoriteIds, setFavoriteIds, showToast]
  );

  const getFavoriteDestinations = useCallback(() => {
    return DESTINATIONS.filter((d) => favoriteIds.includes(d.id.toLowerCase()));
  }, [favoriteIds]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteIds,
        isFavorite,
        toggleFavorite,
        getFavoriteDestinations,
        favoritesCount: favoriteIds.length
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
}
