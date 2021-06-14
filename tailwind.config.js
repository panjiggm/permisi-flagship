const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      bluegray: colors.blueGray,
      teal: colors.teal,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
