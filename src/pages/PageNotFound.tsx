import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import fourOFour from "../assets/404.svg";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 56px)",
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={fourOFour}
        alt="Page Not Found"
        sx={{ width: "clamp(180px, 80%, 350px)" }}
      />
      <Button onClick={() => navigate(-1)} variant="contained">
        Go Back
      </Button>
    </Box>
  );
}

export default PageNotFound;
