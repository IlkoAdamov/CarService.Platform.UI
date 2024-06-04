import { Button, Divider, TextField } from "@mui/material";
import style from "./style.module.scss";
import { MdAddToDrive } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { Control, Notification } from "../../../../../models/index";
import AlertNotification from "../../../../shared/notifications/alert-notification";
import { useRef, useState } from "react";
import {
  NotificationTitle,
  NotificationType,
} from "../../../../../models/notification.model";

function WorkspaceAdd() {
  const [notification, setNotification] = useState<Notification>();

  const vinRef = useRef(null); //vinRef.current!["id"] or vinRef.current!["value"]

  const [time, setTime] = useState<number>();
  const [controls, setControls] = useState<Control[]>();
  const listOfControls: Control[] = controls ?? [];

  function validate(event: any, lable: string) {
    if (event.target.value === "") {
      listOfControls.push({ id: event.target.id, lable: lable });
      setControls(listOfControls);
    }

    setTime(new Date().getTime());
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
                  onBlur={(e) => validate(e, "VIN")}
                  error={
                    controls?.find((item) => item.id === "vin") !== undefined
                  }
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
                  onBlur={(e) => validate(e, "Brand")}
                  error={
                    controls?.find((item) => item.id === "brand") !== undefined
                  }
                />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Model"
                  id="model"
                  size="small"
                  fullWidth
                  onBlur={(e) => validate(e, "Model")}
                  error={
                    controls?.find((item) => item.id === "model") !== undefined
                  }
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
                  onBlur={(e) => validate(e, "Fuel")}
                  error={
                    controls?.find((item) => item.id === "fuel") !== undefined
                  }
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
                  onBlur={(e) => validate(e, "Plate")}
                  error={
                    controls?.find((item) => item.id === "plate") !== undefined
                  }
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
                  onBlur={(e) => validate(e, "Power (kW)")}
                  error={
                    controls?.find((item) => item.id === "powerKw") !==
                    undefined
                  }
                />
              </div>
              <div style={{ width: "45%", padding: "10px" }}>
                <TextField
                  label="Power (hP)"
                  id="powerHp"
                  size="small"
                  fullWidth
                  onBlur={(e) => validate(e, "Power (hP)")}
                  error={
                    controls?.find((item) => item.id === "powerHp") !==
                    undefined
                  }
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
            <div
              key={index}
              style={{
                display: "flex",
                gap: "15px",
                color: "#C62828",
                paddingTop: "20px",
              }}
            >
              <div>
                <BiError fontSize="25" />
              </div>
              <div>{item.lable} field is not populate</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkspaceAdd;
