import React from "react";
import { ToastProps } from "../Toast/types";
import { Direction } from "../../../types";
import { Toast } from "../Toast/Toast";

interface Props {
	direction?: Direction;
	toasts: ToastProps[];
	onChange: (toasts: ToastProps[]) => void;
}

export const toastSystemStyles = ({ direction }: { direction: Direction }) => {
	const base =
		"container-snap h-fit truncate w-fit fixed z-40 justify-center items-left gap-4 bottom-4 left-4 flex";
	const toastVariants = {
		x: "flex-row-reverse overflow-x-auto",
		y: "flex-col overflow-y-auto",
	};

	return `${toastVariants[direction ?? "x"]} ${base}`;
};

const ToastSystem: React.FC<Props> = ({ toasts = [], direction = "y", onChange }) => {
	const handleCloseToast = (index: number) => () => {
		const newToasts = [...toasts];
		newToasts.splice(index, 1);
		onChange(newToasts);
	};

	return (
		<ul className={toastSystemStyles({ direction })}>
			{toasts.map((toast, index: number) => (
				<Toast key={toast.message + new Date()} toast={toast} onClose={handleCloseToast(index)} />
			))}
		</ul>
	);
};

export default ToastSystem;
