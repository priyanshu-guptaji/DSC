'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#activities' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Join', href: '#join' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const linkHoverVariants = {
    hover: {
      color: 'var(--foreground)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary-foreground font-bold text-lg">DS</span>
            </motion.div>
            <span className="font-bold text-xl hidden sm:inline">DS Club</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="text-foreground/70 text-sm font-medium relative group cursor-pointer"
              >
                <motion.span
                  initial={{ color: 'var(--foreground-70)' }}
                  whileHover={{ color: 'var(--foreground)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-accent"
                  initial={{ width: '0%', opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.15, backgroundColor: 'var(--muted)' }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div
                initial={{ rotate: 0, opacity: 1 }}
                animate={{
                  rotate: isDark ? 360 : 0,
                  opacity: 1,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 0.8, ease: 'easeInOut' },
                  scale: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-accent" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.15, backgroundColor: 'var(--muted)' }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 90, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden border-t border-border/50 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="block px-4 py-2 text-foreground/70 rounded-lg text-sm font-medium cursor-pointer relative overflow-hidden"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <motion.span
                      initial={{ color: 'var(--foreground-70)' }}
                      whileHover={{ color: 'var(--foreground)' }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      {link.label}
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 -z-10 bg-primary/5 rounded-lg"
                      initial={{ opacity: 0, x: '-100%' }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
