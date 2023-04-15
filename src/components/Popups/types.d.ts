export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  hideCloseButton?: boolean;
  footer?: React.ReactNode;
  onDismiss?: () => void;
}
