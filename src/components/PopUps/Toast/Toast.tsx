import React from "react";
import { GrClose } from "react-icons/gr";
import ToastStyled from "./ToastStyled";
import { Button, IconButton } from "../../Buttons";
import { ToastProps } from "./types";

interface Props {
	state: ToastProps;
	setState?: React.Dispatch<React.SetStateAction<ToastProps>>;
}

export const Toast = ({ state, setState }: Props) => {
	const { message, duration, variant, action } = state;
	const handleClose = () => {
		setState?.({ ...state, isOpen: false });
	};

	return (
		<ToastStyled duration={duration ?? 3000} type={variant}>
			<p>{message}</p>
			{action && (
				<Button icon={action?.icon ?? ""} onClick={action?.onClick}>
					{action.label}
				</Button>
			)}
			<IconButton icon={<GrClose />} onClick={handleClose} />
		</ToastStyled>
	);
};
