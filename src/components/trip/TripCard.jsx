import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, CheckCircle2, Clock, Trash2, MapPin } from 'lucide-react';
import { formatDateRange } from '../../utils/helpers';
import { formatCurrency } from '../../utils/formatCurrency';
import { useTrips } from '../../context/TripContext';
import { cardHover } from '../../animations/motionVariants';

export function TripCard({ trip }) {
  const { deleteTrip } = useTrips();

  if (!trip) return null;

  // Calculate planning progress
  const totalActivities = (trip.itinerary || []).reduce(
    (acc, day) => acc + (day.activities?.length || 0),
    0
  );
  const completedActivities = (trip.itinerary || []).reduce(
    (acc, day) => acc + (day.activities?.filter((a) => a.completed)?.length || 0),
    0
  );

  // Approximate planning score
  const progressPercent = Math.min(
    100,
    Math.round(
      ((totalActivities > 0 ? 50 : 10) +
        (trip.budget?.total ? 25 : 0) +
        (trip.expenses?.length ? 25 : 0)) *
        (totalActivities > 0 ? 1 : 0.6)
    )
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'ongoing':
        return <span className="badge badge-success">Ongoing</span>;
      case 'completed':
        return <span className="badge badge-info">Completed</span>;
      case 'draft':
        return <span className="badge badge-warning">Draft</span>;
      case 'upcoming':
      default:
        return <span className="badge badge-accent">Upcoming</span>;
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete the trip "${trip.title}"?`)) {
      deleteTrip(trip.id);
    }
  };

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="card trip-summary-card"
    >
      <div className="trip-card-image-wrap">
        <img
          src={trip.coverImage}
          alt={trip.title}
          className="trip-card-img"
          loading="lazy"
        />
        <div className="trip-card-img-overlay" />

        <div className="trip-card-badges-top">
          {getStatusBadge(trip.status)}
          <button
            onClick={handleDelete}
            className="trip-delete-btn"
            title="Delete this trip"
            aria-label="Delete this trip"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <div className="trip-card-img-content">
          <span className="trip-card-dest-tag">
            <MapPin size={13} /> {trip.destinationName || 'Destination'}
          </span>
          <h3 className="trip-card-title">{trip.title}</h3>
        </div>
      </div>

      <div className="trip-card-body">
        {/* Dates & Travelers */}
        <div className="trip-card-meta-grid">
          <div className="trip-meta-item">
            <Calendar size={15} className="trip-meta-icon" />
            <span>{formatDateRange(trip.startDate, trip.endDate)}</span>
          </div>
          <div className="trip-meta-item">
            <Users size={15} className="trip-meta-icon" />
            <span>{trip.travelers || 1} {trip.travelers === 1 ? 'Traveler' : 'Travelers'} ({trip.travelStyle || 'Solo'})</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="trip-progress-section">
          <div className="trip-progress-label-row">
            <span className="progress-title">Itinerary Prepared</span>
            <span className="progress-val">{totalActivities} activities ({progressPercent}%)</span>
          </div>
          <div className="trip-progress-track">
            <div
              className="trip-progress-bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="trip-card-footer">
          <div className="trip-card-budget">
            <span className="trip-budget-label">Est. Budget</span>
            <span className="trip-budget-val">{formatCurrency(trip.budget?.total || 0)}</span>
          </div>

          <Link to={`/my-trips/${trip.id}`} className="btn btn-primary btn-sm trip-open-btn">
            <span>Open Trip</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
