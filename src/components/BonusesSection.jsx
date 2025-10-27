import { motion } from 'framer-motion';

const bonuses = [
  {
    name: 'Neon Genesis Pack',
    details: 'Unlock 50 demo spins + holographic avatar cosmetics for your lounge suite.',
    highlight: '50 Spins',
  },
  {
    name: 'VIP Flux Membership',
    details: 'Priority queue, exclusive live hosts, and weekly quantum blackjack tournaments.',
    highlight: 'VIP Access',
  },
  {
    name: 'Cyber Streak Rewards',
    details: 'Climb streak tiers to amplify your neon multiplier and unlock ambient room skins.',
    highlight: 'Boosted Multipliers',
  },
];

const BonusesSection = () => (
  <section id="bonuses" className="relative mx-auto max-w-6xl px-6 py-24">
    <div className="mb-12 flex flex-col gap-4 text-center">
      <span className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
        Rewards
      </span>
      <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-white drop-shadow-[0_0_20px_rgba(255,45,145,0.4)]">
        Bonuses
      </h2>
      <p className="mx-auto max-w-2xl text-white/70">
        Designed to keep your journey electric. Unlock layered rewards and limited-time holographic experiences.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {bonuses.map((bonus, index) => (
        <motion.article
          key={bonus.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 45px rgba(255,45,145,0.55)' }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]"
        >
          <div className="relative h-full rounded-[1.6rem] bg-[#120d29]/70 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-neonPink/10 via-transparent to-neonPurple/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-6">
              <span className="inline-flex w-fit rounded-full border border-neonPink/40 bg-neonPink/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neonPink">
                {bonus.highlight}
              </span>
              <h3 className="font-display text-xl uppercase tracking-[0.25em] text-white">{bonus.name}</h3>
              <p className="text-sm text-white/70">{bonus.details}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-neonPink/40 bg-neonPink/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neonPink"
              >
                Claim Demo Boost
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default BonusesSection;
