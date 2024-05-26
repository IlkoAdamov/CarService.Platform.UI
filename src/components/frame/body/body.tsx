import { Box } from "@mui/material";
import MainMenu from "../../shared/menu/main-menu";
import Workspace from "./workspace/workspace";

function Body() {
  return (
    <Box sx={{ display: "flex" }}>
      <MainMenu />
      <Workspace />
    </Box>
  );
}

export default Body;
