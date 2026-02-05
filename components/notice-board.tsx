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
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const noticeVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
        ease: 'easeOut' as const,
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
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden sm:block" />

          {/* Notices Container */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px', amount: 0.2 }}
          >
            {notices.map((notice, idx) => (
              <motion.div
                key={notice.id}
                variants={noticeVariants}
                className="relative flex items-start gap-8 group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 mt-2 hidden sm:block">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-primary/50 transition-colors">
                    <Bell className={`w-6 h-6 ${notice.featured ? 'text-primary' : 'text-white/40'}`} />
                  </div>
                  {notice.featured && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10 animate-pulse" />
                  )}
                </div>

                <motion.div
                  className={`flex-1 relative rounded-[2rem] border transition-all p-8 sm:p-10 overflow-hidden ${notice.featured
                      ? 'bg-white/[0.04] border-primary/30 shadow-2xl shadow-primary/10'
                      : 'bg-white/[0.02] border-white/5'
                    }`}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  {/* Subtle Background Texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                  {/* Header */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${getCategoryColor(notice.category)}`}>
                          {notice.category}
                        </span>
                        <span className="text-white/30 text-xs font-bold">{notice.date}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                        {notice.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed font-medium text-lg max-w-3xl">
                        {notice.description}
                      </p>
                    </div>

                    {/* Featured Badge */}
                    {notice.featured && (
                      <motion.div
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl bg-primary text-white whitespace-nowrap h-fit shadow-xl shadow-primary/30"
                        variants={pulseBadgeVariants}
                        animate="animate"
                      >
                        Highlight
                      </motion.div>
                    )}
                  </div>

                  {/* Footer / Interaction */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-card flex items-center justify-center text-[10px] font-bold text-white/40">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Team Discussion Active</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
