import React from "react";
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
		<div
			className={
				"flex gap-2 items-center w-fit px-4 py-3 rounded-xl pl-6 animate-fade-right animate-duration-500 animate-ease-out "
			}
		>
			<p className={`text-lg`}>{message}</p>
			{action && (
				<Button icon={action?.icon ?? ""} onClick={action?.onClick}>
					{action.label ?? "OK"}
				</Button>
			)}
			<IconButton icon="close" variant="text" onClick={handleClose} />
		</div>
	);
};
