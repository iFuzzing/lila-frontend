/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'appbase': '#EA1F69',
        'appsecondary': '#9357E0',
        'appgraybase': '#747474',
        'appbasehover': '#DC1960',
      },
      fontFamily:{
        'Roboto':['Roboto']
      },
      animation:{
        'fadeout-animation': 'fadeout ease-in-out forwards  7s'
      },
      keyframes:{
        'fadeout': {
          '0%': {opacity: '100%'},
          '100%': {opacity: '0%'}
        }
      }
    },
  },
  plugins: [],
}

