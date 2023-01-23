import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Stack, IconButton, lighten } from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

function Root() {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          maxWidth: "1366px",
          mx: "auto",
          mt: [7, 8],
          display: "flex",
          minHeight: "calc(100vh - 64px)",
          alignItems: "stretch",
        }}
      >
        {/* Left Bar Starts */}
        <Stack
          sx={(theme) => ({
            bgcolor: lighten(theme.palette.background.paper, 0.035),
            borderRight: `1px solid ${theme.palette.divider}`,
            px: 2,
            py: 1,
          })}
        >
          <Stack
            sx={{
              position: "sticky",
              top: ["56px", "64px"],
              minHeight: ["calc(100vh - 80px)"],
            }}
          >
            <IconButton title="Menu" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <IconButton title="Logout" sx={{ mt: "auto" }} aria-label="Log Out">
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Stack>
        {/* Left Bar Ends */}

        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Root;
