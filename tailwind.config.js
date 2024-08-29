/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      fontWeight: {
        medium: "500",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};
