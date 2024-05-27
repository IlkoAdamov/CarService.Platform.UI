import { AlertColor } from "@mui/material";

export interface Notification {
  type: AlertColor;
  title?: string;
  message: string;
  width?: string;
}

export enum NotificationType {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
}

export enum NotificationTitle {
  ERROR = "Error",
  SUCCESS = "Success",
  INFO = "Info",
  WARNING = "Warning",
}

export enum NotificationMessage {
  SomeThingWentWrong = "Something went wrong, please try again later !!!",
}
