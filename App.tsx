
import React, { useState, useRef, useEffect, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import DiyasSection from './components/DiyasSection';
import FireworksSection from './components/FireworksSection';
import VideoSurprise from './components/VideoSurprise';
import { MuteIcon, UnmuteIcon } from './components/IconComponents';

enum PageStep {
  WELCOME,
  DIYAS,
  FIREWORKS,
  VIDEO,
}

const MAHILA_MITRA_NAME = "My Dearest Friend";
const VIDEO_URL = "https://github.com/shahdhruvp16/Light-of-My-Life---A-Diwali-Wish-for-My-Mahila-Mitra/blob/main/InShot_20251020_075950691.mp4"; // Placeholder video
const MUSIC_URL = "Website sound.mp3"; // Placeholder music

const App: React.FC = () => {
  const [step, setStep] = useState<PageStep>(PageStep.WELCOME);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(error => {
        console.log("Audio playback failed:", error);
        // Autoplay was prevented, user interaction is needed.
        setIsMusicPlaying(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      playMusic();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [playMusic]);
  
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const renderStep = () => {
    switch (step) {
      case PageStep.WELCOME:
        return <WelcomeScreen name={MAHILA_MITRA_NAME} onBegin={() => setStep(PageStep.DIYAS)} />;
      case PageStep.DIYAS:
        return <DiyasSection onAllDiyasLit={() => setStep(PageStep.FIREWORKS)} />;
      case PageStep.FIREWORKS:
        return <FireworksSection onComplete={() => setStep(PageStep.VIDEO)} />;
      case PageStep.VIDEO:
        return <VideoSurprise videoUrl={VIDEO_URL} />;
      default:
        return <WelcomeScreen name={MAHILA_MITRA_NAME} onBegin={() => setStep(PageStep.DIYAS)} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <audio ref={audioRef} src={MUSIC_URL} loop />
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
        aria-label={isMusicPlaying ? 'Mute music' : 'Unmute music'}
      >
        {isMusicPlaying ? <UnmuteIcon /> : <MuteIcon />}
      </button>
      <div className="transition-opacity duration-1000 ease-in-out">
        {renderStep()}
      </div>
    </div>
  );
};

export default App;
