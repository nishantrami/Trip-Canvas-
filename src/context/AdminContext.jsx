import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { DESTINATIONS as DEFAULT_DESTINATIONS, CATEGORIES } from '../data/destinations';
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
  }, [platformConfig, customDestinations, deletedDestinationIds, auditLogs, logAdminAction, showToast]);

  const resetSystemData = useCallback(() => {
    setCustomDestinations([]);
    setDeletedDestinationIds([]);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    logAdminAction('Factory Reset', 'Restored platform catalogue and settings to factory defaults');
    showToast('Platform catalogue restored to defaults', 'info');
  }, [setCustomDestinations, setDeletedDestinationIds, setAuditLogs, logAdminAction, showToast]);

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
