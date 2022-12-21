/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/*.module.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
],
    darkMode: "class"
}
