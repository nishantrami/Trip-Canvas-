import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState(''); // 'not_registered' | 'needs_verification' | 'invalid_credentials'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBanner, setSuccessBanner] = useState(
    location.state?.registeredSuccess
      ? 'Email verified successfully! Please enter your password to sign in.'
      : ''
  );

  const from = location.state?.from?.pathname || '/my-trips';

  // Clear success banner if user changes email
  useEffect(() => {
    if (location.state?.email && email !== location.state.email) {
      setSuccessBanner('');
    }
  }, [email, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setErrorType('');

    if (!email.trim() || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setIsSubmitting(true);
    const res = login(email.trim(), password);
    setIsSubmitting(false);

    if (res.success) {
      showToast(`Welcome back, ${res.user.name.split(' ')[0]}!`, 'success');
      navigate(from, { replace: true });
    } else {
      setError(res.error || 'Login failed. Please check your credentials.');
      if (res.notRegistered) {
        setErrorType('not_registered');
      } else if (res.needsVerification) {
        setErrorType('needs_verification');
      } else {
        setErrorType('invalid_credentials');
      }
    }
  };

  // Helper to populate demo credentials for convenient testing
  const handleFillDemoCredentials = () => {
    setEmail('nishant@tripcanvas.travel');
    setPassword('password123');
    setError('');
    setErrorType('');
    showToast('Demo credentials filled! Click "Sign In" to proceed.', 'info');
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="auth-split-page"
    >
      <div className="auth-container-split">
        {/* Left Editorial Visual Panel */}
        <div className="auth-visual-side desktop-only">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop"
            alt="Goa beach golden hour"
            className="auth-visual-img"
          />
          <div className="auth-visual-overlay" />
          <div className="auth-visual-content">
            <div className="brand-logo-mark mb-4">
              <Compass size={28} className="brand-icon text-accent" />
            </div>
            <h2 className="heading-display text-white mb-3">
              Discover. <br /> Plan. <br /> Travel.
            </h2>
            <p className="text-white-muted leading-relaxed">
              Experience the joy of structured travel itineraries, interactive map routes, and effortless luxury budgeting.
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="auth-form-side">
          <div className="auth-form-inner card p-8">
            <div className="auth-header mb-6">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="brand-logo-mark">
                  <Compass size={20} className="brand-icon" />
                </div>
                <span className="brand-title">TripCanvas</span>
              </Link>

              <h1 className="heading-2">Welcome Back</h1>
              <p className="text-muted text-sm mt-1">
                Please sign in with your registered and verified account.
              </p>
            </div>

            {/* Success notification banner from registration verification */}
            {successBanner && (
              <div className="alert-success-banner mb-5">
                <CheckCircle2 size={18} className="shrink-0 text-success" />
                <div className="text-xs">
                  <strong className="block text-success font-semibold mb-0.5">Account Ready!</strong>
                  <span>{successBanner}</span>
                </div>
              </div>
            )}

            {/* Error banner with context action */}
            {error && (
              <div className="alert-error-banner mb-5">
                <AlertCircle size={18} className="shrink-0 text-danger" />
                <div className="flex-1 text-xs">
                  <span className="block mb-1.5">{error}</span>
                  {errorType === 'not_registered' && (
                    <Link
                      to="/register"
                      state={{ email }}
                      className="btn btn-primary btn-xs inline-flex items-center gap-1 font-semibold"
                    >
                      <UserPlus size={12} />
                      <span>Register Account</span>
                    </Link>
                  )}
                  {errorType === 'needs_verification' && (
                    <Link
                      to="/register"
                      state={{ email }}
                      className="btn btn-primary btn-xs inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Verify Email Now</span>
                    </Link>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="login-email">
                  Email Address
                </label>
                <div className="auth-input-wrap">
                  <Mail size={16} className="auth-input-icon" />
                  <input
                    id="login-email"
                    type="email"
                    className="form-control pl-10"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-5">
                <div className="flex justify-between items-center mb-1">
                  <label className="form-label mb-0" htmlFor="login-password">
                    Password
                  </label>
                  <span className="text-xs text-accent cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </div>
                <div className="auth-input-wrap">
                  <Lock size={16} className="auth-input-icon" />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control pl-10 pr-10"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="auth-password-toggle"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-secondary w-full py-3 font-semibold flex items-center justify-center gap-2 mb-4"
              >
                <span>{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Demo Account Info Box (No Direct Bypass - Requires Sign In Action) */}
            <div className="demo-credentials-card p-3 rounded-lg border border-border bg-surface-subtle mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <Sparkles size={13} className="text-accent" />
                  <span>Pre-registered Demo Account</span>
                </span>
                <button
                  type="button"
                  onClick={handleFillDemoCredentials}
                  className="btn btn-outline btn-xs font-medium"
                >
                  Fill Details
                </button>
              </div>
              <div className="text-2xs text-muted font-mono flex flex-wrap gap-x-3 gap-y-0.5">
                <span>Email: nishant@tripcanvas.travel</span>
                <span>Pass: password123</span>
              </div>
            </div>

            <div className="auth-footer text-center text-sm text-muted">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-accent font-semibold hover:underline">
                Register & Verify here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
