
import React, { useEffect } from 'react';

interface FireworksSectionProps {
  onComplete: () => void;
}

const Firework: React.FC<{ delay: string; top: string; left: string; size: string; color: string }> = ({ delay, top, left, size, color }) => {
    const particles = Array.from({ length: 20 });
    return (
        <div className="absolute" style={{ top, left }}>
            {particles.map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                        animation: `firework-explode 1.2s cubic-bezier(0, 0.55, 0.45, 1) forwards`,
                        animationDelay: delay,
                        transform: `rotate(${(i / particles.length) * 360}deg) translateX(50px)`,
                    }}
                />
            ))}
            <style>{`
                @keyframes firework-explode {
                    0% { transform: scale(0.5) rotate(${(Math.random() * 360)}deg) translateX(0) translateY(0); opacity: 1; }
                    100% { transform: scale(1) rotate(${(Math.random() * 360)}deg) translateX(${(Math.random() - 0.5) * 200}px) translateY(${(Math.random() - 0.5) * 200}px); opacity: 0; }
                }
            `}</style>
        </div>
    );
};


const FireworksSection: React.FC<FireworksSectionProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 7000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fireworks = [
    { delay: '0.5s', top: '20%', left: '25%', size: '4px', color: '#FFD700' },
    { delay: '1s', top: '50%', left: '70%', size: '5px', color: '#FFCC99' },
    { delay: '1.5s', top: '70%', left: '30%', size: '4px', color: '#c13584' },
    { delay: '2.5s', top: '30%', left: '80%', size: '6px', color: '#FFD700' },
    { delay: '3s', top: '60%', left: '15%', size: '5px', color: '#FFCC99' },
  ];

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden diwali-gradient animate-fadeIn">
      {fireworks.map((fw, i) => <Firework key={i} {...fw} />)}
      <div className="z-10 text-center text-white px-4 animate-fadeInUp" style={{ animationDelay: '2s' }}>
        <h2 className="text-4xl md:text-6xl font-great-vibes" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Wishing you a Diwali filled with joy, laughter, and endless sparkle, my Mahila Mitra.
        </h2>
      </div>
    </div>
  );
};

export default FireworksSection;
