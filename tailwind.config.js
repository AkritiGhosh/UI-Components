/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      colors: {
        app: { ...require("tailwindcss/colors").purple },
        focus: { ...require("tailwindcss/colors").teal },
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceChar: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-70px)" },
        },
        charPulse: {
          "0%": {
            transform: "scale(1.25)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        bounceChar: "bounceChar 1s ease infinite alternate",
        charPulse: "charPulse 1.25s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
