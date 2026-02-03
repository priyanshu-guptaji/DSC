'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 40px rgba(79, 70, 229, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-20"
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 dark:opacity-15"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div 
              animate={{ 
                rotate: [0, 25, 0],
                scale: [1, 1.1, 1]
              }} 
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Welcome to DS Club</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance"
          >
            {'Explore Data. Build Intelligence.'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl text-balance"
          >
            A community of curious minds working on Data Science, AI, ML, and real-world impact. Learn together, build
            together, grow together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Join the Club</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.button>

            <motion.button
              className="px-6 py-3 border border-border rounded-lg font-semibold relative overflow-hidden group"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">View Events</span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ opacity: 0, x: '-100%' }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Box */}
        <motion.div
          className="relative mt-16 rounded-2xl border border-border/50 bg-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ borderColor: 'var(--primary)' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
          />
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '150+', label: 'Active Members' },
                { number: '20+', label: 'Events Yearly' },
                { number: '12+', label: 'Live Projects' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-primary mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-foreground/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
