'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import type { GalleryImage } from '@/lib/stitch';

interface GalerieProps {
    images: GalleryImage[];
}

export default function Galerie({ images }: GalerieProps) {
    return (
        <section id="galerie" className="py-24 bg-white">
            <Container maxWidth="xl">
                <Box className="text-center mb-16">
                    <Typography variant="overline" className="text-gold tracking-[0.3em] font-medium mb-4 block">
                        Our Portfolio
                    </Typography>
                    <Typography variant="h2" className="text-emerald mb-4">
                        A Galerie of <span className="italic font-light">Elegance</span>
                    </Typography>
                </Box>

                {/* Gallery grid: portrait - square - portrait */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {images.map((image, index) => {
                        console.log("[v0] Rendering gallery image:", index, image.id, image.title, image.url.substring(0, 80));
                        return (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group overflow-hidden"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    className="relative"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-emerald/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <Typography variant="h6" className="text-cream font-serif uppercase tracking-widest text-sm mb-2">
                                                {image.title}
                                            </Typography>
                                            <div className="w-10 h-[1px] bg-gold mx-auto" />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
