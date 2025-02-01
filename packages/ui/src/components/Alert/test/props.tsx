import { HiCheck } from "react-icons/hi";
import { ColorsEnum } from "../../../types";
import type { AlertProps } from "../Alert-ui";

const defaultProps: AlertProps = {
	children:
		"An alert could be an incredible useful component when showing an important advice is needed. You can easily customize it's colors, actions and texts. Use it for feedback or warnings.",
};
const customIcon: AlertProps = {
	...defaultProps,
	icon: HiCheck,
	color: ColorsEnum.success,
};
const dismissable: AlertProps = {
	...defaultProps,
	onDismiss() {
		alert("Alert dismissed!");
	},
};
const square: AlertProps = {
	...defaultProps,
	rounded: "none",
	className: "rounded-none",
};
const bordered: AlertProps = {
	...defaultProps,
	bordered: true,
};

export const alertExampleProps: Record<string, AlertProps> = {
	default: defaultProps,
	customIcon,
	dismissable,
	square,
	bordered,
};
