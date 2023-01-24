import { Box, Alert } from "@mui/material";
import noData from "../../../assets/no-data.svg";

function NoData({ id }: { id?: string }) {
  return (
    <>
      <Box
        component="img"
        width="clamp(150px, 70%, 300px)"
        src={noData}
        alt="No Data"
      />
      <Alert variant="outlined" severity="warning">
        No data found for id <em>{id}</em>
      </Alert>
    </>
  );
}

export default NoData;
