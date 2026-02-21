'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, Box, Container } from '@mui/material';

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#faf8f5]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.05),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(44,85,69,0.03),transparent_50%)]" />
            <Container maxWidth="lg" className="relative z-10">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" className="text-gold tracking-[0.3em] font-medium mb-4 block">
                                My Approach
                            </Typography>
                            <Typography variant="h2" className="text-emerald mb-8 leading-tight">
                                A Soundtrack for <br />
                                <span className="italic font-light">Your Story</span>
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed mb-6">
                                I believe weddings and special events deserve more than just music—<span className="font-bold text-foreground">they deserve a soul.</span>
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed mb-6">
                                By pairing the ethereal sound of my harp with your unique story, I curate a bespoke experience from the first note to the last.
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed mb-10">
                                My focus is on the fine details that make your day truly yours, delivering a performance that is as timeless as it is unforgettable.
                            </Typography>
                            <Typography className="text-foreground/70 text-lg leading-relaxed">
                                I simply provide the quiet elegance that your milestone deserves.
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
                                className="bg-white/80 backdrop-blur-sm p-12 relative overflow-hidden group shadow-xl shadow-gold/5"
                                elevation={0}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full transition-all duration-700 ease-out group-hover:w-full group-hover:h-full group-hover:from-gold/5 group-hover:rounded-none" />

                                <Box className="relative z-10 space-y-12">
                                    <div>
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            Concert-Level Artistry
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            As a concert harpist, I bring the mastery of the grand stage to your most intimate moments. I translate years of classical training into a personal soundtrack that reflects the unique soul of your story.
                                        </Typography>
                                    </div>

                                    <div className="border-t border-gold/10 pt-8">
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            Seamless Presence
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            Performing in world-class venues has taught me that true luxury lies in the details. I handle every nuance with quiet confidence, ensuring a seamless experience so you can simply stay in the moment.
                                        </Typography>
                                    </div>

                                    <div className="border-t border-gold/10 pt-8">
                                        <Typography variant="h5" className="text-emerald mb-4 font-serif">
                                            The Perfect Note
                                        </Typography>
                                        <Typography className="text-foreground/60">
                                            I believe music should be as warm and welcoming as the occasion itself. Whether it's your wedding or a special gathering, I'm here to help you find the right acoustic balance to match the feel of your day. I'm looking forward to helping you make the moment feel truly special.
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
