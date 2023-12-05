/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        main : "#2054AA",
        dark : "#00001A",
        light : "#F7F7F7",

      },
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        bakbak: ["Bakbak One", "sans-serif"],
      },
      maxWidth: {
        "8xl" : "90rem"
      },
      dropShadow: {
        'benek' : "10px 10px 10px #000",
        'light-glow': "0 0 10px #F7F7F7",
        'button': "0 4px 2px #000019",
        'arrow': "0 0px 10px rgba(247, 247, 247, .5)",
        'contact' : "0 4px 5px rgba(247, 247, 247, 0.6)",
        'contact-focus' : "0 4px 5px rgba(32, 84, 170, .5))",
      }
    },
  },
  plugins: [],
}

