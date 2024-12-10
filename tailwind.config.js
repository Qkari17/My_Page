/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bgGradientDeg: {
      90: '90deg',
    }
        },
  },
  plugins: [],
}

