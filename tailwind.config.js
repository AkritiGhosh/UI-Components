/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:['selector'],
  theme: {
    extend: {
      colors: {
        app: { ...require("tailwindcss/colors").purple },
        focus: { ...require("tailwindcss/colors").teal },
      },
    },
  },
  plugins: [],
};
