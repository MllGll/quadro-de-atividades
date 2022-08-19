import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  title: "dark",

  color: {
    background: "#212529",
    inputField: "#212529",
    primary: {
      main: "#343a40",
      dark: "#495057",
    },
    secondary: {
      main: "#e9ecef",
      dark: "#ced4da",
    },
    common: {
      white: "#FFFFFF",
      green: "#16db65",
      orange: "#ffaa00",
      red: "#da1e37",
    },
  },
});

export default theme;
