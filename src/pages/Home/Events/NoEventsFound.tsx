import { Box, Alert } from "@mui/material";
import eventsBro from "../../../assets/events-bro.svg";

function NoEventsFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        width="clamp(80px, 70%, 300px)"
        component="img"
        src={eventsBro}
        alt="No events found"
      />
      <Alert variant="outlined" severity="info">
        No events found!
      </Alert>
    </Box>
  );
}

export default NoEventsFound;
