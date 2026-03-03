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
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/IMG_2080website hero.jpg"
                    alt="Professionell harpist i Skåne spelar vid ett lyxigt bröllop"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                    priority
                />
            </div>

            {/* Content Container - Centered on all screen sizes */}
            <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center gap-3 md:gap-4.5">

                    {/* Logo Section - Perfect Centering & New White Asset */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full max-w-[280px] sm:max-w-[420px] md:max-w-[715px] lg:max-w-[845px] xl:max-w-[1040px] aspect-square flex items-center justify-center pointer-events-none"
                    >
                        {/* Subtle Logo Support */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10 blur-3xl opacity-20">
                            <div className="w-[80%] h-[80%] bg-white rounded-full" />
                        </div>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full transform-gpu">
                                <Image
                                    src="/logo_white.png"
                                    alt="Harpa Skåne Logo"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    <FadeInUp delay={0.3}>
                        <h1 className="sr-only">{t('title')} {t('titleGold')}</h1>
                    </FadeInUp>

                    {/* Buttons Section - Centered Baseline */}
                    <FadeInUp delay={0.6}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 mt-0">
                            <HoverScale>
                                <a
                                    href="#contact"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 px-10 py-3.5 md:px-12 md:py-4 lg:px-14 lg:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 min-w-[240px] md:min-w-[260px]"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90">
                                        {t('btnPrimary')}
                                    </span>
                                </a>
                            </HoverScale>
                            <HoverScale>
                                <a
                                    href="#galerie"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 px-10 py-3.5 md:px-12 md:py-4 lg:px-14 lg:py-5 text-sm md:text-base font-light tracking-[0.2em] uppercase text-white backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 min-w-[240px] md:min-w-[260px]"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90">
                                        {t('btnSecondary')}
                                    </span>
                                </a>
                            </HoverScale>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
}
