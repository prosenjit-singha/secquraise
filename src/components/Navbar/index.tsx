import logo from "../../assets/logo-250px.png";
import { Link } from "react-router-dom";
import MaleIcon from "@mui/icons-material/Person";
import FemaleIcon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Logo from "../Logo";
import {
  AppBar,
  Toolbar,
  colors,
  Stack,
  Chip,
  Box,
  InputBase,
  IconButton,
  lighten,
} from "@mui/material";
import { useThemeToggler } from "../../contexts/ThemeProvider";

function Navbar() {
  const { mode, toggleTheme } = useThemeToggler();
  return (
    <AppBar
      sx={(theme) => ({
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: lighten(theme.palette.background.paper, 0.05),
      })}
    >
      <Toolbar>
        <Logo />

        {/* Search Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ml: "auto",
            mr: 1,
          }}
          component="form"
        >
          <InputBase
            endAdornment={
              <IconButton aria-label="Search Button">
                <SearchIcon />
              </IconButton>
            }
            placeholder="Search"
            inputProps={{
              sx: {
                textAlign: "right",
                "::placeholder": {
                  textAlign: "right",
                },
              },
            }}
          />
        </Box>
        {/* Male & Female */}
        <Stack direction="row" spacing={1}>
          <Chip
            icon={<MaleIcon aria-label="Male Icon" />}
            color="success"
            label="20"
            aria-label="Male Count"
          />
          <Chip
            icon={<FemaleIcon aria-label="Female Icon" />}
            color="error"
            label="20"
            aria-label="Female Count"
          />
        </Stack>
        <IconButton onClick={toggleTheme}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
