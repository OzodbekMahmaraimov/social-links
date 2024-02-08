/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141414",
        box: "#1F1F1F",
        choose: "#333333",
        place: "#93BA2D",
        title: '#BABABA',
        chooseHover: 'hsl(75, 94%, 57%)'
      }
    },
  },
  plugins: [],
};
