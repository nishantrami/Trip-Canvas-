import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { TripProvider } from './context/TripContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <FavoriteProvider>
            <TripProvider>
              <BookingProvider>
                <div className="app-container">
                  <Navbar />
                  <main className="main-content">
                    <AppRoutes />
                  </main>
                  <Footer />
                </div>
              </BookingProvider>
            </TripProvider>
          </FavoriteProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
