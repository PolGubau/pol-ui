import { ButtonVariant, Variants, Color, Colors, IconType, ModalProps, Side } from "../../../types";
import { IconNames } from "../../Base";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

interface DeleteButtonProps {
	onTriggerModal: (modal: ModalProps) => void;
	onConfirm: () => void;
	icon?: IconType;
	iconPosition?: Side;
	children?: React.ReactNode;
	onlyIcon?: boolean;
	variant?: ButtonVariant;
	modalTitle?: string;
	modalChildren?: React.ReactNode;
	submitText?: string;
	color?: Color;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
	onTriggerModal,
	onConfirm,
	icon = IconNames.trash,
	iconPosition = "right",
	children,
	variant = Variants.filled,
	modalTitle = "Deleting",
	modalChildren = "Are you sure you want to delete this?",
	submitText = "Delete",
	color = Colors.danger,
}) => {
	const handleClick = () => {
		const defaultModal: ModalProps = {
			isOpen: true,
			title: modalTitle,
			children: modalChildren,
			submitButton: {
				onClick: onConfirm,
				text: submitText,
			},
		};

		onTriggerModal(defaultModal);
	};

	return !children ? (
		<IconButton icon={icon} color={color} onClick={handleClick} variant={variant} />
	) : (
		<Button
			icon={icon}
			color={color}
			iconPosition={iconPosition}
			onClick={handleClick}
			variant={variant}
		>
			{children}
		</Button>
	);
};

export default DeleteButton;
