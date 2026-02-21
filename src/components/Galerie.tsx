'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import type { GalleryImage } from '@/lib/stitch';
import { FadeInUp } from './animations/FadeInUp';

interface GalerieProps {
    images: GalleryImage[];
}

export default function Galerie({ images }: GalerieProps) {
    return (
        <section id="galerie" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F7F4ED] to-[#F0EBE1]">
            {/* Seamless Floral Background */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "url('/luxury-floral-pattern.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px',
                }}
            />
            {/* Gradient overlay to soften it and hide seams */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED] via-transparent to-[#F0EBE1] z-0" />

            <Container maxWidth="xl" className="relative z-10">
                <Box className="text-center mb-16">
                    <FadeInUp>
                        <Typography variant="h2" className="text-emerald mb-4">
                            A Galerie of <span className="italic font-light">Elegance</span>
                        </Typography>
                    </FadeInUp>
                </Box>

                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative break-inside-avoid mb-8"
                        >
                            {/* The Frame / Matte */}
                            <div className="bg-[#FCFAF8] p-3 md:p-5 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-[#D4AF37]/30 relative group">
                                {/* Inner delicate gold border (passepartout effect) */}
                                <div className="absolute inset-3 md:inset-5 border border-[#D4AF37]/40 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    className="relative overflow-hidden rounded-sm line-clamp-none bg-[#E8E6E1]"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-auto object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
