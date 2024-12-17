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
       right: {
      '-80': '20rem'
  },
        fontFamily: {
    "DMsans": ["DM Sans", 'sans-serif']
},
keyframes: {
  'rotatation': {
    '0%': { transform: 'rotate(0.0deg)' },
    '50%': { transform: 'rotate(180.0deg)' },
    '100%': { transform: 'rotate(360.0deg)' },
  },
},
animation: {
  'rotation': 'rotatation 10s linear infinite',
},
maxWidth: {
'page': '82rem',
'header': '90rem'
},
        },
  },
  plugins: [],
}

