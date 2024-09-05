/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'508px',
      'sm': '555px',
      'md': '695px',
      'lg': '820px',
      'xl': '1095px',
    },
    extend: {},
  },
  plugins: [],
}

