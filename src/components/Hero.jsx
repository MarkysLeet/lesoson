import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70 backdrop-blur">
          Experience the Future of Play
        </span>
        <h1 className="font-display text-5xl uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-neonPink to-neonTeal drop-shadow-[0_0_35px_rgba(124,58,237,0.45)] sm:text-6xl">
          NeoCasino
        </h1>
        <p className="max-w-2xl text-lg text-white/75">
          Dive into a neon-drenched universe where classic casino thrills meet cyber aesthetics. Neon-lit tables, immersive experiences,
          and next-gen features — all without real-world stakes.
        </p>
        <motion.a
          href="#games"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.65)' }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-neonPurple/60 px-10 py-4 font-semibold uppercase tracking-[0.3em] text-white"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neonPurple via-neonPink to-neonTeal opacity-90" />
          <span className="relative z-10">Play Now</span>
        </motion.a>
      </motion.div>
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] backdrop-blur-lg">
        <div className="relative h-64 w-full overflow-hidden rounded-[1.4rem] bg-[#080d22]/80">
          <motion.div
            className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-neonPurple/40 to-neonTeal/40 blur-3xl"
            animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-gradient-to-br from-neonPink/40 to-neonPurple/30 blur-3xl"
            animate={{ x: [0, -140, 0], y: [0, 80, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">Live tables rebooted</p>
            <p className="text-2xl font-semibold text-white/90">Holographic Roulette Lounge</p>
            <p className="max-w-sm text-sm text-white/60">
              Exclusive hosts, AI dealers, and reactive neon lighting for every winning spin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
