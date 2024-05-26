import { useSelector } from "react-redux";
import { Page, StoreKey } from "../../../../models/index";
import WorkspaceView from "./workspace-view/workspace-view";
import WorkspaceAdd from "./workspace-add/workspace-add";
import { Box } from "@mui/material";

function Workspace() {
  const navigate = useSelector((store: any) => store[StoreKey.PAGE].navigate);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
      {navigate.page === Page.ADD && <WorkspaceAdd />}
      {navigate.page === Page.VIEW && <WorkspaceView />}
    </Box>
  );
}

export default Workspace;
