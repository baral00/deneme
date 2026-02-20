'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/luxury_wedding_hero.png" // Assuming the generated image will be moved to public/
                    alt="Luxury Wedding Harp"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-emerald/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src="/images/hero-logo.png"
                            alt="Harp & Events Logo"
                            width={500}
                            height={500}
                            className="w-64 h-64 md:w-96 md:h-96 object-contain"
                        />
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl text-cream font-serif leading-tight">
                        Crafting Timeless <br />
                        <span className="italic font-light">Celebrations</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            className="bg-gold text-emerald hover:bg-cream hover:text-emerald px-10 py-4 text-sm font-semibold tracking-widest rounded-none"
                        >
                            The Experience
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            className="border-cream text-cream hover:bg-cream hover:text-emerald px-10 py-4 text-sm font-semibold tracking-widest rounded-none"
                        >
                            Galerie
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-gold/50 to-transparent" />
                <span className="text-gold/50 text-[10px] uppercase tracking-[0.3em] vertical-rl">Scroll</span>
            </motion.div>
        </section>
    );
}
