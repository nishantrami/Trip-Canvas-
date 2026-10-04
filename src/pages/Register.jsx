import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Compass,
  Mail,
  Lock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  KeyRound,
  RefreshCw,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';

export function Register() {
  const { initiateRegistration, verifyAndCompleteRegistration, resendVerificationCode } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Step 1: form details, Step 2: verification code, Step 3: verification completed
  const [step, setStep] = useState(1);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Verification State (6-digit OTP)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [activeCode, setActiveCode] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [redirectCountdown, setRedirectCountdown] = useState(3);

  const otpInputRefs = useRef([]);

  // Countdown timer for resend
  useEffect(() => {
    let timer;
    if (step === 2 && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  // Auto redirect countdown on Step 3
  useEffect(() => {
    let timer;
    if (step === 3 && redirectCountdown > 0) {
      timer = setInterval(() => {
        setRedirectCountdown((prev) => prev - 1);
      }, 1000);
    } else if (step === 3 && redirectCountdown === 0) {
      navigate('/login', {
        state: {
          email,
          registeredSuccess: true
        }
      });
    }
    return () => clearInterval(timer);
  }, [step, redirectCountdown, navigate, email]);

  // Handle Step 1 Submit: Validate and initiate registration with OTP
  const handleInitiateRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    const res = initiateRegistration({
      name: name.trim(),
      email: email.trim(),
      password
    });

    setIsSubmitting(false);

    if (res.success) {
      setActiveCode(res.code);
      setStep(2);
      setCountdown(60);
      setOtp(['', '', '', '', '', '']);
      showToast(`Verification code sent to ${email.trim()}`, 'info');
      // Focus first OTP box
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 150);
    } else {
      setError(res.error || 'Registration failed. Please try again.');
    }
  };

  // Handle OTP Box Change with auto-advance
  const handleOtpChange = (index, value) => {
    // Only accept numeric digit
    const cleaned = value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];

    if (cleaned.length > 0) {
      newOtp[index] = cleaned[cleaned.length - 1]; // take the last typed digit
      setOtp(newOtp);
      setOtpError('');

      // Auto focus next box
      if (index < 5) {
        otpInputRefs.current[index + 1]?.focus();
      }
    } else {
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  // Handle Backspace navigation
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste event for OTP (support pasting 6 digits)
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();
    const digits = pasteData.replace(/[^0-9]/g, '').slice(0, 6).split('');

    if (digits.length > 0) {
      const newOtp = ['', '', '', '', '', ''];
      digits.forEach((digit, idx) => {
        if (idx < 6) newOtp[idx] = digit;
      });
      setOtp(newOtp);
      setOtpError('');

      const targetFocusIdx = Math.min(digits.length, 5);
      otpInputRefs.current[targetFocusIdx]?.focus();
    }
  };

  // Quick helper to auto-fill the code for easy demo testing
  const handleAutoFillCode = () => {
    if (!activeCode) return;
    const digits = activeCode.split('');
    setOtp(digits);
    setOtpError('');
    showToast('Code auto-filled from simulated inbox!', 'success');
    otpInputRefs.current[5]?.focus();
  };

  // Resend verification code
  const handleResend = () => {
    if (countdown > 0) return;
    setIsResending(true);
    setOtpError('');

    const res = resendVerificationCode(email);
    setIsResending(false);

    if (res.success) {
      setActiveCode(res.code);
      setCountdown(60);
      showToast('A new 6-digit code has been sent.', 'info');
    } else {
      setOtpError(res.error || 'Failed to resend verification code.');
    }
  };

  // Handle Step 2 Submit: Validate OTP code and activate account
  const handleVerifyOtp = (e) => {
    if (e) e.preventDefault();
    const fullCode = otp.join('').trim();

    if (fullCode.length < 6) {
      setOtpError('Please enter the complete 6-digit verification code.');
      return;
    }

    setIsSubmitting(true);
    const res = verifyAndCompleteRegistration({
      email,
      code: fullCode
    });
    setIsSubmitting(false);

    if (res.success) {
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback safe
      }

      setStep(3);
      showToast('Account successfully verified! Please sign in.', 'success');
    } else {
      setOtpError(res.error || 'Invalid verification code. Please check and try again.');
    }
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
        {/* Left Visual Editorial Panel */}
        <div className="auth-visual-side desktop-only">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop"
            alt="Paris cityscape"
            className="auth-visual-img"
          />
          <div className="auth-visual-overlay" />
          <div className="auth-visual-content">
            <div className="brand-logo-mark mb-4">
              <Compass size={28} className="brand-icon text-accent" />
            </div>
            <h2 className="heading-display text-white mb-3">
              Craft Your <br /> Travel Legacy.
            </h2>
            <p className="text-white-muted leading-relaxed mb-4">
              Register and verify your account to unlock bespoke itineraries, verified stays, and personalized adventures across India.
            </p>

            <div className="auth-step-pill-list">
              <div className={`auth-step-pill ${step >= 1 ? 'active' : ''}`}>
                <span className="step-num">1</span>
                <span>Account Details</span>
              </div>
              <div className="auth-step-divider-line" />
              <div className={`auth-step-pill ${step >= 2 ? 'active' : ''}`}>
                <span className="step-num">2</span>
                <span>Email Verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="auth-form-side">
          <div className="auth-form-inner card p-8">
            {/* Header */}
            <div className="auth-header mb-6">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="brand-logo-mark">
                  <Compass size={20} className="brand-icon" />
                </div>
                <span className="brand-title">TripCanvas</span>
              </Link>

              {step === 1 && (
                <>
                  <div className="flex items-center justify-between">
                    <h1 className="heading-2">Create an Account</h1>
                    <span className="badge badge-accent">Step 1 of 2</span>
                  </div>
                  <p className="text-muted text-sm mt-1">
                    Fill in your details. You will verify your email before logging in.
                  </p>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex items-center justify-between">
                    <h1 className="heading-2">Verify Email</h1>
                    <span className="badge badge-accent">Step 2 of 2</span>
                  </div>
                  <p className="text-muted text-sm mt-1">
                    Enter the 6-digit verification code sent to <strong>{email}</strong>
                  </p>
                </>
              )}

              {step === 3 && (
                <>
                  <h1 className="heading-2 text-success">Verified! 🎉</h1>
                  <p className="text-muted text-sm mt-1">
                    Your account is registered & verified. Now you can sign in.
                  </p>
                </>
              )}
            </div>

            {/* STEP 1: Registration Form */}
            {step === 1 && (
              <form onSubmit={handleInitiateRegister} className="auth-form">
                {error && (
                  <div className="alert-error-banner mb-4">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="form-group mb-4">
                  <label className="form-label" htmlFor="reg-name">
                    Full Name
                  </label>
                  <div className="auth-input-wrap">
                    <User size={16} className="auth-input-icon" />
                    <input
                      id="reg-name"
                      type="text"
                      className="form-control pl-10"
                      placeholder="Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label className="form-label" htmlFor="reg-email">
                    Email Address
                  </label>
                  <div className="auth-input-wrap">
                    <Mail size={16} className="auth-input-icon" />
                    <input
                      id="reg-email"
                      type="email"
                      className="form-control pl-10"
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-2 mb-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-password">
                      Password
                    </label>
                    <div className="auth-input-wrap">
                      <Lock size={16} className="auth-input-icon" />
                      <input
                        id="reg-password"
                        type={showPassword ? 'text' : 'password'}
                        className="form-control pl-10 pr-10"
                        placeholder="Min 6 chars"
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

                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-confirm">
                      Confirm
                    </label>
                    <div className="auth-input-wrap">
                      <Lock size={16} className="auth-input-icon" />
                      <input
                        id="reg-confirm"
                        type={showPassword ? 'text' : 'password'}
                        className="form-control pl-10"
                        placeholder="Repeat password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3 font-semibold flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Sending Code...' : 'Continue to Verification'}</span>
                  <ArrowRight size={16} />
                </button>

                <div className="auth-footer text-center mt-6 text-sm text-muted">
                  Already have a TripCanvas account?{' '}
                  <Link to="/login" className="text-accent font-semibold hover:underline">
                    Sign in here
                  </Link>
                </div>
              </form>
            )}

            {/* STEP 2: Email Verification (OTP) */}
            {step === 2 && (
              <div className="otp-verification-screen">
                {/* Simulated Email Preview Banner (Essential for smooth frontend testing) */}
                <div className="otp-simulated-notification mb-5">
                  <div className="flex items-start gap-2.5">
                    <span className="otp-sim-icon">📬</span>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between mb-0.5">
                        <strong className="text-primary font-semibold">Simulated Inbox Notification</strong>
                        <span className="badge badge-accent badge-xs">Instant Code</span>
                      </div>
                      <p className="text-muted leading-tight mb-2">
                        Your TripCanvas verification code is:{' '}
                        <strong className="text-accent font-mono text-sm tracking-wider">{activeCode}</strong>
                      </p>
                      <button
                        type="button"
                        onClick={handleAutoFillCode}
                        className="btn btn-outline btn-xs flex items-center gap-1.5 font-medium"
                      >
                        <Sparkles size={12} className="text-accent" />
                        <span>Auto-fill Code ({activeCode})</span>
                      </button>
                    </div>
                  </div>
                </div>

                {otpError && (
                  <div className="alert-error-banner mb-4">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{otpError}</span>
                  </div>
                )}

                <div className="otp-inputs-wrapper mb-6">
                  <label className="form-label text-center block mb-3">
                    Enter 6-Digit Verification Code
                  </label>
                  <div className="otp-input-row" onPaste={handleOtpPaste}>
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => (otpInputRefs.current[idx] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className={`otp-digit-box ${digit ? 'filled' : ''}`}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                        autoFocus={idx === 0}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted mb-6 px-1">
                  <span>
                    {countdown > 0 ? (
                      <>Resend code in <strong className="text-primary font-mono">{countdown}s</strong></>
                    ) : (
                      <span className="text-success font-medium">Code ready to resend</span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={countdown > 0 || isResending}
                    className="text-accent font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <RefreshCw size={12} className={isResending ? 'spin-animation' : ''} />
                    <span>Resend Code</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isSubmitting || otp.join('').length < 6}
                  className="btn btn-primary w-full py-3 font-semibold flex items-center justify-center gap-2 mb-3"
                >
                  <ShieldCheck size={16} />
                  <span>{isSubmitting ? 'Activating...' : 'Verify & Complete Registration'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-ghost btn-sm w-full flex items-center justify-center gap-1.5 text-muted"
                >
                  <ArrowLeft size={14} />
                  <span>Change Email ({email})</span>
                </button>
              </div>
            )}

            {/* STEP 3: Verified Success Screen */}
            {step === 3 && (
              <div className="auth-success-screen text-center py-4">
                <div className="auth-success-icon-wrap mb-4">
                  <CheckCircle2 size={56} className="text-success" />
                </div>
                <h3 className="heading-3 mb-2">Account Verified Successfully!</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Your email has been verified and your TripCanvas account is now active. As required, you can now log in with your credentials.
                </p>

                <div className="bg-surface-subtle p-3 rounded-lg mb-6 border border-border text-xs text-left">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted">Account Email:</span>
                    <strong className="text-primary font-mono">{email}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Status:</span>
                    <span className="badge badge-success badge-xs">Verified & Active</span>
                  </div>
                </div>

                <Link
                  to="/login"
                  state={{ email, registeredSuccess: true }}
                  className="btn btn-primary w-full py-3 font-semibold flex items-center justify-center gap-2"
                >
                  <span>Proceed to Sign In</span>
                  <ArrowRight size={16} />
                </Link>

                <p className="text-xs text-muted mt-3">
                  Redirecting to Sign In in {redirectCountdown}s...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
