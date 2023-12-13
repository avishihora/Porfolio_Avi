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
      "3xl": { min: "1536px", max: "2790px" },
      "2xl": { min: "1280px", max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { min: "1024px", max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { min: "858px", max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      mx: { min: "767px", max: "858px" },

      md: { min: "640px", max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },

      ssm: { max: "449px" },

      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
