'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    TextField,
    MenuItem,
    Paper
} from '@mui/material';
import Image from 'next/image';
import { FadeInUp } from './animations/FadeInUp';
import { HoverScale } from './animations/HoverScale';
import { useLanguage } from './providers/LanguageProvider';

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/IMG_2080website hero.jpg"
                    alt="Professionell harpist i Skåne spelar vid ett lyxigt bröllop"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto md:-translate-x-[95%] transition-all duration-1000 flex flex-col items-center">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full max-w-4xl mx-auto h-[18rem] md:h-[28rem] mb-4 mt-4 flex items-center justify-center pointer-events-none"
                    >
                        {/* Subtle Logo Support */}
                        <div
                            className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
                            aria-hidden="true"
                        >
                            {/* Barely-there Solid Fill */}
                            <div className="w-[45%] h-[30%] bg-white/10 blur-3xl rounded-full" />
                        </div>

                        <motion.div
                            animate={{
                                filter: [
                                    'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.6)) drop-shadow(0 0 15px rgba(255,255,255,0.4))',
                                    'brightness(0) invert(1) drop-shadow(0 0 3px rgba(255,255,255,0.45)) drop-shadow(0 0 17px rgba(255,255,255,0.28))',
                                    'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.6)) drop-shadow(0 0 15px rgba(255,255,255,0.4))'
                                ],
                                scale: [1, 1.011, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src="/logo_1_perfect.png"
                                alt="Harpa Skåne Logo"
                                fill
                                className="object-contain drop-shadow-2xl scale-[2.0] md:scale-[2.65] origin-center"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <FadeInUp delay={0.5}>
                        <h1 className="sr-only">{t.hero.title} {t.hero.titleGold}</h1>
                    </FadeInUp>

                    <FadeInUp delay={1.2}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-32 md:mt-52 relative z-20">
                            <HoverScale>
                                <a
                                    href="#contact"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/5 px-12 py-4 md:px-14 md:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 min-w-[220px] md:min-w-[260px]"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                        {t.hero.btnPrimary}
                                    </span>
                                </a>
                            </HoverScale>
                            <HoverScale>
                                <a
                                    href="#galerie"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/5 px-12 py-4 md:px-14 md:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 min-w-[220px] md:min-w-[260px]"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                        {t.hero.btnSecondary}
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
