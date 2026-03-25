import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Lock, Heart, Eye, EyeOff } from 'lucide-react';

// Allowed users — phone numbers without spaces
const USERS = [
  { name: "Prince Yadav",  phone: "8424917025", password: "26march2025" },
  { name: "Prapt Ayare",   phone: "9321499533", password: "26march2025" },
];

const LoginPage = ({ onLogin }) => {
  const [phone, setPhone]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState('');
  const [shake, setShake]       = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = phone.replace(/\D/g, ''); // strip spaces/dashes
    const user = USERS.find(u => u.phone === clean && u.password === password);
    if (user) {
      onLogin(user.name);
    } else {
      setError('Hmm… wrong phone or password 💔');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <motion.div
          animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(236,72,153,0.08)]"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-5xl mb-4"
            >
              💖
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-1">Our Story</h1>
            <p className="text-gray-400 text-sm italic">Only for us ✨</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Phone */}
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none" />
              <input
                type="tel"
                placeholder="10-digit Phone Number"
                value={phone}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setPhone(val);
                  setError('');
                }}
                onKeyDown={e => {
                  if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={10}
                pattern="\d{10}"
                required
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/60 focus:bg-white/8 transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none" />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => { setPassword(e.target.value.slice(0, 11)); setError(''); }}
                maxLength={11}
                required
                className="w-full pl-11 pr-11 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/60 focus:bg-white/8 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-400 transition-colors"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(236,72,153,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Heart size={18} fill="white" />
              Enter Our World
            </motion.button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-6">
            This page is made with 💗 for two special people only.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500/10 text-3xl pointer-events-none"
          initial={{ y: "110vh", x: `${i * 17}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.3, 0] }}
          transition={{ duration: 14 + i * 2, repeat: Infinity, delay: i * 3, ease: "linear" }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default LoginPage;
