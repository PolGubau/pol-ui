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
import React from "react";
import { IconNameType } from "../types";
import {
  ChatTextHandIcon,
  CupCakeHandIcon,
  ExclamationHandIcon,
  HearthHandIcon,
  NotesHandIcon,
  StarHandIcon,
  UndrawHandIcon,
  UserHandIcon,
} from "../assets/icons/handDrawed";

export const IconByName = (name: IconNameType) => {
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
    case "hd-chatText":
      return <ChatTextHandIcon />;
    case "hd-cupCake":
      return <CupCakeHandIcon />;
    case "hd-exclamation":
      return <ExclamationHandIcon />;
    case "hd-heart":
      return <HearthHandIcon />;
    case "hd-notes":
      return <NotesHandIcon />;
    case "hd-star":
      return <StarHandIcon />;
    case "hd-undraw":
      return <UndrawHandIcon />;
    case "hd-user":
      return <UserHandIcon />;

    default:
      return <TbArrowNarrowRight />;
  }
};
