/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'snow': {
        4: '#c8d0e0',
        3: '#D8DEE9',
        2: '#E5E9F0',
        1: '#ECEFF4',
      },
      'night':{
        4: '#2E3440',
        3: '#3B4252',
        2: '#434C5E',
        1: '#4C566A',
      },
      'frost':{
        4: '#5E81AC',
        3: '#81A1C1',
        2: '#88C0D0',
        1: '#8FBCBB',
      }
    },
    extend: {
      fontFamily:{
        montserrat: ['montserrat', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      spacing:{
        "navwd-1":"150px", // nav width is 140
        "navwd-2":"100px", // nav width is 80
      }
    },
  },
  plugins: [require("daisyui")],
}
