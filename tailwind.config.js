/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,jsx}',
    './components/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '20px 16px 35px 0 rgb(0 0 0 / 0.05)',
      },
    },
    colors: {
      'primary': '#000000',
      'secondary': '#4E4443',
      'aliceblue': '#F1F5FE',
      'white': '#FFFFFF'
    },
  },
  plugins: [],
}