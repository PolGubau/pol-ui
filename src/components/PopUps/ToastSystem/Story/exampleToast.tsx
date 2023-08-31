import { ToastProps } from "../../Toast/types";

const texts = {
	message: "This is a toast",
};
export const defaultToast: ToastProps = {
	isOpen: true,
	message: texts.message,
	duration: 3000,
};
export const successToast: ToastProps = {
	isOpen: true,
	message: texts.message,
	variant: "success",
	duration: 3000,
};
export const dangerToast: ToastProps = {
	isOpen: true,
	message: texts.message,
	variant: "danger",
	duration: 3000,
};
export const toastWithAction: ToastProps = {
	isOpen: true,
	message: 'DROP TABLE "users" without WHERE ',
	duration: 3000,
	action: {
		label: "Undo",
		onClick: () => {
			alert("Wow, you just saved your database!");
		},
	},
};
