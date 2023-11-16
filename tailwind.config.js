/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        customLightBlue: "#BAD7E9",
        customDarkBlue: "#2B3467",
        customRed: "#EB455F",
        customYellow: "#FCFFE7",
      },
      backgroundImage: {
        mansion: "url('./src/assets/mansion.jpg')",
        building: "url('./src/assets/building.jpg')",
        private: "url('./src/assets/private.jpg')",
        satu: "url('./src/assets/1.jpg')",
        dua: "url('./src/assets/2.jpg')",
        tiga: "url('./src/assets/3.jpg')",
        empat: "url('./src/assets/4.jpg')",
        lima: "url('./src/assets/5.jpg')",
        enam: "url('./src/assets/6.jpg')",
        tujuh: "url('./src/assets/7.jpg')",
      },
    },
  },
  plugins: [],
};
