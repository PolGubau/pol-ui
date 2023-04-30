import { GrClose } from "react-icons/gr";
import React from "react";
import { Icon } from "../../Icon";
import { IToast } from "./types";
import { ToastContainerStyled, ToastStyled } from "./ToastStyled";

interface ToastProps {
  toast: IToast;
  onClose: () => void;
  onClick?: () => void;
  transitionDuration?: number;
  transition?: "slide" | "fade" | "none";
  y?: "top" | "bottom";
  x?: "left" | "right" | "center";
}

const Toast = ({
  toast,
  onClose,
  onClick = onClose,
  transitionDuration,
  transition,
  y,
  x,
}: ToastProps) => {
  const [aboutToClose, setAboutToClose] = React.useState(false);
  // count to 3 and then close the toast

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // add a class to the toast to animate it out
      setAboutToClose(true);
      // remove the toast from the dom
      setTimeout(() => {
        onClose();
      }, 200);
    }, (toast.duration || 3000) - 100);
    return () => clearTimeout(timer);
  }, []);

  const closeToast = () => {
    setAboutToClose(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <ToastContainerStyled
      aboutToClose={aboutToClose}
      onClick={onClick}
      transitionDuration={transitionDuration}
      transition={transition || "slide"}
      y={y || "bottom"}
      x={x || "left"}
    >
      <ToastStyled duration={toast.duration || 3000}>
        <p>{toast.message}</p>
        <Icon icon={<GrClose />} onClick={closeToast} />
      </ToastStyled>
    </ToastContainerStyled>
  );
};
export default Toast;
