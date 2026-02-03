'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const checkItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.13, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const features = [
    {
      title: 'Hands-on Learning',
      description: 'Learn through real projects and practical applications',
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn from experienced faculty and industry professionals',
    },
    {
      title: 'Collaborative Community',
      description: 'Network with peers and build lasting connections',
    },
  ];

  const stats = [
    { number: '95%', label: 'Members report increased confidence in Data Science' },
    { number: '8+', label: 'Years of experience in Data Science education' },
    { number: '500+', label: 'Alumni working in tech and data roles' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px', amount: 0.3 }}
            variants={leftColumnVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About DS Club</h2>
            <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
              DS Club is a vibrant community dedicated to fostering passion for Data Science, Artificial Intelligence,
              and Machine Learning. We believe in learning by doing, collaboration, and creating meaningful impact through
              data-driven solutions.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 items-start"
                  custom={i}
                  variants={checkItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px', amount: 0.3 }}
            variants={rightColumnVariants}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative bg-card rounded-2xl border border-border/50 p-8 sm:p-12"
              whileHover={{ borderColor: 'var(--primary)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={statsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={i > 0 ? 'border-t border-border/30 pt-6' : ''}
                  >
                    <motion.div
                      className="text-5xl font-bold text-primary mb-2"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-foreground/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
