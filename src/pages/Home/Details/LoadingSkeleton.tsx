import {
  Skeleton,
  Stack,
  Box,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@mui/material";

function LoadingSkeleton() {
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
        <Skeleton width={150} sx={{ borderRadius: 3 }} height={30} />
      </Box>
      <Stack
        sx={{
          flexDirection: ["column-reverse", "row", "row"],
          gap: [2, 3, 1],
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* ID */}
          <Skeleton height={32} sx={{ mb: 1, maxWidth: 150 }} />
          {/* Title */}
          <Skeleton height={25} sx={{ maxWidth: 280, mb: 1 }} />

          {/* Person Data */}
          <TableContainer>
            <Table size="small">
              <TableBody>
                {/* Name */}
                <TableRow>
                  <TableCell sx={{ maxWidth: "100px !important" }}>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton sx={{ maxWidth: 180 }} />
                  </TableCell>
                </TableRow>
                {/* Location */}
                <TableRow>
                  <TableCell sx={{ maxWidth: "100px !important" }}>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton sx={{ maxWidth: 150 }} />
                  </TableCell>
                </TableRow>
                {/* Date */}
                <TableRow>
                  <TableCell sx={{ maxWidth: "100px !important" }}>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton sx={{ maxWidth: 200 }} />
                  </TableCell>
                </TableRow>
                {/* Time */}
                <TableRow>
                  <TableCell sx={{ maxWidth: "100px !important" }}>
                    <Skeleton />
                  </TableCell>
                  <TableCell>
                    <Skeleton sx={{ maxWidth: 150 }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Description */}
          <Skeleton sx={{ maxWidth: 150, mt: 0.5, mb: 1, height: 25 }} />
          <Skeleton width="100%" sx={{ mb: 1 }} />
          <Skeleton width="100%" sx={{ mb: 1 }} />
          <Skeleton width="100%" sx={{ mb: 1 }} />
        </Box>
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton width="100%" height={"100%"} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default LoadingSkeleton;
