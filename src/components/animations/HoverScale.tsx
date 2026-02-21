'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HoverScaleProps {
    children: React.ReactNode;
    className?: string;
}

export const HoverScale: React.FC<HoverScaleProps> = ({ children, className = '' }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                letterSpacing: "0.15em",
                transition: { duration: 0.3, ease: 'easeOut' }
            }}
            className={className}
            style={{ letterSpacing: "0.1em" }}
        >
            {children}
        </motion.div>
    );
};
