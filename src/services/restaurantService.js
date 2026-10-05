import { RESTAURANTS, RESTAURANT_CUISINE_FILTERS } from '../data/restaurants.js';

export const restaurantService = {
  getAllRestaurants: () => {
    return RESTAURANTS;
  },

  getRestaurantById: (id) => {
    if (!id) return null;
    const cleanId = id.toLowerCase().trim();
    return RESTAURANTS.find(r => r.id.toLowerCase() === cleanId) || null;
  },

  getRestaurantsByDestination: (destinationId) => {
    if (!destinationId) return RESTAURANTS;
    const cleanDestId = destinationId.toLowerCase().trim();
    return RESTAURANTS.filter(
      r => r.destinationId.toLowerCase() === cleanDestId || r.city.toLowerCase().includes(cleanDestId)
    );
  },

  getCuisineFilters: () => {
    return RESTAURANT_CUISINE_FILTERS;
  },

  searchRestaurants: (query = '') => {
    if (!query || !query.trim()) return RESTAURANTS;
    const q = query.toLowerCase().trim();

    return RESTAURANTS.filter(r => {
      const matchName = r.name.toLowerCase().includes(q);
      const matchCity = r.city.toLowerCase().includes(q);
      const matchDest = r.destinationName.toLowerCase().includes(q);
      const matchNear = r.nearLocation.toLowerCase().includes(q);
      const matchCuisine = r.cuisines?.some(c => c.toLowerCase().includes(q));
      const matchSpec = r.specialties?.some(s => s.toLowerCase().includes(q));

      return matchName || matchCity || matchDest || matchNear || matchCuisine || matchSpec;
    });
  },

  filterRestaurants: ({
    destination = 'all',
    query = '',
    cuisines = [],
    minCostForTwo = 0,
    maxCostForTwo = 10000,
    minRating = 0,
    sortBy = 'recommended'
  }) => {
    let results = RESTAURANTS;

    if (destination && destination !== 'all') {
      const destClean = destination.toLowerCase().trim();
      results = results.filter(
        r => r.destinationId.toLowerCase() === destClean || r.city.toLowerCase().includes(destClean)
      );
    }

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      results = results.filter(
        r =>
          r.name.toLowerCase().includes(q) ||
          r.nearLocation.toLowerCase().includes(q) ||
          r.address.toLowerCase().includes(q) ||
          r.tagline.toLowerCase().includes(q)
      );
    }

    if (minCostForTwo > 0) {
      results = results.filter(r => r.costForTwo >= Number(minCostForTwo));
    }

    if (maxCostForTwo) {
      results = results.filter(r => r.costForTwo <= Number(maxCostForTwo));
    }

    if (minRating > 0) {
      results = results.filter(r => r.rating >= Number(minRating));
    }

    if (cuisines && cuisines.length > 0) {
      results = results.filter(r =>
        cuisines.some(c =>
          r.cuisines?.some(item => item.toLowerCase().includes(c.toLowerCase())) ||
          r.features?.some(f => f.toLowerCase().includes(c.toLowerCase()))
        )
      );
    }

    switch (sortBy) {
      case 'cost-low':
        results.sort((a, b) => a.costForTwo - b.costForTwo);
        break;
      case 'cost-high':
        results.sort((a, b) => b.costForTwo - a.costForTwo);
        break;
      case 'rating-high':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        results.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'recommended':
      default:
        results.sort((a, b) => (b.rating * 1000 + b.reviewsCount) - (a.rating * 1000 + a.reviewsCount));
        break;
    }

    return results;
  }
};
