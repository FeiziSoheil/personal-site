/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#0f172a',
        'card':'#1e293b'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: '400', 
        medium: '500', 
        bold: '700',   
      },
    },
  },
  plugins: [],
}