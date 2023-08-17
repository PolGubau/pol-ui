import React from "react";
import { GrClose } from "react-icons/gr";
import ToastStyled from "./ToastStyled";
import { ToastProps } from "./types.d";
import { Button } from "../../Button";

interface Props {
	state: ToastProps;
	setState: React.Dispatch<React.SetStateAction<ToastProps>>;
}

export const Toast = ({ state, setState }: Props) => {
	const { message, duration, type, action } = state;
	const handleClose = () => {
		setState({ ...state, isOpen: false });
	};

	return (
		<ToastStyled duration={duration ?? 3000} type={type}>
			<p>{message}</p>
			{action && (
				<Button icon={action?.icon ?? ""} onClick={action?.onClick}>
					{action.label ?? "OK"}
				</Button>
			)}
			<GrClose onClick={handleClose} />
		</ToastStyled>
	);
};
