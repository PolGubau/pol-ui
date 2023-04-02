import {
  TbAdjustments,
  TbAdjustmentsOff,
  TbAlarm,
  TbAlertTriangle,
  TbAlertTriangleFilled,
  TbApps,
  TbAppsFilled,
  TbArrowNarrowDown,
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  TbArrowNarrowUp,
  TbArrowUp,
  TbArrowsDiagonal,
  TbArrowsDiagonalMinimize2,
  TbArrowsShuffle,
  TbBackspace,
  TbBaguette,
  TbBalloon,
  TbBattery1,
  TbBattery2,
  TbBattery4,
  TbBatteryCharging,
  TbBatteryEco,
  TbTerminal2,
  TbTextSize,
  TbTrash,
  TbTrendingUp,
  TbUserCircle,
  TbVolume,
  TbVolume3,
  TbWifi,
  TbWifiOff,
  TbWindowMinimize,
  TbWorld,
  TbZoomIn,
  TbZoomOut,
} from "react-icons/tb";

export type IconName =
  | "arrow"
  | "arrow-left"
  | "arrow-up"
  | "arrow-down"
  | "arrow-up-short"
  | "minimize"
  | "expand"
  | "shuffle"
  | "settings"
  | "settings-off"
  | "alarm"
  | "alert"
  | "alert-filled"
  | "layout"
  | "layout-filled"
  | "backspace"
  | "baguette"
  | "balloon"
  | "battery"
  | "battery-empty"
  | "battery-full"
  | "battery-charging"
  | "battery-eco"
  | "zoom"
  | "zoom-out"
  | "world"
  | "window-minimize"
  | "terminal"
  | "text-size"
  | "trash"
  | "trending-up"
  | "user-circle"
  | "volume"
  | "volume-3"
  | "wifi"
  | "wifi-off"
  | "battery-1"
  | "battery-2"
  | "battery-4"
  | "battery-charging"
  | "battery-eco"
  | "volume-off"
  | "user"
  | "trend";

export const IconByName = (name: IconName) => {
  switch (name) {
    case "arrow":
      return <TbArrowNarrowRight />;
    case "arrow-left":
      return <TbArrowNarrowLeft />;
    case "arrow-up":
      return <TbArrowNarrowUp />;
    case "arrow-down":
      return <TbArrowNarrowDown />;
    case "arrow-up-short":
      return <TbArrowUp />;
    case "minimize":
      return <TbArrowsDiagonalMinimize2 />;
    case "expand":
      return <TbArrowsDiagonal />;
    case "shuffle":
      return <TbArrowsShuffle />;
    case "settings":
      return <TbAdjustments />;
    case "settings-off":
      return <TbAdjustmentsOff />;
    case "alarm":
      return <TbAlarm />;
    case "alert":
      return <TbAlertTriangle />;
    case "alert-filled":
      return <TbAlertTriangleFilled />;
    case "layout":
      return <TbApps />;
    case "layout-filled":
      return <TbAppsFilled />;
    case "backspace":
      return <TbBackspace />;
    case "baguette":
      return <TbBaguette />;
    case "balloon":
      return <TbBalloon />;
    case "battery":
      return <TbBattery2 />;
    case "battery-empty":
      return <TbBattery1 />;
    case "battery-full":
      return <TbBattery4 />;
    case "battery-charging":
      return <TbBatteryCharging />;
    case "battery-eco":
      return <TbBatteryEco />;
    case "zoom":
      return <TbZoomIn />;
    case "zoom-out":
      return <TbZoomOut />;
    case "world":
      return <TbWorld />;
    case "window-minimize":
      return <TbWindowMinimize />;
    case "wifi":
      return <TbWifi />;
    case "wifi-off":
      return <TbWifiOff />;
    case "volume":
      return <TbVolume />;
    case "volume-off":
      return <TbVolume3 />;
    case "trash":
      return <TbTrash />;
    case "text-size":
      return <TbTextSize />;
    case "terminal":
      return <TbTerminal2 />;
    case "user":
      return <TbUserCircle />;
    case "trend":
      return <TbTrendingUp />;

    default:
      return <TbArrowNarrowRight />;
  }
};
