import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Compass,
  ArrowLeft,
  KeyRound,
  AlertCircle
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import confetti from 'canvas-confetti';

export function AdminProtectedRoute({ children }) {
  const { isAdmin, adminLogin } = useAdmin();
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (isAdmin) {
    return children;
  }

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter the secret passcode');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const res = adminLogin(passcode);
      setIsSubmitting(false);
      if (res.success) {
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        } catch {
          // fallback
        }
      } else {
        setError(res.error || 'Authentication denied. Secret passcode invalid.');
      }
    }, 300);
  };

  const handleQuickUnlock = () => {
    setPasscode('admin123');
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      const res = adminLogin('admin123');
      setIsSubmitting(false);
      if (res.success) {
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        } catch {
          // fallback
        }
      }
    }, 250);
  };

  return (
    <div className="admin-gatekeeper-page">
      <div className="admin-gatekeeper-backdrop-glow" />

      <div className="container admin-gatekeeper-container">
        {/* Back to Home link */}
        <Link to="/" className="admin-back-home-link">
          <ArrowLeft size={16} /> Return to Public Website
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="admin-gatekeeper-box"
        >
          <div className="admin-gatekeeper-header">
            <div className="admin-gatekeeper-icon-badge">
              <ShieldAlert size={36} className="text-accent" />
            </div>
            <div className="admin-badge-row justify-center mt-3">
              <span className="admin-status-pill">RESTRICTED PORTAL</span>
              <span className="admin-shortcut-pill">SHORTCUT: CTRL + A</span>
            </div>
            <h1 className="admin-gatekeeper-title">TripCanvas Admin Control</h1>
            <p className="admin-gatekeeper-desc">
              This administrative area is restricted to verified system operators and platform managers.
            </p>
          </div>

          <form onSubmit={handleLogin} className="admin-gatekeeper-form">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="admin-error-banner mb-4"
              >
                <AlertCircle size={16} />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="admin-form-group">
              <label htmlFor="gatekeeper-passcode" className="admin-form-label">
                <KeyRound size={14} /> Administrator Security Key
              </label>
              <div className="admin-input-wrapper">
                <Lock size={16} className="admin-input-icon" />
                <input
                  id="gatekeeper-passcode"
                  type={showPassword ? 'text' : 'password'}
                  className="admin-text-input"
                  placeholder="Enter administrator passcode..."
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (error) setError('');
                  }}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="admin-password-toggle-btn"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full flex items-center justify-center gap-2 admin-login-btn mt-3"
            >
              {isSubmitting ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Unlock Admin Portal</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleQuickUnlock}
              className="admin-demo-unlock-btn mt-2"
            >
              <Sparkles size={14} className="text-accent" />
              <span>Unlock with Demo Key (admin123)</span>
            </button>
          </form>

          <div className="admin-gatekeeper-footer">
            <div className="flex items-center justify-center gap-2 text-xs text-muted">
              <Compass size={14} />
              <span>TripCanvas v2.4 Enterprise Management Console</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
