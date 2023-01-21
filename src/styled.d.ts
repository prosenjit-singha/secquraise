// import original module declarations
import "styled-components";

type ColorData = {
  hsl: number[];
  main: string;
  light: string;
  dark: string;
  text: string;
};

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      mode: "dark" | "light";
      primary: ColorData;
      secondary: ColorData;
      error: ColorData;
      success: ColorData;
      warning: ColorData;
      info: ColorData;
      background: {
        main: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      outline: {
        main: string;
        variant: string;
        onVariant: string;
      };
    };
  }
}
