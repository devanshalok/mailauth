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
     'slide-in-right': 'slideInRight 0.5s forwards',
      'slide-in-left': 'slideInLeft 0.5s forwards',
      'fade-in': 'fadeIn 0.5s forwards',
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
     slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
  },
},
  },
  plugins: [],
}
