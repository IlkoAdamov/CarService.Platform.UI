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
      if (listOfControls.length === 0) {
        listOfControls.push({ id: event.target.id, lable: lable });
      } else {
        if (!listOfControls.find((x) => x.id === event.target.id))
          listOfControls.push({ id: event.target.id, lable: lable });
      }

      setControls(listOfControls);
    } else {
      let filteredListOfCoftrols = listOfControls.filter(
        (x) => x.id !== event.target.id
      );
      if (filteredListOfCoftrols?.length === 0) setNotification(undefined);
      setControls(filteredListOfCoftrols);
    }

    setTime(new Date().getTime());
  }

  function submit(event: any) {
    event.preventDefault();

    if (
      event.target.vin.required &&
      event.target.vin.value === "" &&
      !listOfControls.find((x) => x.id === event.target.vin.id)
    ) {
      listOfControls.push({
        id: event.target.vin.id,
        lable: event.target.vin.labels[0].textContent
          .substr(0, event.target.vin.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.brand.required &&
      event.target.brand.value === "" &&
      !listOfControls.find((x) => x.id === event.target.brand.id)
    ) {
      listOfControls.push({
        id: event.target.brand.id,
        lable: event.target.brand.labels[0].textContent
          .substr(0, event.target.brand.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.model.required &&
      event.target.model.value === "" &&
      !listOfControls.find((x) => x.id === event.target.model.id)
    ) {
      listOfControls.push({
        id: event.target.model.id,
        lable: event.target.model.labels[0].textContent
          .substr(0, event.target.model.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.fuel.required &&
      event.target.fuel.value === "" &&
      !listOfControls.find((x) => x.id === event.target.fuel.id)
    ) {
      listOfControls.push({
        id: event.target.fuel.id,
        lable: event.target.fuel.labels[0].textContent
          .substr(0, event.target.fuel.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.plate.required &&
      event.target.plate.value === "" &&
      !listOfControls.find((x) => x.id === event.target.plate.id)
    ) {
      listOfControls.push({
        id: event.target.plate.id,
        lable: event.target.plate.labels[0].textContent
          .substr(0, event.target.plate.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.powerKw.required &&
      event.target.powerKw.value === "" &&
      !listOfControls.find((x) => x.id === event.target.powerKw.id)
    ) {
      listOfControls.push({
        id: event.target.powerKw.id,
        lable: event.target.powerKw.labels[0].textContent
          .substr(0, event.target.powerKw.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (
      event.target.powerHp.required &&
      event.target.powerHp.value === "" &&
      !listOfControls.find((x) => x.id === event.target.powerHp.id)
    ) {
      listOfControls.push({
        id: event.target.powerHp.id,
        lable: event.target.powerHp.labels[0].textContent
          .substr(0, event.target.powerHp.labels[0].textContent.indexOf("*"))
          .trim(),
      });
      setControls(listOfControls);
    }
    if (controls?.length !== 0) {
      setNotification({
        type: NotificationType.ERROR,
        title: NotificationTitle.ERROR,
        message: "The following fields are required, please fill them out",
      });

      return;
    }

    setNotification({
      type: NotificationType.SUCCESS,
      title: NotificationTitle.SUCCESS,
      message: "This is a success Alert with an encouraging title.",
    });
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
          <form onSubmit={submit} noValidate>
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
