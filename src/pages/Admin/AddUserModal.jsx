import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, Mail, Lock, User, MapPin, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useAdmin } from '../../context/AdminContext';

export function AddUserModal({ isOpen, onClose, onUserAdded }) {
  const { showToast } = useToast();
  const { logAdminAction } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: 'password123',
    role: 'Travel Explorer',
    homeCity: 'Mumbai, India',
    bio: 'Passionate travel enthusiast exploring new horizons.',
    isVerified: true
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide user full name and email address.');
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('tripcanvas_registered_users') || '[]');
      if (existing.some((u) => u.email.toLowerCase() === formData.email.toLowerCase().trim())) {
        setError('A user with this email address already exists.');
        return;
      }

      const newUser = {
        id: `user_${Date.now()}`,
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password || 'password123',
        role: formData.role,
        homeCity: formData.homeCity,
        bio: formData.bio,
        preferredCurrency: 'INR',
        interests: ['Culture', 'Nature', 'Photography'],
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        isVerified: formData.isVerified
      };

      const updated = [newUser, ...existing];
      localStorage.setItem('tripcanvas_registered_users', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));

      logAdminAction('Created User Account', `Added new user: ${newUser.name} (${newUser.email})`);
      showToast(`User account for ${newUser.name} created!`, 'success');
      if (onUserAdded) onUserAdded(newUser);
      onClose();
    } catch (err) {
      setError('Failed to create user account.');
    }
  };

  return (
    <AnimatePresence>
      <div className="admin-modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="admin-dialog-card admin-modal-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="admin-dialog-header">
            <div className="flex items-center gap-2.5">
              <div className="admin-dialog-icon">
                <UserPlus size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Create Explorer Account</h3>
                <p className="admin-dialog-subtitle">Manually register a verified traveler or administrator</p>
              </div>
            </div>
            <button onClick={onClose} className="admin-modal-close" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="admin-dialog-body">
            {error && (
              <div className="admin-error-banner mb-4">
                <span>{error}</span>
              </div>
            )}

            <div className="admin-form-group">
              <label className="admin-form-label">Full Name *</label>
              <div className="admin-input-wrapper">
                <User size={16} className="admin-input-icon" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Radhika Sharma"
                  className="admin-text-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Email Address *</label>
              <div className="admin-input-wrapper">
                <Mail size={16} className="admin-input-icon" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. radhika@example.com"
                  className="admin-text-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-grid-2">
              <div className="admin-form-group">
                <label className="admin-form-label">Initial Password</label>
                <div className="admin-input-wrapper">
                  <Lock size={16} className="admin-input-icon" />
                  <input
                    type="text"
                    name="password"
                    placeholder="password123"
                    className="admin-text-input"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Account Role</label>
                <select
                  name="role"
                  className="admin-select-input"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Travel Explorer">Travel Explorer</option>
                  <option value="VIP Explorer">VIP Explorer</option>
                  <option value="Wanderer">Wanderer</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Home City</label>
              <div className="admin-input-wrapper">
                <MapPin size={16} className="admin-input-icon" />
                <input
                  type="text"
                  name="homeCity"
                  placeholder="e.g. Bengaluru, India"
                  className="admin-text-input"
                  value={formData.homeCity}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Bio / Profile Note</label>
              <textarea
                name="bio"
                rows={2}
                placeholder="Short bio about the user..."
                className="admin-textarea-input"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            <div className="admin-checkbox-group">
              <label className="admin-checkbox-label">
                <input
                  type="checkbox"
                  name="isVerified"
                  checked={formData.isVerified}
                  onChange={handleChange}
                />
                <span>Email Already Verified (Skip 6-digit OTP check)</span>
              </label>
            </div>

            <div className="admin-dialog-footer">
              <button type="button" onClick={onClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm flex items-center gap-2">
                <UserPlus size={16} /> Create User
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
