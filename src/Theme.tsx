import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            color: "#fff",
          }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: "#26BAD4",
    },
    secondary: {
      main: "#757575",
    },
  },
});

export default theme;
