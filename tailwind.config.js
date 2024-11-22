/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
    },},
  },
  plugins: [],
}

