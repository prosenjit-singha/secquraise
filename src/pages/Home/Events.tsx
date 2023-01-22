import { Paper, Box, Typography, IconButton } from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Event } from "../../types/event.type";

function Events() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async (): Promise<Event[]> =>
      axios.get(
        "https://secquraise-pj-default-rtdb.firebaseio.com/events.json"
      ),
  });
  console.info(data);
  return (
    <Paper elevation={3} sx={{ width: "30%", m: 1, mr: [2, 3], p: [1, 2] }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h1">
          Events
        </Typography>
        <IconButton title="Filter">
          <TuneRoundedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Events;
