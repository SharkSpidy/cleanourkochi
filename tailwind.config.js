/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0648C7',
        secondary: {
          100: '#5772FF',
          200: '#7E93FC',
        },
        tertiary: '#B6C1FC',
      },
    },
  },
  plugins: [],
};
