
import React from 'react';
import { DiyaIcon } from './IconComponents';

interface DiyaProps {
  wish: string;
  isLit: boolean;
  onClick: () => void;
  className?: string;
}

const Diya: React.FC<DiyaProps> = ({ wish, isLit, onClick, className }) => {
  return (
    <div
      className={`relative cursor-pointer group flex flex-col items-center transition-transform duration-300 hover:scale-110 ${className}`}
      onClick={!isLit ? onClick : undefined}
    >
      <DiyaIcon isLit={isLit} className="w-20 h-20" />
      {isLit && (
        <p
          className="absolute -top-10 w-48 text-center text-lg text-[#FFCC99] font-great-vibes animate-fadeInUp"
        >
          {wish}
        </p>
      )}
    </div>
  );
};

export default Diya;
