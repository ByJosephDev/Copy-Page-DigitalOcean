/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': "'Work Sans', sans-serif",
        'cascadia' : "'CascadiaCode', sans-serif",
        'inter' : "'Inter', sans-serif"
      },
      colors:{
        'do-blue-dark' : 'rgb(8, 27, 75)',
        'do-blue-medium-dark' : '#1d274c',
        'do-blue-medium' : 'rgb(20, 86, 255)',
        'do-blue-light' : 'rgb(0, 105, 255)',
      },
      container:{
        padding: '1.4rem',
      }
    },
  },
  plugins: [],
}
