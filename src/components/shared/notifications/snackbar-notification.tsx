import { Slide, Snackbar, SnackbarOrigin, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef, useEffect, useState } from "react";
import { Notification } from "../../../models/notification.model";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarNotification({
  notification,
}: {
  notification: Notification;
}) {
  const [open, setOpen] = useState<boolean>();
  const [state, setState] = useState<SnackbarOrigin>({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  useEffect(() => {
    if (notification) {
      setOpen(true);
      // setTimeout(() => {
      //   setOpen(false);
      // }, 6000);
    }
  }, [notification]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "22vw", maxWidth: 900 }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleClose}
          severity={notification.type}
          sx={{ width: "22vw", maxWidth: 900 }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default SnackbarNotification;
