/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
