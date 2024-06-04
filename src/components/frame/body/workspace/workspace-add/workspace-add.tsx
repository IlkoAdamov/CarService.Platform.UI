import {
  Alert,
  AlertTitle,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import style from "./style.module.scss";
import { MdAddToDrive } from "react-icons/md";
import { Notification } from "../../../../../models/index";
import AlertNotification from "../../../../shared/notifications/alert-notification";
import { useEffect, useRef, useState } from "react";
import {
  NotificationTitle,
  NotificationType,
} from "../../../../../models/notification.model";
import AbcIcon from "@mui/icons-material/Abc";

function WorkspaceAdd() {
  const [notification, setNotification] = useState<Notification>();

  const vinRef = useRef(null); //vinRef.current!["id"] or vinRef.current!["value"]

  const [currentControl, setCurrentControl] = useState<string>();
  const [controls, setControls] = useState<string[]>();
  const listOfControls: string[] = controls ?? [];

  function validate(event: any) {
    debugger;
    if (event.target.value === "") {
      listOfControls.push(event.target.id);
      setControls(listOfControls);
    }

    setCurrentControl(event.target.id);
  }

  function submit(event: any) {
    event.preventDefault();
    let form_data = new FormData(event.target);
    setNotification({
      type: NotificationType.SUCCESS,
      title: NotificationTitle.SUCCESS,
      message: "This is a success Alert with an encouraging title.",
    });

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
                <TextField
                  inputRef={vinRef}
                  label="VIN"
                  id="vin"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("vin")}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Brand"
                  id="brand"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("brand")}
                />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Model"
                  id="model"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("model")}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Fuel"
                  id="fuel"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("fuel")}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Plate"
                  id="plate"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("plate")}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Power (Kw)"
                  id="powerKw"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("powerKw")}
                />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Power (hP)"
                  id="powerHp"
                  size="small"
                  fullWidth
                  onBlur={validate}
                  error={controls?.includes("powerHp")}
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
          {notification && <AlertNotification notification={notification} />}
          {controls?.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkspaceAdd;
