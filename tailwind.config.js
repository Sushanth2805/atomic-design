/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#DFFF00',
          dark: '#050505',
          card: '#111111',
          border: '#222222',
          gray: '#888888'
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(223, 255, 0, 0.15) 0%, rgba(0,0,0,0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}