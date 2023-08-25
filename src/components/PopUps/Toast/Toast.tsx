import React from "react";
import { toast } from "./Toast.styles";
import { ToastProps } from "./types";
import { Button, IconButton } from "../../Buttons";

interface Props {
	state: ToastProps;
	setState: React.Dispatch<React.SetStateAction<ToastProps>>;
}

export const Toast = ({ state, setState }: Props) => {
	const { message, duration, variant, action } = state;
	const handleClose = () => {
		setState({ ...state, isOpen: false });
	};
	const autoClose = () => {
		setTimeout(() => {
			handleClose();
		}, duration);
	};
	React.useEffect(() => {
		autoClose();
	}, []);

	return (
		<div className={toast({ variant })}>
			<p className={`text-lg`}>{message}</p>
			{action && (
				<Button icon={action?.icon ?? ""} onClick={action?.onClick}>
					{action.label ?? "OK"}
				</Button>
			)}
			<IconButton icon="close" type="text" onClick={handleClose} />
		</div>
	);
};
