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
      
    },
    colors: {
      'primary': '#000000',
      'secondary': '#4E4443',
    },
  },
  plugins: [],
}