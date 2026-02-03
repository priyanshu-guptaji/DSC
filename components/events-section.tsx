'use client';

import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Python Fundamentals Workshop',
    date: 'Mar 5, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Lab A',
    attendees: 45,
    description: 'Learn Python basics including data types, functions, and libraries essential for data science.',
  },
  {
    id: 2,
    title: 'Data Visualization Masterclass',
    date: 'Mar 12, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Tech Lab B',
    attendees: 38,
    description: 'Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning visual stories from data.',
  },
  {
    id: 3,
    title: 'Machine Learning 101',
    date: 'Mar 19, 2025',
    time: '4:00 PM - 6:00 PM',
    location: 'Tech Lab A',
    attendees: 52,
    description: 'Introduction to machine learning algorithms, model training, and evaluation techniques.',
  },
  {
    id: 4,
    title: 'Industry Panel: AI in Business',
    date: 'Mar 26, 2025',
    time: '5:00 PM - 6:30 PM',
    location: 'Main Auditorium',
    attendees: 120,
    description: 'Hear from industry leaders about real-world applications of AI and data science in business.',
  },
];

export default function EventsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const eventCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const eventHoverVariants = {
    hover: {
      y: -12,
      boxShadow: '0 35px 70px rgba(0, 191, 255, 0.25)',
      borderColor: 'var(--accent)',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  const badgePulseVariants = {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(0, 191, 255, 0.5)',
        '0 0 0 10px rgba(0, 191, 255, 0)',
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      backgroundColor: 'var(--accent)',
      boxShadow: '0 15px 35px rgba(0, 191, 255, 0.3)',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    tap: {
      scale: 0.92,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section id="events" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join us for workshops, speaker sessions, and collaborative events designed to advance your data science journey.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={eventCardVariants}
              whileHover="hover"
              className="group relative rounded-xl border border-border/50 bg-card overflow-hidden h-full flex flex-col cursor-pointer"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Badge */}
                <motion.div
                  className="inline-block mb-4 w-fit"
                  variants={badgePulseVariants}
                  animate="animate"
                >
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Upcoming
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg sm:text-xl font-semibold mb-4"
                  initial={{ color: 'var(--foreground)' }}
                  whileHover={{ color: 'var(--accent)' }}
                  transition={{ duration: 0.3 }}
                >
                  {event.title}
                </motion.h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed text-sm sm:text-base">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border/30 flex-grow">
                  {[
                    { icon: Calendar, text: event.date },
                    { icon: MapPin, text: event.location },
                    { icon: Users, text: `${event.attendees} people interested` },
                  ].map((detail, i) => {
                    const Icon = detail.icon;
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 text-sm text-foreground/60"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0 text-accent" />
                        </motion.div>
                        <span>{detail.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Button */}
                <motion.button
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Details
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
