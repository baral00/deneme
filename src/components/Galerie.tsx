'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography, Container, Box } from '@mui/material';
import type { GalleryImage } from '@/lib/stitch';

interface GalerieProps {
    images: GalleryImage[];
}

export default function Galerie({ images }: GalerieProps) {
    return (
        <section id="galerie" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#fdfaf6] via-[#faf8f5] to-[#fdfaf6]">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-emerald/5 blur-[120px]" />
            </div>

            <Container maxWidth="xl" className="relative z-10">
                <Box className="text-center mb-16">
                    <Typography variant="h2" className="text-emerald mb-4">
                        A Galerie of <span className="italic font-light">Elegance</span>
                    </Typography>
                </Box>

                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden break-inside-avoid"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                className="relative line-clamp-none"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-auto object-cover rounded-sm transition-all duration-700"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
