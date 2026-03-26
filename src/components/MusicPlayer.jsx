import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const isPlayingRef = useRef(true);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Auto-play on mount — this component only mounts after login,
  // so a user gesture (the login click) has already happened.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    // Attempt autoplay immediately (works because user just clicked login)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser still blocked — set up a one-time click listener as fallback
        setIsPlaying(false);
        const handleFirstInteraction = () => {
          if (audioRef.current) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(() => { });
          }
          document.removeEventListener('click', handleFirstInteraction);
        };
        document.addEventListener('click', handleFirstInteraction);
      });
    }

    // Mute bg music when call recording plays, unmute when it stops
    const handleCallPlay = () => {
      if (audioRef.current) audioRef.current.volume = 0;
    };
    const handleCallPause = () => {
      if (audioRef.current && isPlayingRef.current) {
        audioRef.current.volume = 0.4;
      }
    };

    window.addEventListener('callplay', handleCallPlay);
    window.addEventListener('callpause', handleCallPause);

    return () => {
      window.removeEventListener('callplay', handleCallPlay);
      window.removeEventListener('callpause', handleCallPause);
    };
  }, []); // Run once on mount only

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => { });
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
