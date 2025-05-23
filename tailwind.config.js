/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marx-red': '#DC143C',
        'marx-gold': '#FFD700',
        'marx-dark': '#1a1a1a',
        'marx-gray': '#333333',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
} 