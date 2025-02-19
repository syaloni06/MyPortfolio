/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-very-slow': 'spin 10s linear infinite',
      },
      colors: {
        customBlue: "#0099ff", // Define your custom color
      },
    },
  },
  plugins: [],
}