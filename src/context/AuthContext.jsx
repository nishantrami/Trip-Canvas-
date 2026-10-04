import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const DEFAULT_REGISTERED_USERS = [
  {
    id: "user_nishant_01",
    name: "Nishant Patel",
    email: "nishant@tripcanvas.travel",
    password: "password123",
    avatar: null,
    role: "Travel Explorer",
    bio: "Passionate globetrotter, photographer & culture enthusiast. Always seeking the road less traveled.",
    homeCity: "Ahmedabad, India",
    preferredCurrency: "INR",
    interests: ["Culture", "Photography", "Historical", "Lakes & Mountains", "Local Food"],
    joinedDate: "October 2024",
    isVerified: true
  }
];

export function AuthProvider({ children }) {
  // Visitor starts as unauthenticated (null) unless a genuine session exists
  const [user, setUser] = useLocalStorage('tripcanvas_auth_user', null);
  const [registeredUsers, setRegisteredUsers] = useLocalStorage(
    'tripcanvas_registered_users',
    DEFAULT_REGISTERED_USERS
  );
  const [pendingVerifications, setPendingVerifications] = useLocalStorage(
    'tripcanvas_pending_verifications',
    {}
  );

  // Automatically remove stock photo if still cached in localStorage
  React.useEffect(() => {
    if (user && user.avatar && user.avatar.includes('photo-1534528741775')) {
      setUser((prev) => (prev ? { ...prev, avatar: null } : null));
    }
    if (Array.isArray(registeredUsers)) {
      const hasBadPhoto = registeredUsers.some(
        (u) => u.avatar && u.avatar.includes('photo-1534528741775')
      );
      if (hasBadPhoto) {
        setRegisteredUsers((prev) =>
          prev.map((u) =>
            u.avatar && u.avatar.includes('photo-1534528741775')
              ? { ...u, avatar: null }
              : u
          )
        );
      }
    }
  }, [user, registeredUsers, setUser, setRegisteredUsers]);

  /**
   * Check if an email is already registered and verified
   */
  const isEmailRegistered = (email) => {
    if (!email) return false;
    const cleanEmail = email.toLowerCase().trim();
    return registeredUsers.some(
      (u) => u.email.toLowerCase() === cleanEmail && u.isVerified
    );
  };

  /**
   * Step 1 of Registration: Validate details and generate 6-digit verification code
   */
  const initiateRegistration = ({ name, email, password }) => {
    if (!name || !email || !password) {
      return { success: false, error: 'Please provide name, email, and password.' };
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if already registered & verified
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existing && existing.isVerified) {
      return {
        success: false,
        error: 'An account with this email already exists. Please sign in.'
      };
    }

    // Generate random 6-digit OTP code
    const verificationCode = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    const pendingRecord = {
      name: name.trim(),
      email: cleanEmail,
      password,
      code: verificationCode,
      expiresAt,
      createdAt: Date.now()
    };

    setPendingVerifications((prev) => ({
      ...prev,
      [cleanEmail]: pendingRecord
    }));

    return {
      success: true,
      email: cleanEmail,
      code: verificationCode,
      expiresAt
    };
  };

  /**
   * Step 2 of Registration: Verify 6-digit OTP and activate account in registered users
   * NOTE: In compliance with "user is register then login not direct login",
   * this completes registration but does NOT auto-login. The user must sign in.
   */
  const verifyAndCompleteRegistration = ({ email, code }) => {
    const cleanEmail = (email || '').toLowerCase().trim();
    const pending = pendingVerifications[cleanEmail];

    if (!pending) {
      return {
        success: false,
        error: 'No pending registration found for this email. Please register first.'
      };
    }

    if (Date.now() > pending.expiresAt) {
      return {
        success: false,
        error: 'Verification code has expired. Please request a new code.'
      };
    }

    if (pending.code !== String(code).trim()) {
      return {
        success: false,
        error: 'Invalid verification code. Please check the code and try again.'
      };
    }

    // Code is valid! Create official verified user record
    const newUser = {
      id: `user_${Date.now()}`,
      name: pending.name || 'Travel Explorer',
      email: cleanEmail,
      password: pending.password,
      isVerified: true,
      avatar: null,
      role: 'Wanderer',
      bio: 'Just joined TripCanvas to plan unforgettable adventures!',
      homeCity: 'India',
      preferredCurrency: 'INR',
      interests: ['Culture', 'Nature', 'Food', 'Photography'],
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };

    // Save to registered users list
    setRegisteredUsers((prev) => {
      const filtered = prev.filter((u) => u.email.toLowerCase() !== cleanEmail);
      return [...filtered, newUser];
    });

    // Remove from pending verifications
    setPendingVerifications((prev) => {
      const updated = { ...prev };
      delete updated[cleanEmail];
      return updated;
    });

    return {
      success: true,
      user: newUser
    };
  };

  /**
   * Resend a fresh 6-digit verification code
   */
  const resendVerificationCode = (email) => {
    const cleanEmail = (email || '').toLowerCase().trim();
    const pending = pendingVerifications[cleanEmail];

    if (!pending) {
      return {
        success: false,
        error: 'No pending registration found. Please register again.'
      };
    }

    const newCode = String(Math.floor(100000 + Math.random() * 900000));
    const newExpiresAt = Date.now() + 10 * 60 * 1000;

    setPendingVerifications((prev) => ({
      ...prev,
      [cleanEmail]: {
        ...pending,
        code: newCode,
        expiresAt: newExpiresAt
      }
    }));

    return {
      success: true,
      code: newCode,
      expiresAt: newExpiresAt
    };
  };

  /**
   * Login with strict credential and verification checks
   */
  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        error: 'Please enter both email and password.'
      };
    }

    const cleanEmail = email.toLowerCase().trim();
    const registeredUser = registeredUsers.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!registeredUser) {
      // Check if user is in pending verification
      if (pendingVerifications[cleanEmail]) {
        return {
          success: false,
          error: 'Your account email is pending verification. Please complete verification first.',
          needsVerification: true,
          email: cleanEmail
        };
      }

      return {
        success: false,
        error: 'No account found with this email. Please register first.',
        notRegistered: true
      };
    }

    if (!registeredUser.isVerified) {
      return {
        success: false,
        error: 'Your account is not verified yet. Please verify your email before logging in.',
        needsVerification: true,
        email: cleanEmail
      };
    }

    if (registeredUser.password !== password) {
      return {
        success: false,
        error: 'Incorrect password. Please verify your credentials and try again.'
      };
    }

    // Login successful: create clean session without exposing password in user state
    const sessionUser = { ...registeredUser };
    delete sessionUser.password;
    setUser(sessionUser);

    return {
      success: true,
      user: sessionUser
    };
  };

  /**
   * Demo login helper for existing demo user
   */
  const loginDemo = () => {
    const demo = registeredUsers.find((u) => u.email === 'nishant@tripcanvas.travel') || DEFAULT_REGISTERED_USERS[0];
    const sessionUser = { ...demo };
    delete sessionUser.password;
    setUser(sessionUser);
    return { success: true, user: sessionUser };
  };

  /**
   * Legacy register alias that forwards to initiateRegistration
   */
  const register = (data) => initiateRegistration(data);

  /**
   * Update profile and synchronize with registeredUsers storage
   */
  const updateUserProfile = (updatedFields) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updatedFields };
      setRegisteredUsers((users) =>
        users.map((u) => (u.id === prev.id ? { ...u, ...updatedFields } : u))
      );
      return updated;
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        registeredUsers,
        pendingVerifications,
        isEmailRegistered,
        initiateRegistration,
        verifyAndCompleteRegistration,
        resendVerificationCode,
        login,
        loginDemo,
        register,
        updateUserProfile,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
