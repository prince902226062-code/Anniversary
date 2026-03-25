import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onStart }) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight">
          Our Story <span className="text-pink-500 animate-pulse">❤️</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 italic">
          A journey from strangers to forever
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all duration-300"
        >
          Start Journey
        </motion.button>
      </motion.div>

      {/* Floating hearts - reduced count and optimized for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0, x: (i * 12) + "vw" }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 12 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{ willChange: "transform" }}
            className="absolute text-pink-500/20 text-xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
