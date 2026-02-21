'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    className = '',
    delayChildren = 0,
    staggerChildren = 0.2
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren,
                        delayChildren,
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
