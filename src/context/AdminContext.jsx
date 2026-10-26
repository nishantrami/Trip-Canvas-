import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { DESTINATIONS as DEFAULT_DESTINATIONS, CATEGORIES } from '../data/destinations';
import { HOTELS as DEFAULT_HOTELS } from '../data/hotels';
import { RESTAURANTS as DEFAULT_RESTAURANTS } from '../data/restaurants';
import { generateId } from '../utils/helpers';

const AdminContext = createContext();

const MASTER_PASSCODES = ['admin123', 'tripadmin', 'admin', 'tripcanvas2025'];

const INITIAL_AUDIT_LOGS = [
  {
    id: 'log_01',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    admin: 'System Admin',
    action: 'System Initialized',
    details: 'TripCanvas Admin Engine v2.4 initialized with master encryption'
  },
  {
    id: 'log_02',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    admin: 'System Admin',
    action: 'Inventory Verified',
    details: 'Verified 14 premier Indian heritage and luxury destinations'
  }
];

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useLocalStorage('tripcanvas_admin_session', false);
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
  const [customDestinations, setCustomDestinations] = useLocalStorage('tripcanvas_custom_destinations', []);
  const [deletedDestinationIds, setDeletedDestinationIds] = useLocalStorage('tripcanvas_deleted_dest_ids', []);
  const [customHotels, setCustomHotels] = useLocalStorage('tripcanvas_custom_hotels', []);
  const [deletedHotelIds, setDeletedHotelIds] = useLocalStorage('tripcanvas_deleted_hotel_ids', []);
  const [customRestaurants, setCustomRestaurants] = useLocalStorage('tripcanvas_custom_restaurants', []);
  const [deletedRestaurantIds, setDeletedRestaurantIds] = useLocalStorage('tripcanvas_deleted_restaurant_ids', []);
  const [auditLogs, setAuditLogs] = useLocalStorage('tripcanvas_admin_audit_logs', INITIAL_AUDIT_LOGS);
  const [platformConfig, setPlatformConfig] = useLocalStorage('tripcanvas_admin_config', {
    siteName: 'TripCanvas',
    tagline: 'Discover. Plan. Experience.',
    currency: 'INR',
    maintenanceMode: false,
    bookingsEnabled: true,
    autoVerifyUsers: false,
    allowGuestReviews: true
  });

  const { showToast } = useToast();

  const logAdminAction = useCallback((action, details) => {
    const newLog = {
      id: generateId('log'),
      timestamp: new Date().toISOString(),
      admin: 'Super Admin',
      action,
      details
    };
    setAuditLogs((prev) => [newLog, ...(Array.isArray(prev) ? prev.slice(0, 49) : [])]);
  }, [setAuditLogs]);

  const openSecretModal = useCallback(() => {
    setIsSecretModalOpen(true);
  }, []);

  const closeSecretModal = useCallback(() => {
    setIsSecretModalOpen(false);
  }, []);

  const adminLogin = useCallback((passcode) => {
    const cleanPass = (passcode || '').trim().toLowerCase();
    if (MASTER_PASSCODES.includes(cleanPass)) {
      setIsAdmin(true);
      logAdminAction('Admin Login', 'Administrator authenticated via secure gateway');
      showToast('Welcome to TripCanvas Control Center', 'success');
      return { success: true };
    }
    return { success: false, error: 'Invalid Secret Passcode. Try "admin123"' };
  }, [setIsAdmin, logAdminAction, showToast]);

  const adminLogout = useCallback(() => {
    setIsAdmin(false);
    logAdminAction('Admin Logout', 'Administrator ended active session');
    showToast('Admin session terminated', 'info');
  }, [setIsAdmin, logAdminAction, showToast]);

  // Combined live destinations (Default + Custom - Deleted)
  const allDestinations = React.useMemo(() => {
    const deletedSet = new Set(deletedDestinationIds);
    const defaultsFiltered = DEFAULT_DESTINATIONS.filter((d) => !deletedSet.has(d.id));
    
    // Map custom destinations, overriding defaults if same ID, or adding new
    const customMap = new Map();
    (customDestinations || []).forEach((cd) => {
      customMap.set(cd.id, cd);
    });

    const merged = defaultsFiltered.map((d) => {
      if (customMap.has(d.id)) {
        const custom = customMap.get(d.id);
        customMap.delete(d.id);
        return custom;
      }
      return d;
    });

    // Add any brand new custom destinations
    customMap.forEach((cd) => {
      if (!deletedSet.has(cd.id)) {
        merged.push(cd);
      }
    });

    return merged;
  }, [customDestinations, deletedDestinationIds]);

  // Destination CRUD Operations
  const addDestination = useCallback((destinationData) => {
    const newId = destinationData.id || `dest_${destinationData.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now().toString(36)}`;
    const newDest = {
      id: newId,
      name: destinationData.name,
      state: destinationData.state || 'India',
      country: destinationData.country || 'India',
      category: destinationData.category || 'Historical',
      tags: Array.isArray(destinationData.tags) ? destinationData.tags : (destinationData.tags || 'Culture, Exploration').split(',').map(s => s.trim()),
      rating: Number(destinationData.rating) || 4.8,
      reviewsCount: Number(destinationData.reviewsCount) || 120,
      tagline: destinationData.tagline || `The Jewel of ${destinationData.state || 'India'}`,
      description: destinationData.description || 'A stunning travel destination with rich heritage and majestic landscapes.',
      heroImage: destinationData.heroImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
      gallery: destinationData.gallery && destinationData.gallery.length > 0 ? destinationData.gallery : [
        destinationData.heroImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop'
      ],
      bestTime: destinationData.bestTime || 'October to March',
      idealDuration: destinationData.idealDuration || '3 - 4 Days',
      averageBudget: Number(destinationData.averageBudget) || 4500,
      budgetTier: destinationData.budgetTier || 'Moderate',
      coordinates: destinationData.coordinates || { lat: 24.5854, lng: 73.7125 },
      weatherProfile: destinationData.weatherProfile || {
        temp: 26,
        condition: 'Sunny & Pleasant',
        humidity: '45%',
        wind: '10 km/h',
        feelsLike: 25
      },
      attractions: destinationData.attractions || [],
      isFeatured: Boolean(destinationData.isFeatured),
      createdAt: new Date().toISOString()
    };

    setCustomDestinations((prev) => [newDest, ...(prev || [])]);
    // Remove from deleted list if re-added
    setDeletedDestinationIds((prev) => (prev || []).filter(id => id !== newId));
    
    logAdminAction('Created Destination', `Added new destination: "${newDest.name}" (${newDest.state})`);
    showToast(`Added destination "${newDest.name}" successfully!`, 'success');
    return newDest;
  }, [setCustomDestinations, setDeletedDestinationIds, logAdminAction, showToast]);

  const updateDestination = useCallback((id, updatedFields) => {
    setCustomDestinations((prev) => {
      const existingIdx = (prev || []).findIndex(d => d.id === id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = { ...updated[existingIdx], ...updatedFields };
        return updated;
      }
      // If it was a default destination, create a custom override copy
      const baseDest = DEFAULT_DESTINATIONS.find(d => d.id === id) || {};
      const newOverride = { ...baseDest, ...updatedFields, id };
      return [newOverride, ...(prev || [])];
    });

    logAdminAction('Updated Destination', `Updated details for destination ID: ${id}`);
    showToast(`Destination updated successfully`, 'success');
  }, [setCustomDestinations, logAdminAction, showToast]);

  const deleteDestination = useCallback((id) => {
    setCustomDestinations((prev) => (prev || []).filter(d => d.id !== id));
    setDeletedDestinationIds((prev) => [...new Set([...(prev || []), id])]);

    logAdminAction('Deleted Destination', `Removed destination ID: ${id}`);
    showToast(`Destination removed from catalogue`, 'info');
  }, [setCustomDestinations, setDeletedDestinationIds, logAdminAction, showToast]);

  const toggleFeaturedDestination = useCallback((id) => {
    const dest = allDestinations.find(d => d.id === id);
    if (!dest) return;
    updateDestination(id, { isFeatured: !dest.isFeatured });
    showToast(`Updated featured status for ${dest.name}`, 'info');
  }, [allDestinations, updateDestination, showToast]);

  // Combined live hotels (Default + Custom - Deleted)
  const allHotels = React.useMemo(() => {
    const deletedSet = new Set(deletedHotelIds || []);
    const defaultsFiltered = (DEFAULT_HOTELS || []).filter((h) => !deletedSet.has(h.id));

    const customMap = new Map();
    (customHotels || []).forEach((ch) => {
      customMap.set(ch.id, ch);
    });

    const merged = defaultsFiltered.map((h) => {
      if (customMap.has(h.id)) {
        const custom = customMap.get(h.id);
        customMap.delete(h.id);
        return custom;
      }
      return h;
    });

    customMap.forEach((ch) => {
      if (!deletedSet.has(ch.id)) {
        merged.unshift(ch);
      }
    });

    return merged;
  }, [customHotels, deletedHotelIds]);

  // Hotel CRUD Operations
  const addHotel = useCallback((hotelData) => {
    const cleanDestId = (hotelData.destinationId || 'udaipur').toLowerCase().trim();
    const newId = hotelData.id || `htl_${cleanDestId}_${Date.now().toString(36)}`;
    const newHotel = {
      id: newId,
      name: hotelData.name,
      destinationId: cleanDestId,
      destinationName: hotelData.destinationName || (hotelData.city ? hotelData.city : 'Udaipur'),
      city: hotelData.city || hotelData.destinationName || 'Udaipur',
      state: hotelData.state || 'India',
      country: hotelData.country || 'India',
      category: hotelData.category || '5-Star Luxury Stay',
      type: hotelData.type || 'Boutique',
      rating: Number(hotelData.rating) || 4.85,
      reviewsCount: Number(hotelData.reviewsCount) || 120,
      badge: hotelData.badge || 'Verified Luxury Stay',
      tagline: hotelData.tagline || `Premier stay in ${hotelData.city || 'India'}`,
      address: hotelData.address || `${hotelData.city || 'India'}, India`,
      nearLocation: hotelData.nearLocation || `Central ${hotelData.city || 'India'}`,
      distanceToLandmarks: hotelData.distanceToLandmarks || [
        { landmark: 'City Center', distance: '0.8 km' },
        { landmark: 'Main Airport / Station', distance: '12 km' }
      ],
      pricePerNight: Number(hotelData.pricePerNight) || 4500,
      originalPrice: Number(hotelData.originalPrice) || Math.round((Number(hotelData.pricePerNight) || 4500) * 1.25),
      heroImage: hotelData.heroImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      gallery: Array.isArray(hotelData.gallery) && hotelData.gallery.length > 0 ? hotelData.gallery : [
        hotelData.heroImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
      ],
      description: hotelData.description || 'An extraordinary stay offering unparalleled luxury, impeccable hospitality, and scenic surroundings.',
      amenities: Array.isArray(hotelData.amenities)
        ? hotelData.amenities
        : (hotelData.amenities || 'Free Wi-Fi, Swimming Pool, Free Breakfast').split(',').map(s => s.trim()).filter(Boolean),
      roomTypes: Array.isArray(hotelData.roomTypes) && hotelData.roomTypes.length > 0 ? hotelData.roomTypes : [
        {
          id: `room_${newId}_standard`,
          name: 'Deluxe Room',
          price: Number(hotelData.pricePerNight) || 4500,
          size: '350 sq.ft',
          bed: 'King Bed',
          maxGuests: 2,
          image: hotelData.heroImage || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
          perks: ['Free Breakfast', 'Free Wi-Fi', 'City/Nature View']
        }
      ],
      coordinates: hotelData.coordinates || { lat: 24.5854, lng: 73.7125 },
      policies: hotelData.policies || {
        checkIn: '02:00 PM',
        checkOut: '11:00 AM',
        cancellation: 'Free cancellation up to 24 hours',
        petsAllowed: false
      },
      createdAt: new Date().toISOString()
    };

    setCustomHotels((prev) => [newHotel, ...(prev || [])]);
    setDeletedHotelIds((prev) => (prev || []).filter(id => id !== newId));
    logAdminAction('Created Hotel', `Added new hotel: "${newHotel.name}" (${newHotel.city})`);
    showToast(`Added hotel "${newHotel.name}" successfully!`, 'success');
    window.dispatchEvent(new Event('storage'));
    return newHotel;
  }, [setCustomHotels, setDeletedHotelIds, logAdminAction, showToast]);

  const updateHotel = useCallback((id, updatedFields) => {
    setCustomHotels((prev) => {
      const existingIdx = (prev || []).findIndex(h => h.id === id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = { ...updated[existingIdx], ...updatedFields };
        return updated;
      }
      const baseHotel = (DEFAULT_HOTELS || []).find(h => h.id === id) || {};
      const newOverride = { ...baseHotel, ...updatedFields, id };
      return [newOverride, ...(prev || [])];
    });

    logAdminAction('Updated Hotel', `Updated details for hotel: "${updatedFields.name || id}"`);
    showToast(`Hotel updated successfully`, 'success');
    window.dispatchEvent(new Event('storage'));
  }, [setCustomHotels, logAdminAction, showToast]);

  const deleteHotel = useCallback((id) => {
    setCustomHotels((prev) => (prev || []).filter(h => h.id !== id));
    setDeletedHotelIds((prev) => [...new Set([...(prev || []), id])]);

    logAdminAction('Deleted Hotel', `Removed hotel ID: ${id}`);
    showToast(`Hotel removed from catalogue`, 'info');
    window.dispatchEvent(new Event('storage'));
  }, [setCustomHotels, setDeletedHotelIds, logAdminAction, showToast]);

  // Combined live restaurants (Default + Custom - Deleted)
  const allRestaurants = React.useMemo(() => {
    const deletedSet = new Set(deletedRestaurantIds || []);
    const defaultsFiltered = (DEFAULT_RESTAURANTS || []).filter((r) => !deletedSet.has(r.id));

    const customMap = new Map();
    (customRestaurants || []).forEach((cr) => {
      customMap.set(cr.id, cr);
    });

    const merged = defaultsFiltered.map((r) => {
      if (customMap.has(r.id)) {
        const custom = customMap.get(r.id);
        customMap.delete(r.id);
        return custom;
      }
      return r;
    });

    customMap.forEach((cr) => {
      if (!deletedSet.has(cr.id)) {
        merged.unshift(cr);
      }
    });

    return merged;
  }, [customRestaurants, deletedRestaurantIds]);

  // Restaurant CRUD Operations
  const addRestaurant = useCallback((restaurantData) => {
    const cleanDestId = (restaurantData.destinationId || 'udaipur').toLowerCase().trim();
    const newId = restaurantData.id || `rest_${cleanDestId}_${Date.now().toString(36)}`;
    const newRest = {
      id: newId,
      name: restaurantData.name,
      destinationId: cleanDestId,
      destinationName: restaurantData.destinationName || (restaurantData.city ? restaurantData.city : 'Udaipur'),
      city: restaurantData.city || restaurantData.destinationName || 'Udaipur',
      state: restaurantData.state || 'India',
      country: restaurantData.country || 'India',
      rating: Number(restaurantData.rating) || 4.85,
      reviewsCount: Number(restaurantData.reviewsCount) || 120,
      badge: restaurantData.badge || 'Chef Recommended',
      tagline: restaurantData.tagline || `Authentic fine dining in ${restaurantData.city || 'India'}`,
      address: restaurantData.address || `${restaurantData.city || 'India'}, India`,
      nearLocation: restaurantData.nearLocation || `Downtown ${restaurantData.city || 'India'}`,
      distanceToLandmarks: restaurantData.distanceToLandmarks || [
        { landmark: 'City Center', distance: '0.5 km' }
      ],
      priceRange: restaurantData.priceRange || '₹₹',
      costForTwo: Number(restaurantData.costForTwo) || 1600,
      heroImage: restaurantData.heroImage || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      gallery: Array.isArray(restaurantData.gallery) && restaurantData.gallery.length > 0 ? restaurantData.gallery : [
        restaurantData.heroImage || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
      ],
      cuisines: Array.isArray(restaurantData.cuisines)
        ? restaurantData.cuisines
        : (restaurantData.cuisines || 'North Indian, Continental').split(',').map(s => s.trim()).filter(Boolean),
      timing: restaurantData.timing || '12:00 PM - 11:00 PM',
      description: restaurantData.description || 'An inviting dining experience serving authentic delicacies crafted with freshest regional ingredients.',
      specialties: Array.isArray(restaurantData.specialties)
        ? restaurantData.specialties
        : (restaurantData.specialties || 'Signature Chef Platter').split(',').map(s => s.trim()).filter(Boolean),
      features: Array.isArray(restaurantData.features)
        ? restaurantData.features
        : (restaurantData.features || 'Scenic Ambience, Candlelight Seating, Free Wi-Fi').split(',').map(s => s.trim()).filter(Boolean),
      seatingAreas: restaurantData.seatingAreas || [
        { id: 'standard_dining', name: 'Main Dining Hall', fee: 0, note: 'Comfortable air-conditioned indoor seating' }
      ],
      timeSlots: restaurantData.timeSlots || ['12:30 PM', '01:30 PM', '07:30 PM', '08:30 PM'],
      coordinates: restaurantData.coordinates || { lat: 24.5854, lng: 73.7125 },
      phone: restaurantData.phone || '+91 98765 43210',
      policies: restaurantData.policies || {
        reservationDeposit: 'Zero advance fee',
        dressCode: 'Smart Casual',
        alcoholServed: false
      },
      createdAt: new Date().toISOString()
    };

    setCustomRestaurants((prev) => [newRest, ...(prev || [])]);
    setDeletedRestaurantIds((prev) => (prev || []).filter(id => id !== newId));
    logAdminAction('Created Restaurant', `Added new restaurant: "${newRest.name}" (${newRest.city})`);
    showToast(`Added restaurant "${newRest.name}" successfully!`, 'success');
    window.dispatchEvent(new Event('storage'));
    return newRest;
  }, [setCustomRestaurants, setDeletedRestaurantIds, logAdminAction, showToast]);

  const updateRestaurant = useCallback((id, updatedFields) => {
    setCustomRestaurants((prev) => {
      const existingIdx = (prev || []).findIndex(r => r.id === id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = { ...updated[existingIdx], ...updatedFields };
        return updated;
      }
      const baseRest = (DEFAULT_RESTAURANTS || []).find(r => r.id === id) || {};
      const newOverride = { ...baseRest, ...updatedFields, id };
      return [newOverride, ...(prev || [])];
    });

    logAdminAction('Updated Restaurant', `Updated details for restaurant: "${updatedFields.name || id}"`);
    showToast(`Restaurant updated successfully`, 'success');
    window.dispatchEvent(new Event('storage'));
  }, [setCustomRestaurants, logAdminAction, showToast]);

  const deleteRestaurant = useCallback((id) => {
    setCustomRestaurants((prev) => (prev || []).filter(r => r.id !== id));
    setDeletedRestaurantIds((prev) => [...new Set([...(prev || []), id])]);

    logAdminAction('Deleted Restaurant', `Removed restaurant ID: ${id}`);
    showToast(`Restaurant removed from catalogue`, 'info');
    window.dispatchEvent(new Event('storage'));
  }, [setCustomRestaurants, setDeletedRestaurantIds, logAdminAction, showToast]);

  // Seed Rich Sample Bookings and Demo Data
  const seedDemoData = useCallback(() => {
    const demoHotelBookings = [
      {
        id: 'HTL-UD-98214',
        destinationId: 'udaipur',
        destinationName: 'Udaipur',
        hotelId: 'taj-lake-palace-udaipur',
        hotelName: 'Taj Lake Palace',
        roomType: 'Grand Royal Lake View Suite',
        nights: 3,
        guests: 2,
        checkIn: '2026-11-12',
        checkOut: '2026-11-15',
        totalPrice: 126000,
        guestName: 'Vikramaditya Rathore',
        guestEmail: 'vikram.rathore@heritage.in',
        guestPhone: '+91 98290 11223',
        status: 'Confirmed',
        bookedAt: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: 'HTL-GO-44120',
        destinationId: 'goa',
        destinationName: 'Goa',
        hotelId: 'w-goa-vagator',
        hotelName: 'W Goa Luxury Resort',
        roomType: 'Fabulous Ocean Villa',
        nights: 4,
        guests: 2,
        checkIn: '2026-12-05',
        checkOut: '2026-12-09',
        totalPrice: 96000,
        guestName: 'Ananya Deshmukh',
        guestEmail: 'ananya.d@creatives.co',
        guestPhone: '+91 98112 33445',
        status: 'Confirmed',
        bookedAt: new Date(Date.now() - 86400000 * 3).toISOString()
      },
      {
        id: 'HTL-MN-31980',
        destinationId: 'manali',
        destinationName: 'Manali',
        hotelId: 'solang-valley-resort',
        hotelName: 'Solang Valley River Lodge',
        roomType: 'Cedar Wood Deluxe Chalet',
        nights: 2,
        guests: 3,
        checkIn: '2026-10-25',
        checkOut: '2026-10-27',
        totalPrice: 28000,
        guestName: 'Rohan Mehra',
        guestEmail: 'rohan.mehra@techcorp.io',
        guestPhone: '+91 98765 43210',
        status: 'Completed',
        bookedAt: new Date(Date.now() - 86400000 * 10).toISOString()
      }
    ];

    const demoRestaurantBookings = [
      {
        id: 'RES-UD-87110',
        destinationId: 'udaipur',
        destinationName: 'Udaipur',
        restaurantId: 'ambrai-restaurant-udaipur',
        restaurantName: 'Ambrai - Amet Haveli Waterfront',
        tableType: 'Prime Waterfront Table (Lake Pichola View)',
        guests: 2,
        reservationDate: '2026-11-13',
        timeSlot: '08:00 PM',
        specialRequests: 'Anniversary table by the water edge with candlelights',
        guestName: 'Vikramaditya Rathore',
        guestEmail: 'vikram.rathore@heritage.in',
        guestPhone: '+91 98290 11223',
        status: 'Confirmed',
        bookedAt: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: 'RES-GO-19402',
        destinationId: 'goa',
        destinationName: 'Goa',
        restaurantId: 'thalassa-siolim',
        restaurantName: 'Thalassa Greek Taverna',
        tableType: 'Sunset Cliffside Lounge',
        guests: 4,
        reservationDate: '2026-12-06',
        timeSlot: '06:30 PM',
        specialRequests: 'Sunset cocktail view & vegetarian starters',
        guestName: 'Ananya Deshmukh',
        guestEmail: 'ananya.d@creatives.co',
        guestPhone: '+91 98112 33445',
        status: 'Confirmed',
        bookedAt: new Date(Date.now() - 86400000 * 3).toISOString()
      }
    ];

    const demoUsers = [
      {
        id: "user_nishant_01",
        name: "Nishant Patel",
        email: "nishant@tripcanvas.travel",
        password: "password123",
        role: "Super Admin",
        bio: "Creator & Lead Architect of TripCanvas. Passionate globetrotter & landscape photographer.",
        homeCity: "Ahmedabad, India",
        preferredCurrency: "INR",
        interests: ["Heritage", "Photography", "Lakes", "Royal Stays", "Fine Dining"],
        joinedDate: "October 2024",
        isVerified: true
      },
      {
        id: "user_vikram_02",
        name: "Vikramaditya Rathore",
        email: "vikram.rathore@heritage.in",
        password: "password123",
        role: "VIP Explorer",
        bio: "Art connoisseur & royal architecture enthusiast.",
        homeCity: "Jaipur, Rajasthan",
        preferredCurrency: "INR",
        interests: ["Palaces", "Culture", "Royal Rajputana"],
        joinedDate: "August 2025",
        isVerified: true
      },
      {
        id: "user_ananya_03",
        name: "Ananya Deshmukh",
        email: "ananya.d@creatives.co",
        password: "password123",
        role: "Wanderer",
        bio: "Beach lover, cafe hopper, and coastal roadtripper.",
        homeCity: "Mumbai, India",
        preferredCurrency: "INR",
        interests: ["Beaches", "Sunsets", "Culinary"],
        joinedDate: "January 2026",
        isVerified: true
      }
    ];

    // Persist to local storage
    try {
      localStorage.setItem('tripcanvas_hotel_bookings', JSON.stringify(demoHotelBookings));
      localStorage.setItem('tripcanvas_restaurant_bookings', JSON.stringify(demoRestaurantBookings));
      localStorage.setItem('tripcanvas_registered_users', JSON.stringify(demoUsers));
      
      logAdminAction('Seeded Demo Data', 'Injected realistic luxury bookings and verified explorer accounts');
      showToast('Sample bookings and explorer profiles seeded successfully!', 'success');
      // Trigger storage event so listening hooks update immediately
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      showToast('Error seeding demo data', 'error');
    }
  }, [logAdminAction, showToast]);

  const exportSystemBackup = useCallback(() => {
    try {
      const backup = {
        exportedAt: new Date().toISOString(),
        version: 'TripCanvas v2.4 Admin',
        platformConfig,
        customDestinations,
        deletedDestinationIds,
        customHotels,
        deletedHotelIds,
        customRestaurants,
        deletedRestaurantIds,
        auditLogs,
        hotelBookings: JSON.parse(localStorage.getItem('tripcanvas_hotel_bookings') || '[]'),
        restaurantBookings: JSON.parse(localStorage.getItem('tripcanvas_restaurant_bookings') || '[]'),
        registeredUsers: JSON.parse(localStorage.getItem('tripcanvas_registered_users') || '[]'),
        userTrips: JSON.parse(localStorage.getItem('tripcanvas_user_trips') || '[]')
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `TripCanvas_Backup_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      logAdminAction('Exported Database', 'Created full JSON export of TripCanvas platform database');
      showToast('System database backup exported to JSON!', 'success');
    } catch (e) {
      showToast('Failed to export backup', 'error');
    }
  }, [platformConfig, customDestinations, deletedDestinationIds, customHotels, deletedHotelIds, customRestaurants, deletedRestaurantIds, auditLogs, logAdminAction, showToast]);

  const resetSystemData = useCallback(() => {
    setCustomDestinations([]);
    setDeletedDestinationIds([]);
    setCustomHotels([]);
    setDeletedHotelIds([]);
    setCustomRestaurants([]);
    setDeletedRestaurantIds([]);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    logAdminAction('Factory Reset', 'Restored platform catalogue and settings to factory defaults');
    showToast('Platform catalogue restored to defaults', 'info');
    window.dispatchEvent(new Event('storage'));
  }, [setCustomDestinations, setDeletedDestinationIds, setCustomHotels, setDeletedHotelIds, setCustomRestaurants, setDeletedRestaurantIds, setAuditLogs, logAdminAction, showToast]);

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        isSecretModalOpen,
        openSecretModal,
        closeSecretModal,
        adminLogin,
        adminLogout,
        allDestinations,
        categories: CATEGORIES,
        addDestination,
        updateDestination,
        deleteDestination,
        toggleFeaturedDestination,
        allHotels,
        addHotel,
        updateHotel,
        deleteHotel,
        allRestaurants,
        addRestaurant,
        updateRestaurant,
        deleteRestaurant,
        platformConfig,
        setPlatformConfig,
        auditLogs,
        logAdminAction,
        seedDemoData,
        exportSystemBackup,
        resetSystemData
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
