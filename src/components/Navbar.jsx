import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const links = [
  { href: '#games', label: 'Games' },
  { href: '#bonuses', label: 'Bonuses' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = ({ isNight, onToggleTheme }) => {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-neonPink to-neonTeal drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]"
        >
          NeoCasino
        </motion.a>
        <div className="flex flex-1 items-center justify-end gap-6 text-sm font-medium">
          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-white hover:text-white"
          >
            <span className="relative z-10">
              {isNight ? 'Night Mode' : 'Day Mode'}
            </span>
            <span
              aria-hidden
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isNight
                  ? 'bg-gradient-to-r from-neonPurple/40 via-neonTeal/30 to-neonPink/40 shadow-[0_0_25px_rgba(124,58,237,0.35)]'
                  : 'bg-gradient-to-r from-blue-200 via-white to-cyan-200 opacity-80 shadow-[0_0_25px_rgba(14,165,233,0.35)]'
              }`}
            />
            <span className="relative z-10 font-semibold tracking-[0.2em]">
              {isNight ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  isNight: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
