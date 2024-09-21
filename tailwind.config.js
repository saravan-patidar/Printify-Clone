/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('./src/assets/background-hero.svg')",
        'talk-sales': "url('./src/assets/talkToSale.svg')",
      }
    },
  },
  plugins: [],
}

