/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#f5d04e",
        white: "#ffffff",
        black: "#111111",
        grey: "#ababab",
      }
    },
  },
  plugins: [],
}

