const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      xs: '476px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      logo: ['Merriweather', ...defaultTheme.fontFamily.sans],
      slash: ['Baloo 2', ...defaultTheme.fontFamily.sans],
      writing: ['Crimson Text', ...defaultTheme.fontFamily.serif],
      writing1: ['PT Serif', ...defaultTheme.fontFamily.serif],
      writing2: ['Playfair Display', ...defaultTheme.fontFamily.serif]
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        xs: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '2rem',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
