'use client';

import { Mail, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.3,
      y: -10,
      boxShadow: '0 20px 50px rgba(79, 70, 229, 0.5)',
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
    tap: {
      scale: 0.85,
      transition: { duration: 0.1 },
    },
  };

  const linkVariants = {
    hover: {
      color: 'var(--foreground)',
      x: 8,
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    },
  };

  return (
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-foreground font-bold">DS</span>
              </motion.div>
              <span className="font-bold text-lg">DS Club</span>
            </motion.div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building a vibrant community of data science enthusiasts dedicated to learning, innovation, and real-world
              impact.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'What We Do', href: '#activities' },
                { label: 'Events', href: '#events' },
                { label: 'Our Team', href: '#team' },
              ].map((link, i) => (
                <motion.li key={i} custom={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }} viewport={{ once: true }}>
                  <motion.a href={link.href} className="text-foreground/60" variants={linkVariants} whileHover="hover">
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <motion.li className="flex items-center gap-2 text-foreground/60" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Mail className="w-4 h-4 flex-shrink-0" />
                </motion.div>
                <a href="mailto:dsclub@university.edu" className="hover:text-foreground transition-colors">
                  dsclub@university.edu
                </a>
              </motion.li>
              <motion.li className="flex items-start gap-2 text-foreground/60" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                </motion.div>
                <span>
                  Tech Building, Room 301
                  <br />
                  Main Campus
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Instagram, label: 'Instagram' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                    variants={socialIconVariants}
                    whileHover="hover"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-border/30 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; {currentYear} DS Club. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((policy, i) => (
                <motion.a
                  key={i}
                  href={policy.href}
                  className="text-foreground/60"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {policy.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
