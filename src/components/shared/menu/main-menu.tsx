import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import { MdAddToDrive } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { GrDocumentNotes } from "react-icons/gr";
import { VscSymbolEvent } from "react-icons/vsc";
import { navigateAction } from "../../../store/slices/redirect-slice";
import { useDispatch } from "react-redux";
import { Page } from "../../../models/index";

const drawerWidth = 240;

function MainMenu() {
  const dispatch = useDispatch();

  const _onNavigationAction = function (hook: string) {
    dispatch(navigateAction({ page: hook }));
  };
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              key="new"
              disablePadding
              onClick={() => _onNavigationAction(Page.ADD)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MdAddToDrive fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="ADD NEW" />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="view"
              disablePadding
              onClick={() => _onNavigationAction(Page.VIEW)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <RiGalleryView2 fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="VIEW ALL" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              key="service"
              disablePadding
              onClick={() => _onNavigationAction(Page.MAINTENANCE)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GrServices fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="MAINTENANCE" />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="repairs"
              disablePadding
              onClick={() => _onNavigationAction(Page.REPAIRS)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GiAutoRepair fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="REPAIRS" />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="events"
              disablePadding
              onClick={() => _onNavigationAction(Page.EVENTS)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <VscSymbolEvent fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="UPCOMING EVENTS" />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="notes"
              disablePadding
              onClick={() => _onNavigationAction(Page.NOTES)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GrDocumentNotes fontSize="25" />
                </ListItemIcon>
                <ListItemText primary="NOTES" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default MainMenu;
