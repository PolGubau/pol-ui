import { useRecoilState } from "recoil";

import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
import React from "react";
import ToastStateAtom, { emptyToast } from "../../states/Toasts.state";
import { Icon } from "../Icon";
import { useToast } from "../../hooks";

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
  position: fixed;
  bottom: 20px;
  right: 20px;

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
  const { resetToast, toast } = useToast();
  const handleClose = () => {
    resetToast();
  };

  // count to 3 and then close the toast
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, toast.duration || 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastStyled duration={toast.duration || 3000}>
      <p>{toast.message}</p>
      <Icon icon={<GrClose />} onClick={handleClose} />
    </ToastStyled>
  );
};
export default Toast;
