/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary": ['Inter', 'sans-serif']
      },
      height: {
        'screen-minus-84': 'calc(100vh - 84px)',
        'screen-minus-60': 'calc(100vh - 60px)',
      },
    },
  },
  plugins: [],
}

