import {
  Box,
  Typography,
  IconButton,
  Grid,
  Chip,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Event } from "../../types/event.type";

// icons
import MaleIcon from "@mui/icons-material/MaleRounded";
import FemaleIcon from "@mui/icons-material/FemaleRounded";
import { format } from "date-fns";

function Details() {
  const { eventID } = useParams();

  const { data } = useQuery<Event>({
    queryKey: ["event", eventID],
    queryFn: async () =>
      axios
        .get("https://secquraise-pj-default-rtdb.firebaseio.com/events.json")
        .then((res) => res.data.find((event: Event) => event.ID === eventID)),
  });

  const getDate = (value: string) => {
    return format(new Date(value), "PPP");
  };

  if (data)
    return (
      <Grid
        container
        sx={{ width: "70%", height: "fit-content", py: 3, px: 2 }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Chip
            icon={data.Gender === "Male" ? <MaleIcon /> : <FemaleIcon />}
            color={data.Gender === "Female" ? "error" : "success"}
            label={data.Gender}
          />
        </Grid>
        <Grid item>
          <Grid item>
            <Typography variant="h5">{data.ID}</Typography>
            <Typography variant="h6">Person Detected</Typography>

            {/* Person Data */}
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>: {data.Name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Location</TableCell>
                    <TableCell>: {data.Location}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>: {data.Date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>: {data.Time}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Description */}
            <Typography>Description:</Typography>
            <Typography>{`${data.Name} detected at ${
              data.Location
            } on ${getDate(data.Date)}`}</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    );

  return <Box sx={{ width: "70%" }}></Box>;
}

export default Details;
