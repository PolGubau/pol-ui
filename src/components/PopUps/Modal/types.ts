import { ButtonVariant } from "../../Buttons/Button/Button";
import { IconType } from "../../Icon";

export interface ModalProps {
	isOpen: boolean;
	handleClose?: () => void;
	children?: React.ReactNode;
	title?: string;
	icon?: IconType;
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
