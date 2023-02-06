/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {

    container:{
      center:true,
    },
    colors: {
      blanco:'#ffff',
      body: '#F3dde1',
      segundo: '#f273e6',
      fondo: '#A1356B',
      botones: '#99405D',
      Letras: '#fff',
      gray:"#dcdcdc",
      blue: "#00A5B5",
      red:"#FF0000",
      green: "#028A0F",
      white: "#FAFAFA",
      black: "#2f3033"

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}
