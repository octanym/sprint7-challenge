/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: ["Inconsolata", "mono-space"],
      },
      backgroundImage: {
        "header-image": "url('/src/Assets/Pizza.jpg')",
      },
    },
  },
  plugins: [],
};
