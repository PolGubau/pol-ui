import { useRecoilState, useSetRecoilState } from "recoil";
import ToastStateAtom, { ToastType, emptyToast } from "../states/Toasts.state";

const useToast = () => {
  const [toast, trigger] = useRecoilState(ToastStateAtom);

  const triggerToast = ({
    message,
    type = "success",
    duration = 3000,
  }: {
    message: string;
    type?: ToastType;
    duration?: number;
  }) => {
    trigger({
      show: true,
      message,
      type,
      duration,
    });
  };

  const resetToast = () => {
    trigger(emptyToast);
  };

  return { triggerToast, resetToast, toast };
};

export default useToast;
