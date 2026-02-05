'use client';

import { BookOpen, Zap, Users, Award, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const activities = [
  {
    icon: BookOpen,
    title: 'Workshops & Bootcamps',
    description: 'Intensive training sessions covering Python, SQL, ML frameworks, and advanced data science techniques.',
  },
  {
    icon: Zap,
    title: 'AI/ML Projects',
    description: 'Collaborate on real-world projects applying machine learning to solve practical problems and create impact.',
  },
  {
    icon: Users,
    title: 'Speaker Sessions',
    description: 'Learn from industry experts and researchers sharing insights on cutting-edge data science trends and tools.',
  },
  {
    icon: Award,
    title: 'Hackathons & Competitions',
    description: 'Participate in competitions to showcase your skills, win prizes, and gain recognition in the data science community.',
  },
  {
    icon: Code,
    title: 'Peer Learning',
    description: 'Engage in study groups, code reviews, and collaborative learning to strengthen your skills together.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'Ideate and experiment with emerging technologies and novel approaches to data science challenges.',
  },
];

export default function WhatWeDoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -12,
      boxShadow: '0 30px 60px rgba(79, 70, 229, 0.2)',
      borderColor: 'var(--primary)',
      transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.25,
      rotate: 15,
      transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="activities" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionTitleVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our diverse range of activities designed to accelerate your learning and career growth in data science.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative rounded-xl border border-border/50 bg-card p-6 sm:p-8 overflow-hidden h-full cursor-pointer transition-colors"
              >
                {/* Animated background gradient with enhanced effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                {/* Animated glow effect */}
                <motion.div
                  className="absolute -inset-px rounded-xl opacity-0 blur-xl"
                  initial={{ background: 'none', opacity: 0 }}
                  whileHover={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    opacity: 0.1
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0"
                    variants={iconVariants}
                    whileHover="hover"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    initial={{ color: 'var(--foreground)' }}
                    whileHover={{ color: 'var(--primary)' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {activity.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed text-sm sm:text-base flex-grow">{activity.description}</p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-primary/50 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
