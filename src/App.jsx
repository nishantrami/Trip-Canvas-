import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { TripProvider } from './context/TripContext';
import { BookingProvider } from './context/BookingContext';
import { AdminProvider } from './context/AdminContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { TopLoadingBar } from './components/common/TopLoadingBar';
import { AdminShortcutListener } from './components/admin/AdminShortcutListener';
import { AdminAccessModal } from './components/admin/AdminAccessModal';

function AppLayout() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      <TopLoadingBar />
      {!isAdminPath && <Navbar />}
      <main className={isAdminPath ? 'admin-main-wrapper' : 'main-content'}>
        <AppRoutes />
      </main>
      {!isAdminPath && <Footer />}

      {/* Secret Administrator Key Listener (Ctrl+A) & Gateway Modal */}
      <AdminShortcutListener />
      <AdminAccessModal />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <AdminProvider>
            <FavoriteProvider>
              <TripProvider>
                <BookingProvider>
                  <AppLayout />
                </BookingProvider>
              </TripProvider>
            </FavoriteProvider>
          </AdminProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
