/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        lightPrimary: "#2196F3",
        darkPrimary: "#1976D2",
        secondary: "#4CAF50",
        lightSecondary: "#81C784",
        darkSecondary: "#388E3C",
        error: "#B00020",
        surface: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
