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
        mansion: "url('./src/assets/mansion.webp')",
        building: "url('./src/assets/building.webp')",
        private: "url('./src/assets/private.webp')",
        satu: "url('./src/assets/1.webp')",
        dua: "url('./src/assets/2.webp')",
        tiga: "url('./src/assets/3.webp')",
        empat: "url('./src/assets/4.webp')",
        lima: "url('./src/assets/5.webp')",
        enam: "url('./src/assets/6.webp')",
        tujuh: "url('./src/assets/7.webp')",
      },
    },
  },
  plugins: [],
};
