import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26BAD4',
    },
    secondary: {
      main: '#757575',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            color: '#fff',
          }),
        }),
      },
    },
  },
});

export default theme;