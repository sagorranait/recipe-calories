/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,jsx}',
    './components/**/*.{html,jsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#0BE58A',
      'secondary': '#150B2B',
      'eerieblack': {
        5: '#150b2b0d',
        75: '#150b2bb3'
      }
    },
  },
  plugins: [],
}