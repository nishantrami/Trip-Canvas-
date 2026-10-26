import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Image as ImageIcon, MapPin, IndianRupee, Star, Utensils, Check } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const RESTAURANT_SAMPLE_IMAGES = [
  { label: 'Lakeside Waterfront', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Fine Dining Interior', url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Open-Air Rooftop', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Beachside Cafe & Lounge', url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Heritage Courtyard', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop' }
];

const STANDARD_CUISINES = [
  'Authentic Rajasthani',
  'North Indian',
  'Mughlai',
  'Seafood',
  'South Indian',
  'Gujarati Thali',
  'Italian & Cafe',
  'Continental',
  'Asian & Japanese',
  'Pure Vegetarian'
];

export function AddRestaurantModal({ isOpen, onClose }) {
  const { addRestaurant, allDestinations } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    destinationId: allDestinations[0]?.id || 'udaipur',
    destinationName: allDestinations[0]?.name || 'Udaipur',
    city: allDestinations[0]?.name || 'Udaipur',
    state: allDestinations[0]?.state || 'Rajasthan',
    country: 'India',
    priceRange: '₹₹',
    costForTwo: '1800',
    rating: '4.90',
    reviewsCount: '320',
    badge: 'Chef Recommended',
    tagline: 'Waterfront dining with panoramic scenic views and authentic flavors',
    address: 'Near City Promenade, Old City',
    nearLocation: 'Promenade Waterfront, opposite Palace',
    heroImage: '',
    description: 'A celebrated dining spot offering breathtaking views, romantic candlelit ambiance, and unforgettable regional culinary artistry.',
    cuisines: ['Authentic Rajasthani', 'North Indian'],
    timing: '12:30 PM - 03:30 PM, 06:30 PM - 10:30 PM',
    specialties: 'Smoked Laal Maas, Govind Gatta Curry, Garlic Naan',
    features: 'Lakeside Seating, Candlelight Dinner, Full Bar',
    phone: '+91 98290 12345',
    dressCode: 'Smart Casual',
    alcoholServed: true
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

  const handleDestinationChange = (e) => {
    const destId = e.target.value;
    const dest = allDestinations.find((d) => d.id === destId);
    setFormData((prev) => ({
      ...prev,
      destinationId: destId,
      destinationName: dest ? dest.name : destId,
      city: dest ? dest.name : prev.city,
      state: dest ? dest.state : prev.state
    }));
  };

  const toggleCuisine = (cuisine) => {
    setFormData((prev) => {
      const exists = prev.cuisines.includes(cuisine);
      return {
        ...prev,
        cuisines: exists
          ? prev.cuisines.filter((c) => c !== cuisine)
          : [...prev.cuisines, cuisine]
      };
    });
  };

  const handleImageSample = (url) => {
    setFormData((prev) => ({ ...prev, heroImage: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide a restaurant name.');
      return;
    }

    const heroImage =
      formData.heroImage.trim() ||
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop';

    addRestaurant({
      name: formData.name.trim(),
      destinationId: formData.destinationId,
      destinationName: formData.destinationName,
      city: formData.city.trim(),
      state: formData.state.trim(),
      country: formData.country.trim() || 'India',
      priceRange: formData.priceRange,
      costForTwo: Number(formData.costForTwo) || 1600,
      rating: Number(formData.rating) || 4.85,
      reviewsCount: Number(formData.reviewsCount) || 120,
      badge: formData.badge.trim() || 'Chef Recommended',
      tagline: formData.tagline.trim(),
      address: formData.address.trim(),
      nearLocation: formData.nearLocation.trim(),
      heroImage,
      gallery: [heroImage],
      description: formData.description.trim(),
      cuisines: formData.cuisines.length > 0 ? formData.cuisines : ['North Indian', 'Continental'],
      timing: formData.timing.trim(),
      specialties: formData.specialties.split(',').map((s) => s.trim()).filter(Boolean),
      features: formData.features.split(',').map((s) => s.trim()).filter(Boolean),
      phone: formData.phone.trim(),
      policies: {
        reservationDeposit: 'Zero advance fee',
        dressCode: formData.dressCode,
        alcoholServed: Boolean(formData.alcoholServed)
      }
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
          {/* Header */}
          <div className="admin-dialog-header">
            <div className="flex items-center gap-2.5">
              <div className="admin-dialog-icon">
                <Utensils size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Add New Restaurant & Dining</h3>
                <p className="admin-dialog-subtitle">Curate authentic eateries, scenic rooftops, and heritage dining</p>
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

            {/* Row 1: Name and Destination */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Restaurant Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ambrai - Amet Haveli, Thalassa"
                  className="admin-text-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Associated Destination *</label>
                <select
                  name="destinationId"
                  className="admin-select-input"
                  value={formData.destinationId}
                  onChange={handleDestinationChange}
                >
                  {allDestinations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.state})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: City, State, Country */}
            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Udaipur"
                  className="admin-text-input"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">State / Region</label>
                <input
                  type="text"
                  name="state"
                  placeholder="e.g. Rajasthan"
                  className="admin-text-input"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="India"
                  className="admin-text-input"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 3: Pricing & Cost for Two */}
            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Price Range Tier</label>
                <select
                  name="priceRange"
                  className="admin-select-input"
                  value={formData.priceRange}
                  onChange={handleChange}
                >
                  <option value="₹">₹ (Budget Friendly)</option>
                  <option value="₹₹">₹₹ (Moderate / Premium)</option>
                  <option value="₹₹₹">₹₹₹ (Luxury / Fine Dining)</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Approx Cost for Two (₹) *</label>
                <div className="admin-input-wrapper">
                  <IndianRupee size={15} className="admin-input-icon" />
                  <input
                    type="number"
                    name="costForTwo"
                    required
                    placeholder="1800"
                    className="admin-text-input"
                    value={formData.costForTwo}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Rating & Reviews</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="admin-input-wrapper">
                    <Star size={14} className="admin-input-icon text-amber" />
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max="5"
                      name="rating"
                      placeholder="4.9"
                      className="admin-text-input"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="number"
                    name="reviewsCount"
                    placeholder="Reviews"
                    className="admin-text-input"
                    value={formData.reviewsCount}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Badge & Tagline */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Featured Badge</label>
                <input
                  type="text"
                  name="badge"
                  placeholder="e.g. Best Lake Sunset View, Top Rooftop"
                  className="admin-text-input"
                  value={formData.badge}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  placeholder="e.g. Water-level lakeside dining overlooking City Palace"
                  className="admin-text-input"
                  value={formData.tagline}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 5: Address & Landmark */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. Amet Haveli, Outside Chandpole, Udaipur"
                  className="admin-text-input"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Near Location / Landmark</label>
                <input
                  type="text"
                  name="nearLocation"
                  placeholder="e.g. Hanuman Ghat, right opposite City Palace"
                  className="admin-text-input"
                  value={formData.nearLocation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 6: Hero Image */}
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
              <div className="admin-quick-samples-row mt-2 flex flex-wrap gap-2 items-center">
                <span className="text-xs text-muted">Quick presets:</span>
                {RESTAURANT_SAMPLE_IMAGES.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleImageSample(sample.url)}
                    className="admin-sample-tag-btn"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 7: Description */}
            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea
                name="description"
                rows={3}
                placeholder="Describe the dining concept, scenery, signature recipes, and ambience..."
                className="admin-textarea-input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Row 8: Cuisines Multi-Select Chips */}
            <div className="admin-form-group">
              <label className="admin-form-label">Cuisines Served</label>
              <div className="admin-amenity-select-grid">
                {STANDARD_CUISINES.map((cuisine) => {
                  const isSelected = formData.cuisines.includes(cuisine);
                  return (
                    <button
                      key={cuisine}
                      type="button"
                      onClick={() => toggleCuisine(cuisine)}
                      className={`admin-amenity-toggle-btn ${isSelected ? 'selected' : ''}`}
                    >
                      <span className={`admin-checkbox-mini ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <Check size={11} />}
                      </span>
                      <span>{cuisine}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 9: Timing, Specialties, Phone */}
            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Opening Timings</label>
                <input
                  type="text"
                  name="timing"
                  placeholder="12:30 PM - 10:30 PM"
                  className="admin-text-input"
                  value={formData.timing}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Signature Specialties (comma-separated)</label>
                <input
                  type="text"
                  name="specialties"
                  placeholder="Laal Maas, Dal Baati, Tandoori Platter"
                  className="admin-text-input"
                  value={formData.specialties}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Contact Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 98290 12345"
                  className="admin-text-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 10: Features & Alcohol Policy */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Ambience Features (comma-separated)</label>
                <input
                  type="text"
                  name="features"
                  placeholder="Lakeside Seating, Candlelight, Live Music, Full Bar"
                  className="admin-text-input"
                  value={formData.features}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Alcohol & Bar Service</label>
                <label className="admin-checkbox-label mt-2 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="alcoholServed"
                    checked={formData.alcoholServed}
                    onChange={handleChange}
                    className="admin-checkbox-input"
                  />
                  <span className="text-sm font-medium">Alcohol & Cocktails Served</span>
                </label>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="admin-dialog-footer">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline btn-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-md flex items-center gap-2"
              >
                <Plus size={16} /> Add Restaurant
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
