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
import { HarpSvg } from './HarpSvg';

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
        <section id="contact" className="py-24 bg-cream relative overflow-hidden">
            {/* Background Harps */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <HarpSvg className="absolute top-10 -left-10 w-96 h-96 text-gold transform -rotate-12" />
                <HarpSvg className="absolute bottom-10 -right-10 w-96 h-96 text-gold transform rotate-12" />
                <HarpSvg className="absolute top-1/2 left-1/4 w-48 h-48 text-emerald transform -translate-y-1/2 -rotate-6" />
                <HarpSvg className="absolute top-1/4 right-1/4 w-64 h-64 text-emerald transform -translate-y-1/2 rotate-6 opacity-30" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <Paper className="p-12 md:p-16 border border-gold/10" elevation={0}>
                    <Box className="text-center mb-12">
                        <Typography variant="overline" className="text-gold tracking-[0.3em] font-medium mb-4 block">
                            Inquiry
                        </Typography>
                        <Typography variant="h2" className="text-emerald mb-4">
                            Reserve <span className="italic font-light">The Date</span>
                        </Typography>
                        <Typography className="text-foreground/60 max-w-sm mx-auto">
                            Please provide your details below, and our concierge will contact you within 24 hours.
                        </Typography>
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
                                    placeholder="Tell us about your dream celebration..."
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                        </Box>

                        <Box className="pt-8 text-center">
                            <Button
                                variant="contained"
                                className="bg-emerald text-cream px-16 py-4 tracking-widest uppercase text-xs"
                                type="submit"
                            >
                                Send Inquiry
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </div>
        </section>
    );
}
