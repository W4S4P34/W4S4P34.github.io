const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit-Regular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
