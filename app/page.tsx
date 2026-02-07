'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import WhatWeDoSection from '@/components/what-we-do-section';
import NoticeBoard from '@/components/notice-board';
import EventsSection from '@/components/events-section';
import TeamSection from '@/components/team-section';
import JoinSection from '@/components/join-section';
import Footer from '@/components/footer';
import GallerySection from '@/components/gallery-section';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const pageVariants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 10 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <motion.div
          initial="initial"
          animate="enter"
          variants={pageVariants}
        >
          <motion.div variants={sectionVariants}>
            <HeroSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <AboutSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <WhatWeDoSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <NoticeBoard />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <EventsSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <TeamSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <GallerySection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <JoinSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
