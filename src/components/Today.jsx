import React from 'react';
import { motion } from 'framer-motion';
import NextButton from './NextButton';

const Today = ({ onNext }) => {
  return (
    <section className="py-32 px-6 w-full min-h-[60vh] flex items-center justify-center bg-gradient-romantic relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 leading-tight mb-8">
          Today, you are not just part of my life...
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-4xl md:text-6xl text-glow font-bold text-white mt-4"
        >
          You are my life.
        </motion.p>
      </motion.div>

      {/* Floating particles - optimized count */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400 rounded-full blur-[1px]"
          animate={{
            y: ["0vh", "-100vh"],
            x: [0, (i % 2 === 0 ? 20 : -20)],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${(i * 8)}%`,
            top: `100%`,
            willChange: "transform"
          }}
        />
      ))}

      <NextButton onClick={onNext} color="pink" />
    </section>
  );
};

export default Today;
