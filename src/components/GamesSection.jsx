import { motion } from 'framer-motion';

const games = [
  {
    name: 'Cyber Roulette',
    description: 'Spin through neon dimensions with adaptive multipliers and cinematic slow-motion finishes.',
    tag: 'Roulette',
  },
  {
    name: 'Quantum Blackjack',
    description: 'AI dealers adapt to your pace while holographic hints keep every hand razor-sharp.',
    tag: 'Blackjack',
  },
  {
    name: 'Neon Slots',
    description: 'Dynamic reels with synthwave soundscapes and cascading neon jackpots in real time.',
    tag: 'Slots',
  },
  {
    name: 'Rocket Surge',
    description: 'Launch a crypto-rocket and cash out before the neon horizon peaks — pure adrenaline.',
    tag: 'Crash',
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-4 text-center">
        <span className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
          The Collection
        </span>
        <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-white drop-shadow-[0_0_20px_rgba(124,58,237,0.45)]">
          Games
        </h2>
        <p className="mx-auto max-w-2xl text-white/70">
          Curated experiences blending classic casino staples with futuristic storytelling and reactive lighting design.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {games.map((game, index) => (
          <motion.article
            key={game.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(124,58,237,0.45)' }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]"
          >
            <div className="relative h-full rounded-[1.6rem] bg-[#0c1530]/70 p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-neonPurple/20 via-neonTeal/20 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-gradient-to-br from-neonPink/20 via-neonPurple/20 to-transparent blur-3xl opacity-60 transition duration-500 group-hover:opacity-100" />
              <span className="inline-flex rounded-full border border-neonTeal/40 bg-neonTeal/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neonTeal">
                {game.tag}
              </span>
              <h3 className="mt-6 font-display text-2xl uppercase tracking-[0.2em] text-white">{game.name}</h3>
              <p className="mt-4 text-sm text-white/70">{game.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
