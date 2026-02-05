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
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const eventCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const eventHoverVariants = {
    hover: {
      y: -12,
      boxShadow: '0 35px 70px rgba(0, 191, 255, 0.25)',
      borderColor: 'var(--accent)',
      transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
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
        ease: 'easeOut' as const,
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: 'var(--accent)',
      boxShadow: '0 15px 35px rgba(0, 191, 255, 0.3)',
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    tap: {
      scale: 0.95,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              variants={eventCardVariants}
              whileHover="hover"
              className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl overflow-hidden min-h-[400px] flex flex-col cursor-pointer transition-all duration-500 hover:border-accent/40"
            >
              {/* Abstract Glassmorphism Background Pattern */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-[-20%] left-[-10%] w-60 h-60 bg-primary/10 rounded-full blur-[80px]"
                  animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <motion.div
                    className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em]"
                    variants={badgePulseVariants}
                    animate="animate"
                  >
                    Upcoming Session
                  </motion.div>
                  <div className="text-white/20 text-4xl font-black">0{idx + 1}</div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 group-hover:text-accent transition-colors leading-tight">
                  {event.title}
                </h3>

                <p className="text-white/60 mb-8 leading-relaxed font-medium">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-8 border-t border-white/5">
                  {[
                    { icon: Calendar, text: event.date, label: 'Schedule' },
                    { icon: MapPin, text: event.location, label: 'Venue' },
                    { icon: Users, text: `${event.attendees}+ Registered`, label: 'Community' },
                    { icon: ArrowRight, text: event.time, label: 'Duration' },
                  ].map((detail, i) => {
                    const Icon = detail.icon;
                    return (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{detail.label}</p>
                          <p className="text-sm text-white/80 font-bold">{detail.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  className="mt-auto group/btn relative w-full py-4 bg-accent text-white font-black rounded-2xl overflow-hidden shadow-2xl shadow-accent/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent animate-shimmer bg-[length:200%_auto] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Reserve My Spot <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
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
