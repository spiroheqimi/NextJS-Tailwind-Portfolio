/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,mdx}',
    './components/**/*.{js,ts,jsx,mdx}',
    './app/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {  // To add custom colors we extend a variable and then assing its Hexcode into CSS file
      colors: {
        "background-color": "var(--background-color)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
}
