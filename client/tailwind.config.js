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
        "primary-100": "#dbebff",
        "primary-200": "#bfdbfe",
        "primary-300": "#93c5fd",
        "primary-400": "#60a5fa",
        "primary-500": "#3b82f6",
        "primary-600": "#242a40",
        "primary-700": "#032353",
        "secondary-100": "#f9fafb",
        "secondary-200": "#f3f4f6",
        "secondary-300": "",
        "secondary-400": "#e5e7eb",
        "secondary-500": "#d6d1e8",
        "button-hover": "#",
        error: "#ff0000",
        loader: "#0000001A",
      },
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
