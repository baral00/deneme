'use client';

import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The harp music at our wedding was absolutely breathtaking. It added a layer of elegance and emotion that we will never forget. True artistry.",
        name: "Eleanor & James"
    },
    {
        id: 2,
        quote: "Professional, punctual, and extraordinarily talented. Our corporate gala was elevated instantly the moment she began to play.",
        name: "Aria Event Co."
    },
    {
        id: 3,
        quote: "A seamless experience from booking to performance. The ambiance created was nothing short of magic. Highly recommended for luxury events.",
        name: "Sophia M."
    },
    {
        id: 4,
        quote: "Every guest commented on how beautiful the music was. It was the quiet luxury we were aiming for, executed perfectly.",
        name: "David & Clara"
    }
];

export default function Testimonials() {
    // Duplicate the array to create a seamless infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    const controls = useAnimationControls();

    React.useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 30,
            }
        });
    }, [controls]);

    return (
        <section className="py-24 bg-[#FCFAF8] overflow-hidden border-y border-[#D4AF37]/10 relative" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif italic text-emerald mb-4">
                        Kind Words
                    </h2>
                    <p className="text-emerald/70 font-light tracking-wide max-w-2xl mx-auto">
                        Reflections from those who have experienced the magic of the harp.
                    </p>
                </motion.div>
            </div>

            <div
                className="relative flex overflow-hidden w-full"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => {
                    controls.start({
                        x: ["0%", "-50%"],
                        transition: {
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }
                    });
                }}
            >
                <motion.div
                    className="flex gap-6 md:gap-8 px-4"
                    animate={controls}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="flex-none w-[300px] md:w-[400px] p-8 md:p-12 rounded-sm bg-[#F5F5F7] border border-[#D4AF37]/30 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-6" strokeWidth={1.5} />
                                <p className="text-lg md:text-xl font-serif italic text-emerald leading-relaxed mb-8">
                                    "{testimonial.quote}"
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
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FCFAF8] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FCFAF8] to-transparent pointer-events-none z-10" />
        </section>
    );
}
