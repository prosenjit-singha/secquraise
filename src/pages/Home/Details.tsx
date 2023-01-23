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
  styled,
  Stack,
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
    enabled: !!eventID,
  });

  const getDate = (value: string) => {
    return format(new Date(value), "PPP");
  };

  const getPhotoURL = (name: string) =>
    `https://firebasestorage.googleapis.com/v0/b/secquraise-pj.appspot.com/o/Images%2F${name}.jpg?alt=media`;

  if (data)
    return (
      <Stack
        sx={{
          width: ["100%", "100%", "60%", "70%"],
          height: "fit-content",
          py: 3,
          px: 2,
        }}
      >
        <Box
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
        </Box>
        <Stack
          sx={{
            flexDirection: ["column-reverse", "row", "row"],
            gap: [2, 3, 1],
          }}
        >
          <Box sx={{ width: "100%" }}>
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
          </Box>
          <Box
            width="100%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={getPhotoURL(data.Name)} alt={data.Name} />
          </Box>
        </Stack>
      </Stack>
    );

  return <Box sx={{ width: "60%" }}></Box>;
}

export default Details;

const Image = styled("img")`
  width: clamp(30px, 100%, 250px);
  aspect-ratio: 9/12;
  object-fit: cover;
  border-radius: 12px;
`;
