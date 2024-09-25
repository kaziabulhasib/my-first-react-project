/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "class", // Enables dark mode using the class strategy
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes
  },
};
