/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',       // HTML files
    './*.js',         // JavaScript files
    './src/**/*.css'  // CSS files with Tailwind directives
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        'primary-hover': '#ffa69e',
        black: '#0b090a',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
