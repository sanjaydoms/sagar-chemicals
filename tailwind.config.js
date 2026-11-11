/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // Clean white
        primary: '#004B87',    // Corporate navy blue
        text: '#1E293B',       // High-contrast slate for crisp readability
        accent: '#0077B6',     // High-contrast industrial ocean blue
        secondary: '#475569',  // Readable slate gray
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Outfit"', '"DM Sans"', 'sans-serif'],
        mono: ['"Outfit"', '"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
