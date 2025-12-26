/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B01E9D',
        secondary: '#150529',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Didact Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
