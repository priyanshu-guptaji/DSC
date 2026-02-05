'use client';

import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Current Team Data
const teams = [
  {
    role: 'Faculty Advisor',
    members: [
      {
        id: 1,
        name: 'Dr. Bidush Kumar Sahoo',
        initials: 'BS',
        position: 'Faculty Advisor',
        expertise: 'Machine Learning & AI',
        image: null, // Add image path like '/faculty_advisor.jpg' when available
        linkedin: '#',
        github: '#',
      },
    ],
  },
  {
    role: 'Leadership',
    members: [
      {
        id: 2,
        name: 'Priyanshu Gupta',
        initials: 'PG',
        position: 'CLUB LEAD',
        expertise: 'Data Analytics',
        image: '/Club_Lead.jpg',
        linkedin: '#',
        github: '#',
      },
      {
        id: 3,
        name: 'Snehashree Panda',
        initials: 'SP',
        position: 'DEPUTY CLUB LEAD',
        expertise: 'ML Engineering',
        image: null, // Add image path when available
        linkedin: '#',
        github: '#',
      },
      {
        id: 4,
        name: 'Marcus Johnson',
        initials: 'MJ',
        position: 'Treasurer',
        expertise: 'Data Engineering',
        image: null,
        linkedin: '#',
        github: '#',
      },
    ],
  },
  {
    role: 'Core Team',
    members: [
      {
        id: 5,
        name: 'Sofia Garcia',
        initials: 'SG',
        position: 'Event Lead',
        expertise: 'Public Speaking',
        image: null,
        linkedin: '#',
        github: '#',
      },
      {
        id: 6,
        name: 'Chen Wei',
        initials: 'CW',
        position: 'Content Lead',
        expertise: 'Technical Writing',
        image: null,
        linkedin: '#',
        github: '#',
      },
      {
        id: 7,
        name: 'Rajesh Kumar',
        initials: 'RK',
        position: 'Projects Lead',
        expertise: 'Full Stack Dev',
        image: null,
        linkedin: '#',
        github: '#',
      },
      {
        id: 8,
        name: 'Emma Wilson',
        initials: 'EW',
        position: 'Mentorship Lead',
        expertise: 'Career Development',
        image: null,
        linkedin: '#',
        github: '#',
      },
    ],
  },
];

interface TeamMember {
  id: number;
  name: string;
  initials: string;
  position: string;
  expertise: string;
  image?: string | null;
  linkedin?: string;
  github?: string;
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = [
    'from-[#2F6FD8]/25 to-[#6C4AB6]/25',
    'from-[#6C4AB6]/25 to-[#2F6FD8]/25',
    'from-[#2F6FD8]/20 to-[#F28C28]/20',
    'from-[#F28C28]/20 to-[#6C4AB6]/20',
  ];
  const colorClass = colors[member.id % colors.length];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const avatarHoverVariants = {
    hover: {
      scale: 1.1,
      transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -4,
      transition: { duration: 0.3, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      className="group relative rounded-2xl border border-border/40 bg-card overflow-hidden cursor-pointer backdrop-blur-sm hover:border-primary/50 transition-all duration-300 min-h-[320px] flex flex-col justify-end"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -12, boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.6)' }}
    >
      {/* Background Texture/Noise overlay for premium feel */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        {member.image ? (
          <>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClass}`}>
            <div className="w-full h-full flex items-center justify-center font-bold text-6xl text-white/10 select-none">
              {member.initials}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        )}
      </div>

      <div className="p-6 relative z-10">
        {/* Name */}
        <h3 className="font-bold text-xl mb-1 text-foreground group-hover:text-primary transition-colors">
          {member.name}
        </h3>

        {/* Position */}
        <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
          {member.position}
        </p>

        {/* Expertise */}
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {member.expertise}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/30">
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              className="p-2 bg-background/50 hover:bg-primary/20 rounded-lg text-foreground/70 hover:text-primary transition-colors backdrop-blur-md"
              variants={socialIconVariants}
              whileHover="hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          )}
          {member.github && (
            <motion.a
              href={member.github}
              className="p-2 bg-background/50 hover:bg-primary/20 rounded-lg text-foreground/70 hover:text-primary transition-colors backdrop-blur-md"
              variants={socialIconVariants}
              whileHover="hover"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const teamRoleTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionTitleVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#2F6FD8] via-[#6C4AB6] to-[#2F6FD8] bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto px-4">
            Our dedicated team works tirelessly to create an inspiring community for data science enthusiasts.
          </p>
        </motion.div>

        {/* Current Team Groups */}
        {teams.map((team, teamIndex) => (
          <motion.div
            key={teamIndex}
            className="mb-12 sm:mb-16 last:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: teamIndex * 0.1 }}
          >
            {/* Team Role Title */}
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary flex items-center gap-2"
              variants={teamRoleTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#2F6FD8] to-[#6C4AB6] rounded-full" />
              {team.role}
            </motion.h3>

            {/* Members Grid - Responsive */}
            <div className={`grid gap-4 sm:gap-6 ${team.members.length === 1
              ? 'grid-cols-1 max-w-sm mx-auto'
              : team.members.length === 2
                ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                : team.members.length === 3
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
              {team.members.map((member, memberIndex) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  index={teamIndex * 4 + memberIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Link to Alumni Page */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground/90">
              Our Legacy
            </h3>
            <p className="text-sm sm:text-base text-foreground/50 max-w-xl mx-auto px-4 mb-8">
              Meet the visionary leaders who shaped our club&apos;s journey and continue to inspire us.
            </p>
            <Link href="/alumni">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#2F6FD8] to-[#6C4AB6] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(47, 111, 216, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                View All Alumni →
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
