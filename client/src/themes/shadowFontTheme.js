
import ShadowsIntoLight from '../static/fonts/ShadowsIntoLight-Regular.ttf';



export const sil = {
    fontFamily: 'shadows-into-light',
    fontDisplay: 'swap',
    fontWeight: '400',
    src: `
    local('ShadowsIntoLight),
    url(${ShadowsIntoLight}) format('ttf')`,
    unicodeRange:
'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const fontTheme = createMuiTheme({
    typography: {
      fontFamily: ['ShadowsIntoLight'].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [ShadowsIntoLight],
        },
      }
    }
  })

export default fontTheme