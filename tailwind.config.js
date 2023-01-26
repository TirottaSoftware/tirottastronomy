/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand": "#D27200",
        "body-gray": "#8F8F8F"
      },
      backgroundImage: {
        "home-hero": "url(/src/assets/img/astronomy-hero.png)",
        "auth-hero": "url(/src/assets/img/auth-hero.png)"
      },
      fontFamily: {
        "tb": ["Thicccboi"],
        "halvar": ["Halvar"]
      },
      boxShadow: {
        "favourite-card": "0px 5px 10px 0px #DADADA"
      }
    },
  },
  plugins: [],
}