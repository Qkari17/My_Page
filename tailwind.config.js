/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
    },
    height: {
      '120': '30rem',
    },
 width: {
        '128': '32rem'
    },
        },
  },
  plugins: [],
}

