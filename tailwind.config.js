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
        'sans': ['Montserrat', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ZCOOL XiaoWei', 'Georgia', 'serif'],
        'display': ['Bebas Neue', 'ZCOOL XiaoWei', 'sans-serif'],
        'chinese': ['ZCOOL XiaoWei', 'Ma Shan Zheng', 'serif'],
        'elegant': ['Crimson Text', 'Noto Sans SC', 'serif'],
        'mono': ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
} 