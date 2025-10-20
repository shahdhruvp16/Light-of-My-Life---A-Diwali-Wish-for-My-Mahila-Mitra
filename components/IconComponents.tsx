
import React from 'react';

export const MuteIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

export const UnmuteIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2" />
  </svg>
);


interface DiyaIconProps extends React.SVGProps<SVGSVGElement> {
  isLit: boolean;
}

export const DiyaIcon: React.FC<DiyaIconProps> = ({ isLit, className, ...props }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {isLit && (
      <path
        d="M50 50 Q 55 35, 50 20 Q 45 35, 50 50"
        fill="url(#flameGradient)"
        className="transition-opacity duration-1000 flame-anim"
        style={{ opacity: isLit ? 1 : 0, transformOrigin: '50% 50px' }}
      >
      </path>
    )}
    <path
      d="M20 80 Q 50 100, 80 80 L 85 70 Q 50 60, 15 70 Z"
      fill="url(#diyaGradient)"
    />
    <defs>
      <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="diyaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#E67E22' }} />
        <stop offset="100%" style={{ stopColor: '#D35400' }} />
      </linearGradient>
    </defs>
  </svg>
);
