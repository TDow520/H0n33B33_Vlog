/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'chewy': ['Chewy, san-serif'],
        'bangers': ['Bangers, cursive'],
        'rock_salt': ['Rock Salt, cursive'],
        'gluten': ['Gluten, cursive'],
        'macondo': ['Macondo, cursive'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

