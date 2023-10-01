import React from "react";
import { Direction, ToastProps } from "../../../types";
import { Toast } from "../Toast/Toast";
import { motion } from "framer-motion";

interface Props {
	direction?: Direction;
	toasts: ToastProps[];
	onChange: (toasts: ToastProps[]) => void;
}

export const toastSystemStyles = ({ direction }: { direction: Direction }) => {
	const base =
		" w-full fixed z-40 justify-end  gap-4 bottom-4 left-4 flex user-select-none pointer-events-none";
	const toastVariants = {
		x: "flex-row-reverse overflow-x-auto items-end",
		y: "flex-col overflow-y-hidden items-start",
	};

	return `${toastVariants[direction ?? "y"]} ${base}`;
};

const ToastSystem: React.FC<Props> = ({ toasts = [], direction = "y", onChange }) => {
	const handleCloseToast = (index: number) => () => {
		const newToasts = [...toasts];
		newToasts.splice(index, 1);
		onChange(newToasts);
	};
	const allToasts = toasts ?? [];

	return (
		<motion.div className={toastSystemStyles({ direction })}>
			{Boolean(allToasts?.length) &&
				allToasts.map((toast, index: number) => (
					<Toast
						key={toast.message + new Date()}
						toast={toast}
						onClose={handleCloseToast(index)}
						direction={direction}
					/>
				))}
		</motion.div>
	);
};

export default ToastSystem;
