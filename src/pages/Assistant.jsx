import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Mic,
  Hotel,
  IndianRupee
} from 'lucide-react';
import { ChatWindow } from '../components/chat/ChatWindow';
import { useChat } from '../context/ChatContext';
import { pageVariants } from '../animations/motionVariants';
import './Assistant.css';

const QUICK_PROMPT_CATEGORIES = [
  {
    title: 'Honeymoon & Romance',
    icon: '❤️',
    prompt: 'Plan a 4-day romantic couple getaway in Udaipur with lake-view luxury stays and candlelight dinners'
  },
  {
    title: 'Snow & Mountain Peaks',
    icon: '🏔️',
    prompt: '3-day snow itinerary in Kashmir (Gulmarg & Srinagar) including hotels and winter packing checklist'
  },
  {
    title: 'Budget Beach Getaway',
    icon: '🏖️',
    prompt: 'Goa 4-day itinerary under ₹18,000 budget including stay, scooter rentals, and food'
  },
  {
    title: 'Culinary & Culture',
    icon: '🍛',
    prompt: 'What are the top must-try local foods and historic monuments in Jaipur for a weekend trip?'
  },
  {
    title: 'Wildlife Safari',
    icon: '🦁',
    prompt: 'Plan a 3-day wildlife and lion safari trip to Gir National Park Gujarat with resort stay'
  },
  {
    title: 'International Escape',
    icon: '🗼',
    prompt: '5 days in Paris: best time to visit, iconic attractions, daily budget, and romantic cafes'
  }
];

export function Assistant() {
  const { sendMessage } = useChat();

  return (
    <motion.div
      className="assistant-page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        {/* Page Header */}
        <div className="assistant-hero">
          <div className="assistant-hero-badge">
            <Sparkles size={16} />
            <span>AI Travel Concierge 2.0</span>
          </div>
          <h1 className="assistant-hero-title">
            Ask Anything About Your <span className="text-accent">Dream Journey</span>
          </h1>
          <p className="assistant-hero-subtitle">
            Get instant personalized day-by-day itineraries, verified hotel stays, budget splits, and culinary recommendations across India and worldwide.
          </p>

          {/* Quick Starter Inspiration Grid */}
          <div className="assistant-starter-grid">
            {QUICK_PROMPT_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => sendMessage(cat.prompt)}
                className="starter-prompt-card"
              >
                <span className="starter-icon">{cat.icon}</span>
                <div className="starter-text-wrap">
                  <h4 className="starter-title">{cat.title}</h4>
                  <p className="starter-prompt-snippet">"{cat.prompt}"</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Embedded Full-Featured Chat Window */}
        <div className="assistant-chat-wrapper">
          <ChatWindow isEmbedded={true} />
        </div>

        {/* Feature Highlights Grid */}
        <div className="assistant-features-grid">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Zap size={20} />
            </div>
            <h4>Instant Day-by-Day Itineraries</h4>
            <p>Generate morning, afternoon, and evening schedules with real attraction timings and direct links to Trip Planner.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Hotel size={20} />
            </div>
            <h4>Vetted Hotels & Stays</h4>
            <p>Access our curated catalog of luxury royal palaces, mountain chalets, and boutique stays calibrated by budget.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <IndianRupee size={20} />
            </div>
            <h4>Smart Budget Estimation</h4>
            <p>Itemized expense projections for stays, local transit, food, and passes with per-traveler sharing.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Mic size={20} />
            </div>
            <h4>Voice Dictation & Audio Readout</h4>
            <p>Speak your travel questions hands-free or listen to audio guidance with built-in speech synthesis.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Assistant;
