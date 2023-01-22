import { ThemeOptions } from "@mui/material";

export const commonStyles: ThemeOptions = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterDelay: 500,
      },
      styleOverrides: {
        tooltip: {
          borderRadius: 2.5,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        variant: "rectangular",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          paddingInline: 8,
        },
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto","Helvetica","Arial",sans-serif',
  },
};
