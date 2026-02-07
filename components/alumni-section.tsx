'use client';

import { Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Alumni Data
const alumni = [
    {
        id: 1,
        name: 'Alex Thompson',
        position: 'Former Club Lead',
        tenure: '2023 - 2024',
        bio: 'Led the club through its most transformative year, establishing partnerships with 5 tech companies and growing membership by 150%.',
        location: 'Bangalore, India',
        image: null, // Add alumni image path like '/alumni/alex.jpg'
        linkedin: '#',
        website: '#',
        currentRole: 'ML Engineer at Google',
    },
    {
        id: 2,
        name: 'Maria Santos',
        position: 'Former Deputy Lead',
        tenure: '2023 - 2024',
        bio: 'Pioneered the ML Workshop Series and mentored 50+ students in their data science journey. Led 15+ successful hackathons.',
        location: 'Mumbai, India',
        image: null,
        linkedin: '#',
        website: '#',
        currentRole: 'Data Scientist at Microsoft',
    },
    {
        id: 3,
        name: 'David Kim',
        position: 'Former Club Lead',
        tenure: '2022 - 2023',
        bio: 'Established the club foundation and created core curriculum for data science education. Built strong industry connections.',
        location: 'Delhi, India',
        image: null,
        linkedin: '#',
        website: '#',
        currentRole: 'Founder at DataTech AI',
    },
    {
        id: 4,
        name: 'Priya Sharma',
        position: 'Former Deputy Lead',
        tenure: '2022 - 2023',
        bio: 'Grew the club membership by 200% and organized the first annual Data Science Summit with 500+ attendees.',
        location: 'Chennai, India',
        image: null,
        linkedin: '#',
        website: '#',
        currentRole: 'Senior Analyst at Amazon',
    },
    {
        id: 5,
        name: 'Rahul Verma',
        position: 'Former Technical Lead',
        tenure: '2022 - 2023',
        bio: 'Developed the club technical infrastructure and led multiple award-winning hackathon projects in NLP and Computer Vision.',
        location: 'Hyderabad, India',
        image: null,
        linkedin: '#',
        website: '#',
        currentRole: 'AI Researcher at Meta',
    },
    {
        id: 6,
        name: 'Sneha Patel',
        position: 'Former Events Lead',
        tenure: '2021 - 2022',
        bio: 'Created signature events that became annual traditions. Built partnerships with 10+ student organizations across campus.',
        location: 'Pune, India',
        image: null,
        linkedin: '#',
        website: '#',
        currentRole: 'Product Manager at Flipkart',
    },
];

interface AlumniMember {
    id: number;
    name: string;
    position: string;
    tenure: string;
    bio: string;
    location: string;
    image: string | null;
    linkedin: string;
    website: string;
    currentRole: string;
}

function AlumniCard({ member, index }: { member: AlumniMember; index: number }) {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    const colors = [
        'from-[#2F6FD8]/30 via-[#6C4AB6]/20 to-[#2F6FD8]/10',
        'from-[#6C4AB6]/30 via-[#2F6FD8]/20 to-[#6C4AB6]/10',
        'from-[#F28C28]/20 via-[#6C4AB6]/20 to-[#2F6FD8]/20',
        'from-[#2F6FD8]/20 via-[#F28C28]/20 to-[#6C4AB6]/20',
    ];
    const colorClass = colors[member.id % colors.length];

    return (
        <motion.div
            className="group relative rounded-3xl border border-foreground/5 bg-card overflow-hidden cursor-pointer backdrop-blur-md hover:border-primary/40 transition-all duration-500 min-h-[420px] flex flex-col justify-end p-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -12, boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.1)' }}
        >
            {/* Background Texture/Noise overlay for premium feel */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] dark:opacity-[0.05]" />

            {/* Background Image/Gradient */}
            <div className="absolute inset-0 z-0">
                {member.image ? (
                    <>
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </>
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-80`}>
                        <div className="w-full h-full flex items-center justify-center font-bold text-[10rem] text-foreground/5 select-none transition-transform duration-700 group-hover:scale-110">
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="relative z-20">
                {/* Tenure Badge */}
                <motion.div
                    className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    {member.tenure}
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-primary font-bold text-xs uppercase tracking-wider">{member.position}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/10" />
                    <span className="text-foreground/40 text-xs font-medium">{member.location}</span>
                </div>

                {/* Current Role with animated underline */}
                <div className="relative mb-6 pt-4 border-t border-foreground/5">
                    <p className="text-sm text-foreground/70 leading-relaxed italic group-hover:text-foreground transition-colors">
                        &ldquo;{member.bio}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-6 h-[1px] bg-primary/40" />
                        <span className="text-[11px] font-bold text-primary/80 uppercase tracking-widest">{member.currentRole}</span>
                    </div>
                </div>

                {/* Social Links - Glassmorphism style */}
                <div className="flex items-center gap-3">
                    {member.linkedin && (
                        <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 text-white/60 hover:text-white border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl"
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </motion.a>
                    )}
                    {member.website && (
                        <motion.a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-accent/20 text-white/60 hover:text-white border border-white/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-xl"
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Website"
                        >
                            <Globe className="w-4 h-4" />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
}

export default function AlumniSection() {
    const sectionTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' as const },
        },
    };

    return (
        <section id="alumni" className="py-24 sm:py-32 relative overflow-hidden bg-background">
            {/* Premium Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/5 blur-[100px] rounded-full opacity-50" />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20 sm:mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionTitleVariants}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Our Legacy
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
                        Built by These <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Visionaries</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-foreground/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        Meet the brilliant minds who laid the foundation and shaped the future of our data science community.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/#join">
                            <motion.button
                                className="group relative px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Join Our Team <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </motion.button>
                        </Link>
                        <Link href="/#about">
                            <motion.button
                                className="px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Alumni Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumni.map((member, index) => (
                        <AlumniCard
                            key={member.id}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16 sm:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <p className="text-foreground/60 mb-4">
                        Want to be part of this legacy?
                    </p>
                    <Link href="/#join">
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-[#2F6FD8] to-[#6C4AB6] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(47, 111, 216, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Apply to Join DS Club
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
