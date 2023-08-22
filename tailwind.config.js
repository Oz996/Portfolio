/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
        "max-sm": { max: "639px" },
        "max-md": { max: "900px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1500px" },
      }
    },
  },
  plugins: [],
};
