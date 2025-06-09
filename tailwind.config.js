/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBG: "#F3F3F3",
        Favorite: "#FF5841",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
        third: ["Merriweather", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        mobile: { max: "320px" },
      },
    },
    darkMode: "class",
  },
  plugins: [],
  corePlugins: {
    // fallback in case of crash
  },
};

// module.exports = {
//   darkMode: "class",
// };
