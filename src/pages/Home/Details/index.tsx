import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Event } from "../../../types/event.type";

// icons
import MaleIcon from "@mui/icons-material/MaleRounded";
import FemaleIcon from "@mui/icons-material/FemaleRounded";
import LoadingSkeleton from "./LoadingSkeleton";
import { useEvents } from "../../../contexts/EventsProvider";
import NoData from "./NoData";
import dayjs from "dayjs";
import formatDate from "../../../utils/formatDate";

function Details() {
  const { eventID } = useParams();
  const { data: dataList, isLoading } = useEvents();
  const [data, setData] = useState<Event | null>(null);

  useEffect(() => {
    const result = dataList.find((event) => event.ID === eventID);
    setData(result || null);
  }, [eventID, dataList]);

  const getPhotoURL = (name: string) =>
    `https://firebasestorage.googleapis.com/v0/b/secquraise-pj.appspot.com/o/Images%2F${name}.jpg?alt=media`;

  if (isLoading) return <LoadingSkeleton />;

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
            mb: [3, 4, 5],
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
            <Typography sx={{ mt: [1, 2] }}>Description:</Typography>
            <Typography>
              {`${data.Name} detected at ${data.Location} on `}
              <FormatDate value={data.Date} />.
            </Typography>
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

  return (
    <Box
      sx={{
        width: ["100%", "100%", "60%", "70%"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NoData id={eventID} />
    </Box>
  );
}

export default Details;

const FormatDate = ({ value }: { value: string }) => {
  const date = formatDate(value);
  return (
    <>
      {dayjs(date).format("D")}
      <sup>th</sup>
      {dayjs(date).format("MMM")}, {dayjs(date).format("YYYY")}
    </>
  );
};
const Image = styled("img")`
  width: clamp(30px, 100%, 250px);
  aspect-ratio: 9/12;
  object-fit: cover;
  border-radius: 12px;
`;
