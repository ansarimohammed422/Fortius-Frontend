/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        center: "center",
      },
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      colors: {
        olive: {
          50: "#f2f3ec",
          100: "#e5e6d9",
          200: "#cbceb3",
          300: "#b0b58e",
          400: "#969d68",
          500: "#7c8442",
          600: "#636a35",
          700: "#4a4f28",
          800: "#32351a",
          900: "#191a0d",
        },
        gold: {
          50: "#fffbe6",
          100: "#fff7cc",
          200: "#ffef99",
          300: "#ffe766",
          400: "#ffdf33",
          500: "#ffd700",
          600: "#ccac00",
          700: "#998100",
          800: "#665600",
          900: "#332b00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
