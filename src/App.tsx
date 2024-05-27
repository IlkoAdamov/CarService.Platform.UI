import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/frame/header/header";
import "./style/global.scss";
import Body from "./components/frame/body/body";
import { TOKENS } from "./di/tokens";
import { di } from "./di/container";
import { useDispatch } from "react-redux";
import { carAction } from "./store/slices/car-slice";
import { CarService } from "./services/user-services/car.service";
import { Notification } from "./models/index";
import SnackbarNotification from "./components/shared/notifications/snackbar-notification";
import {
  NotificationMessage,
  NotificationType,
} from "./models/notification.model";

function App() {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState<Notification>();

  let carService: CarService = di.Resolver(TOKENS.carService) as CarService;

  useEffect(() => {
    carService
      .getAllDetails()
      .then((result) => {
        if (result.status === 200) dispatch(carAction(result.data));
        else console.error("show notification for error ... ");
      })
      .catch((error) => {
        setNotification({
          type: NotificationType.ERROR,
          message: NotificationMessage.SomeThingWentWrong,
        });
      });
  }, []);

  return (
    <div>
      <Header />
      <Body />
      {notification && <SnackbarNotification notification={notification} />}
    </div>
  );
}

export default App;
