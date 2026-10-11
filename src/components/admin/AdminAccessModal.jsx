import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  X,
  KeyRound,
  Sparkles,
  Command,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import confetti from 'canvas-confetti';

export function AdminAccessModal() {
  const { isSecretModalOpen, closeSecretModal, isAdmin, adminLogin, adminLogout } = useAdmin();
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSecretModalOpen) {
      setPasscode('');
      setError('');
      // Focus input on open
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    }
  }, [isSecretModalOpen]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter the secret admin passcode.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const res = adminLogin(passcode);
      setIsSubmitting(false);

      if (res.success) {
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {
          // safe fallback
        }
        closeSecretModal();
        navigate('/admin');
      } else {
        setError(res.error || 'Authentication rejected. Access key invalid.');
      }
    }, 350);
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
        closeSecretModal();
        navigate('/admin');
      }
    }, 250);
  };

  if (!isSecretModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="admin-modal-overlay" onClick={closeSecretModal}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="admin-gateway-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Glow Bar */}
          <div className="admin-gateway-glow-bar" />

          {/* Close button */}
          <button
            onClick={closeSecretModal}
            className="admin-modal-close"
            aria-label="Close Admin Modal"
            title="Press Esc to exit"
          >
            <X size={18} />
          </button>

          {/* Gateway Header */}
          <div className="admin-gateway-header">
            <div className="admin-shield-icon-wrapper">
              <ShieldAlert size={28} className="admin-shield-icon" />
            </div>
            <div className="admin-header-text">
              <div className="admin-badge-row">
                <span className="admin-status-pill">
                  <span className="admin-status-dot" />
                  RESTRICTED ACCESS
                </span>
                <span className="admin-shortcut-pill">
                  <Command size={11} /> + A
                </span>
              </div>
              <h3 className="admin-gateway-title">TripCanvas Control Center</h3>
              <p className="admin-gateway-subtitle">
                Enter master authorization key to unlock system administrative portal.
              </p>
            </div>
          </div>

          {/* If already authenticated */}
          {isAdmin ? (
            <div className="admin-already-authenticated-box">
              <div className="admin-auth-success-badge">
                <ShieldCheck size={20} className="text-success" />
                <span>Super Administrator Session Active</span>
              </div>
              <p className="text-sm text-muted mb-4">
                You currently have verified administrative privileges.
              </p>
              <div className="admin-auth-actions-row">
                <button
                  type="button"
                  onClick={() => {
                    closeSecretModal();
                    navigate('/admin');
                  }}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Sparkles size={16} /> Open Admin Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => {
                    adminLogout();
                  }}
                  className="btn btn-outline btn-sm w-full"
                >
                  Terminate Admin Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="admin-gateway-form">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="admin-error-banner"
                >
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </motion.div>
              )}

              <div className="admin-form-group">
                <label htmlFor="admin-passcode-input" className="admin-form-label">
                  <KeyRound size={14} /> Master Security Passcode
                </label>
                <div className="admin-input-wrapper">
                  <Lock size={16} className="admin-input-icon" />
                  <input
                    id="admin-passcode-input"
                    ref={inputRef}
                    type={showPassword ? 'text' : 'password'}
                    className="admin-text-input"
                    placeholder="Enter security key (e.g. admin123)..."
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      if (error) setError('');
                    }}
                    autoComplete="off"
                    spellCheck="false"
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

              <div className="admin-submit-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 admin-login-btn"
                >
                  {isSubmitting ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Authorize Entry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Quick Master Key demo button */}
                <button
                  type="button"
                  onClick={handleQuickUnlock}
                  className="admin-demo-unlock-btn"
                  title="Click for instant 1-click test access"
                >
                  <Sparkles size={14} className="text-accent" />
                  <span>Quick Demo Unlock (Master Key: admin123)</span>
                </button>
              </div>

              <div className="admin-gateway-footer-hint">
                <span className="text-xs text-muted">
                  🔒 Secret Shortcut: Press <kbd className="admin-kbd">Ctrl+A</kbd> anytime to open this gateway.
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
