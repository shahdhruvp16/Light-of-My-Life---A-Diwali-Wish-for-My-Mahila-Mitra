import React, { useState, useEffect } from 'react';
import Diya from './Diya';

interface DiyasSectionProps {
  onAllDiyasLit: () => void;
}

// ✨ 1. Positions for a graceful arc
const diyaData = [
  { wish: 'May your smile shine brighter than fireworks 🌟', position: 'bottom-[40%] left-[15%]', delay: '0s' },
  { wish: 'You’re the sparkle in every celebration 💖', position: 'bottom-[30%] left-[30%]', delay: '0.5s' },
  { wish: 'Your kindness lights up lives, just like Diwali diyas 🪔', position: 'bottom-[25%] left-1/2', delay: '0.2s' },
  { wish: 'Wishing you endless moments of joy and love 💫', position: 'bottom-[30%] right-[30%]', delay: '0.8s' },
  { wish: 'May your life be as colorful as a rangoli 🎨', position: 'bottom-[40%] right-[15%]', delay: '0.4s' },
];

const DiyasSection: React.FC<DiyasSectionProps> = ({ onAllDiyasLit }) => {
  const [litDiyas, setLitDiyas] = useState<Set<number>>(new Set());
  const [allLit, setAllLit] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);

  const handleDiyaClick = (index: number) => {
    setLitDiyas(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowInstruction(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (litDiyas.size === diyaData.length) {
      setTimeout(() => setAllLit(true), 700);
      setTimeout(onAllDiyasLit, 4000);
    }
  }, [litDiyas, onAllDiyasLit]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0d0d1a] via-[#1a1a2e] to-[#2b0a30] animate-fadeIn">
      
      {/* 🌌 Background sparkles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-twinkle"></div>

      {/* 🕯️ Floating Diyas */}
      {diyaData.map((data, index) => {
        // Center the middle diya manually since it doesn't use left/right
        const transformClass = data.position.includes('left-1/2') ? '-translate-x-1/2' : '';
        
        return (
          // ✨ 2. Floating animation applied here
          <div 
            key={index} 
            className={`absolute ${data.position} ${transformClass} animate-float`}
            style={{ animationDelay: data.delay }} // Staggered animation
          >
            <Diya
              wish={data.wish}
              isLit={litDiyas.has(index)}
              onClick={() => handleDiyaClick(index)}
              className="cursor-pointer transition-transform duration-700 hover:scale-110"
            />
          </div>
        );
      })}

      {/* 💬 Instruction */}
      {showInstruction && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20">
          <p className="text-yellow-200 text-2xl md:text-3xl font-light animate-pulse drop-shadow-lg">
            Click on the diyas to spread the light ✨
          </p>
        </div>
      )}

      {/* 🌟 All Diyas Lit Celebration */}
      {allLit && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-md z-30 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-400 font-great-vibes animate-glow">
            You’ve spread light everywhere 💛
          </h2>
          <p className="text-lg md:text-xl text-yellow-100 mt-4 max-w-xl text-center animate-fadeInUp">
            Just like these diyas, your warmth brightens every heart you touch. Happy Diwali! 🪔
          </p>
        </div>
      )}
    </div>
  );
};

export default DiyasSection;