import React from "react";
import ClockIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  lighten,
  darken,
} from "@mui/material";
import { Event } from "../../../types/event.type";
import { useNavigate } from "react-router-dom";

type Props = {
  event: Event;
  eventID?: string;
};

function EventListItem({ event, eventID }: Props) {
  const navigate = useNavigate();
  const handleEventClick = (eventID: string) => {
    navigate("/" + eventID);
  };

  return (
    <ListItemButton
      onClick={() => handleEventClick(event.ID)}
      component={Grid}
      container
      sx={(theme) => ({
        px: 1,
        py: 0,
        mb: 1,
        borderRadius: 2,
        bgcolor:
          eventID === event.ID
            ? theme.palette.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.light
            : theme.palette.mode === "dark"
            ? lighten(theme.palette.background.paper, 0.05)
            : darken(theme.palette.background.paper, 0.075),
        ":hover": {
          bgcolor:
            eventID === event.ID
              ? theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
              : theme.palette.mode === "dark"
              ? lighten(theme.palette.background.paper, 0.05)
              : darken(theme.palette.background.paper, 0.075),
          outline: `2px solid ${theme.palette.divider}`,
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
          <ListItemText
            sx={{
              ".MuiTypography-root": {
                fontSize: "0.9rem",
              },
            }}
          >
            {event.Time}
          </ListItemText>
        </ListItem>
        {/* date */}
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CalendarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            sx={{
              ".MuiTypography-root": {
                fontSize: "0.9rem",
              },
            }}
          >
            {event.Date}
          </ListItemText>
        </ListItem>
      </Grid>
    </ListItemButton>
  );
}

export default EventListItem;
