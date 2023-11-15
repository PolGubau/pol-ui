import { ToastProps } from "../../../../types";
import { generateUUID } from "../../../../utils";
import { IconNames } from "../../../Base";

const texts = {
	message: "This is a toast",
};
export const defaultToast: ToastProps = {
	uuid: generateUUID(),
	message: texts.message,
	duration: 3000,
};
export const successToast: ToastProps = {
	uuid: generateUUID(),

	message: texts.message,
	variant: "success",
	duration: 3000,
};
export const dangerToast: ToastProps = {
	uuid: generateUUID(),

	message: texts.message,
	variant: "danger",
	duration: 3000,
};
export const toastWithAction: ToastProps = {
	uuid: generateUUID(),
	icon: IconNames.trash,
	variant: "danger",
	message: 'DROP TABLE "users" without WHERE ',
	duration: 3000,
	action: {
		label: "Undo",
		onClick: () => {
			alert("Wow, you just saved your database!");
		},
	},
};
