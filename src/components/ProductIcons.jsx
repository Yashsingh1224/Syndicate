// src/components/ProductIcons.jsx

import React from 'react';

// Common props for sizing and styling
const iconProps = {
    width: "80",
    height: "80",
    viewBox: "0 0 100 100",
};

// Icon for AI Chatbot
export const ChatbotIcon = ({ className }) => (
    <svg {...iconProps} className={className}>
        {/* Defs for gradients and shadows */}
        <defs>
            <linearGradient id="chatbotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dy="4" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Icon shape */}
        <g filter="url(#shadow)">
            <path d="M85,42 C85,58.568 67.56,72 47.5,72 C44.111,72 40.84,71.494 37.788,70.554 L15,80 L23.446,60.212 C18.506,55.159 15,48.836 15,42 C15,25.432 29.44,12 47.5,12 C65.56,12 85,25.432 85,42 Z" fill="url(#chatbotGradient)" />
            {/* Robot eyes */}
            <circle cx="40" cy="42" r="5" fill="white" />
            <circle cx="58" cy="42" r="5" fill="white" />
        </g>
    </svg>
);

// Icon for Image Generator
export const ImageIcon = ({ className }) => (
    <svg {...iconProps} className={className}>
        <defs>
            <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        <g filter="url(#shadow)">
            {/* Picture Frame */}
            <rect x="15" y="20" width="70" height="50" rx="8" fill="url(#imageGradient)" />
            <rect x="22" y="27" width="56" height="36" rx="4" fill="#10182a" />
            {/* Mountain shape */}
            <path d="M30 55 L45 40 L55 50 L70 35 L78 55 Z" fill="#60A5FA" />
            {/* Sun */}
            <circle cx="65" cy="38" r="4" fill="#FBBF24" />
        </g>
    </svg>
);

// Icon for Data Analyzer
export const DataIcon = ({ className }) => (
    <svg {...iconProps} className={className}>
        <g filter="url(#shadow)">
            <rect x="25" y="60" width="15" height="20" rx="3" fill="#60A5FA" />
            <rect x="45" y="40" width="15" height="40" rx="3" fill="#3B82F6" />
            <rect x="65" y="20" width="15" height="60" rx="3" fill="#2563EB" />
        </g>
    </svg>
);

// Icon for Voice Synthesis
export const VoiceIcon = ({ className }) => (
    <svg {...iconProps} className={className}>
        <g filter="url(#shadow)">
            <path d="M30 25 h 5 v 50 h -5 z" fill="#60A5FA" />
            <path d="M40 15 h 5 v 70 h -5 z" fill="#3B82F6" />
            <path d="M50 30 h 5 v 40 h -5 z" fill="#2563EB" />
            <path d="M60 40 h 5 v 20 h -5 z" fill="#3B82F6" />
            <path d="M70 45 h 5 v 10 h -5 z" fill="#60A5FA" />
        </g>
    </svg>
);