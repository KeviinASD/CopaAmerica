/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#ffaeb8",
        "primary-400": "#d04a5b",
        "primary-500": "#9A1032",
        
        "secondary-200": "#b1c5ff",
        "secondary-400": "#0B3D84",

        "gray-bg": "#f5f5f5"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        black: ["Archivo Black", "Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
