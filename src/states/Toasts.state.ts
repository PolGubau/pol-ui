import { atom } from "recoil";

export type ToastType = "success" | "error";

interface IToastState {
  message: string;
  type: "success" | "error";
  show: boolean;
  duration?: number;
}

export const emptyToast: IToastState = {
  message: "Action done successfully",
  type: "success",
  show: false,
  duration: 3000,
};

const ToastStateAtom = atom({
  key: "ToastState",
  default: emptyToast,
});

export default ToastStateAtom;
