import { ToastProps } from "../../../../types";

const texts = {
	message: "This is a toast",
};
export const defaultToast: ToastProps = {
	uuid: "123",
	message: texts.message,
	duration: 3000,
};
export const successToast: ToastProps = {
	uuid: "1234",
	message: texts.message,
	variant: "success",
	duration: 3000,
};
export const dangerToast: ToastProps = {
	uuid: "12345",
	message: texts.message,
	variant: "danger",
	duration: 3000,
};
export const toastWithAction: ToastProps = {
	uuid: "123456",
	message: 'DROP TABLE "users" without WHERE ',
	duration: 3000,
	action: {
		label: "Undo",
		onClick: () => {
			alert("Wow, you just saved your database!");
		},
	},
};
