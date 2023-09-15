import { ButtonVariant } from "../../Buttons/Button/Button";
import { IconType } from "../../Base/Icon";
import { ColorType, Shadow, SizesComplete, SizesWithFull, SizesWithNone } from "../../../types";
export enum ModalCloseReason {
	Escape = "Escape",
	ClickOutside = "ClickOutside",
	Submit = "Submit",
	Cancel = "Cancel",
	ClickButton = "ClickButton",
}
export interface ModalProps {
	isOpen: boolean;
	handleClose?: (reason?: ModalCloseReason) => void;
	children?: React.ReactNode;
	title?: string;
	centered?: boolean;
	icon?: IconType;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
	shadow?: Shadow;
	hasCloseButton?: boolean;
	maxWidth?: SizesWithFull;
	cancelButton?: {
		color?: ColorType;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
	submitButton?: {
		color?: ColorType;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
}
