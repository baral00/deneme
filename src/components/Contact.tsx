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
import { useLanguage } from './providers/LanguageProvider';

export default function Contact() {
    const { t, language } = useLanguage();
    const langCode = language === 'se' ? 'sv' : 'en';
    const [date, setDate] = useState<Date | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: '',
        location: '',
        vision: ''
    });

    const eventTypes = t.contact.eventOptions;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: date ? date.toLocaleDateString() : 'Not specified'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', eventType: '', location: '', vision: '' });
                setDate(null);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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

            <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div
                    className="p-6 md:p-16 border border-gold/20 rounded-[2.5rem] bg-[#FCFAF8]/95 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.1)] relative overflow-hidden"
                >
                    <Box className="text-center mb-10 md:mb-12 relative z-10">
                        <FadeInUp>
                            <Typography variant="overline" className="text-gold tracking-[0.2em] md:tracking-[0.3em] font-medium mb-4 block text-[10px] md:text-xs">
                                {t.contact.overline}
                            </Typography>
                            <Typography
                                variant="h2"
                                className="text-emerald mb-4 text-3xl md:text-4xl lg:text-5xl"
                                style={{ textWrap: 'balance' } as any}
                            >
                                {t.contact.titlePart1} <span className="italic font-light">{t.contact.titlePart2}</span>
                            </Typography>
                        </FadeInUp>
                    </Box>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center py-12 md:py-24 px-4 md:px-6 space-y-8 md:space-y-10 min-h-[400px] md:min-h-[500px] w-full"
                        >
                            <div className="flex flex-col items-center space-y-6 w-full">
                                <Typography
                                    variant="h3"
                                    className="text-emerald font-light text-center w-full text-2xl md:text-3xl"
                                    style={{ textWrap: 'balance' } as any}
                                    sx={{
                                        textAlign: 'center',
                                        display: 'block',
                                        width: '100%'
                                    }}
                                >
                                    {t.contact.successTitle}
                                </Typography>
                                <Typography
                                    className="text-emerald/70 text-lg leading-relaxed max-w-md mx-auto text-center w-full"
                                    lang={langCode}
                                    sx={{
                                        textAlign: 'center',
                                        display: 'block',
                                        width: '100%',
                                        textWrap: 'pretty',
                                        hyphens: 'auto'
                                    }}
                                >
                                    {t.contact.successMsg}
                                </Typography>
                            </div>
                            <div className="flex justify-center w-full">
                                <Button
                                    onClick={() => setStatus('idle')}
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'rgba(6, 78, 59, 0.3)',
                                        color: '#064e3b',
                                        borderRadius: '99px',
                                        px: 8,
                                        py: 2,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        '&:hover': {
                                            borderColor: '#d4af37',
                                            bgcolor: 'rgba(212, 175, 55, 0.05)'
                                        }
                                    }}
                                >
                                    {t.contact.successBtn}
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                                <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        label={t.contact.labelName}
                                        variant="standard"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t.contact.placeholderName}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Box>
                                <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        label={t.contact.labelEmail}
                                        variant="standard"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t.contact.placeholderEmail}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Box>
                                <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
                                    <TextField
                                        fullWidth
                                        select
                                        name="eventType"
                                        label={t.contact.labelEvent}
                                        variant="standard"
                                        value={formData.eventType}
                                        onChange={handleChange}
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
                                        label={t.contact.labelDate}
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
                                        name="location"
                                        label={t.contact.labelLocation}
                                        variant="standard"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder={t.contact.placeholderLocation}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Box>
                                <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
                                    <TextField
                                        fullWidth
                                        name="vision"
                                        label={t.contact.labelVision}
                                        variant="standard"
                                        multiline
                                        rows={4}
                                        value={formData.vision}
                                        onChange={handleChange}
                                        placeholder={t.contact.placeholderVision}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Box>
                            </Box>

                            {status === 'error' && (
                                <Typography color="error" align="center" variant="body2" sx={{ mt: 2 }}>
                                    {t.contact.errorMsg}
                                </Typography>
                            )}

                            <Box className="pt-8 text-center flex justify-center relative z-10">
                                <HoverScale>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="group relative flex items-center justify-center overflow-hidden rounded-full border border-emerald/40 bg-emerald/5 px-14 py-4 md:px-16 md:py-5 text-sm font-light tracking-[0.2em] uppercase text-emerald transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 disabled:opacity-50"
                                    >
                                        <span className="relative z-10 transition-colors duration-500 group-hover:text-gold/90 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                                            {status === 'submitting' ? t.contact.submitting : t.contact.submitBtn}
                                        </span>
                                    </button>
                                </HoverScale>
                            </Box>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
