import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable "Next Journey" icon button
 * Props: onClick, color ("pink" | "purple" | "emerald") - defaults to pink
 */
const NextButton = ({ onClick, color = "pink" }) => {
  const colors = {
    pink:    { ring: "border-pink-500/40",   icon: "text-pink-400",   glow: "shadow-[0_0_15px_rgba(236,72,153,0.4)]",   bg: "bg-pink-500/10" },
    purple:  { ring: "border-purple-500/40", icon: "text-purple-400", glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",   bg: "bg-purple-500/10" },
    emerald: { ring: "border-emerald-500/40",icon: "text-emerald-400",glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]",  bg: "bg-emerald-500/10" },
  };
  const c = colors[color] ?? colors.pink;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all ${c.ring} ${c.bg} ${c.glow}`}
      aria-label="Next section"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
      >
        <ChevronDown className={c.icon} size={24} strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
};

export default NextButton;
