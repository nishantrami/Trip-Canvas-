import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * TopLoadingBar
 * A sleek, high-precision progress bar running across the very top of the window
 * on any route transition or details page navigation.
 */
export function TopLoadingBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    clearAllTimers();

    const t0 = setTimeout(() => {
      setVisible(true);
      setProgress(18);
    }, 0);

    const t1 = setTimeout(() => setProgress(45), 90);
    const t2 = setTimeout(() => setProgress(78), 240);
    const t3 = setTimeout(() => setProgress(100), 440);
    const t4 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 670);

    timersRef.current = [t0, t1, t2, t3, t4];

    return () => clearAllTimers();
  }, [location.pathname, location.search]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="top-loading-bar-container"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label="Loading page details"
    >
      <div
        className="top-loading-bar-fill"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transition: progress === 100 ? 'width 0.15s ease-out, opacity 0.25s ease-out' : 'width 0.28s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="top-loading-bar-glow" />
      </div>
    </div>
  );
}
