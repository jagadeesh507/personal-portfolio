/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#00263E",
        lightText: "#D5FFD0",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#40F8FF",
      },
    },
  },
  plugins: [],
  extend: {
    keyframes: {
      bounceUp: {
        '0%': { transform: 'translateY(0)'},
        '100%': { transform: 'translateY(-0.2em)' },
      },
    },
    animation: {
      bounceUp: 'bounceUp 0.3s ease-in-out infinite alternate',
    },
  },
};
