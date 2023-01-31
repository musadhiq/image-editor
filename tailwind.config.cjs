/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-bg':'#E6E6E6',
        'dark':'#5F5F5F',
      },
    },
  },
  plugins: [],
}