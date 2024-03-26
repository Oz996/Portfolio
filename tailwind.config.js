/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "639px" },
        "max-md": { max: "900px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1500px" },
      },
      keyframes: {
        "slide-in-left": {
          from: { translate: "-30%", opacity: "10%" },
          to: { translate: "0", opacity: "100%" },
        },
        "slide-in-up": {
          from: { transform: "translateY(5%)", opacity: "10%" },
          to: { transform: "translateY(0)", opacity: "100%" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "100%" },
        },
        rotate: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
      animation: {
        "slide-left": "slide-in-left 1.5s ease",
        "slide-up": "slide-in-up 1.2s ease",
        "fade-in": "fade-in 3.5s ease",
        "fade-in-slow": "fade-in 5s ease",
        rotate: "rotate 2s ease",
      },
    },
  },
  plugins: [],
};
