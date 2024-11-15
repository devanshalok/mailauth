/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  // ...previous code
  animation: {
    // ...previous animations
    'slide-left': 'slideLeft 0.5s forwards',
    'fade-in-right': 'fadeInRight 0.5s forwards',
  },
  keyframes: {
    fadeInRight: {
      '0%': { opacity: 0, transform: 'translateX(20px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    slideLeft: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },
},
  },
  plugins: [],
}
