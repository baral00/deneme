import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { HoverScale } from './animations/HoverScale';

export default function Footer() {
    return (
        <footer className="bg-emerald text-cream py-16 px-6 border-t border-gold/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-gold tracking-widest uppercase">
                        Harp <span className="font-light italic">for</span> Events
                    </h3>
                    <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                        Crafting timeless celebrations and bespoke experiences for the most discerning clients.
                    </p>
                </div>

                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-cream/70">
                        <li><HoverScale><Link href="#home" className="block hover:text-gold transition-colors">Home</Link></HoverScale></li>
                        <li><HoverScale><Link href="#about" className="block hover:text-gold transition-colors">My Approach</Link></HoverScale></li>
                        <li><HoverScale><Link href="#galerie" className="block hover:text-gold transition-colors">Galerie</Link></HoverScale></li>
                        <li><HoverScale><Link href="#contact" className="block hover:text-gold transition-colors">Contact</Link></HoverScale></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">Contact me</h4>
                    <ul className="space-y-4 text-sm text-cream/70">
                        <li className="flex items-center space-x-3">
                            <Mail size={16} className="text-gold" />
                            <span>harpforevents@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={16} className="text-gold" />
                            <span>(+46) 0793162064</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6">Social</h4>
                    <div className="flex space-x-4">
                        <HoverScale>
                            <a href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald transition-colors duration-300">
                                <Instagram size={18} />
                            </a>
                        </HoverScale>
                        <HoverScale>
                            <a href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-emerald transition-colors duration-300">
                                <Facebook size={18} />
                            </a>
                        </HoverScale>
                    </div>
                </div>
            </div>

        </footer>
    );
}
