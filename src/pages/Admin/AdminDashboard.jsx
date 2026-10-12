import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  MapPin,
  Calendar,
  Building,
  Utensils,
  Users,
  Shield,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  LogOut,
  ExternalLink,
  Download,
  Database,
  Sparkles,
  Settings,
  RefreshCw,
  Activity,
  Star,
  Check,
  Tag,
  IndianRupee,
  Layers,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  FileSpreadsheet,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { useToast } from '../../context/ToastContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/helpers';
import { AddDestinationModal } from './AddDestinationModal';
import { EditDestinationModal } from './EditDestinationModal';
import { AddUserModal } from './AddUserModal';
import { EditUserModal } from './EditUserModal';
import './AdminDashboard.css';

export function AdminDashboard() {
  const {
    adminLogout,
    allDestinations,
    categories,
    deleteDestination,
    toggleFeaturedDestination,
    platformConfig,
    setPlatformConfig,
    auditLogs,
    seedDemoData,
    exportSystemBackup,
    resetSystemData,
    logAdminAction
  } = useAdmin();

  const { showToast } = useToast();
  const navigate = useNavigate();

  // Active Tab State
  const [activeTab, setActiveTab] = useState('overview'); // overview, destinations, bookings, users, trips, settings
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Live Clock
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Modals state
  const [isAddDestOpen, setIsAddDestOpen] = useState(false);
  const [editingDest, setEditingDest] = useState(null);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Storage listener to refresh state on changes
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const handleStorage = () => setRefreshKey((k) => k + 1);
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Data Sources
  const hotelBookings = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('tripcanvas_hotel_bookings') || '[]');
    } catch {
      return [];
    }
  }, [refreshKey]);

  const restaurantBookings = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('tripcanvas_restaurant_bookings') || '[]');
    } catch {
      return [];
    }
  }, [refreshKey]);

  const registeredUsers = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('tripcanvas_registered_users') || '[]');
    } catch {
      return [];
    }
  }, [refreshKey]);

  const userTrips = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('tripcanvas_user_trips') || '[]');
    } catch {
      return [];
    }
  }, [refreshKey]);

  // Metric Computations
  const totalRevenue = useMemo(() => {
    const hotelSum = hotelBookings
      .filter((b) => b.status !== 'Cancelled')
      .reduce((sum, b) => sum + (Number(b.totalPrice) || 0), 0);
    const restEst = restaurantBookings
      .filter((r) => r.status !== 'Cancelled')
      .reduce((sum, r) => sum + (Number(r.guests) || 2) * 1200, 0);
    return hotelSum + restEst;
  }, [hotelBookings, restaurantBookings]);

  const totalBookingsCount = hotelBookings.length + restaurantBookings.length;
  const verifiedUsersCount = registeredUsers.filter((u) => u.isVerified).length;

  // Filter states
  const [destSearch, setDestSearch] = useState('');
  const [destCategory, setDestCategory] = useState('all');
  const [bookingFilterType, setBookingFilterType] = useState('all'); // all, hotel, restaurant
  const [bookingStatusFilter, setBookingStatusFilter] = useState('all');
  const [bookingSearch, setBookingSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('all');
  const [tripSearch, setTripSearch] = useState('');

  // Filtered Destinations
  const filteredDestinations = useMemo(() => {
    return allDestinations.filter((d) => {
      const matchSearch =
        d.name.toLowerCase().includes(destSearch.toLowerCase()) ||
        d.state.toLowerCase().includes(destSearch.toLowerCase()) ||
        (d.category && d.category.toLowerCase().includes(destSearch.toLowerCase()));
      const matchCat = destCategory === 'all' || d.category?.toLowerCase() === destCategory.toLowerCase();
      return matchSearch && matchCat;
    });
  }, [allDestinations, destSearch, destCategory]);

  // Combined and Filtered Bookings
  const allBookingsList = useMemo(() => {
    const hotels = hotelBookings.map((h) => ({
      ...h,
      bookingType: 'Hotel Stay',
      entityName: h.hotelName,
      dateDisplay: `${h.checkIn || 'N/A'} to ${h.checkOut || 'N/A'}`,
      amountDisplay: h.totalPrice ? formatCurrency(h.totalPrice) : 'N/A'
    }));

    const dining = restaurantBookings.map((r) => ({
      ...r,
      bookingType: 'Dining Table',
      entityName: r.restaurantName,
      dateDisplay: `${r.reservationDate || 'N/A'} at ${r.timeSlot || 'N/A'}`,
      amountDisplay: `₹${(Number(r.guests) || 2) * 1200} (Est.)`
    }));

    let combined = [...hotels, ...dining].sort(
      (a, b) => new Date(b.bookedAt || 0) - new Date(a.bookedAt || 0)
    );

    if (bookingFilterType === 'hotel') combined = combined.filter((b) => b.bookingType === 'Hotel Stay');
    if (bookingFilterType === 'restaurant') combined = combined.filter((b) => b.bookingType === 'Dining Table');

    if (bookingStatusFilter !== 'all') {
      combined = combined.filter((b) => (b.status || '').toLowerCase() === bookingStatusFilter.toLowerCase());
    }

    if (bookingSearch.trim()) {
      const q = bookingSearch.toLowerCase();
      combined = combined.filter(
        (b) =>
          b.id?.toLowerCase().includes(q) ||
          b.guestName?.toLowerCase().includes(q) ||
          b.guestEmail?.toLowerCase().includes(q) ||
          b.entityName?.toLowerCase().includes(q) ||
          b.destinationName?.toLowerCase().includes(q)
      );
    }

    return combined;
  }, [hotelBookings, restaurantBookings, bookingFilterType, bookingStatusFilter, bookingSearch]);

  // Filtered Users
  const filteredUsers = useMemo(() => {
    return registeredUsers.filter((u) => {
      const matchSearch =
        u.name?.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.homeCity?.toLowerCase().includes(userSearch.toLowerCase());
      const matchRole = userRoleFilter === 'all' || u.role === userRoleFilter;
      return matchSearch && matchRole;
    });
  }, [registeredUsers, userSearch, userRoleFilter]);

  // Filtered Trips
  const filteredTrips = useMemo(() => {
    return userTrips.filter((t) => {
      const q = tripSearch.toLowerCase();
      return (
        t.title?.toLowerCase().includes(q) ||
        t.destinationName?.toLowerCase().includes(q) ||
        t.travelStyle?.toLowerCase().includes(q)
      );
    });
  }, [userTrips, tripSearch]);

  // Direct Booking Status Modifier
  const handleUpdateBookingStatus = (bookingId, bookingType, newStatus) => {
    if (bookingType === 'Hotel Stay') {
      const updated = hotelBookings.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b));
      localStorage.setItem('tripcanvas_hotel_bookings', JSON.stringify(updated));
    } else {
      const updated = restaurantBookings.map((r) => (r.id === bookingId ? { ...r, status: newStatus } : r));
      localStorage.setItem('tripcanvas_restaurant_bookings', JSON.stringify(updated));
    }
    window.dispatchEvent(new Event('storage'));
    logAdminAction('Updated Booking Status', `Changed booking ${bookingId} status to ${newStatus}`);
    showToast(`Booking ${bookingId} set to ${newStatus}`, 'success');
  };

  // Delete Booking
  const handleDeleteBooking = (bookingId, bookingType) => {
    if (window.confirm(`Are you sure you want to delete booking ${bookingId}?`)) {
      if (bookingType === 'Hotel Stay') {
        const updated = hotelBookings.filter((b) => b.id !== bookingId);
        localStorage.setItem('tripcanvas_hotel_bookings', JSON.stringify(updated));
      } else {
        const updated = restaurantBookings.filter((r) => r.id !== bookingId);
        localStorage.setItem('tripcanvas_restaurant_bookings', JSON.stringify(updated));
      }
      window.dispatchEvent(new Event('storage'));
      logAdminAction('Deleted Booking', `Permanently removed booking ${bookingId}`);
      showToast(`Booking deleted`, 'info');
    }
  };

  // Toggle User Email Verification
  const handleToggleUserVerify = (userId) => {
    const updated = registeredUsers.map((u) => {
      if (u.id === userId) {
        const newStatus = !u.isVerified;
        logAdminAction('Toggled User Verification', `${u.name} verification set to ${newStatus}`);
        return { ...u, isVerified: newStatus };
      }
      return u;
    });
    localStorage.setItem('tripcanvas_registered_users', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    showToast(`Updated user verification status`, 'info');
  };

  // Delete User
  const handleDeleteUser = (userId, userName) => {
    if (window.confirm(`Are you sure you want to remove user account for ${userName}?`)) {
      const updated = registeredUsers.filter((u) => u.id !== userId);
      localStorage.setItem('tripcanvas_registered_users', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));
      logAdminAction('Deleted User Account', `Removed user ${userName} (${userId})`);
      showToast(`User account deleted`, 'info');
    }
  };

  // Delete Trip
  const handleDeleteTrip = (tripId, tripTitle) => {
    if (window.confirm(`Are you sure you want to delete itinerary "${tripTitle}"?`)) {
      const updated = userTrips.filter((t) => t.id !== tripId);
      localStorage.setItem('tripcanvas_user_trips', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));
      logAdminAction('Deleted Trip', `Removed itinerary "${tripTitle}" (${tripId})`);
      showToast(`Itinerary deleted`, 'info');
    }
  };

  // Export Bookings CSV
  const handleExportBookingsCSV = () => {
    const headers = ['Booking ID', 'Type', 'Entity Name', 'Destination', 'Guest Name', 'Email', 'Phone', 'Date/Time', 'Status', 'Booked At'];
    const rows = allBookingsList.map((b) => [
      b.id,
      b.bookingType,
      `"${(b.entityName || '').replace(/"/g, '""')}"`,
      `"${(b.destinationName || '').replace(/"/g, '""')}"`,
      `"${(b.guestName || '').replace(/"/g, '""')}"`,
      b.guestEmail || '',
      b.guestPhone || '',
      `"${(b.dateDisplay || '').replace(/"/g, '""')}"`,
      b.status,
      b.bookedAt || ''
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TripCanvas_Bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Bookings exported to CSV!', 'success');
  };

  const navItems = [
    { id: 'overview', label: 'Overview & Analytics', icon: Activity, count: null },
    { id: 'destinations', label: 'Destinations Catalogue', icon: MapPin, count: allDestinations.length },
    { id: 'bookings', label: 'Bookings & Stays', icon: Building, count: totalBookingsCount },
    { id: 'users', label: 'Explorer Accounts', icon: Users, count: registeredUsers.length },
    { id: 'trips', label: 'User Itineraries', icon: Calendar, count: userTrips.length },
    { id: 'settings', label: 'Settings & Database', icon: Settings, count: null }
  ];

  return (
    <div className="admin-portal-root">
      {/* Mobile Drawer Overlay */}
      {isSidebarOpen && (
        <div className="admin-sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* ========================================================
          LEFT SIDEBAR (WHITE THEME)
          ======================================================== */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-sidebar-brand" title="Return to Website">
            <div className="admin-sidebar-brand-icon">
              <Compass size={22} />
            </div>
            <div className="admin-sidebar-brand-text">
              <span className="admin-brand-main">TripCanvas</span>
              <span className="admin-brand-sub">CONTROL CENTER</span>
            </div>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="admin-sidebar-close-btn"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Administrator Profile Card */}
        <div className="admin-sidebar-profile-card">
          <div className="admin-profile-avatar-box">
            <span>TC</span>
            <span className="admin-online-indicator" title="Active Session" />
          </div>
          <div className="admin-profile-info">
            <div className="admin-profile-name">Super Administrator</div>
            <div className="admin-profile-role">Restricted Access</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="admin-sidebar-nav">
          <div className="admin-nav-section-label">MAIN NAVIGATION</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`admin-nav-item ${isActive ? 'active' : ''}`}
              >
                <div className="admin-nav-item-left">
                  <Icon size={18} className="admin-nav-icon" />
                  <span>{item.label}</span>
                </div>
                {item.count !== null && (
                  <span className={`admin-nav-count-badge ${isActive ? 'active' : ''}`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick CTA Action */}
        <div className="admin-sidebar-cta-box">
          <button
            onClick={() => {
              setIsAddDestOpen(true);
              setIsSidebarOpen(false);
            }}
            className="btn btn-primary btn-sm w-full flex items-center justify-center gap-2"
          >
            <Plus size={16} /> Add Destination
          </button>
        </div>

        {/* Bottom System Controls */}
        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-footer-link" title="Open Public Website">
            <ExternalLink size={16} />
            <span>Public Website</span>
          </Link>
          <button
            onClick={() => {
              adminLogout();
              navigate('/');
            }}
            className="admin-footer-logout-btn"
            title="Terminate Session"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ========================================================
          MAIN CONTENT AREA (WHITE THEME)
          ======================================================== */}
      <div className="admin-main-wrapper">
        {/* Top Header Bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="admin-mobile-menu-toggle"
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>

            <div className="admin-breadcrumb-box">
              <span className="text-muted">Admin</span>
              <ChevronRight size={14} className="text-muted" />
              <span className="font-semibold text-primary capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="admin-topbar-right">
            {/* Live Clock */}
            <div className="admin-clock-pill">
              <Clock size={14} className="text-accent" />
              <span>
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>

            {/* Quick Seed Demo */}
            <button
              onClick={seedDemoData}
              className="btn btn-outline btn-sm admin-header-action-btn"
              title="Populate test bookings and users"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="desktop-only">Seed Demo</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={exportSystemBackup}
              className="btn btn-sm admin-header-action-btn admin-export-btn"
              title="Download Full Database Dump"
            >
              <Download size={14} />
              <span className="desktop-only">Export Backup</span>
            </button>

            {/* Online Badge */}
            <div className="admin-online-badge desktop-only">
              <span className="admin-health-dot" />
              <span>Online v2.4</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content Body */}
        <main className="admin-content-body">
          {/* Top KPI Summary Cards */}
          <section className="admin-kpi-grid">
            {/* Total Revenue */}
            <div className="admin-kpi-card">
              <div className="admin-kpi-header">
                <span className="admin-kpi-title">Gross Bookings Volume</span>
                <div className="admin-kpi-icon-wrap accent">
                  <IndianRupee size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{formatCurrency(totalRevenue)}</div>
              <div className="admin-kpi-subtext positive">
                <TrendingUp size={13} /> +18.4% this month
              </div>
            </div>

            {/* Total Bookings */}
            <div className="admin-kpi-card">
              <div className="admin-kpi-header">
                <span className="admin-kpi-title">Total Bookings & Stays</span>
                <div className="admin-kpi-icon-wrap emerald">
                  <Building size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{totalBookingsCount}</div>
              <div className="admin-kpi-subtext neutral">
                <span>{hotelBookings.length} Hotels • {restaurantBookings.length} Dining</span>
              </div>
            </div>

            {/* Registered Users */}
            <div className="admin-kpi-card">
              <div className="admin-kpi-header">
                <span className="admin-kpi-title">Registered Explorers</span>
                <div className="admin-kpi-icon-wrap blue">
                  <Users size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{registeredUsers.length}</div>
              <div className="admin-kpi-subtext positive">
                <CheckCircle2 size={13} /> {verifiedUsersCount} Email Verified
              </div>
            </div>

            {/* Planned Itineraries */}
            <div className="admin-kpi-card">
              <div className="admin-kpi-header">
                <span className="admin-kpi-title">Planned Trips & Itineraries</span>
                <div className="admin-kpi-icon-wrap amber">
                  <Calendar size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{userTrips.length}</div>
              <div className="admin-kpi-subtext neutral">
                <span>{allDestinations.length} Active Destinations</span>
              </div>
            </div>
          </section>

          {/* ========================================================
              TAB 1: OVERVIEW & ANALYTICS
              ======================================================== */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              <div className="admin-overview-grid">
                {/* Left Column: Quick Actions & Category Distribution */}
                <div className="admin-overview-left">
                  {/* Quick Launchpad */}
                  <div className="admin-panel-card mb-6">
                    <h3 className="admin-panel-title">
                      <Sparkles size={18} className="text-accent" /> Quick Management Launchpad
                    </h3>
                    <p className="admin-panel-desc">Fast shortcuts for platform administrators</p>
                    <div className="admin-launchpad-grid">
                      <button
                        onClick={() => setIsAddDestOpen(true)}
                        className="admin-launchpad-btn"
                      >
                        <Plus size={18} className="text-accent" />
                        <div>
                          <div className="font-semibold">Add Destination</div>
                          <div className="text-xs text-muted">Create curated guide</div>
                        </div>
                      </button>

                      <button
                        onClick={() => setIsAddUserOpen(true)}
                        className="admin-launchpad-btn"
                      >
                        <Users size={18} className="text-info" />
                        <div>
                          <div className="font-semibold">Create User</div>
                          <div className="text-xs text-muted">Register explorer</div>
                        </div>
                      </button>

                      <button
                        onClick={seedDemoData}
                        className="admin-launchpad-btn"
                      >
                        <Database size={18} className="text-success" />
                        <div>
                          <div className="font-semibold">Seed Sample Data</div>
                          <div className="text-xs text-muted">Populate bookings</div>
                        </div>
                      </button>

                      <button
                        onClick={exportSystemBackup}
                        className="admin-launchpad-btn"
                      >
                        <Download size={18} className="text-amber" />
                        <div>
                          <div className="font-semibold">Export JSON Backup</div>
                          <div className="text-xs text-muted">Full database dump</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div className="admin-panel-card">
                    <h3 className="admin-panel-title">
                      <Layers size={18} className="text-accent" /> Travel Category Distribution
                    </h3>
                    <div className="admin-category-bars-list mt-4">
                      {categories.map((cat) => {
                        const count = allDestinations.filter(
                          (d) => d.category?.toLowerCase() === cat.id?.toLowerCase()
                        ).length;
                        const percentage = allDestinations.length ? Math.round((count / allDestinations.length) * 100) : 0;
                        return (
                          <div key={cat.id} className="admin-cat-bar-item">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-primary">{cat.label}</span>
                              <span className="text-muted font-medium">{count} places ({percentage}%)</span>
                            </div>
                            <div className="admin-progress-track">
                              <div
                                className="admin-progress-fill"
                                style={{ width: `${Math.max(percentage, 8)}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Audit Logs Stream */}
                <div className="admin-overview-right">
                  <div className="admin-panel-card">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="admin-panel-title">
                          <Activity size={18} className="text-accent" /> Live System Audit Activity
                        </h3>
                        <p className="admin-panel-desc">Real-time log of administrative events</p>
                      </div>
                      <span className="badge badge-accent badge-xs">{auditLogs.length} Events</span>
                    </div>

                    <div className="admin-audit-stream-list">
                      {auditLogs.slice(0, 8).map((log) => (
                        <div key={log.id} className="admin-audit-item">
                          <div className="admin-audit-dot" />
                          <div className="admin-audit-content">
                            <div className="flex items-center justify-between gap-2">
                              <span className="admin-audit-action">{log.action}</span>
                              <span className="admin-audit-time text-xs text-muted">
                                {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                            <p className="admin-audit-details">{log.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 2: DESTINATIONS CATALOGUE MANAGER
              ======================================================== */}
          {activeTab === 'destinations' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              {/* Controls Bar */}
              <div className="admin-controls-card">
                <div className="admin-search-wrapper">
                  <Search size={16} className="admin-search-icon" />
                  <input
                    type="text"
                    placeholder="Search destinations by name, region..."
                    className="admin-search-input"
                    value={destSearch}
                    onChange={(e) => setDestSearch(e.target.value)}
                  />
                  {destSearch && (
                    <button onClick={() => setDestSearch('')} className="admin-search-clear">
                      ✕
                    </button>
                  )}
                </div>

                <div className="admin-filter-group">
                  <select
                    className="admin-select-input"
                    value={destCategory}
                    onChange={(e) => setDestCategory(e.target.value)}
                  >
                    <option value="all">All Categories ({allDestinations.length})</option>
                    <option value="historical">Historical & Royal</option>
                    <option value="beach">Beach & Coastal</option>
                    <option value="mountain">Mountain & Snow</option>
                    <option value="wildlife">Wildlife & Safari</option>
                    <option value="spiritual">Spiritual</option>
                  </select>

                  <button
                    onClick={() => setIsAddDestOpen(true)}
                    className="btn btn-primary btn-sm flex items-center gap-2"
                  >
                    <Plus size={16} /> Add Destination
                  </button>
                </div>
              </div>

              {/* Destinations Table */}
              <div className="admin-table-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Destination</th>
                      <th>Category</th>
                      <th>Avg Budget / Day</th>
                      <th>Rating</th>
                      <th>Ideal Duration</th>
                      <th>Showcase</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDestinations.map((dest) => (
                      <tr key={dest.id}>
                        <td>
                          <div className="admin-dest-cell">
                            <img
                              src={dest.heroImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=200'}
                              alt={dest.name}
                              className="admin-dest-thumb"
                            />
                            <div>
                              <div className="font-semibold text-primary">{dest.name}</div>
                              <div className="text-xs text-muted">{dest.state}, {dest.country}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-subtle">{dest.category}</span>
                        </td>
                        <td>
                          <span className="font-semibold text-primary">{formatCurrency(dest.averageBudget || 4500)}</span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-amber fill-amber" />
                            <span className="font-semibold text-primary">{dest.rating}</span>
                            <span className="text-xs text-muted">({dest.reviewsCount || 0})</span>
                          </div>
                        </td>
                        <td>
                          <span className="text-sm text-secondary font-medium">{dest.idealDuration || '3 - 4 Days'}</span>
                        </td>
                        <td>
                          <button
                            onClick={() => toggleFeaturedDestination(dest.id)}
                            className={`admin-feature-toggle-pill ${dest.isFeatured ? 'featured' : ''}`}
                            title="Toggle featured flag"
                          >
                            <Sparkles size={12} />
                            <span>{dest.isFeatured ? 'Featured' : 'Standard'}</span>
                          </button>
                        </td>
                        <td className="text-right">
                          <div className="admin-actions-cell">
                            <Link
                              to={`/explore/${dest.id}`}
                              target="_blank"
                              className="admin-action-btn"
                              title="View destination page"
                            >
                              <Eye size={15} />
                            </Link>
                            <button
                              onClick={() => setEditingDest(dest)}
                              className="admin-action-btn"
                              title="Edit destination"
                            >
                              <Edit2 size={15} />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Remove destination ${dest.name}?`)) {
                                  deleteDestination(dest.id);
                                }
                              }}
                              className="admin-action-btn danger"
                              title="Delete destination"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredDestinations.length === 0 && (
                      <tr>
                        <td colSpan={7} className="text-center py-8 text-muted">
                          No destinations matching your search filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 3: BOOKINGS & RESERVATIONS MANAGER
              ======================================================== */}
          {activeTab === 'bookings' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              {/* Filter Controls */}
              <div className="admin-controls-card">
                <div className="admin-search-wrapper">
                  <Search size={16} className="admin-search-icon" />
                  <input
                    type="text"
                    placeholder="Search by ref code, guest name, hotel..."
                    className="admin-search-input"
                    value={bookingSearch}
                    onChange={(e) => setBookingSearch(e.target.value)}
                  />
                  {bookingSearch && (
                    <button onClick={() => setBookingSearch('')} className="admin-search-clear">✕</button>
                  )}
                </div>

                <div className="admin-filter-group">
                  <select
                    className="admin-select-input"
                    value={bookingFilterType}
                    onChange={(e) => setBookingFilterType(e.target.value)}
                  >
                    <option value="all">All Booking Types</option>
                    <option value="hotel">Hotel Stays Only</option>
                    <option value="restaurant">Dining Reservations</option>
                  </select>

                  <select
                    className="admin-select-input"
                    value={bookingStatusFilter}
                    onChange={(e) => setBookingStatusFilter(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <button
                    onClick={handleExportBookingsCSV}
                    className="btn btn-sm admin-export-btn flex items-center gap-2"
                    title="Download Bookings as CSV"
                  >
                    <FileSpreadsheet size={15} />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Bookings Table */}
              <div className="admin-table-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Booking Ref</th>
                      <th>Type & Property</th>
                      <th>Guest Details</th>
                      <th>Dates / Timeslot</th>
                      <th>Total Value</th>
                      <th>Status Management</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBookingsList.map((booking) => (
                      <tr key={booking.id}>
                        <td>
                          <span className="font-mono text-xs font-semibold bg-surface-alt px-2 py-1 rounded text-primary">
                            {booking.id}
                          </span>
                        </td>
                        <td>
                          <div>
                            <div className="font-semibold text-primary flex items-center gap-1.5">
                              {booking.bookingType === 'Hotel Stay' ? (
                                <Building size={14} className="text-accent" />
                              ) : (
                                <Utensils size={14} className="text-success" />
                              )}
                              <span>{booking.entityName}</span>
                            </div>
                            <div className="text-xs text-muted">
                              {booking.destinationName || 'India'} • {booking.roomType || booking.tableType || 'Standard'}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <div className="font-medium text-primary">{booking.guestName || 'Valued Guest'}</div>
                            <div className="text-xs text-muted">{booking.guestEmail || 'No email provided'}</div>
                            {booking.guestPhone && (
                              <div className="text-xs text-muted">{booking.guestPhone}</div>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="text-sm font-medium text-primary">{booking.dateDisplay}</div>
                          <div className="text-xs text-muted">{booking.guests || 2} Guests</div>
                        </td>
                        <td>
                          <span className="font-bold text-accent">{booking.amountDisplay}</span>
                        </td>
                        <td>
                          <select
                            value={booking.status || 'Confirmed'}
                            onChange={(e) =>
                              handleUpdateBookingStatus(booking.id, booking.bookingType, e.target.value)
                            }
                            className={`admin-status-dropdown ${booking.status?.toLowerCase() || 'confirmed'}`}
                          >
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="text-right">
                          <button
                            onClick={() => handleDeleteBooking(booking.id, booking.bookingType)}
                            className="admin-action-btn danger"
                            title="Delete booking"
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {allBookingsList.length === 0 && (
                      <tr>
                        <td colSpan={7} className="text-center py-10 text-muted">
                          No bookings found matching filters.
                          <div className="mt-2">
                            <button
                              onClick={seedDemoData}
                              className="btn btn-outline btn-xs"
                            >
                              Seed Sample Bookings
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 4: EXPLORER ACCOUNTS & USERS
              ======================================================== */}
          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              <div className="admin-controls-card">
                <div className="admin-search-wrapper">
                  <Search size={16} className="admin-search-icon" />
                  <input
                    type="text"
                    placeholder="Search users by name, email, city..."
                    className="admin-search-input"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                  />
                  {userSearch && (
                    <button onClick={() => setUserSearch('')} className="admin-search-clear">✕</button>
                  )}
                </div>

                <div className="admin-filter-group">
                  <select
                    className="admin-select-input"
                    value={userRoleFilter}
                    onChange={(e) => setUserRoleFilter(e.target.value)}
                  >
                    <option value="all">All User Roles</option>
                    <option value="Travel Explorer">Travel Explorer</option>
                    <option value="VIP Explorer">VIP Explorer</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>

                  <button
                    onClick={() => setIsAddUserOpen(true)}
                    className="btn btn-primary btn-sm flex items-center gap-2"
                  >
                    <Plus size={16} /> Create User
                  </button>
                </div>
              </div>

              <div className="admin-table-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Explorer Profile</th>
                      <th>Email Address</th>
                      <th>Home City</th>
                      <th>Role</th>
                      <th>Verified Status</th>
                      <th>Joined Date</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => (
                      <tr key={u.id}>
                        <td>
                          <div className="admin-user-cell">
                            <div className="admin-user-avatar">
                              {u.name?.charAt(0)?.toUpperCase() || 'U'}
                            </div>
                            <div>
                              <div className="font-semibold text-primary">{u.name}</div>
                              <div className="text-xs text-muted">{u.bio ? u.bio.slice(0, 35) + '...' : 'Traveler'}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="font-mono text-xs text-primary font-medium">{u.email}</span>
                        </td>
                        <td>
                          <span className="text-sm font-medium text-secondary">{u.homeCity || 'India'}</span>
                        </td>
                        <td>
                          <span className="badge badge-subtle">{u.role || 'Explorer'}</span>
                        </td>
                        <td>
                          <button
                            onClick={() => handleToggleUserVerify(u.id)}
                            className={`admin-verify-toggle-btn ${u.isVerified ? 'verified' : 'unverified'}`}
                            title="Click to toggle verification status"
                          >
                            {u.isVerified ? (
                              <>
                                <CheckCircle2 size={13} />
                                <span>Verified</span>
                              </>
                            ) : (
                              <>
                                <XCircle size={13} />
                                <span>Unverified</span>
                              </>
                            )}
                          </button>
                        </td>
                        <td>
                          <span className="text-xs text-muted">{u.joinedDate || 'Recent'}</span>
                        </td>
                        <td className="text-right">
                          <div className="admin-actions-cell">
                            <button
                              onClick={() => setEditingUser(u)}
                              className="admin-action-btn"
                              title="Edit user details"
                            >
                              <Edit2 size={15} />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(u.id, u.name)}
                              className="admin-action-btn danger"
                              title="Delete user account"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredUsers.length === 0 && (
                      <tr>
                        <td colSpan={7} className="text-center py-8 text-muted">
                          No users found matching search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 5: USER ITINERARIES & TRIPS
              ======================================================== */}
          {activeTab === 'trips' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              <div className="admin-controls-card">
                <div className="admin-search-wrapper">
                  <Search size={16} className="admin-search-icon" />
                  <input
                    type="text"
                    placeholder="Search trips by destination or style..."
                    className="admin-search-input"
                    value={tripSearch}
                    onChange={(e) => setTripSearch(e.target.value)}
                  />
                  {tripSearch && (
                    <button onClick={() => setTripSearch('')} className="admin-search-clear">✕</button>
                  )}
                </div>
              </div>

              <div className="admin-table-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Trip & Destination</th>
                      <th>Dates & Duration</th>
                      <th>Travelers & Style</th>
                      <th>Budget Target</th>
                      <th>Activities / Days</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTrips.map((trip) => {
                      const totalActivities = (trip.itinerary || []).reduce(
                        (sum, day) => sum + (day.activities?.length || 0),
                        0
                      );
                      return (
                        <tr key={trip.id}>
                          <td>
                            <div className="admin-dest-cell">
                              <img
                                src={trip.coverImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=200'}
                                alt={trip.title}
                                className="admin-dest-thumb"
                              />
                              <div>
                                <div className="font-semibold text-primary">{trip.title}</div>
                                <div className="text-xs text-muted">{trip.destinationName}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-semibold text-primary">
                              {trip.startDate ? formatDate(trip.startDate) : 'Flexible'} - {trip.endDate ? formatDate(trip.endDate) : ''}
                            </div>
                            <div className="text-xs text-muted">{trip.daysCount || 3} Days Trip</div>
                          </td>
                          <td>
                            <span className="badge badge-subtle">{trip.travelStyle || 'Solo'}</span>
                            <span className="text-xs text-muted ml-1.5">{trip.travelers || 1} Travelers</span>
                          </td>
                          <td>
                            <span className="font-bold text-accent">
                              {formatCurrency(trip.budget?.total || 15000)}
                            </span>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-primary">{totalActivities} activities planned</div>
                            <div className="text-xs text-muted">{trip.itinerary?.length || 0} days mapped</div>
                          </td>
                          <td className="text-right">
                            <div className="admin-actions-cell">
                              <Link
                                to={`/my-trips/${trip.id}`}
                                target="_blank"
                                className="admin-action-btn"
                                title="Open live trip page"
                              >
                                <Eye size={15} />
                              </Link>
                              <button
                                onClick={() => handleDeleteTrip(trip.id, trip.title)}
                                className="admin-action-btn danger"
                                title="Delete trip itinerary"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredTrips.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center py-8 text-muted">
                          No trips matching search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 6: SETTINGS & DATABASE TOOLS
              ======================================================== */}
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="admin-tab-pane"
            >
              <div className="admin-settings-grid">
                {/* Platform Configuration */}
                <div className="admin-panel-card">
                  <h3 className="admin-panel-title">
                    <Settings size={18} className="text-accent" /> Platform Operational Settings
                  </h3>
                  <p className="admin-panel-desc">Configure system-wide switches and parameters</p>

                  <div className="admin-settings-form mt-4">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Platform Name</label>
                      <input
                        type="text"
                        className="admin-text-input"
                        value={platformConfig.siteName || 'TripCanvas'}
                        onChange={(e) =>
                          setPlatformConfig((prev) => ({ ...prev, siteName: e.target.value }))
                        }
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label">Default Base Currency</label>
                      <select
                        className="admin-select-input"
                        value={platformConfig.currency || 'INR'}
                        onChange={(e) =>
                          setPlatformConfig((prev) => ({ ...prev, currency: e.target.value }))
                        }
                      >
                        <option value="INR">INR (₹ - Indian Rupee)</option>
                        <option value="USD">USD ($ - US Dollar)</option>
                        <option value="EUR">EUR (€ - Euro)</option>
                      </select>
                    </div>

                    <div className="admin-toggle-setting-row mt-4">
                      <div className="admin-toggle-text-block">
                        <div className="admin-toggle-label">Real-time Bookings Engine</div>
                        <div className="admin-toggle-subtext">Enable public booking of luxury stays and table reservations</div>
                      </div>
                      <label className="admin-switch" title="Toggle Real-time Bookings Engine">
                        <input
                          type="checkbox"
                          checked={platformConfig.bookingsEnabled !== false}
                          onChange={(e) =>
                            setPlatformConfig((prev) => ({ ...prev, bookingsEnabled: e.target.checked }))
                          }
                        />
                        <span className="admin-switch-slider" />
                      </label>
                    </div>

                    <div className="admin-toggle-setting-row">
                      <div className="admin-toggle-text-block">
                        <div className="admin-toggle-label">Maintenance Mode</div>
                        <div className="admin-toggle-subtext">Displays emergency maintenance advisory banner across public site</div>
                      </div>
                      <label className="admin-switch danger" title="Toggle Maintenance Mode">
                        <input
                          type="checkbox"
                          checked={platformConfig.maintenanceMode === true}
                          onChange={(e) =>
                            setPlatformConfig((prev) => ({ ...prev, maintenanceMode: e.target.checked }))
                          }
                        />
                        <span className="admin-switch-slider" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Database Operations */}
                <div className="admin-panel-card">
                  <h3 className="admin-panel-title">
                    <Database size={18} className="text-accent" /> Database & Storage Management
                  </h3>
                  <p className="admin-panel-desc">Backup, restore, and test data management tools</p>

                  <div className="admin-db-tools-list mt-4">
                    <div className="admin-db-tool-item">
                      <div>
                        <div className="font-semibold text-primary">Seed Rich Demo Data</div>
                        <div className="text-xs text-muted">
                          Injects verified bookings, user accounts, and trip plans for full dashboard testing.
                        </div>
                      </div>
                      <button
                        onClick={seedDemoData}
                        className="btn btn-outline btn-sm flex items-center gap-1.5"
                      >
                        <Sparkles size={14} className="text-accent" /> Seed Data
                      </button>
                    </div>

                    <div className="admin-db-tool-item">
                      <div>
                        <div className="font-semibold text-primary">Full System JSON Backup</div>
                        <div className="text-xs text-muted">
                          Exports all destinations, bookings, users, and logs into a timestamped JSON file.
                        </div>
                      </div>
                      <button
                        onClick={exportSystemBackup}
                        className="btn btn-sm admin-export-btn flex items-center gap-1.5"
                      >
                        <Download size={14} /> Export Backup
                      </button>
                    </div>

                    <div className="admin-db-tool-item danger">
                      <div>
                        <div className="font-semibold text-danger">Reset Catalogue to Defaults</div>
                        <div className="text-xs text-muted">
                          Clears custom created destinations and restores original 14 master destinations.
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (window.confirm('Reset all catalogue custom modifications to factory defaults?')) {
                            resetSystemData();
                          }
                        }}
                        className="btn btn-outline btn-sm text-danger"
                      >
                        <RefreshCw size={14} /> Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* Modals */}
      <AddDestinationModal
        isOpen={isAddDestOpen}
        onClose={() => setIsAddDestOpen(false)}
      />

      <EditDestinationModal
        destination={editingDest}
        isOpen={Boolean(editingDest)}
        onClose={() => setEditingDest(null)}
      />

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onUserAdded={() => setRefreshKey((k) => k + 1)}
      />

      <EditUserModal
        user={editingUser}
        isOpen={Boolean(editingUser)}
        onClose={() => setEditingUser(null)}
        onUserUpdated={() => setRefreshKey((k) => k + 1)}
      />
    </div>
  );
}
