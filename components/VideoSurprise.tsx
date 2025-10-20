import React, { useState, useRef, useEffect } from 'react';
import { DiyaIcon } from './IconComponents';


const Confetti: React.FC<{ delay: number }> = ({ delay }) => {
    const colors = ['#FFD700', '#FFCC99', '#3E0066', '#c13584'];
    const style: React.CSSProperties = {
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        top: '-10px',
        left: `${Math.random() * 100}vw`,
        animation: `confetti-fall ${2 + Math.random() * 3}s linear infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
    };
    return <div style={style}></div>;
};

interface VideoSurpriseProps {
  videoUrl: string;
}

const VideoSurprise: React.FC<VideoSurpriseProps> = ({ videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  }, [isModalOpen]);

  const handleVideoEnd = () => {
    setIsModalOpen(false);
    setVideoEnded(true);
  };

  if (videoEnded) {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#3E0066] to-[#1a1a2e] text-white text-center animate-fadeIn overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => <Confetti key={i} delay={Math.random() * 5} />)}
        <div className="flex gap-4">
            <DiyaIcon isLit={true} className="w-16 h-16 text-yellow-400" />
            <DiyaIcon isLit={true} className="w-16 h-16 text-yellow-400" style={{animationDelay: '0.2s'}} />
            <DiyaIcon isLit={true} className="w-16 h-16 text-yellow-400" style={{animationDelay: '0.4s'}}/>
        </div>
        <h2 className="text-5xl md:text-7xl font-great-vibes text-yellow-300 mt-8 animate-fadeInUp">
          Happy Diwali, Mahila Mitra! 💫
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-[#1a1a2e] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] text-white text-center animate-fadeIn">
      <h2 className="text-3xl md:text-5xl font-great-vibes text-yellow-400 animate-fadeInUp">
        And now… something special, just for you 🎥
      </h2>
      <button
        onClick={handlePlayClick}
        className="mt-8 px-8 py-3 bg-yellow-500 text-[#3E0066] font-bold rounded-full shadow-lg shadow-yellow-500/50 transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
        style={{ animationDelay: '500ms' }}
      >
        Play My Diwali Message
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center animate-fadeIn">
          <div className="relative w-full max-w-4xl p-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-2 -right-2 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
                aria-label="Close video"
              >
                &times;
            </button>
            <video
              ref={videoRef}
              src={videoUrl}
              onEnded={handleVideoEnd}
              controls
              className="w-full h-auto max-h-[90vh]" // The fix is here
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSurprise;