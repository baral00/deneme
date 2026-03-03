'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HoverScale } from './animations/HoverScale';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export default function Navbar() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t('home'), href: '#home' },
        { name: t('about'), href: '#about' },
        { name: t('galerie'), href: '#galerie' },
        { name: t('contact'), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = (newLocale: 'en' | 'se') => {
        router.push(pathname, { locale: newLocale });
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-2',
                isScrolled ? 'bg-emerald/60 backdrop-blur-md py-1 shadow-md' : 'bg-transparent'
            )}
        >
            <div className="w-full flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <div className={cn(
                        "relative h-16 md:h-24 w-auto aspect-[4/1] transition-all duration-500",
                        isScrolled ? "opacity-100" : "opacity-90 hover:opacity-100"
                    )}>
                        <Image
                            src="/logo_1_perfect.png"
                            alt="Harpa Skåne Logo"
                            fill
                            className="object-contain object-left invert brightness-0"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <HoverScale key={link.name}>
                            <Link
                                href={link.href as any}
                                className={cn(
                                    "block text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                                    isScrolled ? "text-cream/90 hover:text-gold" : "text-cream/90 hover:text-gold"
                                )}
                            >
                                {link.name}
                            </Link>
                        </HoverScale>
                    ))}

                    {/* Language Switcher */}
                    <div className="flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase font-bold text-cream/40 border-l border-cream/20 pl-8">
                        <button
                            onClick={() => handleLanguageChange('se')}
                            className={cn("transition-colors hover:text-gold", locale === 'se' ? "text-gold" : "text-cream/60")}
                        >
                            SE
                        </button>
                        <span className="opacity-20">|</span>
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={cn("transition-colors hover:text-gold", locale === 'en' ? "text-gold" : "text-cream/60")}
                        >
                            EN
                        </button>
                    </div>

                    {/* Socials Desktop */}
                    <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-cream/20">
                        <HoverScale>
                            <a
                                href="https://www.instagram.com/harpaskane?igsh=czkwOTV0eDcxYm5m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                        </HoverScale>
                        <HoverScale>
                            <a
                                href="https://www.facebook.com/share/1Mr1piUqHX/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                        </HoverScale>
                        <HoverScale>
                            <a
                                href="https://www.youtube.com/@claudiabesne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Youtube size={18} />
                            </a>
                        </HoverScale>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden transition-colors duration-300", isScrolled ? "text-cream" : "text-cream")}
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
                            <HoverScale key={link.name}>
                                <Link
                                    href={link.href as any}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg uppercase tracking-widest hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </HoverScale>
                        ))}

                        {/* Mobile Language Switcher */}
                        <div className="flex items-center space-x-6 pt-6 border-t border-gold/10">
                            <button
                                onClick={() => { handleLanguageChange('se'); setIsMobileMenuOpen(false); }}
                                className={cn("text-sm tracking-widest uppercase font-bold", locale === 'se' ? "text-gold" : "text-cream/50")}
                            >
                                Swedish
                            </button>
                            <button
                                onClick={() => { handleLanguageChange('en'); setIsMobileMenuOpen(false); }}
                                className={cn("text-sm tracking-widest uppercase font-bold", locale === 'en' ? "text-gold" : "text-cream/50")}
                            >
                                English
                            </button>
                        </div>

                        {/* Socials Mobile */}
                        <div className="flex space-x-6 pt-4 border-t border-gold/20">
                            <a
                                href="https://www.instagram.com/harpaskane?igsh=czkwOTV0eDcxYm5m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1Mr1piUqHX/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@claudiabesne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cream/90 hover:text-gold transition-colors"
                            >
                                <Youtube size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
