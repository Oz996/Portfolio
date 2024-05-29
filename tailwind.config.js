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
        "slide-in-down": {
          from: { transform: "translateY(-10%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        rotate: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
        shake: {
          from: { transform: "none" },
          "25%": { transform: "translateX(3%)" },
          "50%": { transform: "translateX(-3%)" },
          "75%": { transform: "translateX(3%)" },
          to: { transform: "none" },
        },
      },
      animation: {
        "slide-left": "slide-in-left 1.5s ease",
        "slide-up": "slide-in-up 1.2s ease",
        "slide-down": "slide-in-down .3s ease",
        "fade-in": "fade-in 3.5s ease",
        "fade-in-slow": "fade-in 5s ease",
        "fade-in-fast": "fade-in 1.3s ease",
        rotate: "rotate 2s ease",
        shake: "shake .5s ease",
      },
      content: {
        arrow: "url('/Arrow.svg')",
      },
    },
  },
  plugins: [],
};
