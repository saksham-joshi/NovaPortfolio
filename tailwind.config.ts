import type { Config } from 'tailwindcss'
import { CURRENT_THEME } from './src/lib/theme'

const config = {
  theme: {
    extend: {
      colors: {
        theme: {
          body: CURRENT_THEME.body,
          text: CURRENT_THEME.text,
          exptxt: CURRENT_THEME.expTxtColor,
          highlight: CURRENT_THEME.highlight,
          dark: CURRENT_THEME.dark,
          secondary: CURRENT_THEME.secondaryText,
          'img-highlight': CURRENT_THEME.imageHighlight,
          'comp-img-highlight': CURRENT_THEME.compImgHighlight,
          jacket: CURRENT_THEME.jacketColor,
          header: CURRENT_THEME.headerColor,
          splash: CURRENT_THEME.splashBg,
          shadow: CURRENT_THEME.shadowColor,
          'light-bg': CURRENT_THEME.lightBgColor
        }
      },
      fontFamily: {
        agustina: ['Agustina Regular', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        'google-sans': ['Google Sans Regular', 'sans-serif'],
        'google-sans-bold': ['Google Sans Bold', 'sans-serif'],
        'google-sans-bold-italic': ['Google Sans Bold Italic', 'sans-serif'],
        'google-sans-italic': ['Google Sans Italic', 'sans-serif'],
        'google-sans-medium': ['Google Sans Medium', 'sans-serif'],
        'google-sans-medium-italic': ['Google Sans Medium Italic', 'sans-serif']
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-in-out both',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in-left': 'fade-in-left 0.6s ease-out both',
        'fade-in-right': 'fade-in-right 0.6s ease-out both'
      }
    }
  }
} satisfies Config

export default config
