import { ToastProps, ToastVariants } from "../../../types";

export const defaultToast: ToastProps = {
	uuid: "default-toast",
	message: "Saved!",
	variant: ToastVariants.neutral,
	duration: 3000,
};
