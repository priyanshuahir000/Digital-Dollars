/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightGray: "#f0f0f2",
        lightGreen: "#e8f4df",
        lightBlue: "#e8ebfd",
        mediumBlue: "#c3cdf4",
        blueGray: "#bdc6f5",
        lavender: "#b5b2c9",
        purple: {
          light: "#e8ebfd", // Light Purple
          DEFAULT: "#4840bb", // Default Purple
          dark: "#230b59", // Dark Purple
          darker: "#230b5b", // Darker Purple
        },
        navy: "#18172b",
        translucentBlack: "#0000001a",
        mediumGray: "#b7b7c0",
        slateGray: "#6b7280",
        darkBlue: "#161338",
        semiTransparentDarkBlue: "#16133899",
        black: "#000000",
        veryLightGray: "#edecf8",
        lightPurple: "#9a91ff",
        teal: "#009787",
        brownOrange: "#b56c00",
        forestGreen: "#288067",
        semiTransparentPurple: "#230b5966",
        semiTransparentIndigo: "#230b5999",
        semiTransparentNavy: "#18172b2b",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
