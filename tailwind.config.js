/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        aurora: '#6ee7f9',
        ember: '#ff7a18',
        royal: '#7c3aed',
        mist: '#dbeafe',
      },
      boxShadow: {
        glow: '0 0 40px rgba(110, 231, 249, 0.2)',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
