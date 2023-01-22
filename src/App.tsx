import { RouterProvider } from "react-router-dom";
import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import { useThemeToggler } from "./contexts/ThemeProvider";
import router from "./routes";
import { globalStyles } from "./styles/global.styles";
import EventsProvider from "./contexts/EventsProvider";

function App() {
  const { theme } = useThemeToggler();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={(p) => globalStyles(p)} />
      <EventsProvider>
        <RouterProvider router={router} />
      </EventsProvider>
    </ThemeProvider>
  );
}

export default App;
