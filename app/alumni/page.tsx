'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import AlumniSection from '@/components/alumni-section';
import Footer from '@/components/footer';

export default function AlumniPage() {
    const [isDark, setIsDark] = useState(true); // Default to dark mode

    const pageVariants = {
        initial: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
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
                        <AlumniSection />
                    </motion.div>
                    <motion.div variants={sectionVariants}>
                        <Footer />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
