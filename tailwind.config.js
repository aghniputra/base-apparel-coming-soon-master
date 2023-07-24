/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    colors: {
      'red': {
        100: 'hsl(0, 36%, 70%)',
        200: 'hsl(0, 93%, 68%)'
      }
    },
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/images/bg-pattern-desktop.svg')"
      },
      backgroundSize: {
        'bg-size': '100%'
      },
      fontFamily: {
        'display': '"Josefin Sans"'
      },
      spacing: {
        35: '8.75rem',
        41: '10.25rem',
        56: '14rem'
      },
      letterSpacing: {
        3: '0.75rem'
      },
      gridTemplateAreas: {
        'layout': ['content img']
      },
      gridTemplateColumns: {
        'layout': '1.67fr 610px'
      }
    },
  },
  plugins: [
    
  ],
}

