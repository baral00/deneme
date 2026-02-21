'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Image from 'next/image';
import { FadeInUp } from './animations/FadeInUp';
import { HoverScale } from './animations/HoverScale';

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
                    className="object-cover saturate-[0.85]"
                    priority
                />

                {/* Warm Luxury Overlay */}
                <div className="absolute inset-0 bg-[#A68A64] mix-blend-color opacity-40 z-0" /> {/* Warm bronze/champagne tint */}
                <div className="absolute inset-0 bg-[#FCFAF8] mix-blend-overlay opacity-30 z-0" /> {/* Soft cream highlights matching the About section */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF8]/40 to-transparent mix-blend-soft-light z-0" /> {/* Warm gradient fade out */}

                <div className="absolute inset-0 bg-black/20 z-0" /> {/* General darkening for text contrast */}

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
                <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-[#FCFAF8] to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <div className="space-y-8">
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

                    <FadeInUp delay={0.5}>
                        <h1 className="sr-only" data-sb-field-path="heading">{heading}</h1>
                    </FadeInUp>

                    <FadeInUp delay={1.2}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-0 md:-mt-44 relative z-20">
                            <HoverScale>
                                <a
                                    href="#contact"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/5 px-12 py-4 md:px-14 md:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                        Contact
                                    </span>
                                </a>
                            </HoverScale>
                            <HoverScale>
                                <a
                                    href="#galerie"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/5 px-12 py-4 md:px-14 md:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                        Galerie
                                    </span>
                                </a>
                            </HoverScale>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section >
    );
}
