'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { HoverScale } from './animations/HoverScale';
import { useLanguage } from './providers/LanguageProvider';

export default function Footer() {
    const { t } = useLanguage();

    const quickLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.galerie, href: '#galerie' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <footer className="bg-emerald text-cream pt-20 pb-10 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Branding */}
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-serif text-gold mb-4">HARPA SKÅNE</h3>
                    <p className="text-cream/60 font-light leading-relaxed">
                        {t.footer.tagline}
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">{t.footer.quickLinks}</h4>
                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">{t.footer.contactMe}</h4>
                    <ul className="space-y-4 text-sm text-cream/70">
                        <li className="flex items-center space-x-3">
                            <Mail size={16} className="text-gold" />
                            <a href="mailto:Harpaskane@gmail.com" className="hover:text-gold transition-colors">
                                Harpaskane@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={16} className="text-gold" />
                            <a href="tel:+46793162064" className="hover:text-gold transition-colors">
                                +46 79 316 20 64
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">{t.footer.social}</h4>
                    <div className="flex space-x-4">
                        <HoverScale>
                            <a
                                href="https://www.instagram.com/harpaskane?igsh=czkwOTV0eDcxYm5m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald transition-colors duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                        </HoverScale>
                        <HoverScale>
                            <a
                                href="https://www.facebook.com/share/1Mr1piUqHX/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald transition-colors duration-300"
                            >
                                <Facebook size={18} />
                            </a>
                        </HoverScale>
                        <HoverScale>
                            <a
                                href="https://www.youtube.com/@claudiabesne"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald transition-colors duration-300"
                            >
                                <Youtube size={18} />
                            </a>
                        </HoverScale>
                    </div>
                </div>
            </div>

        </footer>
    );
}
