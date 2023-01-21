import { Theme, css } from "@mui/material";

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
`;
