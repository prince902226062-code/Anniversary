import React from 'react';
import { motion } from 'framer-motion';
import NextButton from './NextButton';

const FirstConnection = ({ onNext }) => {
  return (
    <section className="py-24 px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        
        {/* Left: Text and Slide-in */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
            The First Spark ✨
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
            "It all started with sports day of clg winng volley ball finals  you hugg me unfortunately no one recorded that precious moment Because you were busy at adoring and capturing me.
 "
          </p>
          <div className="pt-4">
            <p className="text-lg text-gray-400">
              Who knew that one small moment would turn out to be the beginning of my favorite story? 
            </p>
          </div>
        </motion.div>

        {/* Right: Image and Zoom Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.2)] border border-pink-500/10">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/first-message-placeholder.jpg"
              alt="Our First Message"
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] opacity-90"
            />
            {/* Absolute overlay to ensure text is visible if image is bright */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </motion.div>
        
      </div>

      <NextButton onClick={onNext} color="pink" />
    </section>
  );
};

export default FirstConnection;
