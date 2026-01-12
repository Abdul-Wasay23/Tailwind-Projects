// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '520px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1366px',
      '3xl': '1501px',
    },
    extend: {
      colors: {
        'dark-gray': '#393939',
        'custom-red': '#bf042f',
        'dark-red': '#370c16',
      },
      fontFamily: {
        cutmark: ['Cutmark', 'sans-serif'],
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'header': "url('/images/header-bg.jpg')",
      },
    },
  },
  plugins: [],
}
