'use client';

import { Bell, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const notices = [
  {
    id: 1,
    title: 'Spring Data Science Bootcamp Registration Open',
    description:
      'We are excited to announce our intensive Spring Bootcamp covering Python fundamentals, data analysis, and machine learning models. Limited seats available!',
    date: 'Feb 15, 2025',
    category: 'Workshop',
    featured: true,
  },
  {
    id: 2,
    title: 'Guest Speaker: Industry Expert in AI Ethics',
    description:
      'Join us for a session with a leading AI ethics researcher discussing responsible AI development, bias detection, and real-world applications.',
    date: 'Feb 20, 2025',
    category: 'Event',
    featured: false,
  },
  {
    id: 3,
    title: 'Monthly Hackathon Registration Now Live',
    description:
      'Compete with peers in our monthly data science hackathon. Build predictive models, analyze datasets, and win exciting prizes!',
    date: 'Feb 28, 2025',
    category: 'Competition',
    featured: false,
  },
  {
    id: 4,
    title: 'New Project: Climate Data Analysis Initiative',
    description:
      'We are launching a collaborative project analyzing climate data. All skill levels welcome. Mentors provided throughout the project.',
    date: 'Feb 10, 2025',
    category: 'Announcement',
    featured: false,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Workshop':
      return 'bg-primary/10 text-primary border border-primary/20';
    case 'Event':
      return 'bg-accent/10 text-accent border border-accent/20';
    case 'Competition':
      return 'bg-secondary/10 text-secondary border border-secondary/20';
    default:
      return 'bg-muted text-foreground/70 border border-border/30';
  }
};

export default function NoticeBoard() {
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

  const noticeVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const pulseBadgeVariants = {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(79, 70, 229, 0.6)',
        '0 0 0 10px rgba(79, 70, 229, 0)',
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bell className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold">Notice Board</h2>
        </motion.div>

        {/* Notices Container */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px', amount: 0.2 }}
        >
          {notices.map((notice, idx) => (
            <motion.div
              key={notice.id}
              variants={noticeVariants}
              className={`relative rounded-xl border transition-all p-6 sm:p-8 group overflow-hidden ${
                notice.featured
                  ? 'bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 shadow-md'
                  : 'bg-card border-border/50'
              }`}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">{notice.description}</p>
                </div>

                {/* Featured Badge */}
                {notice.featured && (
                  <motion.div
                    className="text-sm font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground whitespace-nowrap h-fit"
                    variants={pulseBadgeVariants}
                    animate="animate"
                  >
                    Latest
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full w-fit ${getCategoryColor(notice.category)}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {notice.category}
                </motion.span>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <Calendar className="w-4 h-4" />
                  </motion.div>
                  {notice.date}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
