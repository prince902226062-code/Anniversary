import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NextButton from './NextButton';

const FirstBond = ({ onNext }) => {
  const text = "From late-night calls to endless laughter... every moment pulled me closer to you.";
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(intervalId);
      }, 45);
      return () => clearInterval(intervalId);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative z-10">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(147,112,219,0.2)] border border-purple-500/20">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/late-night-placeholder.jpg"
              alt="Late Night Calls"
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right: Text with typing effect */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-[0.25em] uppercase">
            🌙 Our Late Nights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
            The First Bond
          </h2>

          {/* Typing animation box */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(147,112,219,0.1)] min-h-[100px] flex items-center">
            <p className="text-xl md:text-2xl text-purple-200 font-light leading-relaxed italic">
              "{displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block w-[2px] h-[1.2em] bg-pink-400 ml-1 align-middle"
              />
              "
            </p>
          </div>

          <p className="text-lg text-gray-400">
            Those hours never felt wasted — they felt like home.
          </p>
        </motion.div>

      </div>

      <NextButton onClick={onNext} color="purple" />
    </section>
  );
};

export default FirstBond;
