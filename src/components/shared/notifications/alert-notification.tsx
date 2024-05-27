import { Alert, AlertColor, AlertTitle, Stack } from "@mui/material";
import { Notification } from "../../../models/notification.model";

function AlertNotification({ notification }: { notification: Notification }) {
  return (
    <Stack sx={{ width: notification.width ?? "100%" }} spacing={2}>
      <Alert severity={notification.type}>
        <AlertTitle>{notification.title}</AlertTitle>
        {notification.message}
      </Alert>
    </Stack>
  );
}

export default AlertNotification;
