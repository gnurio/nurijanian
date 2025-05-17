/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"DM Serif Text"', 'serif'],
        'sans': ['Jacquard 12', 'serif'],
      },
    },
  },
  plugins: [],
};