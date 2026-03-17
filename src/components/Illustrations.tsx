import { motion } from 'motion/react';

export const Blob = ({ className, color = '#1FA6A6', opacity = 0.1 }: { className?: string, color?: string, opacity?: number }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill={color} fillOpacity={opacity} d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77.1,27.7,68.4,40.1C59.7,52.5,48.8,63.4,35.9,71.1C23,78.8,8.1,83.3,-6.4,81.4C-20.9,79.5,-35,71.2,-47.1,61.1C-59.2,51,-69.3,39.1,-75.4,25.4C-81.5,11.7,-83.6,-3.8,-80.1,-18.3C-76.6,-32.8,-67.5,-46.3,-55.4,-54.1C-43.3,-61.9,-28.2,-64,-14.1,-71.8C0,-79.6,14.1,-79.6,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
);

export const GelatoCup = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cup Base */}
    <path d="M40 100L50 220C50 231.046 58.9543 240 70 240H130C141.046 240 150 231.046 150 220L160 100H40Z" fill="#1FA6A6" />
    <path d="M40 100H160V115C160 120.523 155.523 125 150 125H50C44.4772 125 40 120.523 40 115V100Z" fill="#168E8E" />
    
    {/* Gelato Scoops */}
    <circle cx="70" cy="80" r="45" fill="#FDF2B1" />
    <circle cx="130" cy="80" r="45" fill="#FDF2B1" />
    <circle cx="100" cy="50" r="50" fill="#FDF2B1" />
    
    {/* Drip */}
    <path d="M60 100C60 110 70 115 75 105C80 95 90 110 100 100C110 90 120 115 130 105C140 95 150 110 150 100" stroke="#FDF2B1" strokeWidth="8" strokeLinecap="round" />
    
    {/* Logo Placeholder */}
    <circle cx="100" cy="170" r="25" fill="white" fillOpacity="0.2" />
    <text x="100" y="175" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">1.5°</text>
  </svg>
);

export const PlayfulArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 50C10 50 30 10 90 50M90 50L70 35M90 50L70 65" stroke="#8c7a6b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FloatingShape = ({ className, type = 'circle', color = '#FDF2B1' }: { className?: string, type?: 'circle' | 'square' | 'triangle', color?: string }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
    {type === 'circle' && <circle cx="50" cy="50" r="40" fill={color} />}
    {type === 'square' && <rect x="10" y="10" width="80" height="80" rx="20" fill={color} />}
    {type === 'triangle' && <path d="M50 10L90 90H10L50 10Z" fill={color} />}
  </svg>
);
