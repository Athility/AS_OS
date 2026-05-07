/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#050505',
        surface: '#121212',
        line: '#333333',
        primary: '#fafafa',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
