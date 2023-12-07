/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],

  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mx:{max:"857px"},
      
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },

      ssm: { max: "450px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
