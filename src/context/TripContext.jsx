import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { generateId, calculateDaysBetween } from '../utils/helpers';
import { DESTINATIONS } from '../data/destinations';

const TripContext = createContext();

const INITIAL_TRIPS = [
  {
    id: "trip_udaipur_01",
    title: "Udaipur Royal Escape",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    destinationCountry: "India",
    destinationState: "Rajasthan",
    coverImage: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop",
    startDate: "2026-10-12",
    endDate: "2026-10-15",
    daysCount: 3,
    travelers: 2,
    travelStyle: "Couple",
    interests: ["Culture", "Lakes & Mountains", "Historical", "Local Food"],
    status: "upcoming", // upcoming, ongoing, completed, draft
    selectedHotel: {
      id: "mewar-haveli-udaipur",
      name: "Mewar Haveli - Heritage Lakefront Stay",
      destinationId: "udaipur",
      destinationName: "Udaipur",
      city: "Udaipur",
      state: "Rajasthan",
      category: "Heritage Haveli",
      type: "Haveli",
      rating: 4.79,
      reviewsCount: 1950,
      badge: "Heritage Jharokhas on Water",
      pricePerNight: 2500,
      heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
      address: "34-35 Lal Ghat, Lake Pichola, Udaipur, Rajasthan 313001",
      nearLocation: "Lal Ghat, 150m from Jagdish Temple",
      distanceToLandmarks: [
        { landmark: "Lake Pichola Ghats", distance: "0.05 km" },
        { landmark: "City Palace", distance: "0.3 km" },
        { landmark: "Bagore Ki Haveli", distance: "0.15 km" }
      ],
      amenities: [
        "Rooftop Restaurant with Pichola View",
        "Traditional Rajasthani Architecture",
        "Air Conditioning & Hot Water",
        "Luggage Storage & Taxi Assistance",
        "Free High-Speed Wi-Fi"
      ],
      policies: {
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        cancellation: "Free cancellation up to 48 hours prior",
        petsAllowed: false
      }
    },
    selectedRoom: {
      id: "mewar_lakeview",
      name: "Deluxe Lake View Jharokha Room",
      price: 2500,
      size: "320 sq.ft",
      bed: "King Bed",
      maxGuests: 2,
      perks: ["Direct Window over Lake", "Free Breakfast", "Tea/Coffee Maker"]
    },
    budget: {
      total: 18000,
      currency: "INR"
    },
    expenses: [
      { id: "exp_1", title: "Heritage Haveli Stay (3 Nights)", category: "hotel", amount: 7500, date: "2026-10-12" },
      { id: "exp_2", title: "Flight / Cab Transfers", category: "travel", amount: 4000, date: "2026-10-12" },
      { id: "exp_3", title: "Lakeside Candlelight Dinner", category: "food", amount: 2200, date: "2026-10-13" },
      { id: "exp_4", title: "City Palace & Boat Tickets", category: "activities", amount: 1600, date: "2026-10-12" },
      { id: "exp_5", title: "Handmade Leather Diary Souvenirs", category: "shopping", amount: 800, date: "2026-10-14" }
    ],
    notes: "Remember to book Bagore Ki Haveli puppet show by 5 PM. Carry comfortable walking shoes for palace exploration.",
    itinerary: [
      {
        day: 1,
        date: "2026-10-12",
        title: "Arrival & Royal Palaces",
        activities: [
          {
            id: "act_101",
            time: "09:30 AM",
            title: "Check-in at Lake View Heritage Hotel",
            category: "Stay",
            cost: 0,
            location: "Old City, Lake Pichola",
            notes: "Drop luggage and freshen up with masala chai.",
            completed: false
          },
          {
            id: "act_102",
            time: "11:00 AM",
            title: "City Palace Exploration & Museum",
            category: "Sightseeing",
            cost: 600,
            location: "City Palace Complex",
            notes: "Hire an audio guide for the royal courtyards and crystal gallery.",
            completed: false
          },
          {
            id: "act_103",
            time: "01:30 PM",
            title: "Authentic Rajasthani Thali Lunch",
            category: "Dining",
            cost: 800,
            location: "Traditional Restaurant near Jagdish Chowk",
            notes: "Must try Dal Baati Churma and Gatte Ki Sabzi.",
            completed: false
          },
          {
            id: "act_104",
            time: "05:00 PM",
            title: "Lake Pichola Sunset Boat Cruise",
            category: "Leisure",
            cost: 1000,
            location: "Rameshwar Ghat",
            notes: "Cruises past Jag Mandir Island as the sun sets behind the hills.",
            completed: false
          }
        ]
      },
      {
        day: 2,
        date: "2026-10-13",
        title: "Fortresses & Lake Vistas",
        activities: [
          {
            id: "act_201",
            time: "09:00 AM",
            title: "Jagdish Temple Morning Aarti",
            category: "Cultural",
            cost: 0,
            location: "Jagdish Chowk",
            notes: "Marvel at the intricately carved stone pillars.",
            completed: false
          },
          {
            id: "act_202",
            time: "11:30 AM",
            title: "Saheliyon Ki Bari (Garden of Maidens)",
            category: "Sightseeing",
            cost: 100,
            location: "Panchwati, Udaipur",
            notes: "Marble fountains with natural pressure mechanics.",
            completed: false
          },
          {
            id: "act_203",
            time: "04:30 PM",
            title: "Sajjangarh (Monsoon Palace) Sunset",
            category: "Sightseeing",
            cost: 300,
            location: "Bansdara Peak",
            notes: "Panoramic sunset point overlooking the entire lake district.",
            completed: false
          },
          {
            id: "act_204",
            time: "07:00 PM",
            title: "Dharohar Folk Dance Show",
            category: "Cultural",
            cost: 400,
            location: "Bagore Ki Haveli",
            notes: "Iconic Chari dance with fire pots on head.",
            completed: false
          }
        ]
      },
      {
        day: 3,
        date: "2026-10-14",
        title: "Bazaars & Serene Farewell",
        activities: [
          {
            id: "act_301",
            time: "10:00 AM",
            title: "Fateh Sagar Lake Walk & Coffee",
            category: "Leisure",
            cost: 200,
            location: "Fateh Sagar Promenade",
            notes: "Cool breeze, street snacks, and scenic photo ops.",
            completed: false
          },
          {
            id: "act_302",
            time: "02:00 PM",
            title: "Hathi Pol Bazaar Handicraft Shopping",
            category: "Shopping",
            cost: 1200,
            location: "Hathi Pol Market",
            notes: "Buy miniature Rajasthani paintings and bandhani dupattas.",
            completed: false
          },
          {
            id: "act_303",
            time: "06:00 PM",
            title: "Rooftop Farewell Dinner overlooking illuminated Lake Palace",
            category: "Dining",
            cost: 1400,
            location: "Ambrai Ghat Restaurant",
            notes: "Advance table booking requested.",
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: "trip_goa_02",
    title: "Goa Coastal Drift",
    destinationId: "goa",
    destinationName: "Goa",
    destinationCountry: "India",
    destinationState: "Goa",
    coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    startDate: "2026-11-20",
    endDate: "2026-11-24",
    daysCount: 4,
    travelers: 4,
    travelStyle: "Friends",
    interests: ["Beach", "Nightlife & Cafes", "Local Food", "Adventure & Trekking"],
    status: "upcoming",
    budget: {
      total: 32000,
      currency: "INR"
    },
    expenses: [
      { id: "exp_g1", title: "Beach Villa Stay", category: "hotel", amount: 14000, date: "2026-11-20" },
      { id: "exp_g2", title: "Scooter Rentals (4 days)", category: "travel", amount: 3200, date: "2026-11-20" },
      { id: "exp_g3", title: "Seafood Shack Dinner", category: "food", amount: 4500, date: "2026-11-21" }
    ],
    notes: "Pack sunscreen and waterproof phone pouches for watersports.",
    itinerary: [
      {
        day: 1,
        date: "2026-11-20",
        title: "Arrival & Palolem Sunset",
        activities: [
          {
            id: "act_g101",
            time: "02:00 PM",
            title: "Villa Check-in & Scooter Pickup",
            category: "Stay",
            cost: 0,
            location: "Palolem Beach Road",
            notes: "Test scooter brakes before leaving.",
            completed: false
          },
          {
            id: "act_g102",
            time: "05:00 PM",
            title: "Palolem Beach Sunset & Fresh Kingfish Shack",
            category: "Dining",
            cost: 1500,
            location: "Palolem Coast",
            notes: "Listen to live acoustic music by the beach.",
            completed: false
          }
        ]
      },
      {
        day: 2,
        date: "2026-11-21",
        title: "Portuguese Heritage & Fontainhas",
        activities: [
          {
            id: "act_g201",
            time: "10:30 AM",
            title: "Fontainhas Latin Quarter Photo Walk",
            category: "Cultural",
            cost: 0,
            location: "Panaji",
            notes: "Pastel yellow and blue heritage homes.",
            completed: false
          }
        ]
      }
    ]
  }
];

export function TripProvider({ children }) {
  const [trips, setTrips] = useLocalStorage('tripcanvas_user_trips', INITIAL_TRIPS);
  const { showToast } = useToast();

  const getTripById = useCallback(
    (tripId) => {
      if (!tripId) return null;
      return trips.find((t) => t.id === tripId) || null;
    },
    [trips]
  );

  const createTrip = useCallback(
    (tripPayload) => {
      const daysCount = calculateDaysBetween(tripPayload.startDate, tripPayload.endDate);
      const dest = DESTINATIONS.find((d) => d.id === tripPayload.destinationId);

      // Generate day-by-day itinerary skeleton
      const itinerary = [];
      const startDateObj = new Date(tripPayload.startDate || Date.now());

      for (let i = 0; i < daysCount; i++) {
        const currentDate = new Date(startDateObj);
        currentDate.setDate(startDateObj.getDate() + i);
        const dateStr = currentDate.toISOString().split('T')[0];

        // Pre-populate with sample attractions if available
        const dayAttractions = dest?.attractions?.slice(i * 2, i * 2 + 2) || [];
        const sampleActivities = dayAttractions.map((att, idx) => ({
          id: generateId('act'),
          time: idx === 0 ? "10:00 AM" : "03:30 PM",
          title: att.name,
          category: att.category || "Sightseeing",
          cost: att.entryFee || 0,
          location: att.name,
          notes: att.description || "",
          completed: false
        }));

        itinerary.push({
          day: i + 1,
          date: dateStr,
          title: i === 0 ? "Arrival & Highlights" : `Day ${i + 1} Discoveries`,
          activities: sampleActivities
        });
      }

      const expenses = [];

      if (tripPayload.hotel) {
        const hotelPerNight = tripPayload.hotelRoom?.price || tripPayload.hotel.pricePerNight || 0;
        const hotelStayTotal = hotelPerNight * daysCount;
        expenses.push({
          id: generateId('exp_hotel'),
          title: `${tripPayload.hotel.name} (${daysCount} Nights Stay)`,
          category: 'hotel',
          amount: hotelStayTotal,
          date: tripPayload.startDate
        });

        if (itinerary.length > 0) {
          itinerary[0].activities.unshift({
            id: generateId('act_checkin'),
            time: "02:00 PM",
            title: `Check-in: ${tripPayload.hotel.name}`,
            category: "Stay",
            cost: 0,
            location: tripPayload.hotel.nearLocation || tripPayload.hotel.address || "Hotel",
            notes: `${tripPayload.hotelRoom?.name || 'Reserved Room'}. Check-in from ${tripPayload.hotel.policies?.checkIn || '02:00 PM'}.`,
            completed: false
          });
        }
      }

      const newTrip = {
        id: generateId('trip'),
        title: tripPayload.title || `${dest?.name || 'Dream'} Journey`,
        destinationId: tripPayload.destinationId,
        destinationName: dest?.name || tripPayload.destinationName || "Custom Destination",
        destinationCountry: dest?.country || "World",
        destinationState: dest?.state || "",
        coverImage: dest?.heroImage || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
        startDate: tripPayload.startDate,
        endDate: tripPayload.endDate,
        daysCount: daysCount,
        travelers: Number(tripPayload.travelers) || 1,
        travelStyle: tripPayload.travelStyle || "Solo",
        interests: tripPayload.interests || [],
        selectedHotel: tripPayload.hotel || null,
        selectedRoom: tripPayload.hotelRoom || null,
        status: "upcoming",
        budget: {
          total: Number(tripPayload.budget) || (dest?.averageBudget ? dest.averageBudget * daysCount * (tripPayload.travelers || 1) : 15000),
          currency: "INR"
        },
        expenses: expenses,
        notes: tripPayload.notes || "",
        itinerary: itinerary,
        createdAt: new Date().toISOString()
      };

      setTrips((prev) => [newTrip, ...prev]);
      showToast(`Created trip "${newTrip.title}" successfully!`, 'success');
      return newTrip;
    },
    [setTrips, showToast]
  );

  const updateTrip = useCallback(
    (tripId, updatedFields) => {
      setTrips((prev) =>
        prev.map((t) => (t.id === tripId ? { ...t, ...updatedFields } : t))
      );
      showToast('Trip updated', 'info', 2000);
    },
    [setTrips, showToast]
  );

  const deleteTrip = useCallback(
    (tripId) => {
      setTrips((prev) => prev.filter((t) => t.id !== tripId));
      showToast('Trip deleted', 'info');
    },
    [setTrips, showToast]
  );

  const addActivity = useCallback(
    (tripId, dayIndex, activityData) => {
      const newActivity = {
        id: generateId('act'),
        time: activityData.time || "10:00 AM",
        title: activityData.title || "New Activity",
        category: activityData.category || "Sightseeing",
        cost: Number(activityData.cost) || 0,
        location: activityData.location || "",
        notes: activityData.notes || "",
        completed: false
      };

      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          const updatedItinerary = [...t.itinerary];
          if (updatedItinerary[dayIndex]) {
            updatedItinerary[dayIndex] = {
              ...updatedItinerary[dayIndex],
              activities: [...(updatedItinerary[dayIndex].activities || []), newActivity]
            };
          }
          return { ...t, itinerary: updatedItinerary };
        })
      );

      showToast(`Added "${newActivity.title}" to itinerary`, 'success');
      return newActivity;
    },
    [setTrips, showToast]
  );

  const updateActivity = useCallback(
    (tripId, dayIndex, activityId, updatedData) => {
      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          const updatedItinerary = [...t.itinerary];
          if (updatedItinerary[dayIndex]) {
            const updatedActivities = updatedItinerary[dayIndex].activities.map((a) =>
              a.id === activityId ? { ...a, ...updatedData } : a
            );
            updatedItinerary[dayIndex] = {
              ...updatedItinerary[dayIndex],
              activities: updatedActivities
            };
          }
          return { ...t, itinerary: updatedItinerary };
        })
      );
      showToast('Activity updated', 'info', 2000);
    },
    [setTrips, showToast]
  );

  const deleteActivity = useCallback(
    (tripId, dayIndex, activityId) => {
      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          const updatedItinerary = [...t.itinerary];
          if (updatedItinerary[dayIndex]) {
            updatedItinerary[dayIndex] = {
              ...updatedItinerary[dayIndex],
              activities: updatedItinerary[dayIndex].activities.filter((a) => a.id !== activityId)
            };
          }
          return { ...t, itinerary: updatedItinerary };
        })
      );
      showToast('Activity removed from itinerary', 'info');
    },
    [setTrips, showToast]
  );

  const reorderActivities = useCallback(
    (tripId, dayIndex, newActivitiesList) => {
      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          const updatedItinerary = [...t.itinerary];
          if (updatedItinerary[dayIndex]) {
            updatedItinerary[dayIndex] = {
              ...updatedItinerary[dayIndex],
              activities: newActivitiesList
            };
          }
          return { ...t, itinerary: updatedItinerary };
        })
      );
    },
    [setTrips]
  );

  const addExpense = useCallback(
    (tripId, expenseData) => {
      const newExpense = {
        id: generateId('exp'),
        title: expenseData.title || "Expense",
        category: expenseData.category || "other",
        amount: Number(expenseData.amount) || 0,
        date: expenseData.date || new Date().toISOString().split('T')[0]
      };

      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          return {
            ...t,
            expenses: [newExpense, ...(t.expenses || [])]
          };
        })
      );

      showToast(`Logged expense of ₹${newExpense.amount}`, 'success');
      return newExpense;
    },
    [setTrips, showToast]
  );

  const deleteExpense = useCallback(
    (tripId, expenseId) => {
      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          return {
            ...t,
            expenses: (t.expenses || []).filter((e) => e.id !== expenseId)
          };
        })
      );
      showToast('Expense removed', 'info');
    },
    [setTrips, showToast]
  );

  const updateBudgetTotal = useCallback(
    (tripId, totalAmount) => {
      setTrips((prev) =>
        prev.map((t) => {
          if (t.id !== tripId) return t;
          return {
            ...t,
            budget: {
              ...t.budget,
              total: Number(totalAmount) || 0
            }
          };
        })
      );
      showToast('Target budget updated', 'success');
    },
    [setTrips, showToast]
  );

  return (
    <TripContext.Provider
      value={{
        trips,
        getTripById,
        createTrip,
        updateTrip,
        deleteTrip,
        addActivity,
        updateActivity,
        deleteActivity,
        reorderActivities,
        addExpense,
        deleteExpense,
        updateBudgetTotal
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTrips() {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
}
