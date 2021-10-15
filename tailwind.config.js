const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono]
      },
      animation: {
        slideRight: 'right 1.8s ease-in-out',
        slideLeft: 'left 1.8s ease-in-out',
        makeYellow: 'makeYellow .4s ease-in-out'
      },
      keyframes: {
        right: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-9rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
            
          }
        },
        left: {
          '0%': {
            opacity: 0,
            transform: 'translateX(9rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        makeYellow: {
          '0%': {
            color: 'black',
          },
          '100%': {
            color: '#F59E0B'
          }
        },
      }
    },
    screens: {
      'xs': '420px',
      ...defaultTheme.screens
    },
    
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      ringColor: ['hover'],
      ringOpacity: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
