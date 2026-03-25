import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import NextButton from './NextButton';

const Proposal = ({ onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      window.dispatchEvent(new CustomEvent('callpause'));
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      window.dispatchEvent(new CustomEvent('callplay'));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative z-10">
        
        {/* Right (Visual left on desktop due to row-reverse): Text and Slide-in */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
            The Day You Proposed Me
          </h2>
          <h3 className="text-2xl md:text-3xl text-pink-300 font-playfair italic mb-6">
            26th of March 2025
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mt-6">
            "Best feel of my life ✨"
          </p>
          <div className="pt-4 space-y-8">
            <p className="text-lg text-gray-400">
              A moment frozen in time. The day my dream became my reality.
            </p>

            {/* Audio Player for Call Recording */}
            <div className="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 w-full max-w-md shadow-[0_0_20px_rgba(168,85,247,0.1)] mx-auto md:mx-0">
              <audio 
                ref={audioRef} 
                src={`${import.meta.env.BASE_URL}call-recording.mp3`} 
                onEnded={() => { setIsPlaying(false); window.dispatchEvent(new CustomEvent('callpause')); }}
                onTimeUpdate={handleTimeUpdate}
              />
              
              <button 
                onClick={togglePlay}
                className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-purple-200 tracking-wide">Our Call Recording</p>
                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-3 overflow-hidden relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Left (Visual right on desktop): Image and Zoom Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(147,112,219,0.2)] border border-purple-500/20">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={`${import.meta.env.BASE_URL}proposal-placeholder.jpg`}
              alt="Proposal Day"
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] opacity-90"
            />
            {/* Absolute overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>
        
      </div>

      <NextButton onClick={onNext} color="pink" />
    </section>
  );
};

export default Proposal;
