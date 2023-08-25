export type ToastType = "success" | "danger" | "info";

export interface ToastProps {
	isOpen?: boolean;
	message?: string;
	variant?: ToastType;
	duration?: number;
	action?: {
		label?: string;
		icon?: string;
		onClick: () => void;
	};
}
