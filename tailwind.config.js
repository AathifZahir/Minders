/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        schibsted: ["Schibsted Grotesk", "sans-serif"],
      },
      borderRadius: {
        custl: "6.5rem",
        custl2: "4.5rem",
      },
    },
  },
  plugins: [],
};
