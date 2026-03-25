import React from 'react';
import { motion } from 'framer-motion';
import NextButton from './NextButton';

const Sports2026 = ({ onNext }) => {
  return (
    <section className="py-24 px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-900/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Text LEFT, Image RIGHT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 space-y-5 text-center md:text-left"
        >
          <span className="text-pink-400 text-sm font-semibold tracking-[0.25em] uppercase">
            🏆 2026 · Together We Won
          </span>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 leading-tight">
            Supporting Each Other
          </h2>

          <blockquote className="border-l-4 border-pink-500/60 pl-5 space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic">
              "In 2026 we won sports together — you were supporting me, I was supporting you.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic">
              Unfortunately you had to go early because you wanted to leave for my sasural. Before leaving, you cried in my arms... I know you really wanted to see that match. That was my final match.
            </p>
            <p className="text-xl md:text-2xl text-pink-300 font-playfair italic">
              After seeing that unconditional love for me, I was proud to have that kind of love in this generation.
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold">
              I love you, bachaa 💗
            </p>
          </blockquote>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.2)] border border-pink-500/20">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/sports2026-placeholder.jpg"
              alt="Sports 2026 Together"
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            {/* Year badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-pink-500/30">
              <span className="text-yellow-400 text-sm">🏅</span>
              <span className="text-pink-300 text-xs font-semibold tracking-wide">Sports Day 2026</span>
            </div>
          </div>
        </motion.div>

      </div>

      <NextButton onClick={onNext} color="pink" />
    </section>
  );
};

export default Sports2026;
