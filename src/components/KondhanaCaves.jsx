import React from 'react';
import { motion } from 'framer-motion';
import NextButton from './NextButton';

const KondhanaCaves = ({ onNext }) => {
  return (
    <section className="py-24 px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)] border border-emerald-500/20">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="kondhana-placeholder.jpg"
              alt="Kondhana Caves Trip"
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            {/* Location badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-500/30">
              <span className="text-emerald-400 text-sm">📍</span>
              <span className="text-emerald-300 text-xs font-semibold tracking-wide">Kondhana Caves, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-emerald-500 text-sm font-semibold tracking-[0.25em] uppercase"
            >
              ⛰️ A Chapter Written in Mountains
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-pink-400 to-purple-400 mt-3 mb-4 leading-tight">
              Kondhana Caves
            </h2>
            <h3 className="text-xl md:text-2xl text-pink-300 font-playfair italic mb-6">
              The Trip of Our Love 💚
            </h3>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
            "Some places don't just stay in photos — they stay in your heart forever."
          </p>

          <div className="pt-2 space-y-4">
            <p className="text-lg text-gray-400">
              The cold cave air, the long climbs, the stolen glances at the top... every moment felt like it was made just for us. That trip proved that adventure is always better with you.
            </p>
          </div>

          {/* Fun detail badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            {["Ancient Caves", "Just Us", "Unforgettable"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <NextButton onClick={onNext} color="emerald" />
    </section>
  );
};

export default KondhanaCaves;
