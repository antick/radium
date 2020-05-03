module.exports = {
  theme: {
    screens: {
      xs: '476px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    fontFamily: {
      slash: ['Ubuntu', 'Gotham Book', 'Source Sans Pro', 'DejaVu Sans Mono', 'sans-serif'],
      writing: ['FreeSerif', 'sans-serif']
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
        xxl: '0',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
