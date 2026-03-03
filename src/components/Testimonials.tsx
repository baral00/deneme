'use client';

import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
    const t = useTranslations('testimonials');
    const baseVelocity = -1; // Negative for scrolling left
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    // Use translated quotes and duplicate for seamless loop
    const testimonialsList = t.raw('quotes') as Array<{ quote: string; name: string }>;
    const duplicatedTestimonials = [...testimonialsList, ...testimonialsList, ...testimonialsList];

    useAnimationFrame((t, delta) => {
        if (isHovered) return; // Pause on hover

        let moveBy = baseVelocity * (delta / 16); // normalize by 60fps

        // Calculate the width of one full set of testimonials (before duplication)
        if (contentRef.current && containerRef.current) {
            const singleSetWidth = contentRef.current.scrollWidth / (duplicatedTestimonials.length / testimonialsList.length);

            let newX = x.get() + moveBy;

            if (newX <= -singleSetWidth) {
                newX += singleSetWidth;
            }

            x.set(newX);
        }
    });

    return (
        <section className="py-24 bg-white overflow-hidden border-y border-[#D4AF37]/10 relative" id="testimonials">
            {/* Seamless Floral Background */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "url('/luxury-floral-pattern.png')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px',
                }}
            />
            {/* Gradient overlay to soften the edges to white */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif italic text-emerald mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-emerald/70 font-light tracking-wide max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            <div
                className="relative flex overflow-hidden w-full z-10"
                ref={containerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                <motion.div
                    ref={contentRef}
                    className="flex gap-6 md:gap-8 px-4"
                    style={{ x }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={`testimonial-${index}`}
                            className="flex-none w-[300px] md:w-[400px] p-8 md:p-12 rounded-3xl bg-white/60 backdrop-blur-md border border-[#D4AF37]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-6" strokeWidth={1.5} />
                                <p className="text-lg md:text-xl font-serif italic text-emerald leading-relaxed mb-8">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-[#D4AF37]/10">
                                <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-emerald/80 font-medium">
                                    {testimonial.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade Out Edges for seamless look */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </section>
    );
}
