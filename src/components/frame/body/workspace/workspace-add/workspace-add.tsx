import {
  Alert,
  AlertTitle,
  Button,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import style from "./style.module.scss";
import { MdAddToDrive } from "react-icons/md";

function WorkspaceAdd() {
  function submit(event: any) {
    event.preventDefault();
    let form_data = new FormData(event.target);
    console.log(form_data);
  }

  return (
    <div>
      <div className={style.title}>
        <div className={style.icon}>
          <MdAddToDrive fontSize="30" />
        </div>
        <div className={style.text}>ADD NEW</div>
      </div>
      <Divider />
      <div
        style={{
          paddingTop: "50px",
          display: "flex",
        }}
      >
        <div style={{ width: "30%" }}>
          <form onSubmit={submit}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "90%", padding: "10px" }}>
                <TextField label="VIN" id="vin" size="small" fullWidth />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField label="Brand" id="brand" size="small" fullWidth />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField label="Model" id="model" size="small" fullWidth />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField label="Fuel" id="fuel" size="small" fullWidth />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField label="Plate" id="plate" size="small" fullWidth />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Power (Kw)"
                  id="powerKw"
                  size="small"
                  fullWidth
                />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Power (hP)"
                  id="powerHp"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <Button variant="outlined">Clear</Button>
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ float: "right" }}
                >
                  Create
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "40%" }}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success Alert with an encouraging title.
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info Alert with an informative title.
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning Alert with a cautious title.
            </Alert>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error Alert with a scary title.
            </Alert>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceAdd;
