import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import style from "./style.module.scss";

function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography noWrap component="div">
            <h1 className={style.title}>Car Service Book</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
