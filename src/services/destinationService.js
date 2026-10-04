import { DESTINATIONS, CATEGORIES } from '../data/destinations';
import { HOTELS } from '../data/hotels';
import { RESTAURANTS } from '../data/restaurants';

export const destinationService = {
  getAllDestinations: () => {
    return DESTINATIONS;
  },

  getDestinationById: (id) => {
    if (!id) return null;
    const cleanId = id.toLowerCase().trim();
    return DESTINATIONS.find(d => d.id.toLowerCase() === cleanId || d.name.toLowerCase() === cleanId) || null;
  },

  getCategories: () => {
    return CATEGORIES;
  },

  /**
   * Get distinct place types for a destination's attractions
   */
  getAttractionPlaceTypes: (destinationId) => {
    const dest = destinationService.getDestinationById(destinationId);
    if (!dest || !dest.attractions) return [];
    const types = new Set();
    dest.attractions.forEach(att => {
      if (att.placeType) types.add(att.placeType);
      else if (att.category) types.add(att.category);
    });
    return Array.from(types);
  },

  /**
   * Resolve nearby hotels and restaurants for a specific attraction.
   * If pre-curated nearby items exist on the attraction, use them;
   * otherwise fallback to the destination's top hotels and restaurants.
   */
  getAttractionNearby: (destinationId, attraction) => {
    if (!attraction) return { nearbyHotels: [], nearbyRestaurants: [] };

    let hotels = attraction.nearbyHotels || [];
    let restaurants = attraction.nearbyRestaurants || [];

    // Fallback if not directly provided on attraction
    if (!hotels.length && destinationId) {
      const destClean = destinationId.toLowerCase().trim();
      const pool = HOTELS.filter(h => h.destinationId.toLowerCase() === destClean || h.city.toLowerCase().includes(destClean));
      hotels = pool.slice(0, 3).map((h, idx) => ({
        id: h.id,
        name: h.name,
        distance: `${(idx + 1) * 0.8} km`,
        walkTime: `${(idx + 1) * 10} min`,
        rating: h.rating,
        pricePerNight: h.pricePerNight,
        badge: h.badge,
        image: h.heroImage || h.gallery?.[0],
        address: h.address
      }));
    }

    if (!restaurants.length && destinationId) {
      const destClean = destinationId.toLowerCase().trim();
      const pool = RESTAURANTS.filter(r => r.destinationId.toLowerCase() === destClean || r.city.toLowerCase().includes(destClean));
      restaurants = pool.slice(0, 3).map((r, idx) => ({
        id: r.id,
        name: r.name,
        distance: `${(idx + 1) * 0.6} km`,
        walkTime: `${(idx + 1) * 8} min`,
        rating: r.rating,
        costForTwo: r.costForTwo,
        cuisine: r.cuisines?.[0] || 'Local Cuisine',
        specialty: r.specialties?.[0] || 'Signature Specialty',
        image: r.heroImage || r.gallery?.[0],
        address: r.address
      }));
    }

    return { nearbyHotels: hotels, nearbyRestaurants: restaurants };
  },

  searchDestinations: (query = '') => {
    if (!query || !query.trim()) return DESTINATIONS;
    const q = query.toLowerCase().trim();

    return DESTINATIONS.filter(dest => {
      const matchName = dest.name.toLowerCase().includes(q);
      const matchState = dest.state.toLowerCase().includes(q);
      const matchCountry = dest.country.toLowerCase().includes(q);
      const matchCategory = dest.category.toLowerCase().includes(q);
      const matchTags = dest.tags?.some(tag => tag.toLowerCase().includes(q));
      const matchAttraction = dest.attractions?.some(att => att.name.toLowerCase().includes(q) || att.placeType?.toLowerCase().includes(q));

      return matchName || matchState || matchCountry || matchCategory || matchTags || matchAttraction;
    });
  },

  filterDestinations: ({
    query = '',
    category = 'all',
    budgetRange = 25000,
    minRating = 0,
    sortBy = 'recommended'
  }) => {
    let results = destinationService.searchDestinations(query);

    // Filter by Category
    if (category && category !== 'all') {
      results = results.filter(d => d.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by Budget (average daily budget)
    if (budgetRange) {
      results = results.filter(d => d.averageBudget <= Number(budgetRange));
    }

    // Filter by Min Rating
    if (minRating > 0) {
      results = results.filter(d => d.rating >= Number(minRating));
    }

    // Sorting
    switch (sortBy) {
      case 'popular':
        results.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'highest-rated':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'budget-low':
        results.sort((a, b) => a.averageBudget - b.averageBudget);
        break;
      case 'budget-high':
        results.sort((a, b) => b.averageBudget - a.averageBudget);
        break;
      case 'recommended':
      default:
        // Score based on rating & review balance
        results.sort((a, b) => (b.rating * 1000 + b.reviewsCount) - (a.rating * 1000 + a.reviewsCount));
        break;
    }

    return results;
  },

  getPopularDestinations: (limit = 6) => {
    return [...DESTINATIONS]
      .sort((a, b) => b.reviewsCount - a.reviewsCount)
      .slice(0, limit);
  },

  getTrendingDestinations: (limit = 4) => {
    return [...DESTINATIONS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
};
