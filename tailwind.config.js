/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#09EAEA",
        // secondary: "#F79A5B",
        // orange_light: "#F9B384",
        // black: "#4F4F52",
        // gray: "#CCCCCC",
        // gray_light: "#E6E6E6",
        // white: "#FFFFFF",
        // gray_web: "#777",
      },
    },
    fontFamily: {
      gurajada: ["nasdas"],
    },
  },
  plugins: [],
};
