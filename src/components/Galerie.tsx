'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/stitch';
import { FadeInUp } from './animations/FadeInUp';
import { useTranslations } from 'next-intl';

interface GalerieProps {
    images: GalleryImage[];
}

export default function Galerie({ images }: GalerieProps) {
    const t = useTranslations('galerie');
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
                <Box className="text-center mb-16 px-4">
                    <FadeInUp>
                        <Typography variant="h2" className="text-emerald mb-4 text-3xl md:text-5xl lg:text-6xl">
                            {t('titlePart1')} <span className="italic font-light">{t('titlePart2')}</span>
                        </Typography>
                    </FadeInUp>
                </Box>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative mb-0 will-change-transform"
                        >
                            {/* The Frame / Matte */}
                            <div className="bg-[#FCFAF8] p-3 md:p-5 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-[#D4AF37]/30 relative group">
                                {/* Inner delicate gold border (passepartout effect) */}
                                <div className="absolute inset-3 md:inset-5 border border-[#D4AF37]/40 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    className="relative overflow-hidden rounded-sm line-clamp-none bg-[#E8E6E1] aspect-[4/5]"
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.title || "Harpmusik vid bröllop och event i Skåne - Harpa Skåne Galerie"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={80}
                                        className="object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105"
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
