import { createTheme } from "@mui/material/styles";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#1E50FF",
      light: "#1538b2",
      dark: "#4b73ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e8e8e8",
      contrastText: "#000000",
    },
    neutral: {
      main: "#4aa742",
      contrastText: "#4aa742",
    },
  },
});

export default buttonTheme;
