import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Edit2,
  Check,
  LogOut,
  Sparkles,
  Compass,
  Layers,
  IndianRupee,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTrips } from '../context/TripContext';
import { useFavorites } from '../context/FavoriteContext';
import { INTEREST_TAGS } from '../data/destinations';
import { formatCurrency } from '../utils/formatCurrency';
import { getInitials } from '../utils/helpers';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';

export function Profile() {
  const { user, updateUserProfile, logout } = useAuth();
  const { trips } = useTrips();
  const { favoritesCount } = useFavorites();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Nishant Patel',
    bio: user?.bio || 'Passionate globetrotter, photographer & culture enthusiast.',
    homeCity: user?.homeCity || 'Ahmedabad, India',
    preferredCurrency: user?.preferredCurrency || 'INR',
    interests: user?.interests || ['Culture', 'Photography', 'Historical', 'Local Food']
  });

  const totalDaysPlanned = trips.reduce((acc, t) => acc + (t.daysCount || 0), 0);
  const totalBudgetManaged = trips.reduce((acc, t) => acc + (t.budget?.total || 0), 0);

  const toggleInterest = (tag) => {
    if (!isEditing) return;
    setFormData((prev) => {
      const exists = prev.interests.includes(tag);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== tag)
          : [...prev.interests, tag]
      };
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
    setIsEditing(false);
    showToast('Profile updated successfully!', 'success');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="profile-page section-padding"
    >
      <div className="container container-narrow">
        {/* Profile Header Card */}
        <div className="card profile-hero-card mb-8">
          <div className="profile-hero-cover" />

          <div className="profile-hero-body">
            <div className="profile-avatar-row">
              {user?.avatar && !user.avatar.includes('photo-1534528741775') ? (
                <img
                  src={user.avatar}
                  alt={user?.name}
                  className="profile-avatar-large"
                />
              ) : (
                <div className="profile-avatar-badge-large" title={user?.name}>
                  <span>{getInitials(user?.name || 'Traveler')}</span>
                </div>
              )}

              <div className="profile-hero-actions">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-outline btn-sm"
                  >
                    <Edit2 size={14} /> Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleSaveProfile}
                    className="btn btn-primary btn-sm"
                  >
                    <Check size={14} /> Save Changes
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm"
                  title="Sign out of your account"
                >
                  <LogOut size={14} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            <div className="profile-title-block mt-4">
              <div className="flex items-center gap-2">
                <h1 className="heading-2">{user?.name || 'Traveler'}</h1>
                <span className="badge badge-accent">{user?.role || 'Explorer'}</span>
              </div>
              <p className="text-muted text-sm mt-1 flex items-center gap-3">
                <span>
                  <Mail size={13} className="inline mr-1" /> {user?.email}
                </span>
                <span>
                  <MapPin size={13} className="inline mr-1" /> {user?.homeCity || 'India'}
                </span>
                <span>
                  <Calendar size={13} className="inline mr-1" /> Joined {user?.joinedDate || '2024'}
                </span>
              </p>
              <p className="profile-bio-text mt-3">{user?.bio}</p>
            </div>
          </div>
        </div>

        {/* Lifetime Travel Stats Grid */}
        <div className="profile-stats-grid mb-8">
          <div className="card stat-box-p p-5">
            <Compass size={22} className="text-accent mb-2" />
            <span className="text-xs text-muted uppercase">Trips Planned</span>
            <h3 className="text-2xl font-bold mt-1">{trips.length}</h3>
          </div>

          <div className="card stat-box-p p-5">
            <Calendar size={22} className="text-accent mb-2" />
            <span className="text-xs text-muted uppercase">Days of Travel</span>
            <h3 className="text-2xl font-bold mt-1">{totalDaysPlanned} Days</h3>
          </div>

          <div className="card stat-box-p p-5">
            <Heart size={22} className="text-accent mb-2" />
            <span className="text-xs text-muted uppercase">Saved Wishlist</span>
            <h3 className="text-2xl font-bold mt-1">{favoritesCount} Places</h3>
          </div>

          <div className="card stat-box-p p-5">
            <IndianRupee size={22} className="text-accent mb-2" />
            <span className="text-xs text-muted uppercase">Budget Managed</span>
            <h3 className="text-2xl font-bold mt-1">{formatCurrency(totalBudgetManaged)}</h3>
          </div>
        </div>

        {/* Edit Details or Preferences Card */}
        <div className="card p-8 mb-8">
          <h3 className="heading-3 mb-4">
            <ShieldCheck size={18} /> Travel Preferences & Identity
          </h3>

          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="profile-edit-form">
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="user-name">Full Name</label>
                <input
                  id="user-name"
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label" htmlFor="user-bio">Bio / Traveler Statement</label>
                <textarea
                  id="user-bio"
                  rows="3"
                  className="form-control"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>

              <div className="form-row-2 mb-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="user-city">Home City</label>
                  <input
                    id="user-city"
                    type="text"
                    className="form-control"
                    value={formData.homeCity}
                    onChange={(e) => setFormData({ ...formData, homeCity: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="user-curr">Currency Preference</label>
                  <select
                    id="user-curr"
                    className="form-control"
                    value={formData.preferredCurrency}
                    onChange={(e) => setFormData({ ...formData, preferredCurrency: e.target.value })}
                  >
                    <option value="INR">INR (₹ - Indian Rupee)</option>
                    <option value="USD">USD ($ - US Dollar)</option>
                    <option value="EUR">EUR (€ - Euro)</option>
                  </select>
                </div>
              </div>

              <div className="form-group mb-6">
                <label className="form-label mb-2">Favorite Travel Themes (Click to toggle)</label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_TAGS.map((tag) => {
                    const isSelected = formData.interests.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`chip ${isSelected ? 'active-accent' : ''}`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Check size={16} /> Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="profile-info-grid mb-6">
                <div>
                  <span className="text-xs text-muted uppercase">Home Base</span>
                  <p className="font-semibold text-primary">{user?.homeCity || 'India'}</p>
                </div>
                <div>
                  <span className="text-xs text-muted uppercase">Primary Currency</span>
                  <p className="font-semibold text-primary">{user?.preferredCurrency || 'INR (₹)'}</p>
                </div>
              </div>

              <div>
                <span className="text-xs text-muted uppercase mb-2 block">Travel Passions</span>
                <div className="flex flex-wrap gap-2">
                  {(user?.interests || formData.interests).map((tag) => (
                    <span key={tag} className="badge badge-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
