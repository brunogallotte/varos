import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        varosPrincipalDark: '#131313',
        varosPrincipalGreen: '#19C819',
        greyPaletteC1: '#F2F4F8',
        greyPaletteC2: '#E2E5EB',
        greyPaletteC5: '#B0B7BE',
        greyPaletteC8: '#222729',
        greyPaletteC9: '#131516'
      }
    },
  },
  plugins: [],
}
export default config
