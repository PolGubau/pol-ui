import { ButtonVariant } from "../../Buttons/Button/Button";
import { IconType } from "../../Base/Icon";
import { ColorTypes, SizesComplete, SizesWithFull, SizesWithNone } from "../../../types";
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
	padding: SizesWithNone;
	rounded: SizesComplete;
	maxWidth?: SizesWithFull;
	cancelButton?: {
		color?: ColorTypes;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
	submitButton?: {
		color?: ColorTypes;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
}
