import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronUp } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { useChat } from '../../context/ChatContext';
import './ChatWidget.css';

export function ChatWidget() {
  const {
    isOpen,
    isMinimized,
    unreadCount,
    toggleOpen,
    toggleMinimize
  } = useChat();

  const location = useLocation();
  const [showTeaser, setShowTeaser] = useState(false);

  // Do not show widget on secret admin dashboard or if already on dedicated assistant page
  const isAdmin = location.pathname.startsWith('/admin');
  const isDedicatedAssistant = location.pathname === '/assistant';

  // Show a gentle greeting teaser after 4 seconds for first-time visitors
  useEffect(() => {
    const hasSeenTeaser = sessionStorage.getItem('tripcanvas_ai_teaser_shown');
    if (!hasSeenTeaser && !isOpen) {
      const timer = setTimeout(() => {
        setShowTeaser(true);
        sessionStorage.setItem('tripcanvas_ai_teaser_shown', 'true');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (isAdmin || isDedicatedAssistant) {
    return null;
  }

  return (
    <div className="chat-widget-root">
      <AnimatePresence>
        {/* Floating Chat Window */}
        {isOpen && !isMinimized && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="chat-window-wrapper"
          >
            <ChatWindow />
          </motion.div>
        )}

        {/* Minimized Pill Bar */}
        {isOpen && isMinimized && (
          <motion.div
            key="chat-minimized-pill"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="chat-minimized-pill"
            onClick={toggleMinimize}
          >
            <div className="pill-left">
              <span className="pill-avatar">
                <Sparkles size={14} />
              </span>
              <span className="pill-title">TripCanvas AI</span>
              <span className="pill-status-dot" />
            </div>
            <div className="pill-right">
              <ChevronUp size={16} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) & Greeting Teaser */}
      {!isOpen && (
        <div className="chat-fab-container">
          {/* Gentle Welcoming Tooltip Teaser */}
          <AnimatePresence>
            {showTeaser && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="chat-teaser-bubble"
              >
                <button
                  type="button"
                  className="teaser-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTeaser(false);
                  }}
                  aria-label="Dismiss message"
                >
                  <X size={12} />
                </button>
                <div className="teaser-content" onClick={() => { setShowTeaser(false); toggleOpen(true); }}>
                  <div className="teaser-icon-col">
                    <Sparkles size={16} className="teaser-sparkle" />
                  </div>
                  <div>
                    <h5 className="teaser-title">Plan your dream trip with AI</h5>
                    <p className="teaser-text">Ask for custom itineraries, hotel stays, or budget breakdowns!</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Launcher Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowTeaser(false);
              toggleOpen(true);
            }}
            className="chat-launcher-btn"
            aria-label="Open AI Travel Assistant"
            title="Chat with TripCanvas AI Concierge"
          >
            <div className="launcher-pulse-ring" />
            <div className="launcher-content">
              <Sparkles size={20} className="launcher-icon-sparkle" />
              <span className="launcher-label desktop-only">Ask AI</span>
            </div>

            {unreadCount > 0 && (
              <span className="launcher-unread-badge">{unreadCount}</span>
            )}
          </motion.button>
        </div>
      )}
    </div>
  );
}
