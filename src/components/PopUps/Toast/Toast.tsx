import { GrClose } from "react-icons/gr";
import { toastStyles } from "./ToastStyled";
import { Button, IconButton } from "../../Buttons";
import { defaultToast } from "./types";
import React from "react";
import { motion } from "framer-motion";
import { ButtonVariants, Direction, ToastProps, ToastTypes } from "../../../types";
interface Props {
	toast: ToastProps;
	onClose?: () => void;
	direction?: Direction;
}
const toastVariants = {
	initial: {
		opacity: 0,
		scale: 0.8,
		transition: { duration: 0.1 },
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
	exit: {
		opacity: 0,
		scale: 0.2,
		transition: { ease: "easeOut", duration: 0.15 },
	},
};

export const Toast = ({ toast = defaultToast, onClose, direction }: Props) => {
	const DEFAULT_TOAST_TYPE = ToastTypes.neutral;

	// autoClose when toast.duration is set
	React.useEffect(() => {
		if (toast.duration) {
			const timer = setTimeout(() => {
				onClose?.();
			}, toast.duration);

			return () => clearTimeout(timer);
		}
	}, [toast.duration, onClose]);

	return (
		<motion.div
			variants={toastVariants} // Defined animation states
			initial="initial" // Starting animation
			animate="animate" // Values to animate to
			exit="exit"
			className={toastStyles({
				variant: toast.variant,
				defaultType: DEFAULT_TOAST_TYPE,
				direction,
			})}
		>
			<p>{toast.message}</p>
			{toast.action && (
				<Button
					variant={ButtonVariants.text}
					icon={toast.action?.icon}
					onClick={toast.action?.onClick}
				>
					{toast.action.label}
				</Button>
			)}
			<IconButton variant={ButtonVariants.text} icon={<GrClose />} onClick={onClose} />
		</motion.div>
	);
};
