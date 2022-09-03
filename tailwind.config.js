/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "rainbow-indigo": "#1E3F66",
      "metallic-blue": "#2E5984",
      "cyan-azure": "#528AAE",
      "moonstone-blue": "#73A5C6",
      "dark-sky-blue": "#91BAD6",
      "beau-blue": "#BCD2E8",
    },
    fontFamily: {
      pixel: ["Silkscreen"],
    },
    extend: {},
  },
  plugins: [],
};
