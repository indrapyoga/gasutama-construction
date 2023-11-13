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
      },
    },
  },
  plugins: [],
};
