import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Mail, User, MapPin, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useAdmin } from '../../context/AdminContext';

export function EditUserModal({ user, isOpen, onClose, onUserUpdated }) {
  const { showToast } = useToast();
  const { logAdminAction } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Travel Explorer',
    homeCity: '',
    bio: '',
    isVerified: true
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        role: user.role || 'Travel Explorer',
        homeCity: user.homeCity || '',
        bio: user.bio || '',
        isVerified: Boolean(user.isVerified)
      });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const existing = JSON.parse(localStorage.getItem('tripcanvas_registered_users') || '[]');
      const updated = existing.map((u) => {
        if (u.id === user.id) {
          return {
            ...u,
            name: formData.name.trim(),
            email: formData.email.toLowerCase().trim(),
            role: formData.role,
            homeCity: formData.homeCity,
            bio: formData.bio,
            isVerified: formData.isVerified
          };
        }
        return u;
      });

      localStorage.setItem('tripcanvas_registered_users', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));

      logAdminAction('Updated User Account', `Modified account profile for ${formData.name}`);
      showToast(`User profile updated successfully`, 'success');
      if (onUserUpdated) onUserUpdated();
      onClose();
    } catch (err) {
      showToast('Failed to update user', 'error');
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
                <User size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="admin-dialog-title">Edit Explorer: {user.name}</h3>
                <p className="admin-dialog-subtitle">Update traveler profile, privileges, and verification status</p>
              </div>
            </div>
            <button onClick={onClose} className="admin-modal-close" aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="admin-dialog-body">
            <div className="admin-form-group">
              <label className="admin-form-label">Full Name</label>
              <div className="admin-input-wrapper">
                <User size={16} className="admin-input-icon" />
                <input
                  type="text"
                  name="name"
                  required
                  className="admin-text-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Email Address</label>
              <div className="admin-input-wrapper">
                <Mail size={16} className="admin-input-icon" />
                <input
                  type="email"
                  name="email"
                  required
                  className="admin-text-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Platform Role</label>
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

            <div className="admin-form-group">
              <label className="admin-form-label">Home City</label>
              <div className="admin-input-wrapper">
                <MapPin size={16} className="admin-input-icon" />
                <input
                  type="text"
                  name="homeCity"
                  className="admin-text-input"
                  value={formData.homeCity}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Bio / Profile Notes</label>
              <textarea
                name="bio"
                rows={2}
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
                <span>Email Account Verified</span>
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
