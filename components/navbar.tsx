'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'What We Do', href: '/#activities' },
    { label: 'Events', href: '/#events' },
    { label: 'Team', href: '/#team' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Join', href: '/#join' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'py-4 bg-background/40 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]'
        : 'py-8 bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent p-[1px]"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center font-black text-xl tracking-tighter italic text-foreground">
                DS
              </div>
            </motion.div>
            <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              CLUB <span className="text-primary italic">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl">
              {navLinks.map((link, idx) => (
                <Link key={link.label} href={link.href}>
                  <motion.div
                    className="px-5 py-2 rounded-xl text-sm font-bold text-foreground/60 hover:text-foreground transition-all relative overflow-hidden group/item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-x-2 bottom-1 h-0.5 bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity"
                    />
                    <span className="relative z-10">{link.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="w-[1px] h-6 bg-white/10 mx-4" />

            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/60 hover:text-foreground transition-all backdrop-blur-xl"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
              </motion.button>

              <Link href="/#join">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm font-black rounded-xl shadow-xl shadow-primary/20 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px -5px rgba(var(--primary-rgb), 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shine"
                  />
                  <span className="relative z-10">Join Us</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-foreground/60"
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden pt-32 px-10 bg-background/98 backdrop-blur-3xl overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col gap-8 pb-20">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-foreground hover:text-primary transition-colors tracking-tighter"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-12 pt-12 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/#join"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-10 py-5 bg-primary text-primary-foreground text-xl font-black rounded-2xl shadow-2xl shadow-primary/20"
                >
                  Become a Member
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
