'use client';

import React from 'react';
import { Paper, Typography, Box, Container } from '@mui/material';
import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/Stagger';
import { useTranslations, useLocale } from 'next-intl';

export default function About() {
    const t = useTranslations('about');
    const locale = useLocale();

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
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
                    <Box>
                        <div className="px-2 md:px-0 flex flex-col items-start md:items-start text-left md:text-left">
                            <FadeInUp>
                                <Typography variant="overline" className="text-gold tracking-[0.2em] md:tracking-[0.3em] font-medium mb-4 block text-[10px] md:text-xs uppercase">
                                    {t('overline')}
                                </Typography>
                                <Typography
                                    variant="h2"
                                    className="text-emerald mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl"
                                    style={{ textWrap: 'balance' } as any}
                                >
                                    {t('titlePart1')} <br />
                                    <span className="italic font-light">{t('titlePart2')}</span>
                                </Typography>
                            </FadeInUp>
                            <StaggerContainer className="will-change-transform max-w-2xl">
                                <StaggerItem>
                                    <Typography
                                        className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6"
                                        lang={locale === 'se' ? 'sv' : 'en'}
                                        sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                    >
                                        {t('p1').split(t('p1Highlight'))[0]} <span className="font-bold text-foreground">{t('p1Highlight')}</span>
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography
                                        className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6"
                                        lang={locale === 'se' ? 'sv' : 'en'}
                                        sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                    >
                                        {t('p2')}
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography
                                        className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
                                        lang={locale === 'se' ? 'sv' : 'en'}
                                        sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                    >
                                        {t('p3')}
                                    </Typography>
                                </StaggerItem>
                                <StaggerItem>
                                    <Typography
                                        className="text-foreground/70 text-base md:text-lg leading-relaxed"
                                        lang={locale === 'se' ? 'sv' : 'en'}
                                        sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                    >
                                        {t('p4')}
                                    </Typography>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </Box>

                    <Box>
                        <FadeInUp delay={0.2}>
                            <Paper
                                className="bg-white/80 backdrop-blur-sm p-6 md:p-12 relative overflow-hidden group shadow-xl shadow-gold/5"
                                elevation={0}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full transition-all duration-700 ease-out group-hover:w-full group-hover:h-full group-hover:from-gold/5 group-hover:rounded-none" />

                                <Box className="relative z-10 space-y-10 md:space-y-12">
                                    <StaggerContainer staggerChildren={0.3} className="will-change-transform">
                                        <StaggerItem>
                                            <Typography
                                                variant="h5"
                                                className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl"
                                                style={{ textWrap: 'balance' } as any}
                                            >
                                                {t('feature1Title')}
                                            </Typography>
                                            <Typography
                                                className="text-foreground/60 text-sm md:text-base"
                                                lang={locale === 'se' ? 'sv' : 'en'}
                                                sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                            >
                                                {t('feature1Desc')}
                                            </Typography>
                                        </StaggerItem>

                                        <StaggerItem className="border-t border-gold/10 pt-6 md:pt-8">
                                            <Typography
                                                variant="h5"
                                                className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl"
                                                style={{ textWrap: 'balance' } as any}
                                            >
                                                {t('feature2Title')}
                                            </Typography>
                                            <Typography
                                                className="text-foreground/60 text-sm md:text-base"
                                                lang={locale === 'se' ? 'sv' : 'en'}
                                                sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                            >
                                                {t('feature2Desc')}
                                            </Typography>
                                        </StaggerItem>

                                        <StaggerItem className="border-t border-gold/10 pt-6 md:pt-8">
                                            <Typography
                                                variant="h5"
                                                className="text-emerald mb-3 md:mb-4 font-serif text-xl md:text-2xl"
                                                style={{ textWrap: 'balance' } as any}
                                            >
                                                {t('feature3Title')}
                                            </Typography>
                                            <Typography
                                                className="text-foreground/60 text-sm md:text-base"
                                                lang={locale === 'se' ? 'sv' : 'en'}
                                                sx={{ textWrap: 'pretty', hyphens: 'auto', textAlign: { xs: 'left', md: 'justify' }, textJustify: 'inter-word' } as any}
                                            >
                                                {t('feature3Desc')}
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
