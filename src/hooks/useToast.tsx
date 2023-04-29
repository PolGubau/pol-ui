import { useSetRecoilState } from "recoil";
import ToastStateAtom, { ToastType } from "../states/Toasts.state";

const useToast = () => {
  const trigger = useSetRecoilState(ToastStateAtom);
  const triggerToast = (
    message: string,
    type: ToastType = "success",
    duration: number = 3000
  ) => {
    trigger({
      show: true,
      message,
      type,
      duration,
    });
  };
  return { triggerToast };
};

export default useToast;
