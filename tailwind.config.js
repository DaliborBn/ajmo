/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit']
      },
      fontSize: {
        h2Size: '23px'
      },
      maxWidth: {
        primary: '335px'
      },
      textColor: {
        darkBlue: 'hsl(218, 44%, 22%)',
        greyBlue: 'hsl(220, 15%, 55%)'
      }
    },
  },
  plugins: [],
}
