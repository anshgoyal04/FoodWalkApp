// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        // brand: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
