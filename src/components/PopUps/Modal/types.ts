import { ButtonVariant } from "../../Buttons/Button/Button";
import { IconType } from "../../Base/Icon";
import { SizesWithFull } from "../../../types";
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
	icon?: IconType;
	maxWidth?: SizesWithFull;
	cancelButton?: {
		buttonType?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
	submitButton?: {
		customColor?: string;
		buttonType?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
}
