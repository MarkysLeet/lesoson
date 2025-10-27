import { motion } from 'framer-motion';

const ContactSection = () => (
  <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
    <div className="mb-12 flex flex-col gap-4 text-center">
      <span className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
        Connect
      </span>
      <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-white drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]">
        Contact
      </h2>
      <p className="mx-auto max-w-2xl text-white/70">
        Have a collaboration idea, want to feature NeoCasino at your event, or just want to say hi? Drop us a line.
      </p>
    </div>
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]"
    >
      <div className="relative space-y-6 rounded-[1.6rem] bg-[#0a1227]/80 p-10">
        <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-neonTeal/30 via-neonPurple/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-12 left-6 h-40 w-40 rounded-full bg-gradient-to-br from-neonPink/20 via-neonPurple/20 to-transparent blur-3xl" />
        <div className="relative z-10 grid gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-left text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-left text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-neonTeal focus:outline-none focus:ring-2 focus:ring-neonTeal/40"
            />
          </label>
        </div>
        <label className="relative z-10 flex flex-col gap-2 text-left text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Message
          <textarea
            rows="4"
            placeholder="Tell us about your project"
            className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/40 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/40"
          />
        </label>
        <div className="relative z-10 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(45,212,191,0.45)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-full border border-neonTeal/40 bg-neonTeal/10 px-8 py-3 text-xs uppercase tracking-[0.3em] text-neonTeal"
          >
            Send Message
          </motion.button>
        </div>
      </div>
    </motion.form>
  </section>
);

export default ContactSection;
