import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export function ErrorState({
  title = "Something went wrong",
  message = "We encountered an issue loading this information. Please try again.",
  onRetry
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="error-state-card card"
    >
      <div className="error-icon-box">
        <AlertTriangle size={32} />
      </div>
      <h3 className="error-title">{title}</h3>
      <p className="error-desc">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-outline btn-sm">
          <RefreshCw size={14} />
          Try Again
        </button>
      )}
    </motion.div>
  );
}
