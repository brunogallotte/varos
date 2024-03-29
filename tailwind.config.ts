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
        greyPaletteC3: '#D3D6DF',
        greyPaletteC4: '#C6CAD2',
        greyPaletteC5: '#B0B7BE',
        greyPaletteC6: '#878D96',
        greyPaletteC7: '#4D5358',
        greyPaletteC8: '#222729',
        greyPaletteC9: '#131516',
        greenPaletteC1: '#00F700',
        turquoisePaletteC2: '#00F0C9',
      },
      fontFamily: {
        sans: ['var(--font-family-main)'],
      },
      fontSize: {
        title: '4rem',
      },
      spacing: {
        '12': '2.5rem',
        '13': '3.1875rem',
        '19': '4.5rem',
        '20.5': '8rem',
        '21': '10.625rem',
        '65': '16.4375rem',
        '75': '16.875rem',
        '77': '18.1875rem',
        '77.5': '20.5rem',
        '78': '22.1875rem',
        '79': '23rem',
        '81': '25.9375rem',
        '98': '29.125rem',
        '99': '29.3125rem',
        '100': '31.375rem',
        '101': '33.1875rem',
        '101.5': '33.5rem',
        '102': '35.25rem',
        '103': '38rem',
        '105': '41.375rem',
        '8xl': '81rem',
        '9/10': '90%',
      },
      borderRadius: {
        '10': '2rem',
        '12': '3rem',
      },
    },
  },
  plugins: [],
}
export default config
