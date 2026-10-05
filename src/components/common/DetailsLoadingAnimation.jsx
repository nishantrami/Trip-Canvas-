import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Sparkles,
  Plane,
  Building,
  Utensils,
  Layers
} from 'lucide-react';

const LOADING_STEPS = [
  { icon: MapPin, text: 'Calibrating destination coordinates & geo-profile...' },
  { icon: Building, text: 'Filtering stays & luxury palaces (₹2,000 – ₹30,000)...' },
  { icon: Utensils, text: 'Curating authentic dining & iconic thalis (₹500 – ₹3,000)...' },
  { icon: Layers, text: 'Synthesizing verified sights, entrance fees & routes...' }
];

export function DetailsLoadingAnimation({
  destinationName = 'Destination',
  state = '',
  country = '',
  type = 'destination', // 'destination' | 'trip'
  heroImage = null
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [percent, setPercent] = useState(15);

  useEffect(() => {
    // Step progression
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 180);

    // Percent progression
    const percentInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 95) return prev;
        const jump = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + jump, 96);
      });
    }, 90);

    return () => {
      clearInterval(stepInterval);
      clearInterval(percentInterval);
    };
  }, []);

  const CurrentStepIcon = LOADING_STEPS[stepIndex]?.icon || Sparkles;

  return (
    <div className="details-loader-wrapper">
      {/* Background Architectural Skeleton Preview */}
      <div className="details-skeleton-preview-bg" aria-hidden="true">
        <div className="skeleton-hero-preview">
          {heroImage && (
            <img
              src={heroImage}
              alt=""
              className="skeleton-bg-image-blurred"
            />
          )}
          <div className="skeleton-hero-overlay" />
          <div className="container skeleton-hero-content">
            <div className="skeleton-pill-row">
              <div className="skeleton-shimmer-box w-28 h-6 rounded-full" />
              <div className="skeleton-shimmer-box w-20 h-6 rounded-full" />
            </div>
            <div className="skeleton-shimmer-box w-72 h-10 rounded-lg mt-3" />
            <div className="skeleton-shimmer-box w-48 h-5 rounded-md mt-2" />
          </div>
        </div>

        {/* Skeleton Tabs Strip */}
        <div className="skeleton-tabs-strip">
          <div className="container flex gap-3 overflow-hidden py-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton-shimmer-box w-28 h-8 rounded-full flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Skeleton Cards Grid Preview */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card-ghost card">
                <div className="skeleton-shimmer-box w-full h-48" />
                <div className="p-4 space-y-3">
                  <div className="skeleton-shimmer-box w-3/4 h-5 rounded" />
                  <div className="skeleton-shimmer-box w-1/2 h-4 rounded" />
                  <div className="skeleton-shimmer-box w-full h-10 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Animated Travel Beacon Modal / Centerpiece */}
      <div className="details-loader-centerpiece-container">
        <motion.div
          className="details-loader-card glass-panel"
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Animated Glowing Travel Compass & Plane Orb */}
          <div className="travel-compass-visual-box">
            {/* Concentric Sonar Pulses */}
            <div className="sonar-ring ring-1" />
            <div className="sonar-ring ring-2" />
            <div className="sonar-ring ring-3" />

            {/* Orbit Ring with Flying Airplane */}
            <div className="airplane-orbit-track">
              <div className="airplane-orbit-flyer">
                <Plane size={18} className="orbit-plane-icon" />
              </div>
            </div>

            {/* Compass Outer Ring Dial with Cardinal Points */}
            <div className="compass-dial-ring">
              <span className="cardinal-point cardinal-n">N</span>
              <span className="cardinal-point cardinal-e">E</span>
              <span className="cardinal-point cardinal-s">S</span>
              <span className="cardinal-point cardinal-w">W</span>
              <div className="compass-ticks-ring" />
            </div>

            {/* Center Core Emblem */}
            <div className="compass-center-core">
              <Compass size={28} className="compass-needle-icon" />
            </div>
          </div>

          {/* Heading & Destination Context */}
          <div className="details-loader-header">
            <span className="details-loader-badge">
              <Sparkles size={12} className="text-accent" />
              <span>
                {type === 'trip' ? 'Curating Trip Itinerary' : 'Exploring Destination Guide'}
              </span>
            </span>

            <h3 className="details-loader-title">
              {destinationName}
            </h3>

            {(state || country) && (
              <p className="details-loader-location">
                <MapPin size={13} className="text-accent inline-block mr-1" />
                {state ? `${state}, ` : ''}{country}
              </p>
            )}
          </div>

          {/* Dynamic Cycling Step Ticker */}
          <div className="details-loader-step-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="details-loader-step-inner"
              >
                <div className="step-icon-bubble">
                  <CurrentStepIcon size={14} className="text-accent" />
                </div>
                <span className="step-ticker-text">
                  {LOADING_STEPS[stepIndex]?.text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Progress Bar */}
          <div className="details-loader-progress-row">
            <div className="details-loader-bar-bg">
              <motion.div
                className="details-loader-bar-fill"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>
            <span className="details-loader-percent">{percent}%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * DetailsTabSkeleton
 * A lightweight, ultra-smooth skeleton card grid for instant tab changes
 * (e.g. switching between Hotels, Restaurants, Attractions).
 */
export function DetailsTabSkeleton({ _type = 'hotels', count = 3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22 }}
      className="details-tab-skeleton-grid"
    >
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="card tab-skeleton-card">
          <div className="skeleton-pulse tab-skeleton-img" />
          <div className="tab-skeleton-body">
            <div className="flex justify-between items-center mb-2">
              <div className="skeleton-pulse tab-skeleton-title" />
              <div className="skeleton-pulse tab-skeleton-badge" />
            </div>
            <div className="skeleton-pulse tab-skeleton-sub" />
            <div className="flex gap-2 my-3">
              <div className="skeleton-pulse tab-skeleton-chip" />
              <div className="skeleton-pulse tab-skeleton-chip" />
            </div>
            <div className="flex justify-between items-center pt-2 border-t mt-auto">
              <div className="skeleton-pulse tab-skeleton-price" />
              <div className="skeleton-pulse tab-skeleton-btn" />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
