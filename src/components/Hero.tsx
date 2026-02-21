'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Image from 'next/image';

interface HeroProps {
    heading?: string;
    description?: string;
}

export default function Hero({ heading = "Crafting Timeless Celebrations", description = "Bespoke Event Planning" }: HeroProps) {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/IMG_2080.JPG"
                    alt="Luxury Wedding Harp Setting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
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
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full max-w-4xl md:max-w-7xl mx-auto h-80 md:h-[40rem] mb-6 mt-4"
                    >
                        <Image
                            src="/Gemini_Generated_Image_4fled34fled34fle-2-2.png"
                            alt="Harp for Events Logo"
                            fill
                            className="object-contain drop-shadow-2xl scale-150 md:scale-[2.2] origin-center"
                            priority
                        />
                    </motion.div>
                    <h1 className="sr-only" data-sb-field-path="heading">{heading}</h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 1.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-0 md:-mt-44 relative z-20"
                    >
                        <a
                            href="#contact"
                            className="bg-emerald/60 backdrop-blur-md border border-white/20 text-white hover:bg-emerald/80 hover:border-gold/50 hover:text-gold px-12 md:px-14 py-4 md:py-5 text-base md:text-lg font-semibold tracking-widest uppercase rounded-none transition-all duration-300"
                        >
                            Contact
                        </a>
                        <a
                            href="#galerie"
                            className="bg-emerald/60 backdrop-blur-md border border-white/20 text-white hover:bg-emerald/80 hover:border-gold/50 hover:text-gold px-12 md:px-14 py-4 md:py-5 text-base md:text-lg font-semibold tracking-widest uppercase rounded-none transition-all duration-300"
                        >
                            Galerie
                        </a>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
