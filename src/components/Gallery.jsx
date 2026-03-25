import React from 'react';
import { motion } from 'framer-motion';
import NextButton from './NextButton';

const Photos = [
  { src: `${import.meta.env.BASE_URL}photo1-placeholder.jpg`, caption: 'Our first date' },
  { src: `${import.meta.env.BASE_URL}photo2-placeholder.jpg`, caption: 'That one random trip' },
  { src: `${import.meta.env.BASE_URL}photo3-placeholder.jpg`, caption: 'Lost in the city' },
  { src: `${import.meta.env.BASE_URL}photo4-placeholder.jpg`, caption: 'Memories' },
];

const Gallery = ({ onNext }) => {
  return (
    <section className="py-24 px-6 md:px-12 w-full min-h-screen bg-[#0A050A] relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
        >
          Moments Preserved
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="bg-white p-4 pb-10 rounded-sm shadow-xl relative cursor-pointer group"
            >
              <div className="overflow-hidden w-full h-[300px] lg:h-[250px] bg-gray-200">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <p className="text-black font-playfair text-center mt-4 text-xl">
                {photo.caption}
              </p>
              {/* Tape effect */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-md rotate-[-3deg] shadow-sm border border-white/20" />
            </motion.div>
          ))}
        </div>
      </div>

      <NextButton onClick={onNext} color="purple" />
    </section>
  );
};

export default Gallery;
