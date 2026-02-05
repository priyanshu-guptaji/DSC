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
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
      transition: { duration: 0.3, ease: 'easeOut' as const },
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
        {/* Organic Mesh Gradient Blurs */}
        <motion.div
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-accent/15 rounded-full blur-[150px]"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.8, 1.1, 1],
            rotate: [360, 270, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        {/* Subtle Noise Texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-xl"
            whileHover={{ scale: 1.05, borderColor: 'var(--primary)/50', backgroundColor: 'var(--primary)/10' }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{
                rotate: [0, 25, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Innovating Since 2021</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-balance leading-[0.9] sm:leading-[0.9]"
          >
            Explore <span className="text-primary italic">Data</span>.<br />
            Build <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Intelligence</span>.
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
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <motion.button
              className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 relative overflow-hidden group"
              variants={buttonHoverVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.5)' }}
              whileTap="tap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                Join the Movement <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="px-10 py-5 bg-white/5 border border-white/10 text-foreground rounded-2xl font-black text-lg backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              variants={buttonHoverVariants}
              whileHover={{ scale: 1.05 }}
              whileTap="tap"
            >
              Explore Events
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Box */}
        <motion.div
          className="relative mt-24 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          whileHover={{ borderColor: 'var(--primary)/30' }}
        >
          <div className="p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { number: '150+', label: 'Active Members', sub: 'Driven Individuals' },
                { number: '20+', label: 'Events Yearly', sub: 'Hands-on Learning' },
                { number: '12+', label: 'Live Projects', sub: 'Real-world Impact' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center group/stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="text-6xl font-black text-white mb-3 tracking-tighter"
                    whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-1">{stat.label}</p>
                  <p className="text-white/30 text-[10px] uppercase font-medium">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
