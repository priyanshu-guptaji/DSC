'use client';

import React from 'react';
import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JoinSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', department: '', year: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      rotate: 10,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="join" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-2xl border border-border/50 bg-gradient-to-b from-primary/10 to-accent/5 overflow-hidden p-8 sm:p-12 md:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join DS Club</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ready to be part of a thriving community of data science enthusiasts? Fill out the form below and we'll get
              in touch with you soon!
            </p>
          </motion.div>

          {/* Success Message or Form */}
          {submitted ? (
            <motion.div
              className="bg-accent/10 border border-accent/30 rounded-xl p-8 text-center"
              variants={successVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Check className="w-12 h-12 text-accent mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Thank you for joining!</h3>
              <p className="text-foreground/70">We'll send you more information about DS Club very soon. Check your email!</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 border border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { label: 'Full Name', id: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email Address', id: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map((field, i) => (
                  <motion.div key={field.id} custom={i} variants={formItemVariants} initial="hidden" animate="visible">
                    <label htmlFor={field.id} className="block text-sm font-semibold mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px var(--primary)' }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Department and Year Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    label: 'Department',
                    id: 'department',
                    options: [
                      { value: '', label: 'Select your department' },
                      { value: 'CSE', label: 'Computer Science' },
                      { value: 'ECE', label: 'Electronics & Communication' },
                      { value: 'MECHANICAL', label: 'Mechanical' },
                      { value: 'ELECTRICAL', label: 'Electrical' },
                      { value: 'OTHER', label: 'Other' },
                    ],
                  },
                  {
                    label: 'Year',
                    id: 'year',
                    options: [
                      { value: '', label: 'Select your year' },
                      { value: '1', label: 'First Year' },
                      { value: '2', label: 'Second Year' },
                      { value: '3', label: 'Third Year' },
                      { value: '4', label: 'Fourth Year' },
                    ],
                  },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    custom={i + 2}
                    variants={formItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor={field.id} className="block text-sm font-semibold mb-2">
                      {field.label}
                    </label>
                    <motion.select
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>
                ))}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg"
                custom={4}
                variants={formItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Join DS Club
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
