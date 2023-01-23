import { Theme, css, colors } from "@mui/material";

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: ${theme.palette.mode};
  }
  body {
    overflow: overlay;
  }
  ::-webkit-scrollbar {
    width: 8px;
    /* background-color: ${theme.palette.divider}; */
  }
  ::-webkit-scrollbar-track {
    margin-block: 3px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${theme.palette.mode === "dark"
      ? colors.grey[700]
      : colors.grey[400]};
    :hover {
      background-color: ${theme.palette.mode === "dark"
        ? colors.grey[600]
        : colors.grey[500]};
    }
  }
`;
