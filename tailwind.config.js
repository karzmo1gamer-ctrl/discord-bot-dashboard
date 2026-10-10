/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1020',
        panel: '#121a2b',
        cyanGlow: '#22d3ee',
        violetGlow: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(139,92,246,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
};
