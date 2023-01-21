import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useThemeToggler } from "./contexts/ThemeProvider";
import router from "./routes";
import { GlobalStyles } from "./styles/global.styles";

function App() {
  const { theme } = useThemeToggler();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
