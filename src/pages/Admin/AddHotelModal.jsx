import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Image as ImageIcon, MapPin, IndianRupee, Star, Sparkles, Building, Check } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const HOTEL_SAMPLE_IMAGES = [
  { label: 'Floating Palace', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Luxury Pool Resort', url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Mountain Chalet', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Heritage Haveli', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Beachfront Villa', url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop' }
];

const STANDARD_AMENITIES = [
  'Lake View',
  'Swimming Pool',
  'Spa & Wellness',
  'Free Breakfast',
  'Rooftop Dining',
  'Private Balcony',
  'Pet Friendly',
  'Free Wi-Fi',
  'Air Conditioning',
  '24/7 Room Service',
  'Valet Parking',
  'Airport Shuttle'
];

export function AddHotelModal({ isOpen, onClose }) {
  const { addHotel, allDestinations } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    destinationId: allDestinations[0]?.id || 'udaipur',
    destinationName: allDestinations[0]?.name || 'Udaipur',
    city: allDestinations[0]?.name || 'Udaipur',
    state: allDestinations[0]?.state || 'Rajasthan',
    country: 'India',
    type: 'Resort',
    category: '5-Star Luxury Resort',
    pricePerNight: '6500',
    originalPrice: '8500',
    rating: '4.85',
    reviewsCount: '240',
    badge: 'Premier Stay',
    tagline: 'Exclusive luxury stay with panoramic views and bespoke hospitality',
    address: 'Central Waterfront Promenade',
    nearLocation: 'City Center, Lake Promenade',
    heroImage: '',
    description: 'Experience authentic luxury, elegant heritage design, and thoughtful modern comforts in a picturesque destination setting.',
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Free Breakfast', 'Rooftop Dining'],
    checkIn: '02:00 PM',
    checkOut: '11:00 AM',
    cancellation: 'Free cancellation up to 24 hours',
    petsAllowed: false
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

  const toggleAmenity = (amenity) => {
    setFormData((prev) => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((a) => a !== amenity)
          : [...prev.amenities, amenity]
      };
    });
  };

  const handleImageSample = (url) => {
    setFormData((prev) => ({ ...prev, heroImage: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide a hotel name.');
      return;
    }

    const heroImage =
      formData.heroImage.trim() ||
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop';

    addHotel({
      name: formData.name.trim(),
      destinationId: formData.destinationId,
      destinationName: formData.destinationName,
      city: formData.city.trim(),
      state: formData.state.trim(),
      country: formData.country.trim() || 'India',
      type: formData.type,
      category: formData.category,
      pricePerNight: Number(formData.pricePerNight) || 4500,
      originalPrice: Number(formData.originalPrice) || Math.round((Number(formData.pricePerNight) || 4500) * 1.25),
      rating: Number(formData.rating) || 4.85,
      reviewsCount: Number(formData.reviewsCount) || 120,
      badge: formData.badge.trim() || 'Premier Stay',
      tagline: formData.tagline.trim(),
      address: formData.address.trim(),
      nearLocation: formData.nearLocation.trim(),
      heroImage,
      gallery: [heroImage],
      description: formData.description.trim(),
      amenities: formData.amenities,
      policies: {
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        cancellation: formData.cancellation,
        petsAllowed: Boolean(formData.petsAllowed)
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
                <Building size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Add New Hotel & Stay</h3>
                <p className="admin-dialog-subtitle">Curate luxury stays, heritage havelis, and boutique retreats</p>
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
                <label className="admin-form-label">Hotel / Property Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Taj Lake Palace, Solang Valley Lodge"
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

            {/* Row 3: Type, Category, Rating */}
            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Property Type</label>
                <select
                  name="type"
                  className="admin-select-input"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Palace">Palace</option>
                  <option value="Resort">Luxury Resort</option>
                  <option value="Haveli">Heritage Haveli</option>
                  <option value="Boutique">Boutique Stay</option>
                  <option value="Chalet">Mountain Chalet</option>
                  <option value="Houseboat">Houseboat</option>
                  <option value="Hotel">Hotel</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Category Label</label>
                <input
                  type="text"
                  name="category"
                  placeholder="e.g. 5-Star Luxury Heritage"
                  className="admin-text-input"
                  value={formData.category}
                  onChange={handleChange}
                />
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

            {/* Row 4: Pricing */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Price Per Night (₹) *</label>
                <div className="admin-input-wrapper">
                  <IndianRupee size={15} className="admin-input-icon" />
                  <input
                    type="number"
                    name="pricePerNight"
                    required
                    placeholder="6500"
                    className="admin-text-input"
                    value={formData.pricePerNight}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Original Price / Before Discount (₹)</label>
                <div className="admin-input-wrapper">
                  <IndianRupee size={15} className="admin-input-icon" />
                  <input
                    type="number"
                    name="originalPrice"
                    placeholder="8500"
                    className="admin-text-input"
                    value={formData.originalPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 5: Badge & Tagline */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Featured Badge</label>
                <input
                  type="text"
                  name="badge"
                  placeholder="e.g. World's Most Romantic Hotel"
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
                  placeholder="e.g. Floating marble palace in the middle of Lake Pichola"
                  className="admin-text-input"
                  value={formData.tagline}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 6: Address & Landmark */}
            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. Lake Pichola, Udaipur, Rajasthan 313001"
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
                  placeholder="e.g. In the center of Lake Pichola, Boat from Ghat"
                  className="admin-text-input"
                  value={formData.nearLocation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 7: Hero Image */}
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
                {HOTEL_SAMPLE_IMAGES.map((sample, idx) => (
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

            {/* Row 8: Description */}
            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea
                name="description"
                rows={3}
                placeholder="Describe the hotel ambiance, heritage, suites, dining, and scenic views..."
                className="admin-textarea-input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Row 9: Amenities Multi-Select Chips */}
            <div className="admin-form-group">
              <label className="admin-form-label">Amenities & Features</label>
              <div className="admin-amenity-select-grid">
                {STANDARD_AMENITIES.map((amenity) => {
                  const isSelected = formData.amenities.includes(amenity);
                  return (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => toggleAmenity(amenity)}
                      className={`admin-amenity-toggle-btn ${isSelected ? 'selected' : ''}`}
                    >
                      <span className={`admin-checkbox-mini ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <Check size={11} />}
                      </span>
                      <span>{amenity}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 10: Policies */}
            <div className="admin-form-grid-3">
              <div className="admin-form-group">
                <label className="admin-form-label">Check-In Time</label>
                <input
                  type="text"
                  name="checkIn"
                  placeholder="02:00 PM"
                  className="admin-text-input"
                  value={formData.checkIn}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Check-Out Time</label>
                <input
                  type="text"
                  name="checkOut"
                  placeholder="11:00 AM"
                  className="admin-text-input"
                  value={formData.checkOut}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Pet Friendly</label>
                <label className="admin-checkbox-label mt-2 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="petsAllowed"
                    checked={formData.petsAllowed}
                    onChange={handleChange}
                    className="admin-checkbox-input"
                  />
                  <span className="text-sm font-medium">Pets Allowed</span>
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
                <Plus size={16} /> Add Hotel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
