/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.template.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // Scan these files for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
