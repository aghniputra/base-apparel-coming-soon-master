/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    colors: {
      'red': {
        50: 'hsl(0, 79%, 37%, 0.2)',
        100: 'hsl(0, 36%, 70%)',
        200: 'hsl(0, 93%, 68%)',
        300: 'hsl(0, 6%, 24%)'
      },
      'white-pink': '#FEFAF9',
      'blush': '#FFF3F3',
      'primary': {
        100: 'hsl(95, 20%, 52%)',
        'olive': '#46553B'
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
        'display': '"Josefin Sans"',
        'lato': 'Lato',
      },
      spacing: {
        30: '7.5rem', //120px
        35: '8.75rem', //140px
        41: '10.25rem', //164px
        56: '14rem', //224px
      },
      letterSpacing: {
        3: '0.75rem'
      },
      gridTemplateAreas: {
        'layout': [
          'logo img',
          'content img',
        ]
      },
      gridTemplateColumns: {
        'layout': '1.67fr 610px',
      },
      gridTemplateRows: {
        'layout': '1fr 7.16fr',
      },
      width: {
        25: '6.25rem'
      },
      transitionProperty: {
        'bottom' : 'bottom'
      },
      transitionDuration: {
        0.3 : '0.3s'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}

