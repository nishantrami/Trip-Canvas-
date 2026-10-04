import React, { useState } from 'react';
import { Reorder, motion, AnimatePresence } from 'framer-motion';
import {
  GripVertical,
  Clock,
  MapPin,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  IndianRupee
} from 'lucide-react';
import { ActivityModal } from './ActivityModal';
import { EmptyState } from '../common/EmptyState';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/helpers';
import { useTrips } from '../../context/TripContext';

export function ItineraryTimeline({ trip }) {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);

  const { addActivity, updateActivity, deleteActivity, reorderActivities, updateTrip } = useTrips();

  if (!trip || !trip.itinerary || trip.itinerary.length === 0) {
    return (
      <EmptyState
        type="itinerary"
        title="No itinerary days created"
        description="Add days to your trip to start building your travel schedule."
      />
    );
  }

  const currentDay = trip.itinerary[selectedDayIndex] || trip.itinerary[0];
  const currentActivities = currentDay?.activities || [];

  const handleReorder = (newOrder) => {
    reorderActivities(trip.id, selectedDayIndex, newOrder);
  };

  const handleSaveActivity = (activityData) => {
    if (editingActivity) {
      updateActivity(trip.id, selectedDayIndex, editingActivity.id, activityData);
    } else {
      addActivity(trip.id, selectedDayIndex, activityData);
    }
  };

  const handleToggleComplete = (act) => {
    updateActivity(trip.id, selectedDayIndex, act.id, {
      completed: !act.completed
    });
  };

  const handleAddNewDay = () => {
    const nextDayNum = trip.itinerary.length + 1;
    const startDateObj = new Date(trip.startDate || Date.now());
    const nextDate = new Date(startDateObj);
    nextDate.setDate(startDateObj.getDate() + nextDayNum - 1);

    const updatedItinerary = [
      ...trip.itinerary,
      {
        day: nextDayNum,
        date: nextDate.toISOString().split('T')[0],
        title: `Day ${nextDayNum} Adventures`,
        activities: []
      }
    ];

    updateTrip(trip.id, {
      daysCount: nextDayNum,
      itinerary: updatedItinerary
    });
    setSelectedDayIndex(trip.itinerary.length);
  };

  const getCategoryColorClass = (cat = '') => {
    switch (cat.toLowerCase()) {
      case 'dining':
        return 'badge-accent';
      case 'stay':
        return 'badge-info';
      case 'adventure':
        return 'badge-rating';
      case 'cultural':
      case 'sightseeing':
      default:
        return 'badge-primary';
    }
  };

  return (
    <div className="itinerary-timeline-wrapper">
      {/* Day Selector Header Bar */}
      <div className="itinerary-day-selector-bar">
        <div className="itinerary-day-tabs">
          {trip.itinerary.map((dayItem, idx) => {
            const isSelected = selectedDayIndex === idx;
            const actCount = dayItem.activities?.length || 0;
            return (
              <button
                key={dayItem.day}
                type="button"
                onClick={() => setSelectedDayIndex(idx)}
                className={`itinerary-day-tab ${isSelected ? 'active' : ''}`}
              >
                <span className="day-tab-num">Day {dayItem.day}</span>
                <span className="day-tab-date">{formatDate(dayItem.date, { month: 'short', day: 'numeric' })}</span>
                <span className="day-tab-count">{actCount} {actCount === 1 ? 'act' : 'acts'}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={handleAddNewDay}
            className="itinerary-add-day-btn"
            title="Add another day to this trip"
          >
            <Plus size={16} />
            <span>Add Day</span>
          </button>
        </div>
      </div>

      {/* Selected Day Info & Action */}
      <div className="itinerary-day-header-row">
        <div>
          <h3 className="itinerary-day-title">
            Day {currentDay.day}: {currentDay.title}
          </h3>
          <p className="itinerary-day-subtitle">
            <Calendar size={14} /> {formatDate(currentDay.date, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}
            <span>Drag items to reorder chronological timeline</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingActivity(null);
            setIsModalOpen(true);
          }}
          className="btn btn-primary btn-sm"
        >
          <Plus size={16} />
          <span>Add Activity</span>
        </button>
      </div>

      {/* Activities Timeline / Reorder List */}
      <div className="itinerary-activities-section">
        {currentActivities.length > 0 ? (
          <Reorder.Group
            axis="y"
            values={currentActivities}
            onReorder={handleReorder}
            className="itinerary-reorder-group"
          >
            <AnimatePresence>
              {currentActivities.map((act) => (
                <Reorder.Item
                  key={act.id}
                  value={act}
                  className={`itinerary-activity-item ${act.completed ? 'completed' : ''}`}
                  whileDrag={{
                    scale: 1.02,
                    boxShadow: "0 12px 28px rgba(23, 32, 28, 0.18)",
                    zIndex: 10
                  }}
                >
                  {/* Drag Handle */}
                  <div className="activity-drag-handle" title="Drag to reorder">
                    <GripVertical size={18} />
                  </div>

                  {/* Completion Toggle */}
                  <button
                    type="button"
                    onClick={() => handleToggleComplete(act)}
                    className="activity-check-btn"
                    aria-label={act.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {act.completed ? (
                      <CheckCircle2 size={20} className="text-success" />
                    ) : (
                      <Circle size={20} className="text-muted" />
                    )}
                  </button>

                  {/* Time Badge */}
                  <div className="activity-time-pill">
                    <Clock size={13} />
                    <span>{act.time || 'Anytime'}</span>
                  </div>

                  {/* Body Info */}
                  <div className="activity-content">
                    <div className="activity-title-row">
                      <h4 className="activity-title">{act.title}</h4>
                      <span className={`badge ${getCategoryColorClass(act.category)}`}>
                        {act.category || 'Sightseeing'}
                      </span>
                    </div>

                    {act.location && (
                      <p className="activity-location">
                        <MapPin size={13} /> {act.location}
                      </p>
                    )}

                    {act.notes && <p className="activity-notes">{act.notes}</p>}
                  </div>

                  {/* Cost Indicator */}
                  {act.cost > 0 && (
                    <div className="activity-cost-badge">
                      <IndianRupee size={12} /> {formatCurrency(act.cost)}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="activity-actions">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingActivity(act);
                        setIsModalOpen(true);
                      }}
                      className="activity-icon-action"
                      title="Edit Activity"
                      aria-label="Edit Activity"
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteActivity(trip.id, selectedDayIndex, act.id)}
                      className="activity-icon-action delete"
                      title="Delete Activity"
                      aria-label="Delete Activity"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        ) : (
          <div className="empty-day-state">
            <Sparkles size={36} className="text-muted mb-2" />
            <h4>No activities planned for Day {currentDay.day}</h4>
            <p className="text-muted mb-4">
              Add iconic sightseeing, dinner bookings, or scenic strolls for this day.
            </p>
            <button
              type="button"
              onClick={() => {
                setEditingActivity(null);
                setIsModalOpen(true);
              }}
              className="btn btn-outline btn-sm"
            >
              <Plus size={16} />
              Add First Activity
            </button>
          </div>
        )}
      </div>

      {/* Activity Add/Edit Modal */}
      <ActivityModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingActivity(null);
        }}
        onSave={handleSaveActivity}
        initialActivity={editingActivity}
        dayNumber={currentDay.day}
      />
    </div>
  );
}
