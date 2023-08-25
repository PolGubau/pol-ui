import { ButtonType } from "../../Buttons/Button/Button";
import { IconType } from "../../Icon";

export interface ModalProps {
	isOpen: boolean;
	handleClose?: () => void;
	children?: React.ReactNode;
	title?: string;
	icon?: IconType;
	cancelButton?: {
		buttonType?: ButtonType;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
	submitButton?: {
		customColor?: string;
		buttonType?: ButtonType;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
}
