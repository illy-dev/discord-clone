/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blurple': '#313338',
        'dark-blurple': '#1e1f22',
      },
    },
  },
  plugins: [],
}

