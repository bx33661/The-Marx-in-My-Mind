/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'marx-red': '#cc0000',
        'marx-gold': '#ffd700',
        'marx-dark': '#1a1a1a',
        'marx-gray': '#2d2d2d',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Roboto', 'sans-serif'],
        'chinese': ['Ma Shan Zheng', 'ZCOOL KuaiLe', 'Noto Serif SC', 'serif'],
        'chinese-title': ['ZCOOL XiaoWei', 'Ma Shan Zheng', 'serif'],
        'chinese-elegant': ['ZCOOL QingKe HuangYou', 'Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
} 