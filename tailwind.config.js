/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#f8fafc',
        primary: '#6366f1',
        card: 'rgba(15, 23, 42, 0.72)',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
};