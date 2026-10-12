import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Headphones,
  Building,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Compass,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { pageVariants } from '../animations/motionVariants';
import './Contact.css';

const TOPIC_CATEGORIES = [
  { id: 'stays', label: 'Stays & Luxury Hotels', icon: Building },
  { id: 'dining', label: 'Table Reservations', icon: Sparkles },
  { id: 'itinerary', label: 'Bespoke Trip Planning', icon: Compass },
  { id: 'partners', label: 'Partnerships & Press', icon: Headphones },
  { id: 'support', label: 'General & Support', icon: HelpCircle }
];

const DESTINATIONS_LIST = [
  'General Inquiry (All Regions)',
  'Udaipur, Rajasthan',
  'Goa (North & South)',
  'Jaipur, Rajasthan',
  'Manali & Solang, Himachal',
  'Kashmir (Srinagar & Gulmarg)',
  'Kerala (Alleppey & Munnar)',
  'Mumbai, Maharashtra',
  'Delhi NCR',
  'Ahmedabad, Gujarat',
  'Rann of Kutch, Gujarat',
  'Gir National Park, Gujarat',
  'Saputara, Gujarat',
  'Dubai, UAE',
  'Bali, Indonesia',
  'Paris, France',
  'Singapore',
  'London, UK',
  'Tokyo, Japan'
];

const FAQS = [
  {
    q: 'How rapidly will the TripCanvas concierge respond?',
    a: 'For urgent inquiries from travelers currently on the road, our dedicated emergency travel desk responds within 15–30 minutes via WhatsApp or direct phone. Standard concierge requests and booking modifications are addressed within 2 to 4 hours.'
  },
  {
    q: 'How can I modify or cancel a confirmed hotel or dining reservation?',
    a: 'You can manage all active reservations directly inside your personal travel workspace under "My Bookings" (/my-bookings). Alternatively, submit an inquiry here quoting your reservation confirmation code, and our desk will process it immediately with the property.'
  },
  {
    q: 'Can TripCanvas curate customized multi-city luxury itineraries?',
    a: 'Yes! Our bespoke travel designers craft tailored end-to-end itineraries—combining floating heritage palaces in Udaipur, chauffeured desert crossings in Rajasthan, or private houseboat cruises in Alleppey. Select "Bespoke Trip Planning" in the contact form to initiate your custom brief.'
  },
  {
    q: 'How secure is my personal information and travel data?',
    a: 'TripCanvas follows enterprise-grade encryption standards. All communication is secured via end-to-end SSL/TLS protocols. We never share traveler itineraries, personal contact details, or payment vouchers with unauthorized third parties.'
  },
  {
    q: 'What is the modification and cancellation policy on TripCanvas?',
    a: 'Most boutique hotel stays and fine dining reservations can be modified or canceled free of charge up to 48 hours prior to check-in/reservation time directly within your personal travel dashboard under My Bookings (/my-bookings).'
  }
];

export function Contact() {
  const { user } = useAuth();
  const { showToast } = useToast();

  // Form State
  const [selectedTopic, setSelectedTopic] = useState('stays');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    destination: 'General Inquiry (All Regions)',
    priority: 'standard',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);

  // Quick Copy Feedback States
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // FAQ open states
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      showToast('Concierge email copied to clipboard', 'info');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      showToast('Concierge telephone copied to clipboard', 'info');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your inquiry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fill out the required fields correctly', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `TC-CON-${Math.floor(10000 + Math.random() * 90000)}`;

      // Save inquiry to localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('tripcanvas_contact_inquiries') || '[]');
        const newInquiry = {
          id: ticketId,
          ...formData,
          topic: selectedTopic,
          createdAt: new Date().toISOString()
        };
        localStorage.setItem(
          'tripcanvas_contact_inquiries',
          JSON.stringify([newInquiry, ...existing.slice(0, 20)])
        );
      } catch {
        // safe fallback
      }

      setSubmittedTicket({
        id: ticketId,
        ...formData,
        topic: selectedTopic
      });

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }

      showToast(`Inquiry received! Reference code: ${ticketId}`, 'success');
    }, 700);
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '',
      destination: 'General Inquiry (All Regions)',
      priority: 'standard',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact-page"
    >
      {/* 1. Hero Header Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1800&auto=format&fit=crop"
            alt="TripCanvas Travel Concierge"
            className="contact-hero-img"
          />
          <div className="contact-hero-overlay" />
        </div>

        <div className="container contact-hero-content">
          <span className="contact-hero-badge">
            <Sparkles size={14} /> 24/7 Global Travel Concierge & Support Desk
          </span>
          <h1 className="contact-hero-title">
            We're Here For Your Every Journey.
          </h1>
          <p className="contact-hero-subtitle">
            Whether you need bespoke itinerary curation, assistance with luxury palace bookings, fine dining reservations, or custom private tours, our team is at your continuous service.
          </p>
        </div>
      </section>

      {/* 2. Direct Access Channels Section */}
      <section className="container contact-channels-section">
        <div className="contact-channels-grid">
          {/* Channel 1: Phone Desk */}
          <div className="contact-channel-card">
            <div className="channel-icon-box">
              <Phone size={24} />
            </div>
            <h3 className="channel-title">Concierge Hotline</h3>
            <p className="channel-desc">
              Direct telephone line to our senior reservation coordinators for urgent stay and travel assistance.
            </p>
            <div className="channel-value-row">
              <span className="channel-value">+91 (800) 123-8747</span>
              <button
                type="button"
                onClick={() => handleCopy('+918001238747', 'phone')}
                className="channel-action-btn"
                title="Copy phone number"
              >
                {copiedPhone ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="channel-status-pill">
              <span className="status-indicator-dot" />
              <span>Available 24/7 • Avg wait &lt; 1 min</span>
            </div>
          </div>

          {/* Channel 2: Email Desk */}
          <div className="contact-channel-card">
            <div className="channel-icon-box green">
              <Mail size={24} />
            </div>
            <h3 className="channel-title">Dedicated Email Desk</h3>
            <p className="channel-desc">
              Ideal for multi-day itineraries, group quotes, corporate retreats, and voucher verifications.
            </p>
            <div className="channel-value-row">
              <span className="channel-value truncate">concierge@tripcanvas.travel</span>
              <button
                type="button"
                onClick={() => handleCopy('concierge@tripcanvas.travel', 'email')}
                className="channel-action-btn"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="channel-status-pill">
              <span className="status-indicator-dot" />
              <span>Responds within 2–4 hours</span>
            </div>
          </div>

          {/* Channel 3: WhatsApp Concierge */}
          <div className="contact-channel-card">
            <div className="channel-icon-box amber">
              <MessageSquare size={24} />
            </div>
            <h3 className="channel-title">WhatsApp Priority Line</h3>
            <p className="channel-desc">
              Instant mobile messaging for active roadtrippers and travelers needing immediate route guidance.
            </p>
            <div className="channel-value-row">
              <span className="channel-value">+91 98200 45678</span>
              <a
                href="https://wa.me/919820045678?text=Hello%20TripCanvas%20Concierge,%20I%20need%20travel%20assistance"
                target="_blank"
                rel="noreferrer"
                className="channel-action-btn"
              >
                <span>Chat</span>
                <ExternalLink size={13} />
              </a>
            </div>
            <div className="channel-status-pill">
              <span className="status-indicator-dot" />
              <span>Live travelers priority queue</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Split Section: Contact Form & Experience Hubs */}
      <section className="container">
        <div className="contact-main-grid">
          {/* Left: Contact Form Card */}
          <div className="contact-form-wrapper">
            {submittedTicket ? (
              <div className="contact-success-card">
                <div className="success-badge-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-card-title">Inquiry Successfully Dispatched!</h3>
                <p className="success-card-desc">
                  Thank you, <strong>{submittedTicket.name}</strong>. Our travel concierge team has received your request regarding <strong>{submittedTicket.destination}</strong> and will follow up shortly via <strong>{submittedTicket.email}</strong>.
                </p>

                <div className="ticket-receipt-box">
                  <div>
                    <span className="text-xs text-muted block mb-1">REFERENCE TICKET ID</span>
                    <span className="ticket-id-val">{submittedTicket.id}</span>
                  </div>
                  <span className="ticket-status-val">Dispatched to Concierge</span>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="btn btn-outline btn-md"
                  >
                    Send Another Message
                  </button>
                  <Link to="/explore" className="btn btn-primary btn-md">
                    Explore Destinations <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <span className="form-header-badge">Direct Communication</span>
                <h2 className="form-header-title">Send a Message to Our Concierge</h2>
                <p className="form-header-subtitle">
                  Fill in your details below and our destination curators will curate personalized guidance or resolve your query with high priority.
                </p>

                {/* Topic Selector Pills */}
                <div>
                  <label className="topic-selector-label">Select Inquiry Category</label>
                  <div className="topic-pills-row">
                    {TOPIC_CATEGORIES.map((topic) => {
                      const IconComponent = topic.icon;
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`topic-pill-btn ${selectedTopic === topic.id ? 'active' : ''}`}
                        >
                          <IconComponent size={14} />
                          {topic.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 1: Name and Email */}
                <div className="form-input-grid">
                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-name">
                      Full Name <span className="field-required">*</span>
                    </label>
                    <div className="field-input-wrapper">
                      <input
                        id="contact-name"
                        type="text"
                        className={`field-input ${errors.name ? 'has-error' : ''}`}
                        placeholder="e.g. Nishant Rami"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                      />
                    </div>
                    {errors.name && <span className="field-error-text">{errors.name}</span>}
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-email">
                      Email Address <span className="field-required">*</span>
                    </label>
                    <div className="field-input-wrapper">
                      <Mail size={16} className="field-icon" />
                      <input
                        id="contact-email"
                        type="email"
                        className={`field-input ${errors.email ? 'has-error' : ''}`}
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                      />
                    </div>
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Phone & Destination */}
                <div className="form-input-grid">
                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-phone">
                      Phone Number <span className="field-optional">(WhatsApp preferred)</span>
                    </label>
                    <div className="field-input-wrapper">
                      <Phone size={16} className="field-icon" />
                      <input
                        id="contact-phone"
                        type="tel"
                        className="field-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="contact-destination">
                      Destination of Interest
                    </label>
                    <div className="field-input-wrapper">
                      <MapPin size={16} className="field-icon" />
                      <select
                        id="contact-destination"
                        className="field-select"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      >
                        {DESTINATIONS_LIST.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Priority Selector */}
                <div className="form-field-group mb-4">
                  <label className="field-label">Priority Level</label>
                  <div className="priority-selector-row">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, priority: 'standard' })}
                      className={`priority-option-btn ${formData.priority === 'standard' ? 'active' : ''}`}
                    >
                      <Clock size={13} />
                      Standard (Within 24h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, priority: 'priority' })}
                      className={`priority-option-btn ${formData.priority === 'priority' ? 'active' : ''}`}
                    >
                      <Sparkles size={13} />
                      Priority (2–4 hours)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, priority: 'urgent' })}
                      className={`priority-option-btn urgent ${formData.priority === 'urgent' ? 'active' : ''}`}
                    >
                      <AlertCircle size={13} />
                      Urgent (Traveling Now)
                    </button>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-field-group mb-4">
                  <label className="field-label" htmlFor="contact-subject">
                    Subject / Itinerary Title <span className="field-optional">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="field-input"
                    style={{ paddingLeft: '1rem' }}
                    placeholder="e.g. 4-Day Lake Pichola Heritage Palace Request"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                {/* Message Textarea */}
                <div className="form-field-group mb-5">
                  <label className="field-label" htmlFor="contact-message">
                    Detailed Message & Requirements <span className="field-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    className={`field-textarea ${errors.message ? 'has-error' : ''}`}
                    placeholder="Tell us about your dates, party size, dietary preferences, or specific hotel preferences..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                  />
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                {/* Submit Row */}
                <div className="form-submit-row">
                  <div className="form-guarantee-note">
                    <ShieldCheck size={16} className="text-success" />
                    <span>Encrypted & private communication.</span>
                  </div>

                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock size={16} className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Concierge Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Physical Lounges & Secret Admin Gateway Callout */}
          <div className="contact-side-col">
            {/* Experience Lounges Card */}
            <div className="side-info-card">
              <h3 className="side-card-title">
                <Building size={18} className="text-accent" />
                Physical Experience Lounges
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                Meet our senior expedition designers in person at our dedicated heritage lounges:
              </p>

              <div className="location-item">
                <div className="location-city">
                  <span>New Delhi Headquarters</span>
                  <span className="location-city-badge">Flagship</span>
                </div>
                <p className="location-address">
                  Connaught Place, Barakhamba Road, Central Delhi 110001
                </p>
                <div className="location-hours">
                  <Clock size={12} />
                  <span>Mon – Sat: 09:00 AM – 08:00 PM IST</span>
                </div>
              </div>

              <div className="location-item">
                <div className="location-city">
                  <span>Mumbai Waterfront Lounge</span>
                  <span className="location-city-badge">Heritage</span>
                </div>
                <p className="location-address">
                  Nariman Point & Colaba Causeway, South Mumbai 400021
                </p>
                <div className="location-hours">
                  <Clock size={12} />
                  <span>Mon – Sun: 10:00 AM – 09:00 PM IST</span>
                </div>
              </div>

              <div className="location-item">
                <div className="location-city">
                  <span>Jaipur Royal Experience Desk</span>
                  <span className="location-city-badge">Palace Desk</span>
                </div>
                <p className="location-address">
                  C-Scheme, Civil Lines Heritage Enclave, Jaipur 302001
                </p>
                <div className="location-hours">
                  <Clock size={12} />
                  <span>Tue – Sun: 10:00 AM – 07:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Traveler Guarantee & Support Pledge */}
            <div className="concierge-pledge-card">
              <div className="pledge-header">
                <ShieldCheck size={20} className="text-accent" />
                <span>The TripCanvas Promise</span>
              </div>
              <p className="pledge-text">
                Every palace, boutique hotel, and curated dining venue featured on TripCanvas has been evaluated by our senior expedition team.
              </p>
              <div className="pledge-list">
                <div className="pledge-item">
                  <CheckCircle2 size={15} className="pledge-check" />
                  <span>100% Verified properties & verified room inventories</span>
                </div>
                <div className="pledge-item">
                  <CheckCircle2 size={15} className="pledge-check" />
                  <span>Zero hidden concierge or transaction fees</span>
                </div>
                <div className="pledge-item">
                  <CheckCircle2 size={15} className="pledge-check" />
                  <span>Active travel roadside & itinerary emergency assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive FAQ Section */}
      <section className="container contact-faq-section">
        <div className="faq-header-wrap">
          <span className="faq-badge">
            <HelpCircle size={13} /> Common Questions
          </span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find prompt answers about reservation handling, concierge timings, custom trips, and security.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="faq-answer-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom Travel CTA Banner */}
      <section className="container">
        <div className="contact-cta-banner">
          <div>
            <h2 className="cta-banner-title">Ready to Begin Your Next Journey?</h2>
            <p className="cta-banner-text">
              From floating palaces in Lake Pichola to snow-capped chalets in the Himalayas, explore 18+ handpicked destinations curated for modern explorers.
            </p>
          </div>
          <div className="cta-actions-row">
            <Link to="/explore" className="btn btn-primary btn-md">
              Explore Destinations <ArrowRight size={16} />
            </Link>
            <Link to="/create-trip" className="btn btn-outline btn-md text-white border-white/30 hover:bg-white/10">
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
