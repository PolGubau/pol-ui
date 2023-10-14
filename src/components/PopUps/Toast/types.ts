import { ToastProps, ToastVariants } from "../../../types";
import { generateUUID } from "../../../utils";

export const defaultToast: ToastProps = {
	uuid: generateUUID(),
	message: "Saved!",
	variant: ToastVariants.neutral,
	duration: 3000,
};
