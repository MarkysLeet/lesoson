/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#050816',
        dusk: '#0b1b3a',
        neonPurple: '#7c3aed',
        neonPink: '#ff2d91',
        neonTeal: '#2dd4bf',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.2), transparent 60%), radial-gradient(circle at 80% 30%, rgba(45,212,191,0.15), transparent 55%), radial-gradient(circle at 50% 80%, rgba(255,45,145,0.2), transparent 60%)',
      },
    },
  },
  plugins: [],
};
