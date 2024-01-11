import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        varosPrincipalDark: '#131313',
        varosPrincipalDoc: '#FAFAFA',
        varosPrincipalGreen: '#19C819',
        greyPaletteC1: '#F2F4F8',
        greyPaletteC2: '#E2E5EB',
        greyPaletteC5: '#B0B7BE',
        greyPaletteC8: '#222729',
        greyPaletteC9: '#131516',
        greenPaletteC1: '#00F700',
      },
      fontFamily: {
        sans: ['var(--font-family-main)'],
      },
      fontSize: {
        title: '4rem',
      },
      spacing: {
        '19': '4.5rem',
        '65': '16.4375rem',
        '99': '29.3125rem',
        intro: '35.25rem',
        '8xl': '81rem',
      },
      borderRadius: {
        '12': '3rem',
      },
    },
  },
  plugins: [],
}
export default config
