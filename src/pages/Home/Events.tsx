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
  Skeleton,
} from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Event } from "../../types/event.type";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// icons
import ClockIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";

function Events() {
  const navigate = useNavigate();
  const { eventID } = useParams();
  const { data = [], isLoading } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () =>
      axios
        .get("https://secquraise-pj-default-rtdb.firebaseio.com/events.json")
        .then((res) => res.data),
  });

  // const [searchParams, setSearchParams] = useSearchParams();

  const handleEventClick = (eventID: string) => {
    navigate("/" + eventID);
  };
  // console.info(data);
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
        {isLoading && [...Array(10)].map((_, i) => <ListSkeleton key={i} />)}
        {data.map((event) => (
          <ListItemButton
            onClick={() => handleEventClick(event.ID)}
            component={Grid}
            container
            sx={(theme) => ({
              px: 1,
              py: 0,
              borderRadius: 2,
              border: `1px solid ${
                eventID === event.ID
                  ? theme.palette.primary.main
                  : "transparent"
              }`,
              ":hover": {
                outline: `1px solid ${theme.palette.divider}`,
              },
            })}
            key={event.ID}
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

const ListSkeleton = () => {
  return (
    <ListItem
      component={Grid}
      container
      sx={(theme) => ({
        p: 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      {/* Left Block */}
      <Grid item xs={7}>
        <Skeleton sx={{ mb: 1, mr: 2 }} />
        <Skeleton sx={{ mr: 2 }} />
      </Grid>
      {/* Right Block */}
      <Grid component={List} disablePadding item xs={5}>
        {/* time */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <ClockIcon fontSize="small" />
          </ListItemIcon>
          <Skeleton width="100%" />
        </ListItem>
        {/* date */}
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CalendarIcon fontSize="small" />
          </ListItemIcon>
          <Skeleton width="100%" />
        </ListItem>
      </Grid>
    </ListItem>
  );
};

export default Events;
