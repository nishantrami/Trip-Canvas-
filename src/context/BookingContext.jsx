import React, { createContext, useContext, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';
import { generateId } from '../utils/helpers';

const BookingContext = createContext();

const INITIAL_HOTEL_BOOKINGS = [];
const INITIAL_RESTAURANT_BOOKINGS = [];

export function BookingProvider({ children }) {
  const [hotelBookings, setHotelBookings] = useLocalStorage('tripcanvas_hotel_bookings', INITIAL_HOTEL_BOOKINGS);
  const [restaurantBookings, setRestaurantBookings] = useLocalStorage('tripcanvas_restaurant_bookings', INITIAL_RESTAURANT_BOOKINGS);
  const { showToast } = useToast();

  // Remove legacy static mock bookings if previously stored in localStorage
  React.useEffect(() => {
    setHotelBookings((prev) => {
      if (!Array.isArray(prev)) return [];
      const hasLegacy = prev.some((b) => b && b.id === 'HTL-UD-84920');
      return hasLegacy ? prev.filter((b) => b && b.id !== 'HTL-UD-84920') : prev;
    });

    setRestaurantBookings((prev) => {
      if (!Array.isArray(prev)) return [];
      const hasLegacy = prev.some((r) => r && r.id === 'RES-UD-39210');
      return hasLegacy ? prev.filter((r) => r && r.id !== 'RES-UD-39210') : prev;
    });
  }, [setHotelBookings, setRestaurantBookings]);

  const triggerCelebration = useCallback(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  }, []);

  // Book a Hotel Room
  const bookHotel = useCallback((bookingDetails) => {
    const bookingId = `HTL-${(bookingDetails.destinationId || 'IN').substring(0, 2).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking = {
      id: bookingId,
      ...bookingDetails,
      status: "Confirmed",
      bookedAt: new Date().toISOString()
    };

    setHotelBookings((prev) => [newBooking, ...prev]);
    triggerCelebration();
    showToast(`Hotel Booking Confirmed! Ref: ${bookingId}`, 'success');
    return newBooking;
  }, [setHotelBookings, triggerCelebration, showToast]);

  // Cancel Hotel Booking
  const cancelHotelBooking = useCallback((bookingId) => {
    setHotelBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "Cancelled" } : b))
    );
    showToast('Hotel booking has been cancelled.', 'info');
  }, [setHotelBookings, showToast]);

  // Reserve Restaurant Table
  const reserveRestaurantTable = useCallback((reservationDetails) => {
    const reservationId = `RES-${(reservationDetails.destinationId || 'IN').substring(0, 2).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newReservation = {
      id: reservationId,
      ...reservationDetails,
      status: "Confirmed",
      bookedAt: new Date().toISOString()
    };

    setRestaurantBookings((prev) => [newReservation, ...prev]);
    triggerCelebration();
    showToast(`Table Reserved at ${reservationDetails.restaurantName}! Ref: ${reservationId}`, 'success');
    return newReservation;
  }, [setRestaurantBookings, triggerCelebration, showToast]);

  // Cancel Restaurant Booking
  const cancelRestaurantBooking = useCallback((reservationId) => {
    setRestaurantBookings((prev) =>
      prev.map((r) => (r.id === reservationId ? { ...r, status: "Cancelled" } : r))
    );
    showToast('Restaurant reservation cancelled.', 'info');
  }, [setRestaurantBookings, showToast]);

  // Delete Hotel Booking permanently
  const deleteHotelBooking = useCallback((bookingId) => {
    setHotelBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Hotel booking deleted.', 'info');
  }, [setHotelBookings, showToast]);

  // Delete Restaurant Booking permanently
  const deleteRestaurantBooking = useCallback((reservationId) => {
    setRestaurantBookings((prev) => prev.filter((r) => r.id !== reservationId));
    showToast('Dining reservation deleted.', 'info');
  }, [setRestaurantBookings, showToast]);

  const totalBookingsCount = hotelBookings.filter(b => b.status === 'Confirmed').length +
    restaurantBookings.filter(r => r.status === 'Confirmed').length;

  return (
    <BookingContext.Provider
      value={{
        hotelBookings,
        restaurantBookings,
        totalBookingsCount,
        bookHotel,
        cancelHotelBooking,
        deleteHotelBooking,
        reserveRestaurantTable,
        cancelRestaurantBooking,
        deleteRestaurantBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
}
