import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Tag, IndianRupee, FileText, Check } from 'lucide-react';
import { Modal } from '../common/Modal';

const ACTIVITY_CATEGORIES = [
  'Sightseeing',
  'Dining',
  'Stay',
  'Cultural',
  'Adventure',
  'Leisure',
  'Shopping',
  'Transport'
];

export function ActivityModal({
  isOpen,
  onClose,
  onSave,
  initialActivity = null,
  dayNumber = 1
}) {
  const [formData, setFormData] = useState({
    title: '',
    time: '10:00 AM',
    category: 'Sightseeing',
    cost: '',
    location: '',
    notes: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialActivity) {
      setFormData({
        title: initialActivity.title || '',
        time: initialActivity.time || '10:00 AM',
        category: initialActivity.category || 'Sightseeing',
        cost: initialActivity.cost !== undefined ? initialActivity.cost : '',
        location: initialActivity.location || '',
        notes: initialActivity.notes || ''
      });
    } else {
      setFormData({
        title: '',
        time: '10:00 AM',
        category: 'Sightseeing',
        cost: '',
        location: '',
        notes: ''
      });
    }
    setError('');
  }, [initialActivity, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('Activity title is required');
      return;
    }

    onSave({
      ...formData,
      cost: Number(formData.cost) || 0
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialActivity ? 'Edit Activity' : `Add Activity for Day ${dayNumber}`}
      subtitle="Organize your day with precise timings, venues, and cost estimates"
      maxWidth="500px"
    >
      <form onSubmit={handleSubmit} className="activity-form">
        {/* Title */}
        <div className="form-group">
          <label className="form-label" htmlFor="act-title">
            Activity Title *
          </label>
          <input
            id="act-title"
            type="text"
            className="form-control"
            placeholder="e.g. Visit City Palace & Crystal Gallery"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              if (error) setError('');
            }}
            autoFocus
          />
          {error && <span className="form-error">{error}</span>}
        </div>

        {/* Time & Category */}
        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label" htmlFor="act-time">
              <Clock size={14} /> Time Slot
            </label>
            <input
              id="act-time"
              type="text"
              className="form-control"
              placeholder="e.g. 10:30 AM"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="act-cat">
              <Tag size={14} /> Category
            </label>
            <select
              id="act-cat"
              className="form-control"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {ACTIVITY_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location & Cost */}
        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label" htmlFor="act-loc">
              <MapPin size={14} /> Location / Landmark
            </label>
            <input
              id="act-loc"
              type="text"
              className="form-control"
              placeholder="e.g. Old City, Lake Pichola"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="act-cost">
              <IndianRupee size={14} /> Est. Cost (₹)
            </label>
            <input
              id="act-cost"
              type="number"
              min="0"
              className="form-control"
              placeholder="0"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            />
          </div>
        </div>

        {/* Notes */}
        <div className="form-group">
          <label className="form-label" htmlFor="act-notes">
            <FileText size={14} /> Notes & Tips (Optional)
          </label>
          <textarea
            id="act-notes"
            rows="2"
            className="form-control"
            placeholder="e.g. Book audio guide at counter 2; carry sunglasses."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>

        {/* Action Buttons */}
        <div className="modal-actions-row">
          <button type="button" onClick={onClose} className="btn btn-ghost">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            <Check size={16} />
            {initialActivity ? 'Update Activity' : 'Add Activity'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
