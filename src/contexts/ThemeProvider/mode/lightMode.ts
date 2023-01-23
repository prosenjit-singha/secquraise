import { createTheme } from "@mui/material";
import { commonStyles } from "./common.styles";

export const lightMode = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008080",
    },
    secondary: {
      main: "#ff0000",
    },
    background: {
      default: "#f7ffff",
      paper: "#ebffff",
    },
  },
  ...commonStyles,
});
