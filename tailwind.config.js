/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#202020",
        "custom-gray": "#181818",
        "accent-color": "#53ACFF",
      },
    },
  },
  plugins: [],
};
