const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '476px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      ...defaultTheme.colors,
      teal: colors.teal,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      sky: colors.sky,
      cyan: colors.cyan,
      emerald: colors.emerald,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      gray: colors.gray,
      // gray: colors.trueGray,
      // gray: colors.blueGray,
      // gray: colors.warmGray,
      orange: colors.orange
    },
    rotate: {
      ...defaultTheme.rotate,
      '-360': '-360deg',
      360: '360deg'
    },
    fontFamily: {
      logo: ['Merriweather', ...defaultTheme.fontFamily.sans],
      slash: ['Baloo 2', ...defaultTheme.fontFamily.sans],
      writing: ['Crimson Text', ...defaultTheme.fontFamily.serif],
      writing1: ['PT Serif', ...defaultTheme.fontFamily.serif],
      writing2: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '2rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    fontWeight: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
};
