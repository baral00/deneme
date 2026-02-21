'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInUpProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
