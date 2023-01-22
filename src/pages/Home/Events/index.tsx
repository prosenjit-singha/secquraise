import {
  Paper,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Grid,
  ListItemIcon,
  Skeleton,
  Collapse,
} from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Event } from "../../../types/event.type";
import { useParams } from "react-router-dom";

// icons
import ClockIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";
import EventListItem from "./EventListItem";
import { useState } from "react";
import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";

function Events() {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");

  const [openFilter, setOpenFilter] = useState(false);
  const { eventID } = useParams();
  const { data = [], isLoading } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () =>
      axios
        .get("https://secquraise-pj-default-rtdb.firebaseio.com/events.json")
        .then((res) => res.data),
  });

  const locationList = ["Chennai", "Hyderabad", "Bangalore"];
  const genderList = ["male", "female"];

  return (
    <Paper
      elevation={5}
      sx={{
        position: "sticky",
        top: "75px",
        width: "40%",
        minWidth: "355px",
        maxHeight: "calc(100vh - 80px)",
        overflow: "auto",
        m: 1,
        mr: [2, 3],
      }}
    >
      {/* Header */}
      <Paper
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          p: 2,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1">
            Events
          </Typography>
          <IconButton
            title="Filter"
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            <TuneRoundedIcon />
          </IconButton>
        </Box>
        <Collapse in={openFilter} sx={{}}>
          <Box display="flex" gap="8px" mb={1}>
            <Dropdown
              label="Location"
              list={locationList}
              value={location}
              setValue={setLocation}
            />
            <Dropdown
              label="Gender"
              value={gender}
              setValue={setGender}
              list={genderList}
            />
          </Box>
          <DatePicker />
        </Collapse>
      </Paper>
      {/* List */}

      <List sx={{ px: [1, 2] }}>
        {isLoading && [...Array(10)].map((_, i) => <ListSkeleton key={i} />)}
        {data.map((event) => (
          <EventListItem event={event} eventID={eventID} />
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