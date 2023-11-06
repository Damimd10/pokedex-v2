const colors = require('./src/ui/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto-Medium'],
      },
      colors,
    },
  },
  plugins: [],
};
