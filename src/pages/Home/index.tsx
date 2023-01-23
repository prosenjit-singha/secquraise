import { Paper } from "@mui/material";
import Details from "./Details";
import Events from "./Events";

function Home() {
  return (
    <>
      <Details />
      <Paper
        elevation={5}
        sx={{
          display: ["none", "none", "block"],
          position: "sticky",
          top: "75px",
          width: ["40%", "40%", "40%", "30%"],
          minWidth: "355px",
          maxHeight: "calc(100vh - 80px)",
          overflow: "overlay",
          m: 1,
          mr: [2, 3],
        }}
      >
        <Events />
      </Paper>
    </>
  );
}

export default Home;
