/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "520px",
        md: "768px",
        lg: "1100px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        hero1: "44% 56% 48% 52% / 85% 71% 29% 15%  ",
        hero2: "91% 9% 48% 52% / 15% 47% 53% 85%   ",
      },
      boxShadow: {
        reverse: "0 10px 20px  rgba(255, 255, 255, 0.1)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -60px) scale(0.9)",
          },
          "67%": {
            transform: "translate(-20px, 20px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        "modal-background": "url('./assets/modal-background.png')",
      },
    },
  },
  plugins: [],
};
