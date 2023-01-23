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
  },
  ...commonStyles,
});
