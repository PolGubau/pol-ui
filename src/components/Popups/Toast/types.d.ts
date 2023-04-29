export interface IToast {
  message: string;
  type: "success" | "error";
  show: boolean;
  duration?: number;
}
