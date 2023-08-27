/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F8F8E8",
        secondary: "#C8A352",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#0F2247",
        dimYellow:"#F1E2C1"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"}
  },
  plugins: [],
}

