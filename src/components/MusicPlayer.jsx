import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Auto-play on mount (unmuted by default)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }

    // Mute bg music when call recording plays, unmute when it stops
    const handleCallPlay = () => {
      if (audioRef.current) audioRef.current.volume = 0;
    };
    const handleCallPause = () => {
      if (audioRef.current) audioRef.current.volume = 0.4;
    };

    window.addEventListener('callplay', handleCallPlay);
    window.addEventListener('callpause', handleCallPause);

    // Global click listener to start music on first user interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {});
        window.removeEventListener('click', handleFirstInteraction);
      }
    };
    window.addEventListener('click', handleFirstInteraction);

    return () => {
      window.removeEventListener('callplay', handleCallPlay);
      window.removeEventListener('callpause', handleCallPause);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="music.mp3"
        loop
      />
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-pink-500/20 backdrop-blur-md border border-pink-500/30 rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-500/30 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)]"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
