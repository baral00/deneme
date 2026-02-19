'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, Box, Container } from '@mui/material';

export default function About() {
    return (
        <section id="about" className="py-24 bg-cream">
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" className="text-gold tracking-[0.3em] font-medium mb-4 block">
                                The Bespoke Approach
                            </Typography>
                            <Typography variant="h2" className="text-emerald mb-8 leading-tight">
                                Crafting Your <br />
                                <span className="italic font-light">Vision into Reality</span>
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed mb-6">
                                At Harp for Events, we believe that every celebration is a masterpiece waiting to be composed. Our approach is deeply personal, ensuring that every detail reflects the unique soul of your story.
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed">
                                From the intricate floral arrangements to the ethereal sound of the harp, we curate every element with precision and passion, delivering an experience that transcends the ordinary.
                            </Typography>
                        </motion.div>
                    </Box>

                    <Box>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Paper
                                className="bg-white p-12 relative overflow-hidden group"
                                elevation={0}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full transition-all group-hover:w-40 group-hover:h-40" />

                                <Box className="relative z-10 space-y-12">
                                    <div>
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            Curated Elegance
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            Access to the world's most exclusive venues and artisans, curated specifically for your taste.
                                        </Typography>
                                    </div>

                                    <div className="border-t border-gold/10 pt-8">
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            Impeccable Precision
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            A dedicated concierge for every step of the journey, ensuring a seamless and stress-free planning experience.
                                        </Typography>
                                    </div>

                                    <div className="border-t border-gold/10 pt-8">
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            Musical Artistry
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            Integrating live harp performances and world-class musical curation into the fabric of your event.
                                        </Typography>
                                    </div>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </section>
    );
}
