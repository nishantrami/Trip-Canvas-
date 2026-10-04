import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Home, MapPin } from 'lucide-react';
import { pageVariants } from '../animations/motionVariants';

export function NotFound() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="not-found-page section-padding text-center"
    >
      <div className="container container-tight">
        <div className="not-found-icon-wrap mb-6">
          <Compass size={64} className="text-accent animate-spin-slow" />
        </div>

        <span className="section-badge">404 Error</span>
        <h1 className="heading-display mb-4">
          Looks like you've taken <br /> a wrong turn.
        </h1>

        <p className="subheading mb-8">
          Even the most seasoned travelers get lost sometimes. The destination or page you're searching for might have moved or doesn't exist.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-secondary">
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
          <Link to="/explore" className="btn btn-primary">
            <Compass size={16} />
            <span>Explore Destinations</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
