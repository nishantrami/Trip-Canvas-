import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Image as ImageIcon, MapPin, IndianRupee, Star, Tag } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

export function EditDestinationModal({ destination, isOpen, onClose }) {
  const { updateDestination } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    state: '',
    country: 'India',
    category: 'Historical',
    rating: '4.8',
    reviewsCount: '150',
    averageBudget: '4500',
    budgetTier: 'Moderate',
    heroImage: '',
    tagline: '',
    description: '',
    bestTime: 'October to March',
    idealDuration: '3 - 4 Days',
    tags: '',
    isFeatured: false
  });

  useEffect(() => {
    if (destination) {
      setFormData({
        name: destination.name || '',
        state: destination.state || '',
        country: destination.country || 'India',
        category: destination.category || 'Historical',
        rating: String(destination.rating || '4.8'),
        reviewsCount: String(destination.reviewsCount || '150'),
        averageBudget: String(destination.averageBudget || '4500'),
        budgetTier: destination.budgetTier || 'Moderate',
        heroImage: destination.heroImage || '',
        tagline: destination.tagline || '',
        description: destination.description || '',
        bestTime: destination.bestTime || 'October to March',
        idealDuration: destination.idealDuration || '3 - 4 Days',
        tags: Array.isArray(destination.tags) ? destination.tags.join(', ') : (destination.tags || ''),
        isFeatured: Boolean(destination.isFeatured)
      });
    }
  }, [destination]);

  if (!isOpen || !destination) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDestination(destination.id, {
      ...formData,
      tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
      averageBudget: Number(formData.averageBudget) || 4500,
      rating: Number(formData.rating) || 4.8,
      reviewsCount: Number(formData.reviewsCount) || 120
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="admin-modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="admin-dialog-card admin-modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="admin-dialog-header">
            <div className="flex items-center gap-2.5">
              <div className="admin-dialog-icon">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Edit Destination: {destination.name}</h3>
                <p className="admin-dialog-subtitle">Update destination details, media, and travel metrics</p>
              </div>
            </div>
            <button onClick={onClose} className="admin-modal-close" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="admin-dialog-body">
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Destination Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="admin-text-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">State / Region</label>
                <input
                  type="text"
                  name="state"
                  required
                  className="admin-text-input"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Primary Category</label>
                <select
                  name="category"
                  className="admin-select-input"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Historical">Historical & Heritage</option>
                  <option value="Beach">Beach & Coastal</option>
                  <option value="Mountain">Mountain & Snow</option>
                  <option value="Wildlife">Wildlife & Nature</option>
                  <option value="Spiritual">Spiritual & Temple</option>
                  <option value="City">Urban & Cultural</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Daily Budget (₹ / day)</label>
                <div className="admin-input-wrapper">
                  <IndianRupee size={15} className="admin-input-icon" />
                  <input
                    type="number"
                    name="averageBudget"
                    className="admin-text-input"
                    value={formData.averageBudget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Rating (★)</label>
                <div className="admin-input-wrapper">
                  <Star size={15} className="admin-input-icon text-amber" />
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    name="rating"
                    className="admin-text-input"
                    value={formData.rating}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Hero Cover Image URL</label>
              <div className="admin-input-wrapper">
                <ImageIcon size={16} className="admin-input-icon" />
                <input
                  type="url"
                  name="heroImage"
                  className="admin-text-input"
                  value={formData.heroImage}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formData.heroImage && (
              <div className="admin-image-preview-box">
                <img src={formData.heroImage} alt="Cover preview" className="admin-image-preview-thumb" />
                <span className="text-xs text-muted">Active hero photography</span>
              </div>
            )}

            <div className="admin-form-group">
              <label className="admin-form-label">Editorial Tagline</label>
              <input
                type="text"
                name="tagline"
                className="admin-text-input"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea
                name="description"
                rows={3}
                className="admin-textarea-input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Best Visiting Season</label>
                <input
                  type="text"
                  name="bestTime"
                  className="admin-text-input"
                  value={formData.bestTime}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Recommended Duration</label>
                <input
                  type="text"
                  name="idealDuration"
                  className="admin-text-input"
                  value={formData.idealDuration}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Tags (comma separated)</label>
                <div className="admin-input-wrapper">
                  <Tag size={15} className="admin-input-icon" />
                  <input
                    type="text"
                    name="tags"
                    className="admin-text-input"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="admin-checkbox-group">
              <label className="admin-checkbox-label">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                />
                <span>Feature on Homepage Showcase</span>
              </label>
            </div>

            <div className="admin-dialog-footer">
              <button type="button" onClick={onClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm flex items-center gap-2">
                <Check size={16} /> Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
