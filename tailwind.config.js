/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB', // Blue color (previously green)
        'secondary': '#1E40AF', // Darker blue for contrast
        'accent': '#FCD34D', // Yellow accent color
        'background': '#F3F4F6', // Light gray background
        'text': '#1F2937', // Dark gray text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

