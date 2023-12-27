/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "blue-1000": "#3734A9",
        white: "#ffffff",
        "cyan-50": "#596E76",
        purple: "#757095",
        "gray-700": "#5B5B5B",
      },
      screens: {
        "2xl": "1483px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
