import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Plus,
  Search,
  Compass,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useTrips } from '../context/TripContext';
import { TripCard } from '../components/trip/TripCard';
import { EmptyState } from '../components/common/EmptyState';
import { pageVariants, staggerContainer, fadeInScale } from '../animations/motionVariants';

const TRIP_TABS = [
  { id: 'all', label: 'All Trips' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'ongoing', label: 'Ongoing' },
  { id: 'completed', label: 'Completed' }
];

export function MyTrips() {
  const { trips } = useTrips();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrips = trips.filter((trip) => {
    const matchesTab = activeTab === 'all' || trip.status === activeTab;
    const matchesSearch =
      !searchQuery.trim() ||
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.destinationName?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="my-trips-page section-padding"
    >
      <div className="container">
        {/* Header Row */}
        <div className="my-trips-header-row mb-8">
          <div>
            <span className="section-badge">
              <Calendar size={13} /> Trip Workspace
            </span>
            <h1 className="heading-1">My Journeys</h1>
            <p className="subheading">
              Every great story begins with a plan. Manage all your past and upcoming adventures.
            </p>
          </div>

          <Link to="/create-trip" className="btn btn-primary flex items-center gap-2">
            <Plus size={18} />
            <span>Plan New Trip</span>
          </Link>
        </div>

        {/* Tabs & Search Bar */}
        <div className="trips-filter-bar card mb-8">
          <div className="trips-tabs-row">
            {TRIP_TABS.map((tab) => {
              const count =
                tab.id === 'all'
                  ? trips.length
                  : trips.filter((t) => t.status === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`trips-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <span>{tab.label}</span>
                  <span className="trips-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="trips-search-box">
            <Search size={16} className="text-muted" />
            <input
              type="text"
              placeholder="Search by trip name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="trips-search-input"
            />
          </div>
        </div>

        {/* Trips Grid */}
        {filteredTrips.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="trips-cards-grid"
          >
            {filteredTrips.map((trip) => (
              <motion.div key={trip.id} variants={fadeInScale} layout>
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyState
            type="trips"
            title={
              searchQuery
                ? `No trips found matching "${searchQuery}"`
                : activeTab !== 'all'
                ? `No ${activeTab} trips found`
                : 'No trips created yet'
            }
            description={
              searchQuery
                ? 'Try adjusting your search query.'
                : 'Start designing your next dream vacation with customized itineraries, cost breakdowns, and live weather tracking.'
            }
            actionText="Create Your First Trip"
            actionLink="/create-trip"
          />
        )}
      </div>
    </motion.div>
  );
}
