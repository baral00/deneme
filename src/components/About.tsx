'use client';

import React from 'react';
import { Paper, Typography, Box, Container } from '@mui/material';
import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/Stagger';
import { useLanguage } from './providers/LanguageProvider';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FCFAF8] to-[#F7F4ED]">
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF8] via-transparent to-[#F7F4ED] z-0" />
            <Container maxWidth="lg" className="relative z-10">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 }, alignItems: 'center' }}>
                    <Box>
                        <div className="px-2 md:px-0">
                            <FadeInUp>
                                <Typography variant="overline" className="text-gold tracking-[0.2em] md:tracking-[0.3em] font-medium mb-4 block text-[10px] md:text-xs">
                                    {t.about.overline}
                                </Typography>
                                <Typography variant="h2" className="text-emerald mb-8 leading-tight text-2xl md:text-4xl lg:text-5xl hyphens-auto break-words">
                                    {t.about.titlePart1} <br />
                                    <span className="italic font-light">{t.about.titlePart2}</span>
                                </Typography>
                            </FadeInUp>
                            <StaggerContainer className="will-change-transform">
                                <StaggerItem>
                                    <Typography className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6 hyphens-auto">
                                        {t.about.p1.split(t.about.p1Highlight)[0]} <span className="font-bold text-foreground">{t.about.p1Highlight}</span>
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6 hyphens-auto">
                                        {t.about.p2}
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8 md:mb-10 hyphens-auto">
                                        {t.about.p3}
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography className="text-foreground/70 text-base md:text-lg leading-relaxed hyphens-auto">
                                        {t.about.p4}
                                    </Typography>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </Box>

                    <Box>
                        <FadeInUp delay={0.2}>
                            <Paper
                                className="bg-white/80 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden group shadow-xl shadow-gold/5"
                                elevation={0}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full transition-all duration-700 ease-out group-hover:w-full group-hover:h-full group-hover:from-gold/5 group-hover:rounded-none" />

                                <Box className="relative z-10 space-y-10 md:space-y-12">
                                    <StaggerContainer staggerChildren={0.3} className="will-change-transform">
                                        <StaggerItem>
                                            <Typography variant="h5" className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl">
                                                {t.about.feature1Title}
                                            </Typography>
                                            <Typography className="text-foreground/60 text-sm md:text-base">
                                                {t.about.feature1Desc}
                                            </Typography>
                                        </StaggerItem>

                                        <StaggerItem className="border-t border-gold/10 pt-6 md:pt-8">
                                            <Typography variant="h5" className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl">
                                                {t.about.feature2Title}
                                            </Typography>
                                            <Typography className="text-foreground/60 text-sm md:text-base">
                                                {t.about.feature2Desc}
                                            </Typography>
                                        </StaggerItem>

                                        <StaggerItem className="border-t border-gold/10 pt-6 md:pt-8">
                                            <Typography variant="h5" className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl">
                                                {t.about.feature3Title}
                                            </Typography>
                                            <Typography className="text-foreground/60 text-sm md:text-base">
                                                {t.about.feature3Desc}
                                            </Typography>
                                        </StaggerItem>
                                    </StaggerContainer>
                                </Box>
                            </Paper>
                        </FadeInUp>
                    </Box>
                </Box>
            </Container>
        </section>
    );
}
