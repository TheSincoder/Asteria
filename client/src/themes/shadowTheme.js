import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#024c42',
    },
    secondary: {
      main: '#1b59a0',
    },
    background: {
      default: '#0a0a0a',
      paper: '#696969',
    },
    error: {
      main: '#fd0303',
    },
    warning: {
      main: '#ff3d00',
    },
    info: {
      main: '#00b8d4',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      hint: '#ffff00',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme

