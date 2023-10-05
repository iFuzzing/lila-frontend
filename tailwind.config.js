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
      }
    },
  },
  plugins: [],
}

