import { RouterProvider } from "react-router-dom";
import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import { useThemeToggler } from "./contexts/ThemeProvider";
import router from "./routes";
import { globalStyles } from "./styles/global.styles";

function App() {
  const { theme } = useThemeToggler();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={(p) => globalStyles(p)} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
