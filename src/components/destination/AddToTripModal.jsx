import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Check, Calendar, ArrowRight, MapPin } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useTrips } from '../../context/TripContext';
import { useToast } from '../../context/ToastContext';
import { formatCurrency } from '../../utils/formatCurrency';

export function AddToTripModal({
  isOpen,
  onClose,
  destination,
  attraction = null
}) {
  const { trips, addActivity } = useTrips();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [selectedTripId, setSelectedTripId] = useState('');
  const [selectedDay, setSelectedDay] = useState(0);

  const activeTrips = trips.filter((t) => t.status !== 'completed');

  const handleAddToTrip = () => {
    if (!selectedTripId) return;
    const targetTrip = trips.find((t) => t.id === selectedTripId);
    if (!targetTrip) return;

    if (attraction) {
      addActivity(selectedTripId, selectedDay, {
        title: attraction.name,
        category: attraction.category || 'Sightseeing',
        cost: attraction.entryFee || 0,
        location: destination?.name ? `${attraction.name}, ${destination.name}` : attraction.name,
        notes: attraction.description || '',
        time: attraction.timeSlot || '10:00 AM'
      });
    } else if (destination) {
      // Add first attraction or general sightseeing item
      addActivity(selectedTripId, selectedDay, {
        title: `Explore ${destination.name}`,
        category: 'Sightseeing',
        cost: 0,
        location: `${destination.name}, ${destination.country}`,
        notes: destination.tagline || '',
        time: '10:00 AM'
      });
    }

    onClose();
    showToast(`Added to "${targetTrip.title}" Day ${selectedDay + 1}`, 'success');
  };

  const handleCreateNew = () => {
    onClose();
    navigate('/create-trip', { state: { prefillDestinationId: destination?.id } });
  };

  const currentSelectedTrip = trips.find((t) => t.id === selectedTripId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={attraction ? `Add "${attraction.name}" to Trip` : `Add ${destination?.name || 'Destination'} to Trip`}
      subtitle="Select an ongoing itinerary or start a brand new adventure"
      maxWidth="500px"
    >
      <div className="add-trip-modal-content">
        {activeTrips.length > 0 ? (
          <div className="form-group mb-4">
            <label className="form-label">Select Destination Trip</label>
            <div className="trip-picker-list">
              {activeTrips.map((trip) => {
                const isSelected = selectedTripId === trip.id;
                return (
                  <div
                    key={trip.id}
                    onClick={() => {
                      setSelectedTripId(trip.id);
                      setSelectedDay(0);
                    }}
                    className={`trip-picker-item ${isSelected ? 'selected' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={trip.coverImage} alt={trip.title} className="trip-picker-thumb" />
                    <div className="trip-picker-info">
                      <h4 className="trip-picker-title">{trip.title}</h4>
                      <p className="trip-picker-dates">
                        <Calendar size={12} /> {trip.startDate} · {trip.daysCount} Days
                      </p>
                    </div>
                    {isSelected && (
                      <div className="trip-picker-check">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Day Selector if trip is selected */}
            {currentSelectedTrip && currentSelectedTrip.itinerary?.length > 1 && (
              <div className="form-group mt-3">
                <label className="form-label">Select Itinerary Day</label>
                <div className="day-chips-grid">
                  {currentSelectedTrip.itinerary.map((dayItem, idx) => (
                    <button
                      key={dayItem.day}
                      type="button"
                      onClick={() => setSelectedDay(idx)}
                      className={`chip ${selectedDay === idx ? 'active-accent' : ''}`}
                    >
                      Day {dayItem.day} ({dayItem.title || 'Day Plan'})
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions-row mt-4">
              <button
                type="button"
                onClick={handleAddToTrip}
                disabled={!selectedTripId}
                className="btn btn-primary w-full"
              >
                <Check size={16} />
                Add to Selected Trip
              </button>
            </div>
          </div>
        ) : (
          <div className="no-trips-prompt">
            <p className="text-muted mb-3">You don't have any active trips planned yet.</p>
          </div>
        )}

        <div className="modal-divider-text">
          <span>OR</span>
        </div>

        <button
          type="button"
          onClick={handleCreateNew}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          Create New Trip for {destination?.name || 'this Destination'}
        </button>
      </div>
    </Modal>
  );
}
