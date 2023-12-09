module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'inter',
        serif: 'adelle',
      },
      colors: {
        ui: {
          background: 'var(--color-ui-background)',
          backgroundTertiary: 'var(--color-ui-background-tertiary)',
          sidebar: 'var(--color-ui-sidebar)',
          typo: 'var(--color-ui-typo)',
          'typo-light': 'var(--color-ui-typo-light)',
          'typo-lighter': 'var(--color-ui-typo-lighter)',
          primary: 'var(--color-ui-primary)',
          'primary-dark': 'var(--color-ui-primary-dark)',
          'primary-light': 'var(--color-ui-primary-light)',
          border: 'var(--color-ui-border)',
          secondary: {
            900: 'var(--color-ui-secondary-900)',
            800: 'var(--color-ui-secondary-800)',
            700: 'var(--color-ui-secondary-700)',
            600: 'var(--color-ui-secondary-600)',
            500: 'var(--color-ui-secondary-500)',
            400: 'var(--color-ui-secondary-400)',
            300: 'var(--color-ui-secondary-300)',
            200: 'var(--color-ui-secondary-200)',
            100: 'var(--color-ui-secondary-100)',
            50: 'var(--color-ui-secondary-50)',
            25: 'var(--color-ui-secondary-25)',
            10: 'var(--color-ui-secondary-10)',
          },
        },
      },
      spacing: {
        sm: '24rem',
      },
      screens: {
        xxl: '1400px',
      },
      container: {
        screens: {
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      fontSize: {
        '2xl': ['1.625rem', '1.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '3.5rem'],
      },
      flex: {
        2: '2 2 0%',
      },
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 1',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      102: '1.02',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      width: ['group-hover'],
      height: ['group-hover'],
      overflow: ['group-hover'],
      borderWidth: ['group-hover'],
      transitionProperty: ['group-hover'],
      pointerEvents: ['group-hover'],
      opacity: ['group-focus']
    }
  },
  plugins: [],
}
