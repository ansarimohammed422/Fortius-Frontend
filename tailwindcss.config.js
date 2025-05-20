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
          100: "#e5e6da",
          200: "#cbceb4",
          300: "#b0b58f",
          400: "#969d69",
          500: "#7c8444",
          600: "#636a36",
          700: "#4a4f29",
          800: "#32351b",
          900: "#191a0e",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
