'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    MenuItem,
    Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FadeInUp } from './animations/FadeInUp';
import { HoverScale } from './animations/HoverScale';

const eventTypes = [
    'Wedding Ceremony',
    'Cocktail Hour',
    'Corporate Gala',
    'Private Soirée',
    'Engagement Party',
    'Other'
];

export default function Contact() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F0EBE1] to-[#E8E1D5]">
            {/* Seamless Floral Background */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "url('/luxury-floral-pattern.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px', // Adjust size for optimal pattern scaling
                }}
            />
            {/* Gradient overlay to soften it and hide seams */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0EBE1] via-transparent to-[#E8E1D5] z-0" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div
                    className="p-10 md:p-16 border border-gold/20 rounded-[2.5rem] bg-[#FCFAF8]/95 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.1)] relative overflow-hidden"
                >
                    <Box className="text-center mb-12 relative z-10">
                        <FadeInUp>
                            <Typography variant="overline" className="text-gold tracking-[0.3em] font-medium mb-4 block">
                                Inquiry
                            </Typography>
                            <Typography variant="h2" className="text-emerald mb-4">
                                Reserve <span className="italic font-light">The Date</span>
                            </Typography>
                        </FadeInUp>
                    </Box>

                    <form className="space-y-8">
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                            <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    variant="standard"
                                    required
                                    placeholder="e.g. Julianna Vane"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="standard"
                                    required
                                    type="email"
                                    placeholder="concierge@example.com"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Event Type"
                                    variant="standard"
                                    defaultValue=""
                                    required
                                    InputLabelProps={{ shrink: true }}
                                >
                                    {eventTypes.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                <DatePicker
                                    label="Event Date"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                    format="dd/MM/yyyy"
                                    slotProps={{
                                        textField: {
                                            variant: 'standard',
                                            fullWidth: true,
                                            InputLabelProps: { shrink: true }
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
                                <TextField
                                    fullWidth
                                    label="Your Vision"
                                    variant="standard"
                                    multiline
                                    rows={4}
                                    placeholder="Tell me about your dream celebration..."
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                        </Box>

                        <Box className="pt-8 text-center flex justify-center relative z-10">
                            <HoverScale>
                                <button
                                    type="submit"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-full border border-emerald/40 bg-emerald/5 px-14 py-4 md:px-16 md:py-5 text-sm font-light tracking-[0.2em] uppercase text-emerald transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                                >
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                        Send Inquiry
                                    </span>
                                </button>
                            </HoverScale>
                        </Box>
                    </form>
                </div>
            </div>
        </section>
    );
}
