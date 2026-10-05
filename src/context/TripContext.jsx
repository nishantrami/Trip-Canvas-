import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { generateId, calculateDaysBetween } from '../utils/helpers';
import { DESTINATIONS } from '../data/destinations';

const TripContext = createContext();

const INITIAL_TRIPS = [];

export function TripProvider({ children }) {
  const [trips, setTrips] = useLocalStorage('tripcanvas_user_trips', INITIAL_TRIPS);
  const { showToast } = useToast();

  // Remove legacy static mock trips if previously stored in localStorage
  React.useEffect(() => {
    setTrips((prev) => {
      if (!Array.isArray(prev)) return [];
      const hasLegacyMock = prev.some(
        (t) => t && (t.id === 'trip_udaipur_01' || t.id === 'trip_goa_02')
      );
      if (hasLegacyMock) {
        return prev.filter(
          (t) => t && t.id !== 'trip_udaipur_01' && t.id !== 'trip_goa_02'
        );
      }
      return prev;
    });
  }, [setTrips]);

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
        coverImage: tripPayload.coverImage || dest?.heroImage || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
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
