/**
 * TripCanvas Framer Motion Animation Variants
 * Crafted for subtle, silky, non-jarring interactions
 */

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 12
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 16
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 2px 6px rgba(23, 32, 28, 0.05)"
  },
  hover: {
    y: -5,
    boxShadow: "0 14px 28px -4px rgba(23, 32, 28, 0.12)",
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

export const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 15,
    transition: {
      duration: 0.18,
      ease: "easeIn"
    }
  }
};

export const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

export const drawerVariants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: "100%", transition: { duration: 0.24, ease: "easeInOut" } }
};

export const heartPopVariants = {
  idle: { scale: 1 },
  pop: {
    scale: [1, 1.35, 0.9, 1.15, 1],
    transition: { duration: 0.45, ease: "easeInOut" }
  }
};
