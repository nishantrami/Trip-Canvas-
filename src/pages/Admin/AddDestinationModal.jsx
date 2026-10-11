import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Image as ImageIcon, MapPin, IndianRupee, Star, Sparkles, Tag, Compass } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

export function AddDestinationModal({ isOpen, onClose }) {
  const { addDestination, categories } = useAdmin();

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
    tags: 'Culture, Heritage, Sightseeing',
    isFeatured: true
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleImageSample = (url) => {
    setFormData((prev) => ({ ...prev, heroImage: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide a destination name.');
      return;
    }
    if (!formData.heroImage.trim()) {
      formData.heroImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop';
    }

    addDestination({
      ...formData,
      tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
      averageBudget: Number(formData.averageBudget) || 4500,
      rating: Number(formData.rating) || 4.8,
      reviewsCount: Number(formData.reviewsCount) || 120
    });

    onClose();
  };

  const SAMPLE_IMAGES = [
    { label: 'Palace / Heritage', url: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Mountain / Snow', url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Tropical Beach', url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Wildlife Safari', url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1200&auto=format&fit=crop' }
  ];

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
          {/* Header */}
          <div className="admin-dialog-header">
            <div className="flex items-center gap-2.5">
              <div className="admin-dialog-icon">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Add New Destination</h3>
                <p className="admin-dialog-subtitle">Expand the TripCanvas travel catalog with curated destinations</p>
              </div>
            </div>
            <button onClick={onClose} className="admin-modal-close" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="admin-dialog-body">
            {error && (
              <div className="admin-error-banner mb-4">
                <span>{error}</span>
              </div>
            )}

            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Destination Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Munnar, Ladakh, Varanasi"
                  className="admin-text-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">State / Region *</label>
                <input
                  type="text"
                  name="state"
                  required
                  placeholder="e.g. Kerala, Rajasthan, Himachal Pradesh"
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
                    placeholder="4500"
                    className="admin-text-input"
                    value={formData.averageBudget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Initial Rating (★)</label>
                <div className="admin-input-wrapper">
                  <Star size={15} className="admin-input-icon text-amber" />
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    name="rating"
                    placeholder="4.8"
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
                  placeholder="https://images.unsplash.com/photo-..."
                  className="admin-text-input"
                  value={formData.heroImage}
                  onChange={handleChange}
                />
              </div>
              <div className="admin-quick-samples-row mt-2">
                <span className="text-xs text-muted">Quick presets:</span>
                {SAMPLE_IMAGES.map((sample) => (
                  <button
                    key={sample.label}
                    type="button"
                    onClick={() => handleImageSample(sample.url)}
                    className="admin-sample-tag-btn"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>
            </div>

            {formData.heroImage && (
              <div className="admin-image-preview-box">
                <img src={formData.heroImage} alt="Cover preview" className="admin-image-preview-thumb" />
                <span className="text-xs text-muted">Image live preview</span>
              </div>
            )}

            <div className="admin-form-group">
              <label className="admin-form-label">Editorial Tagline</label>
              <input
                type="text"
                name="tagline"
                placeholder="e.g. Rolling Tea Gardens & Emerald Fog Valley"
                className="admin-text-input"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Detailed Destination Description</label>
              <textarea
                name="description"
                rows={3}
                placeholder="Describe the atmosphere, cultural highlights, and must-see locations..."
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
                  placeholder="e.g. October to March"
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
                  placeholder="e.g. 3 - 4 Days"
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
                    placeholder="Lakes, Nature, Culture"
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
                <span>Feature on Homepage & Recommended Showcase</span>
              </label>
            </div>

            <div className="admin-dialog-footer">
              <button type="button" onClick={onClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm flex items-center gap-2">
                <Plus size={16} /> Add Destination
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
