'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4',
                isScrolled ? 'bg-emerald/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className={cn(
                        "text-2xl font-serif tracking-widest uppercase transition-colors duration-500",
                        isScrolled ? "text-gold" : "text-emerald"
                    )}>
                        Harp <span className="font-light italic">&</span> Events
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-gold",
                                isScrolled ? "text-cream/90" : "text-emerald"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className={cn(
                            "px-6 py-2 border transition-all duration-300 uppercase tracking-widest text-xs",
                            isScrolled
                                ? "border-gold text-gold hover:bg-gold hover:text-emerald"
                                : "border-emerald text-emerald hover:bg-emerald hover:text-cream"
                        )}
                    >
                        Reserved
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-emerald"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-emerald text-cream flex flex-col p-8 space-y-6 md:hidden border-t border-gold/20"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg uppercase tracking-widest hover:text-gold"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
