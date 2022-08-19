import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  title: "light",

  color: {
    background: "#f8f9fa",
    inputField: "#ffffff",
    primary: {
      main: "#e9ecef",
      dark: "#ced4da",
    },
    secondary: {
      main: "#495057",
      dark: "#343a40",
    },
    common: {
      green: "#16db65",
      orange: "#ffaa00",
      red: "#da1e37",
    },
  },
});

export default theme;
