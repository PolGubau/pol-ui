export enum ToastTypes {
	neutral = "neutral",
	success = "success",
	danger = "danger",
}

export type ToastVariant = keyof typeof ToastTypes;

export interface ToastProps {
	message: string;
	variant?: ToastVariant;
	duration?: number;
	action?: {
		label?: string;
		icon?: string;
		onClick: () => void;
	};
}

export const defaultToast: ToastProps = {
	message: "Saved!",
	variant: "neutral",
	duration: 3000,
};
