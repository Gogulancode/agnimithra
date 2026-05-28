/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E2440",
          navyDark: "#0A1B30",
          red: "#E11D2A",
          redDark: "#B7141F",
          cream: "#F7F4EF",
          gray: "#F5F6F8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 20px rgba(14,36,64,0.08)",
        soft: "0 10px 30px rgba(14,36,64,0.10)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
