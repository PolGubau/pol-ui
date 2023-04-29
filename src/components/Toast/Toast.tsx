import { Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import ToastStateAtom, { emptyToast } from "states/Toasts.state";
import Slide from "@mui/material/Slide";
import { generateUUID } from "resources/metadata/form/utils";
import styled, { keyframes } from "styled-components";
import IconButton from "components/Common/Buttons/IconButton/IconButton";
import { GrClose } from "react-icons/gr";

const bgLoadingAnimation = keyframes`
    from{
        background-position: 100% 100%; 
    } 
    to{
        background-position: 0 0;
    }
`;

interface ToastStyledProps {
  type?: string;
  duration: number;
}

export const ToastStyled = styled.div<ToastStyledProps>`
  display: flex;
  animation: ${bgLoadingAnimation} ${({ duration }) => duration}ms linear;
  gap: 20px;
  background-size: 200% 200%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.light} 0%,
    ${({ theme }) => theme.colors.main.light} 50%,
    ${({ theme }) => theme.colors.background.light} 50%
  );
  color: ${({ theme }) => theme.colors.main.dark};

  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.main.dark};
  box-shadow: ${({ theme }) => theme.shadows.standard};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.normal};
  padding: 10px 10px 10px 20px;
  font-size: 1.1em;
  margin: 0;
  p {
    margin: 0;
  }
`;

const Toast = () => {
  const [toast, setToastState] = useRecoilState(ToastStateAtom);

  const Transition = (props: any) => {
    return <Slide {...props} direction="up" />;
  };

  const handleClose = () => {
    setToastState(emptyToast);
  };

  return (
    <>
      <Snackbar
        open={toast.show}
        onClose={handleClose}
        TransitionComponent={Transition}
        key={generateUUID()}
        autoHideDuration={toast.duration || 3000}
      >
        <ToastStyled duration={toast.duration || 3000}>
          <p>{toast.message}</p>
          <IconButton icon={<GrClose />} onClick={handleClose} />
        </ToastStyled>
      </Snackbar>
    </>
  );
};
export default Toast;
