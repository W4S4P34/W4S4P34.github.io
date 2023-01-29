const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        american: ["American Captain", ...defaultTheme.fontFamily.sans],
        javanica: ["Javanica", ...defaultTheme.fontFamily.sans],
        kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
