/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-100": "#ffedd5",
        "accent-200": "#fed7aa",
        "accent-300": "#fdba74",
        "accent-400": "#fb923c",
        "accent-500": "#f97316",
        "primary-100": "#",
        "primary-200": "#",
        "primary-300": "#",
        "primary-400": "#",
        "primary-500": "#032353",
        "button-hover": "#",
      },
      backgroundImage: () => ({
        /*  "home-desktop": "url('./assets/homeGraphic.png')", */
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
