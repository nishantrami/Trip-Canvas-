import { HOTELS, HOTEL_AMENITY_FILTERS } from '../data/hotels.js';

export const getActiveHotels = () => {
  try {
    const custom = JSON.parse(localStorage.getItem('tripcanvas_custom_hotels') || '[]');
    const deletedIds = JSON.parse(localStorage.getItem('tripcanvas_deleted_hotel_ids') || '[]');
    const deletedSet = new Set(deletedIds);
    const defaultsFiltered = HOTELS.filter(h => !deletedSet.has(h.id));

    const customMap = new Map();
    custom.forEach(ch => customMap.set(ch.id, ch));

    const merged = defaultsFiltered.map(h => {
      if (customMap.has(h.id)) {
        const item = customMap.get(h.id);
        customMap.delete(h.id);
        return item;
      }
      return h;
    });

    customMap.forEach(ch => {
      if (!deletedSet.has(ch.id)) {
        merged.unshift(ch);
      }
    });

    return merged;
  } catch {
    return HOTELS;
  }
};

export const hotelService = {
  getAllHotels: () => {
    return getActiveHotels();
  },

  getHotelById: (id) => {
    if (!id) return null;
    const cleanId = id.toLowerCase().trim();
    return getActiveHotels().find(h => h.id.toLowerCase() === cleanId) || null;
  },

  getHotelsByDestination: (destinationId) => {
    const all = getActiveHotels();
    if (!destinationId) return all;
    const cleanDestId = destinationId.toLowerCase().trim();
    return all.filter(
      h => (h.destinationId && h.destinationId.toLowerCase() === cleanDestId) ||
           (h.city && h.city.toLowerCase().includes(cleanDestId))
    );
  },

  getAmenityFilters: () => {
    return HOTEL_AMENITY_FILTERS;
  },

  searchHotels: (query = '') => {
    const all = getActiveHotels();
    if (!query || !query.trim()) return all;
    const q = query.toLowerCase().trim();

    return all.filter(h => {
      const matchName = h.name?.toLowerCase().includes(q);
      const matchCity = h.city?.toLowerCase().includes(q);
      const matchDest = h.destinationName?.toLowerCase().includes(q);
      const matchNear = h.nearLocation?.toLowerCase().includes(q);
      const matchCat = h.category?.toLowerCase().includes(q);
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
    let results = getActiveHotels();

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
      const typeClean = type.toLowerCase();
      results = results.filter(h => h.type && h.type.toLowerCase().includes(typeClean));
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
  },

  /**
   * Parse numerical distance from string like '0.4 km (by boat)' or '1.2 km'
   */
  parseDistance: (distStr = '') => {
    if (!distStr) return 999;
    const match = String(distStr).match(/([\d.]+)\s*km/i);
    if (match && match[1]) {
      return parseFloat(match[1]);
    }
    const num = parseFloat(distStr);
    return isNaN(num) ? 999 : num;
  },

  /**
   * Get closest landmark and distance for a hotel
   */
  getClosestLandmark: (hotel) => {
    if (!hotel || !hotel.distanceToLandmarks || hotel.distanceToLandmarks.length === 0) {
      return { landmark: 'Center', distanceKm: 1.5, distanceStr: '1.5 km' };
    }
    let closest = null;
    let minKm = Infinity;

    hotel.distanceToLandmarks.forEach((item) => {
      const km = hotelService.parseDistance(item.distance);
      if (km < minKm) {
        minKm = km;
        closest = {
          landmark: item.landmark,
          distanceKm: km,
          distanceStr: item.distance
        };
      }
    });

    return closest || { landmark: hotel.distanceToLandmarks[0].landmark, distanceKm: 1.0, distanceStr: hotel.distanceToLandmarks[0].distance };
  },

  /**
   * Calculate verified estimated local transit / cab cost to main sights
   */
  getEstimatedTransitCost: (distKm) => {
    if (distKm <= 0.4) {
      return { costStr: '₹0 (Walkable)', range: [0, 50], note: '1-3 min walk or ₹30-50 rickshaw' };
    } else if (distKm <= 1.2) {
      return { costStr: '₹50 – ₹100', range: [50, 100], note: 'Short auto / e-rickshaw' };
    } else if (distKm <= 3.0) {
      return { costStr: '₹100 – ₹180', range: [100, 180], note: 'Local auto-rickshaw or taxi' };
    } else if (distKm <= 6.0) {
      return { costStr: '₹180 – ₹300', range: [180, 300], note: 'Cab / ride-share (12-18 min)' };
    } else {
      return { costStr: '₹300 – ₹550', range: [300, 550], note: 'Intercity or station cab' };
    }
  },

  /**
   * Calculate recommended accommodation allowance & budget allocation
   * Default: Hotel ~30%, Food 20%, Transport 20%, Activities 15%, Emergency Reserve 15%
   */
  calculateBudgetAllocation: ({
    totalBudget = 10000,
    isAccommodationOnly = false,
    customAllocations = null
  }) => {
    const budget = Math.max(1000, Number(totalBudget) || 10000);

    if (isAccommodationOnly) {
      return {
        hotel: budget,
        food: 0,
        transportation: 0,
        activities: 0,
        emergencyReserve: 0,
        total: budget,
        isAccommodationOnly: true,
        percentages: { hotel: 100, food: 0, transportation: 0, activities: 0, emergencyReserve: 0 }
      };
    }

    if (customAllocations) {
      const hotel = Math.round(Number(customAllocations.hotel) || budget * 0.3);
      const food = Math.round(Number(customAllocations.food) || budget * 0.2);
      const transportation = Math.round(Number(customAllocations.transportation) || budget * 0.2);
      const activities = Math.round(Number(customAllocations.activities) || budget * 0.15);
      const emergencyReserve = Math.max(0, budget - (hotel + food + transportation + activities));

      return {
        hotel,
        food,
        transportation,
        activities,
        emergencyReserve,
        total: budget,
        isAccommodationOnly: false,
        percentages: {
          hotel: Math.round((hotel / budget) * 100),
          food: Math.round((food / budget) * 100),
          transportation: Math.round((transportation / budget) * 100),
          activities: Math.round((activities / budget) * 100),
          emergencyReserve: Math.round((emergencyReserve / budget) * 100)
        }
      };
    }

    // Standard recommended 30/20/20/15/15 split
    const hotel = Math.round(budget * 0.30);
    const food = Math.round(budget * 0.20);
    const transportation = Math.round(budget * 0.20);
    const activities = Math.round(budget * 0.15);
    const emergencyReserve = budget - (hotel + food + transportation + activities);

    return {
      hotel,
      food,
      transportation,
      activities,
      emergencyReserve,
      total: budget,
      isAccommodationOnly: false,
      percentages: { hotel: 30, food: 20, transportation: 20, activities: 15, emergencyReserve: 15 }
    };
  },

  /**
   * Smart Budget-Based Hotel Recommendation Engine
   * Strictly respects accommodation budget. Categorizes into:
   * - Budget-Friendly: affordable options, prioritized lowest suitable prices
   * - Best Value: balanced price, location, amenities, and verified ratings
   * - Premium Stay: higher-quality stays that still fit comfortably within available budget
   * - Above Budget: clearly separated options exceeding budget with exact additional cost
   */
  getSmartHotelRecommendations: ({
    destinationId = '',
    hotelBudget = 3000,
    nights = 2,
    travelers = 2,
    filters = {},
    sortBy = 'recommended'
  }) => {
    const rawHotels = hotelService.getHotelsByDestination(destinationId);
    const numNights = Math.max(1, Number(nights) || 1);
    const availableBudget = Math.max(500, Number(hotelBudget) || 3000);

    // Enrich all hotels with computed metrics
    const enrichedHotels = rawHotels.map((h) => {
      const pricePerNight = h.pricePerNight || 2000;
      const totalStayCost = pricePerNight * numNights;
      const isWithinBudget = totalStayCost <= availableBudget;
      const overBudgetAmount = Math.max(0, totalStayCost - availableBudget);
      const budgetDelta = totalStayCost - availableBudget;
      const closestLm = hotelService.getClosestLandmark(h);
      const transit = hotelService.getEstimatedTransitCost(closestLm.distanceKm);

      // Value score calculation: rating + amenities weight - price ratio + proximity bonus
      const ratingScore = (h.rating || 4.5) * 20; // 0-100
      const amenitiesCount = (h.amenities || []).length;
      const proximityBonus = closestLm.distanceKm <= 1.0 ? 15 : closestLm.distanceKm <= 2.5 ? 8 : 0;
      const priceNormalized = (pricePerNight / (availableBudget / numNights || 1));
      const valueScore = ratingScore + (amenitiesCount * 3) + proximityBonus - (priceNormalized * 10);

      // Check perks like free breakfast and free cancellation
      const hasFreeBreakfast = (h.amenities || []).some(a =>
        a.toLowerCase().includes('breakfast') || a.toLowerCase().includes('high tea')
      ) || (h.roomTypes || []).some(r => (r.perks || []).some(p => p.toLowerCase().includes('breakfast')));

      const hasFreeCancellation = (h.policies?.cancellation || '').toLowerCase().includes('free cancellation');

      return {
        ...h,
        nights: numNights,
        totalStayCost,
        isWithinBudget,
        overBudgetAmount,
        budgetDelta,
        closestLandmark: closestLm,
        estimatedTransitCost: transit,
        valueScore,
        hasFreeBreakfast,
        hasFreeCancellation
      };
    });

    // Apply interactive filters
    let filtered = enrichedHotels.filter((h) => {
      // Search query
      if (filters.query && filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        const matches =
          h.name.toLowerCase().includes(q) ||
          (h.nearLocation || '').toLowerCase().includes(q) ||
          (h.tagline || '').toLowerCase().includes(q) ||
          (h.type || '').toLowerCase().includes(q) ||
          (h.category || '').toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Hotel category / property type
      if (filters.category && filters.category !== 'all') {
        const c = filters.category.toLowerCase();
        const matchesCategory =
          (h.type || '').toLowerCase().includes(c) ||
          (h.category || '').toLowerCase().includes(c);
        if (!matchesCategory) return false;
      }

      // Min rating
      if (filters.minRating && h.rating < Number(filters.minRating)) {
        return false;
      }

      // Amenities filter
      if (filters.amenities && filters.amenities.length > 0) {
        const hasAll = filters.amenities.every(reqAmenity =>
          (h.amenities || []).some(a => a.toLowerCase().includes(reqAmenity.toLowerCase()))
        );
        if (!hasAll) return false;
      }

      // Distance from attractions filter
      if (filters.maxDistance && filters.maxDistance > 0) {
        if (h.closestLandmark.distanceKm > filters.maxDistance) {
          return false;
        }
      }

      // Free cancellation filter
      if (filters.freeCancellationOnly && !h.hasFreeCancellation) {
        return false;
      }

      // Breakfast included filter
      if (filters.breakfastIncludedOnly && !h.hasFreeBreakfast) {
        return false;
      }

      // Price filters
      if (filters.priceType === 'perNight') {
        if (filters.minPrice && h.pricePerNight < filters.minPrice) return false;
        if (filters.maxPrice && h.pricePerNight > filters.maxPrice) return false;
      } else if (filters.priceType === 'totalStay') {
        if (filters.minPrice && h.totalStayCost < filters.minPrice) return false;
        if (filters.maxPrice && h.totalStayCost > filters.maxPrice) return false;
      }

      return true;
    });

    // Sorting helper
    const sortHotels = (list, sortKey) => {
      const sorted = [...list];
      switch (sortKey) {
        case 'price-low':
          return sorted.sort((a, b) => a.totalStayCost - b.totalStayCost);
        case 'price-high':
          return sorted.sort((a, b) => b.totalStayCost - a.totalStayCost);
        case 'best-value':
          return sorted.sort((a, b) => b.valueScore - a.valueScore);
        case 'rating-high':
          return sorted.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
        case 'closest-attractions':
          return sorted.sort((a, b) => a.closestLandmark.distanceKm - b.closestLandmark.distanceKm);
        case 'recommended':
        default:
          return sorted.sort((a, b) => {
            // Priority: inside budget with highest value score, then highest rating
            return b.valueScore - a.valueScore || b.rating - a.rating;
          });
      }
    };

    // Separate strictly into within budget vs above budget
    const withinBudget = filtered.filter(h => h.isWithinBudget);
    const aboveBudgetRaw = filtered.filter(h => !h.isWithinBudget);

    // Categorize within-budget hotels into the 3 requested groups:
    // 1. Budget-Friendly (lowest suitable prices)
    // 2. Best Value (balance price, rating, location, amenities)
    // 3. Premium Stay (higher-quality options that fit within available budget)

    let budgetFriendly = [];
    let bestValue = [];
    let premiumStay = [];

    if (withinBudget.length > 0) {
      // Sort ascending by price
      const sortedByPriceAsc = [...withinBudget].sort((a, b) => a.totalStayCost - b.totalStayCost);
      const sortedByValue = [...withinBudget].sort((a, b) => b.valueScore - a.valueScore);

      // Median/cutoff for budget-friendly vs premium
      const minCost = sortedByPriceAsc[0].totalStayCost;
      const maxCostInBudget = sortedByPriceAsc[sortedByPriceAsc.length - 1].totalStayCost;
      const midThreshold = minCost + ((maxCostInBudget - minCost) * 0.45);

      // Budget-Friendly: Affordable accommodation options, prioritizing lowest prices
      budgetFriendly = sortedByPriceAsc.filter(h => h.totalStayCost <= midThreshold || h.totalStayCost <= availableBudget * 0.65);
      if (budgetFriendly.length === 0 && sortedByPriceAsc.length > 0) {
        budgetFriendly = sortedByPriceAsc.slice(0, Math.min(3, sortedByPriceAsc.length));
      }

      // Premium Stay: Higher-quality options that fit within user's available hotel budget
      premiumStay = withinBudget
        .filter(h => h.totalStayCost >= midThreshold || h.pricePerNight >= 4000 || h.type === 'Palace' || h.type === 'Resort')
        .sort((a, b) => b.pricePerNight - a.pricePerNight);
      if (premiumStay.length === 0 && sortedByPriceAsc.length > 0) {
        premiumStay = [sortedByPriceAsc[sortedByPriceAsc.length - 1]];
      }

      // Best Value: High value score (high rating, great location, amenities, fair price)
      bestValue = [...sortedByValue].filter(h => h.rating >= 4.8 || h.valueScore >= 80);
      if (bestValue.length === 0) {
        bestValue = sortedByValue.slice(0, Math.min(3, sortedByValue.length));
      }
    }

    // Apply user-selected sort to each category
    const sortedBudgetFriendly = sortHotels(budgetFriendly, sortBy === 'recommended' ? 'price-low' : sortBy);
    const sortedBestValue = sortHotels(bestValue, sortBy === 'recommended' ? 'best-value' : sortBy);
    const sortedPremiumStay = sortHotels(premiumStay, sortBy === 'recommended' ? 'rating-high' : sortBy);
    const sortedAboveBudget = [...aboveBudgetRaw].sort((a, b) => a.overBudgetAmount - b.overBudgetAmount);

    return {
      allWithinBudget: sortHotels(withinBudget, sortBy),
      budgetFriendly: sortedBudgetFriendly,
      bestValue: sortedBestValue,
      premiumStay: sortedPremiumStay,
      aboveBudget: sortedAboveBudget,
      totalCount: filtered.length,
      withinBudgetCount: withinBudget.length,
      aboveBudgetCount: aboveBudgetRaw.length,
      lowestStayCost: rawHotels.length > 0
        ? Math.min(...rawHotels.map(h => (h.pricePerNight || 2000) * numNights))
        : 0,
      lowestPricePerNight: rawHotels.length > 0
        ? Math.min(...rawHotels.map(h => h.pricePerNight || 2000))
        : 0
    };
  }
};
