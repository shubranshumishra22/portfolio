module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Covers src/ if exists
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"           // For direct HTML files
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#4ADE80', // Your Navbar's green-400
        }
      }
    },
  },
  plugins: [],
}