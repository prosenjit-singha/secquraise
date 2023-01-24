import { useEffect, useState } from "react";
import MaleIcon from "@mui/icons-material/Person";
import FemaleIcon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "../Logo";
import {
  AppBar,
  Toolbar,
  Stack,
  Chip,
  Box,
  InputBase,
  IconButton,
  lighten,
  Drawer,
  Tooltip,
} from "@mui/material";
import { useThemeToggler } from "../../contexts/ThemeProvider";
import EventsIcon from "@mui/icons-material/EventNote";
import Events from "../../pages/Home/Events";
import { useBreakpoint } from "react-use-size";
import { useEvents } from "../../contexts/EventsProvider";
import genderCount from "../../utils/genderCount";

function Navbar() {
  const { mode, toggleTheme } = useThemeToggler();
  const isMd = useBreakpoint(900);
  const [openEvents, setOpenEvents] = useState(false);
  const { filteredData } = useEvents();

  const genderCountInfo = genderCount(filteredData);

  useEffect(() => {
    if (!isMd) setOpenEvents(false);
  }, [isMd]);

  return (
    <AppBar
      sx={(theme) => ({
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: lighten(theme.palette.background.paper, 0.05),
      })}
    >
      <Toolbar sx={{ width: "100%", maxWidth: "1366px", mx: "auto" }}>
        <Logo sx={{ display: ["none", "block"] }} />

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
          <Tooltip title="Male" describeChild>
            <Chip
              icon={<MaleIcon aria-label="Male Icon" />}
              color="success"
              label={genderCountInfo.male}
            />
          </Tooltip>
          <Tooltip title="Female" describeChild>
            <Chip
              icon={<FemaleIcon aria-label="Female Icon" />}
              color="error"
              label={genderCountInfo.female}
            />
          </Tooltip>
        </Stack>

        {/* Toggle Theme */}
        <Tooltip title="Toggle Theme" describeChild>
          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Show/hide Events" describeChild>
          <IconButton
            onClick={() => setOpenEvents((prev) => !prev)}
            sx={{ display: ["flex", "flex", "none"] }}
          >
            <EventsIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Drawer
        anchor="right"
        open={openEvents}
        onClose={() => setOpenEvents(false)}
        sx={{
          minWidth: "355px",
        }}
      >
        <Events onClose={() => setOpenEvents(false)} />
        {/* <h1>Test </h1> */}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
