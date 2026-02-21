import React from 'react';

interface HarpSvgProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const HarpSvg: React.FC<HarpSvgProps> = ({ className = '', ...props }) => {
    return (
        <svg
            viewBox="0 0 100 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Front pillar and Top Neck */}
            <path d="M 85 110 L 85 15 C 60 5, 40 15, 25 35" />

            {/* Soundbox and Base */}
            <path d="M 25 35 C 10 60, 20 95, 25 110 C 45 115, 65 112, 85 110" />

            {/* Strings */}
            <line x1="35" y1="45" x2="35" y2="111" strokeWidth="0.5" />
            <line x1="45" y1="34" x2="45" y2="112" strokeWidth="0.5" />
            <line x1="55" y1="24" x2="55" y2="111" strokeWidth="0.5" />
            <line x1="65" y1="18" x2="65" y2="110" strokeWidth="0.5" />
            <line x1="75" y1="16" x2="75" y2="110" strokeWidth="0.5" />
        </svg>
    );
};
