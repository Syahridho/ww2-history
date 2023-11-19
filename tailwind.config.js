/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.webp')",
      },
      animation: {
        "bounce-slow": "bounce 4s linear infinite",
      },
    },
  },
  plugins: [],
};
