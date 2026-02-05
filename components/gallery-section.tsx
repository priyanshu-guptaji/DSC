'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1591115765373-520b7a08e752?auto=format&fit=crop&q=80',
        title: 'Data Science Workshop',
        description: 'Practical session on Machine Learning concepts.',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        title: 'Hackathon 2024',
        description: 'Teams collaborating to solve real-world problems.',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80',
        title: 'Guest Lecture',
        description: 'Industry experts sharing their knowledge.',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
        title: 'Code Review Session',
        description: 'Constructive feedback on student projects.',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
        title: 'AI Summit',
        description: 'Exploring the future of Artificial Intelligence.',
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
        title: 'Project Presentation',
        description: 'Showcasing innovative data-driven solutions.',
    },
];

export default function GallerySection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    return (
        <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Workshop Gallery
                    </h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Glimpses into our past workshops, events, and collaborative sessions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            variants={itemVariants}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                            whileHover={{ y: -10 }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl mb-1">{photo.title}</h3>
                                <p className="text-white/80 text-sm">{photo.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
