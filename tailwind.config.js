/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B4513',  // Saddle Brown - 落ち着いた茶色
        'primary-dark': '#654321',  // Dark Brown
        'accent': '#D2691E',  // Chocolate
        'cream': '#FFF8DC',  // Cornsilk
        'light-gray': '#F5F5F5',  // WhiteSmoke
        'medium-gray': '#E5E5E5',  // Light Gray
        'text-gray': '#333333',  // Dark Gray for text
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}