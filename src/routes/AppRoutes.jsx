import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import { Home } from '../pages/Home';
import { Explore } from '../pages/Explore';
import { DestinationDetails } from '../pages/DestinationDetails';
import { Hotels } from '../pages/Hotels';
import { Restaurants } from '../pages/Restaurants';
import { Bookings } from '../pages/Bookings';
import { CreateTrip } from '../pages/CreateTrip';
import { MyTrips } from '../pages/MyTrips';
import { TripDetails } from '../pages/TripDetails';
import { Favorites } from '../pages/Favorites';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { Contact } from '../pages/Contact';
import { Assistant } from '../pages/Assistant';
import { AdminDashboard } from '../pages/Admin/AdminDashboard';

// Guard
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import { AdminProtectedRoute } from '../components/admin/AdminProtectedRoute';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:destinationId" element={<DestinationDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Bookings & Travel Management */}
          <Route path="/my-bookings" element={<Bookings />} />

          {/* Protected Routes */}
          <Route
            path="/create-trip"
            element={
              <ProtectedRoute>
                <CreateTrip />
              </ProtectedRoute>
            }
          />
          {/* Trip Workspace - Accessible for viewing & sharing itineraries */}
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/my-trips/:tripId" element={<TripDetails />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Control Center - Secret Route */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
