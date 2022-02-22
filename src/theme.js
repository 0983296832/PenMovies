import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
  },
  shadow: {},
  breakpoints: {
    values: {
      xs: 0,
      xm: 500,
      sm: 600,
      md: 900,
      mg: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});
