import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import FirstConnection from './components/FirstConnection';
import FirstBond from './components/FirstBond';
import KondhanaCaves from './components/KondhanaCaves';
import Proposal from './components/Proposal';
import Sports2026 from './components/Sports2026';
import Gallery from './components/Gallery';
import Today from './components/Today';
import Future from './components/Future';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/LoadingScreen';
import LoginPage from './components/LoginPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handleStartJourney = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-poppins selection:bg-pink-500/30 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!loggedIn ? (
          <motion.div key="login" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <LoginPage onLogin={() => setLoggedIn(true)} />
          </motion.div>
        ) : (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <MusicPlayer />
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <div id="hero">
            <Hero onStart={() => document.getElementById('first-connection')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
          
          <div className="flex flex-col gap-0">
            <div id="first-connection">
              <FirstConnection onNext={() => document.getElementById('kondhana')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="kondhana">
              <KondhanaCaves onNext={() => document.getElementById('first-bond')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="first-bond">
              <FirstBond onNext={() => document.getElementById('proposal')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="proposal">
              <Proposal onNext={() => document.getElementById('sports2026')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="sports2026">
              <Sports2026 onNext={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="gallery">
              <Gallery onNext={() => document.getElementById('today')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="today">
              <Today onNext={() => document.getElementById('future')?.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <div id="future">
              <Future />
            </div>
          </div>
        </motion.div>
      )}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
