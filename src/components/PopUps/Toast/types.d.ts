export type ToastType = 'success' | 'error';

export interface ToastProps {
  isOpen?: boolean;
  message?: string;
  type?: ToastType;
  show?: boolean;
  duration?: number;
  action?: {
    label?: string;
    icon?: string;
    onClick: () => void;
  };
}
