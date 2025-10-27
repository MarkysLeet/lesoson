import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Brand Philosophy',
    copy: 'NeoCasino channels modern luxury with cyber-renaissance aesthetics. Every interaction is crafted to feel cinematic and immersive.',
  },
  {
    title: 'Security First',
    copy: 'Powered by encrypted simulations and zero real wagers. Explore responsibly with advanced account control and safety features.',
  },
  {
    title: 'Style & Atmosphere',
    copy: 'Adaptive neon lighting, synthwave sound design, and bespoke avatar customization create a lounge built for the future.',
  },
];

const AboutSection = () => (
  <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
    <div className="mb-12 flex flex-col gap-4 text-center">
      <span className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
        Who We Are
      </span>
      <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-white drop-shadow-[0_0_20px_rgba(45,212,191,0.4)]">
        About
      </h2>
      <p className="mx-auto max-w-2xl text-white/70">
        NeoCasino is a conceptual playground — a demo casino experience where atmosphere meets innovation. No cash-ins, just pure inspiration.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]"
        >
          <div className="relative h-full rounded-[1.6rem] bg-[#081426]/80 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-neonTeal/10 via-transparent to-neonPurple/10 opacity-0 transition duration-500 hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-4">
              <h3 className="font-display text-xl uppercase tracking-[0.25em] text-white">{pillar.title}</h3>
              <p className="text-sm text-white/70">{pillar.copy}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AboutSection;
