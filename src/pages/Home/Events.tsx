import {
  Paper,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Grid,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Event } from "../../types/event.type";
import { useSearchParams } from "react-router-dom";

// icons
import ClockIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";

function Events() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async (): Promise<Event[]> =>
      axios
        .get("https://secquraise-pj-default-rtdb.firebaseio.com/events.json")
        .then((res) => res.data),
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleEventClick = (eventID: string) => {
    setSearchParams({
      event: eventID,
    });
  };
  console.info(data);
  return (
    <Paper
      elevation={3}
      sx={{ width: "40%", minWidth: "355px", m: 1, mr: [2, 3], p: [1, 2] }}
    >
      {/* Header */}
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
      {/* List */}

      <List>
        {data.map((event) => (
          <ListItemButton
            onClick={() => handleEventClick(event.ID)}
            component={Grid}
            container
            sx={(theme) => ({
              p: 1,
              borderRadius: 2,
              border: `1px solid ${
                searchParams.get("event") === event.ID
                  ? theme.palette.primary.main
                  : "transparent"
              }`,
              ":hover": {
                outline: `1px solid ${theme.palette.divider}`,
              },
            })}
          >
            <Grid item xs={7}>
              <Typography>{`${event.ID}: ${event.Location}`}</Typography>
              <Typography>Person Detected!</Typography>
            </Grid>
            <Grid component={List} disablePadding item xs={5}>
              {/* time */}
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <ClockIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{event.Time}</ListItemText>
              </ListItem>
              {/* date */}
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CalendarIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{event.Date}</ListItemText>
              </ListItem>
            </Grid>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}

export default Events;
