import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, ArrowRight, CheckCircle2, Heart, Building, Utensils } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    showToast('Subscribed to TripCanvas Travel Dispatch!', 'success');
  };

  return (
    <footer className="footer-root">
      <div className="container footer-inner">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="brand-logo-mark">
                <Compass size={22} className="brand-icon" />
              </div>
              <span className="brand-title">TripCanvas</span>
            </Link>
            <p className="footer-tagline">
              <strong>Discover. Book. Travel.</strong>
            </p>
            <p className="footer-desc">
              TripCanvas is an editorial-first travel discovery, luxury stay booking, and restaurant reservation platform built for modern wanderers, roadtrippers, and culture seekers.
            </p>
            <div className="footer-socials">
              <span className="footer-social-pill">Instagram</span>
              <span className="footer-social-pill">Pinterest</span>
              <span className="footer-social-pill">X (Twitter)</span>
              <span className="footer-social-pill">YouTube</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore Destinations</Link></li>
              <li><Link to="/hotels">Luxury Hotels & Palaces</Link></li>
              <li><Link to="/restaurants">Restaurants & Dining</Link></li>
              <li><Link to="/my-bookings">My Bookings & Passes</Link></li>
              <li><Link to="/create-trip">Trip Planner Wizard</Link></li>
              <li><Link to="/my-trips">My Saved Trips</Link></li>
            </ul>
          </div>

          {/* Udaipur & Top Locations Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Premier Stays & Dining</h4>
            <ul className="footer-links-list">
              <li><Link to="/explore/udaipur">Udaipur City Guide</Link></li>
              <li><Link to="/hotels?destination=udaipur">Udaipur Floating Palaces</Link></li>
              <li><Link to="/restaurants?destination=udaipur">Lake Pichola Dining</Link></li>
              <li><Link to="/hotels?destination=goa">Goa Beachfront Resorts</Link></li>
              <li><Link to="/hotels?destination=jaipur">Jaipur Royal Heritage</Link></li>
              <li><Link to="/hotels?destination=manali">Manali Riverside Stays</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="footer-newsletter-col">
            <h4 className="footer-col-title">The Travel Dispatch</h4>
            <p className="footer-newsletter-desc">
              Receive curated weekend itineraries, hidden palace stays, and exclusive dining reservations every week.
            </p>

            {subscribed ? (
              <div className="newsletter-success-box">
                <CheckCircle2 size={18} className="text-success" />
                <span>You're subscribed to weekly dispatches!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <div className="footer-input-group">
                  <Mail size={16} className="footer-input-icon" />
                  <input
                    type="email"
                    className="footer-email-input"
                    placeholder="Your email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    aria-label="Email address for travel newsletter"
                  />
                  <button type="submit" className="footer-submit-btn" aria-label="Subscribe">
                    <ArrowRight size={16} />
                  </button>
                </div>
                {error && <span className="footer-form-error">{error}</span>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} TripCanvas. Crafted with UI UX Pro Max & React.
          </p>
          <div className="footer-bottom-links">
            <span className="footer-legal-tag">Privacy Policy</span>
            <span className="footer-legal-tag">Terms of Service</span>
            <span className="footer-legal-tag">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
