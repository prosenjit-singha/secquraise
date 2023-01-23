import { createTheme } from "@mui/material";
import { commonStyles } from "./common.styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#008080",
    },
    secondary: {
      main: "#ff0000",
    },
    background: {
      default: "#0d1212",
      paper: "#0a0f0f",
    },
  },
  ...commonStyles,
});
