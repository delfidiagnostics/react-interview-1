/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: colors.rose,
        secondary: colors.gray
      },

      screens: {
        '3xl': '2000px',
        '4xl': '3000px',
        '5xl': '4000px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
