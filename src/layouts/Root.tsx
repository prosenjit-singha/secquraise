import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Stack, IconButton } from "@mui/material";
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
          mt: [8],
          display: "flex",
          minHeight: "calc(200vh - 64px)",
          alignItems: "stretch",
        }}
      >
        {/* Left Bar Starts */}
        <Stack sx={{ bgcolor: "primary.main", pl: [2, 3], pr: 2 }}>
          <IconButton title="Menu" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <IconButton title="Logout" sx={{ mt: "auto" }} aria-label="Log Out">
            <LogoutIcon />
          </IconButton>
        </Stack>
        {/* Left Bar Ends */}

        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Root;
