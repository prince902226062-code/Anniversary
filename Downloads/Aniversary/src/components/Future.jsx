import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const Future = () => {
  const [clickedYes, setClickedYes] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleYes = () => setClickedYes(true);

  const dodgeNo = useCallback(() => {
    const maxX = window.innerWidth - 140;
    const maxY = window.innerHeight - 80;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setNoPos({ x: newX, y: newY });
  }, []);

  return (
    <section className="py-24 px-6 w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden">
      
      <AnimatePresence mode="wait">
        {!clickedYes ? (
          <motion.div
            key="question"
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center z-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-playfair font-bold text-white mb-12"
            >
              This is just the beginning...<br/>
              <span className="text-pink-500 mt-4 block">will you stay forever?</span>
            </motion.h2>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(236,72,153,0.8)" }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
                className="px-12 py-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white font-bold text-2xl shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all"
              >
                Yes <Heart size={24} className="inline-block ml-1 -mt-1 text-white" fill="white" />
              </motion.button>

              {/* Elusive No Button — runs away on hover */}
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={dodgeNo}
                onFocus={dodgeNo}
                className="px-10 py-5 bg-white/5 border border-gray-500/40 rounded-full text-gray-400 font-bold text-2xl backdrop-blur-sm cursor-not-allowed select-none"
                tabIndex={-1}
                aria-disabled="true"
              >
                No 💔
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-center z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 leading-tight whitespace-nowrap"
            >
              Happy{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                1st Year
              </span>
              {' '}Anniversary,{' '}
              <span className="text-pink-400">Chakulii</span> 💗
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 italic mt-4"
            >
              One year down, forever to go. 🥂
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-lg text-pink-300 mt-3"
            >
              Looking forward to every chapter with you. ❤️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heart Explosion Effect when clicked - optimized count */}
      {clickedYes && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`explosion-${i}`}
              initial={{ 
                x: "50vw", y: "50vh", 
                opacity: 1, scale: 0 
              }}
              animate={{ 
                x: `${Math.random() * 100}vw`, 
                y: `${Math.random() * 100}vh`, 
                opacity: 0, 
                scale: Math.random() * 2 + 1 
              }}
              transition={{ 
                duration: 2, 
                ease: "easeOut" 
              }}
              style={{ willChange: "transform" }}
              className="absolute text-pink-500 text-3xl"
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}
      
    </section>
  );
};

export default Future;
