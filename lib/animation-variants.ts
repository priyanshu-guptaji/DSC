'use client';

import { Variants } from 'framer-motion';

// Fade In Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Slide & Fade Animations
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Scale & Fade Animation
export const scaleInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger Container with larger delay
export const staggerContainerLarge: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

// Card Animation
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Hover lift animation for cards
export const cardHover: Variants = {
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Pulse animation for badges
export const pulseBadge: Variants = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(79, 70, 229, 0.4)',
      '0 0 0 10px rgba(79, 70, 229, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
};

// Floating animation
export const floating: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Glow animation
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(79, 70, 229, 0.3)',
      '0 0 40px rgba(79, 70, 229, 0.6)',
      '0 0 20px rgba(79, 70, 229, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Icon scale animation
export const iconScale: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Button hover animation
export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Link underline animation
export const linkUnderline: Variants = {
  hover: {
    color: 'var(--accent)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Scroll reveal animation (used with InView)
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// Rotate animation for loading
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Social icon hover animation
export const socialIconHover: Variants = {
  hover: {
    scale: 1.2,
    y: -5,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Enhanced stagger with cubic-bezier easing
export const enhancedStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Smooth scroll reveal with custom easing
export const smoothScrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Text shimmer effect
export const textShimmer: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Bounce entrance animation
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Gentle pulse effect
export const gentlePulse: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate and fade entrance
export const rotateInRight: Variants = {
  hidden: { opacity: 0, rotate: -20, x: 50 },
  visible: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Rotate and fade entrance from left
export const rotateInLeft: Variants = {
  hidden: { opacity: 0, rotate: 20, x: -50 },
  visible: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Expand animation
export const expandInDown: Variants = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: 'top' },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Flip card animation
export const flipCard: Variants = {
  hover: {
    rotateY: 10,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Enhanced button hover with glow
export const buttonHoverGlow: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Shimmer loading animation
export const shimmerLoad: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Attention seeking bounce
export const attentionBounce: Variants = {
  animate: {
    y: [0, -10, 0, -5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
      ease: 'easeInOut',
    },
  },
};

// Smooth fade in with delay
export const fadeInWithDelay = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
});

// Stagger with custom timing
export const customStagger = (staggerAmount: number, delayAmount: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmount,
      delayChildren: delayAmount,
    },
  },
});
