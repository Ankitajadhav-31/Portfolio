/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        accent: "#8A2BE2",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-secondary': '0 0 15px 0 rgba(100, 255, 218, 0.5)',
      },
    },
  },
  plugins: [],
} 