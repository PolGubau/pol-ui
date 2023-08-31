import { GrClose } from "react-icons/gr";
import ToastStyled, { toastStyles } from "./ToastStyled";
import { Button, IconButton } from "../../Buttons";
import { ToastProps, ToastTypes, defaultToast } from "./types";
import React from "react";

interface Props {
	toast: ToastProps;
	onClose?: () => void;
}
const toastVariants = {
	initial: {
		opacity: 0,

		y: 50,
		scale: 0.2,
		transition: { duration: 0.1 },
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
	},
	exit: {
		opacity: 0,
		scale: 0.2,
		transition: { ease: "easeOut", duration: 0.15 },
	},
	hover: { scale: 1.05, transition: { duration: 0.1 } },
};

export const Toast = ({ toast = defaultToast, onClose }: Props) => {
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
		<ToastStyled
			dragConstraints={{ left: 0, right: 300 }}
			dragElastic={0.9}
			dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
			onDragEnd={onClose}
			drag="x"
			whileDrag={{ scale: 0.8 }}
			variants={toastVariants} // Defined animation states
			whileHover="hover" // Animation on hover gesture
			initial="initial" // Starting animation
			animate="animate" // Values to animate to
			exit="exit" // Target to animate to when removed from the tree
			className={toastStyles({ variant: toast.variant, defaultType: DEFAULT_TOAST_TYPE })}
			duration={toast.duration ?? 3000}
		>
			<p>{toast.message}</p>
			{toast.action && (
				<Button variant="text" icon={toast.action?.icon ?? ""} onClick={toast.action?.onClick}>
					{toast.action.label}
				</Button>
			)}
			<IconButton variant="text" icon={<GrClose />} onClick={onClose} />
		</ToastStyled>
	);
};
