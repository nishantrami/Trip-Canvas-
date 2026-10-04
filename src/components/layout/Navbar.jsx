import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Search,
  Heart,
  Calendar,
  User,
  Menu,
  X,
  Plus,
  LogOut,
  MapPin,
  ChevronDown,
  Building,
  Utensils,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoriteContext';
import { useTrips } from '../../context/TripContext';
import { useBookings } from '../../context/BookingContext';
import { getInitials } from '../../utils/helpers';
import { QuickSearchModal } from './QuickSearchModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const { favoritesCount } = useFavorites();
  const { trips } = useTrips();
  const { totalBookingsCount } = useBookings();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  const navClass = `navbar ${
    isScrolled || !isHome ? 'navbar-scrolled' : 'navbar-transparent'
  }`;

  return (
    <>
      <header className={navClass}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="TripCanvas Homepage">
            <div className="brand-logo-mark">
              <Compass size={22} className="brand-icon" />
            </div>
            <span className="brand-title">
              Trip<span className="brand-accent">Canvas</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Explore
            </NavLink>
            <NavLink
              to="/hotels"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Hotels
            </NavLink>
            <NavLink
              to="/restaurants"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Restaurants
            </NavLink>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Bookings
              {totalBookingsCount > 0 && (
                <span className="nav-badge-count accent">{totalBookingsCount}</span>
              )}
            </NavLink>
            <NavLink
              to="/my-trips"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              My Trips
              {trips.length > 0 && <span className="nav-badge-count">{trips.length}</span>}
            </NavLink>
          </nav>

          {/* Right Action Icons & Profile */}
          <div className="navbar-actions">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="navbar-search-btn"
              aria-label="Open search dialog"
              title="Search destinations (Ctrl+K)"
            >
              <Search size={17} />
              <span className="desktop-only text-muted">Search places...</span>
              <span className="search-shortcut desktop-only">⌘K</span>
            </button>

            {/* Create Trip CTA */}
            <Link to="/create-trip" className="btn btn-primary btn-sm create-trip-nav-btn">
              <Plus size={16} />
              <span className="desktop-only">Plan Trip</span>
            </Link>

            {/* Wishlist Icon */}
            <Link
              to="/favorites"
              className="navbar-icon-btn desktop-only"
              aria-label="View saved wishlist"
              title="Saved destinations"
            >
              <Heart size={20} />
              {favoritesCount > 0 && (
                <span className="icon-badge-dot">{favoritesCount}</span>
              )}
            </Link>

            {/* User Profile / Login */}
            {isAuthenticated && user ? (
              <div className="profile-dropdown-wrapper">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="profile-avatar-btn"
                  aria-expanded={isProfileDropdownOpen}
                >
                  {user.avatar && !user.avatar.includes('photo-1534528741775') ? (
                    <img src={user.avatar} alt={user.name} className="nav-avatar-img" />
                  ) : (
                    <div className="nav-avatar-badge" title={user.name}>
                      {getInitials(user.name)}
                    </div>
                  )}
                  <span className="nav-user-name desktop-only">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={14} className="desktop-only text-muted" />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="profile-dropdown-menu card"
                    >
                      <div className="dropdown-user-header">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="nav-avatar-badge">
                            {getInitials(user.name)}
                          </div>
                          <div className="overflow-hidden">
                            <p className="dropdown-name leading-tight truncate">{user.name}</p>
                            <p className="dropdown-email text-xs text-muted truncate">{user.email}</p>
                          </div>
                        </div>
                        <span className="badge badge-accent">{user.role || 'Traveler'}</span>
                      </div>
                      <div className="dropdown-divider" />
                      <Link to="/my-bookings" className="dropdown-item">
                        <CheckCircle2 size={16} />
                        My Bookings & Tables
                        {totalBookingsCount > 0 && (
                          <span className="badge badge-accent badge-xs ml-auto">
                            {totalBookingsCount}
                          </span>
                        )}
                      </Link>
                      <Link to="/profile" className="dropdown-item">
                        <User size={16} />
                        Profile & Preferences
                      </Link>
                      <Link to="/my-trips" className="dropdown-item">
                        <Calendar size={16} />
                        My Planned Trips
                      </Link>
                      <Link to="/favorites" className="dropdown-item">
                        <Heart size={16} />
                        Saved Wishlist
                      </Link>
                      <div className="dropdown-divider" />
                      <button
                        onClick={() => {
                          logout();
                          navigate('/');
                        }}
                        className="dropdown-item dropdown-logout"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn btn-outline btn-sm">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm desktop-only">
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="navbar-mobile-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slideout Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-menu-drawer"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header">
                <div className="brand-logo-mark">
                  <Compass size={20} className="brand-icon" />
                </div>
                <span className="brand-title">TripCanvas</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="modal-close-btn"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu-links">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Compass size={18} /> Home
                </NavLink>
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MapPin size={18} /> Explore Destinations
                </NavLink>
                <NavLink
                  to="/hotels"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building size={18} /> Hotels & Stays
                </NavLink>
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Utensils size={18} /> Restaurants & Dining
                </NavLink>
                <NavLink
                  to="/my-bookings"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CheckCircle2 size={18} /> My Bookings ({totalBookingsCount})
                </NavLink>
                <NavLink
                  to="/create-trip"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Plus size={18} /> Plan New Trip
                </NavLink>
                <NavLink
                  to="/my-trips"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar size={18} /> My Trips ({trips.length})
                </NavLink>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart size={18} /> Wishlist ({favoritesCount})
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={18} /> Profile & Settings
                </NavLink>
              </div>

              <div className="mobile-menu-footer">
                {isAuthenticated && user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                      navigate('/');
                    }}
                    className="btn btn-outline btn-sm w-full"
                  >
                    <LogOut size={16} /> Sign Out ({user.name.split(' ')[0]})
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-primary btn-sm w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In / Register
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}
