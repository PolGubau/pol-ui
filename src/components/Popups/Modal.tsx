import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalFooter,
} from "./ModalStyled";
import { useOnClickOutside } from "../../hooks";
import { Icon } from "../Icon";
import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
  hideCloseButton,
  footer,
  onDismiss = onClose,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onDismiss);

  return (
    <ModalContainer open={open} ref={ref}>
      <ModalContent>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          {!hideCloseButton && (
            <CloseButton onClick={onClose}>
              <Icon icon={"close"} />
            </CloseButton>
          )}
        </ModalHeader>
        {children}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
