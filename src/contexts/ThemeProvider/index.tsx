import { createContext, ReactNode, useContext, useState } from "react";
import { darkMode, lightMode } from "./mode";
import { Theme } from "@mui/material";

type Value = {
  theme: Theme;
  mode: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeTogglerContext = createContext({} as Value);

function ThemeTogglerProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = mode === "dark" ? darkMode : lightMode;
  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value: Value = {
    theme,
    mode,
    toggleTheme,
  };

  return (
    <ThemeTogglerContext.Provider value={value}>
      {children}
    </ThemeTogglerContext.Provider>
  );
}

export default ThemeTogglerProvider;

export const useThemeToggler = () => useContext(ThemeTogglerContext);
