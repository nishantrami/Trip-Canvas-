import { HOTELS, HOTEL_AMENITY_FILTERS } from '../data/hotels';

export const hotelService = {
  getAllHotels: () => {
    return HOTELS;
  },

  getHotelById: (id) => {
    if (!id) return null;
    const cleanId = id.toLowerCase().trim();
    return HOTELS.find(h => h.id.toLowerCase() === cleanId) || null;
  },

  getHotelsByDestination: (destinationId) => {
    if (!destinationId) return HOTELS;
    const cleanDestId = destinationId.toLowerCase().trim();
    return HOTELS.filter(
      h => h.destinationId.toLowerCase() === cleanDestId || h.city.toLowerCase().includes(cleanDestId)
    );
  },

  getAmenityFilters: () => {
    return HOTEL_AMENITY_FILTERS;
  },

  searchHotels: (query = '') => {
    if (!query || !query.trim()) return HOTELS;
    const q = query.toLowerCase().trim();

    return HOTELS.filter(h => {
      const matchName = h.name.toLowerCase().includes(q);
      const matchCity = h.city.toLowerCase().includes(q);
      const matchDest = h.destinationName.toLowerCase().includes(q);
      const matchNear = h.nearLocation.toLowerCase().includes(q);
      const matchCat = h.category.toLowerCase().includes(q);
      const matchAmenity = h.amenities?.some(a => a.toLowerCase().includes(q));

      return matchName || matchCity || matchDest || matchNear || matchCat || matchAmenity;
    });
  },

  filterHotels: ({
    destination = 'all',
    query = '',
    priceMin = 0,
    priceMax = 150000,
    minRating = 0,
    amenities = [],
    type = 'all',
    sortBy = 'recommended'
  }) => {
    let results = HOTELS;

    if (destination && destination !== 'all') {
      const destClean = destination.toLowerCase().trim();
      results = results.filter(
        h => h.destinationId.toLowerCase() === destClean || h.city.toLowerCase().includes(destClean)
      );
    }

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      results = results.filter(
        h =>
          h.name.toLowerCase().includes(q) ||
          h.nearLocation.toLowerCase().includes(q) ||
          h.address.toLowerCase().includes(q) ||
          h.tagline.toLowerCase().includes(q)
      );
    }

    if (priceMin > 0) {
      results = results.filter(h => h.pricePerNight >= Number(priceMin));
    }

    if (priceMax) {
      results = results.filter(h => h.pricePerNight <= Number(priceMax));
    }

    if (minRating > 0) {
      results = results.filter(h => h.rating >= Number(minRating));
    }

    if (type && type !== 'all') {
      results = results.filter(h => h.type.toLowerCase() === type.toLowerCase());
    }

    if (amenities && amenities.length > 0) {
      results = results.filter(h =>
        amenities.every(selectedAmenity =>
          h.amenities?.some(a => a.toLowerCase().includes(selectedAmenity.toLowerCase()))
        )
      );
    }

    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case 'price-high':
        results.sort((a, b) => b.pricePerNight - a.pricePerNight);
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
