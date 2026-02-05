'use client';

import { CheckCircle2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const checkItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.13, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
    <section id="about" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full" />
        {/* Noise overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px', amount: 0.3 }}
            variants={leftColumnVariants}
          >
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
              Empowering the Next Generation of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Data Scientists</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed max-w-xl">
              DS Club is more than just a technical group; it&apos;s a thriving ecosystem where curiosity meets data.
              We bridge the gap between academic theory and real-world impact through hands-on collaboration and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                  custom={i}
                  variants={checkItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-foreground/60 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/join">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Start Your Journey →
              </motion.button>
            </Link>
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
              className="absolute inset-x-0 -inset-y-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl opacity-20"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="bg-card/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 pt-12 relative overflow-hidden group"
                  whileHover={{ y: -5, borderColor: 'var(--primary)/50' }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16" />
                  </div>
                  <motion.div className="text-4xl font-black text-primary mb-2" variants={statsVariants} custom={0}>95%</motion.div>
                  <p className="text-sm text-foreground/60 font-medium leading-snug">Increased Confidence in Data Science</p>
                </motion.div>

                <motion.div
                  className="bg-card/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 pt-12 relative overflow-hidden group"
                  whileHover={{ y: -5, borderColor: 'var(--primary)/50' }}
                  style={{ marginTop: '2rem' }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-16 h-16" />
                  </div>
                  <motion.div className="text-4xl font-black text-accent mb-2" variants={statsVariants} custom={1}>8+</motion.div>
                  <p className="text-sm text-foreground/60 font-medium leading-snug">Years of Educational Experience</p>
                </motion.div>
              </div>

              <div className="pt-12">
                <motion.div
                  className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 pt-16 text-white shadow-2xl shadow-primary/30 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                  <motion.div className="text-5xl font-black mb-4" variants={statsVariants} custom={2}>500+</motion.div>
                  <p className="text-sm text-white/90 font-bold uppercase tracking-widest">Global Alumni Network</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
