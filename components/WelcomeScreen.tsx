
import React from 'react';
import { DiyaIcon } from './IconComponents';

interface WelcomeScreenProps {
  name: string;
  onBegin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ name, onBegin }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#3E0066] to-[#1a1a2e] text-white text-center animate-fadeIn">
      <div className="flex justify-center items-center gap-4 mb-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ animationDelay: `${i * 200}ms` }} className="animate-fadeInUp">
            <DiyaIcon className="w-16 h-16 text-yellow-400" isLit={true} />
          </div>
        ))}
      </div>
      <h1 className="text-4xl md:text-6xl font-great-vibes text-yellow-300 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
        Namaste, {name}
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-peach-200 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
        This Diwali, I wanted to do something a little more special…
      </p>
      <button
        onClick={onBegin}
        className="mt-12 px-8 py-3 bg-yellow-500 text-[#3E0066] font-bold rounded-full shadow-lg shadow-yellow-500/50 transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
        style={{ animationDelay: '1200ms' }}
      >
        Let’s Begin the Light Journey ✨
      </button>
    </div>
  );
};

export default WelcomeScreen;
