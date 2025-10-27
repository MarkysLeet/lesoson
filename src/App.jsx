import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import GamesSection from './components/GamesSection.jsx';
import BonusesSection from './components/BonusesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isNight, setIsNight] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('night-mode', isNight);
    document.body.classList.toggle('day-mode', !isNight);
  }, [isNight]);

  const themeClasses = useMemo(
    () => ({
      wrapper: isNight
        ? 'bg-night text-white'
        : 'bg-gradient-to-br from-[#0b1b3a] via-[#132d55] to-[#050c1d] text-white',
      overlay: isNight
        ? 'bg-animated'
        : 'bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.16),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.18),transparent_55%)]',
    }),
    [isNight],
  );

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-out ${themeClasses.wrapper}`}>
      <div className="relative overflow-hidden">
        <motion.div
          key={isNight ? 'night' : 'day'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`pointer-events-none absolute inset-0 ${themeClasses.overlay}`}
        />
        <div className="relative z-10 pb-24">
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <Navbar isNight={isNight} onToggleTheme={() => setIsNight((prev) => !prev)} />
          </div>
          <Hero />
          <GamesSection />
          <BonusesSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
