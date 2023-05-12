import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'capitalize', 
    }
  },
  palette: {
    primary: {
      main: "#DD0426",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A7A7A7",
      contrastText: "#424242",
    },
  }
});

export default theme;