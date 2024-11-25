/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0D121A',
        golden: '#D4AF37',
        white: '#F9F9F9',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0.25 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0.25 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(50%)', opacity: 0 },
        },
        'slide-left': {
          '0%': { transform: 'translateX(50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.5)', opacity: 0.25 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.5])', opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
        'fade-out': 'fade-out 1.5s ease-in-out forwards',
        'slide-up': 'slide-up 1.5s ease-in-out forwards',
        'slide-down': 'slide-down 1.5s ease-in-out forwards',
        'slide-left': 'slide-left 1.5s ease-in-out forwards',
        'slide-right': 'slide-right 1.5s ease-in-out forwards',
        'scale-up': 'scale-up 1.5s ease-in-out forwards',
        'scale-out': 'scale-out 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};