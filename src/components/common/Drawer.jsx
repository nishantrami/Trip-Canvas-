import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { drawerVariants, backdropVariants } from '../../animations/motionVariants';

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  width = '380px',
  position = 'right'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="drawer-root" role="dialog" aria-modal="true">
          <motion.div
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="modal-backdrop"
            onClick={onClose}
          />
          <motion.div
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`drawer-panel drawer-${position}`}
            style={{ width, maxWidth: '90vw' }}
          >
            <div className="drawer-header">
              {title && <h3 className="drawer-title">{title}</h3>}
              <button
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="drawer-content">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
