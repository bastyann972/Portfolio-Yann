/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-dark": "rgb(35, 40, 36)",
        "main-brand": "#1693ac",
        "dark-shades": "#1f2937",
        highlight: "#60a5fa",
        "hover-shades": "#e0e0e0",
        "light-shades": "#f3f3f4",
        teal: {
          500: "#20B2AA",
          600: "#1A8F89",
          700: "#157570",
        },
        gray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          600: "#4B5563",
          700: "#374151",
        },
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
        },
      },
      dropShadow: {
        glow: "0 0 15px #20B2AA",
      },
    },
  },
  plugins: [],
}