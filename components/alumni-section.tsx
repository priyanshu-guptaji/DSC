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

function AlumniCard({ member, index, isReversed }: { member: AlumniMember; index: number; isReversed: boolean }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    return (
        <motion.div
            className={`group relative bg-card rounded-2xl overflow-hidden border border-border/40 shadow-lg hover:shadow-2xl transition-all duration-500 ${isReversed ? 'lg:flex-row-reverse' : ''
                } flex flex-col lg:flex-row`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -8 }}
        >
            {/* Photo Section */}
            <div className="relative w-full lg:w-2/5 aspect-square lg:aspect-auto overflow-hidden bg-gradient-to-br from-[#2F6FD8]/20 to-[#6C4AB6]/20">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a]">
                            {/* Placeholder silhouette effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#2F6FD8]/30 to-[#6C4AB6]/30 flex items-center justify-center">
                                    <span className="text-4xl sm:text-5xl font-bold text-white/80">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 w-16 h-16 border border-[#2F6FD8]/20 rounded-full" />
                            <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#6C4AB6]/20 rounded-full" />
                        </div>
                    </div>
                )}
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                {/* Name & Position */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-[#2F6FD8] transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-[#2F6FD8] font-semibold text-sm sm:text-base mb-3">
                    {member.position}
                </p>

                {/* Bio */}
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-4">
                    {member.bio}
                </p>

                {/* Current Role Badge */}
                <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F28C28]/10 text-[#F28C28] text-xs sm:text-sm font-medium">
                        Currently: {member.currentRole}
                    </span>
                </div>

                {/* Location & Tenure + Social Links */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/30">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2F6FD8]/10 text-[#2F6FD8] text-xs sm:text-sm font-medium">
                            📍 {member.location}
                        </span>
                        <span className="text-foreground/50 text-xs sm:text-sm">
                            {member.tenure}
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {member.linkedin && (
                            <motion.a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-card border border-border/50 text-foreground/60 hover:text-[#2F6FD8] hover:border-[#2F6FD8]/50 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
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
                                className="p-2.5 rounded-full bg-card border border-border/50 text-foreground/60 hover:text-[#6C4AB6] hover:border-[#6C4AB6]/50 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Website"
                            >
                                <Globe className="w-4 h-4" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
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
        <section id="alumni" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-card/20 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionTitleVariants}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-[#2F6FD8]/10 text-[#2F6FD8] text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        Alumni
                    </motion.span>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Built by These Faces
                    </h2>

                    {/* Subtitle */}
                    <p className="text-foreground/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        There are many variations of available but the majority have suffered alteration in some form.
                        Meet the visionary leaders who shaped our club.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#join">
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-[#2F6FD8] to-[#6C4AB6] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Our Team
                            </motion.button>
                        </Link>
                        <Link href="/#about">
                            <motion.button
                                className="px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn more About us
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Alumni Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {alumni.map((member, index) => (
                        <AlumniCard
                            key={member.id}
                            member={member}
                            index={index}
                            isReversed={index % 2 === 1}
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
