import { GrClose } from "react-icons/gr";
import { toastStyles } from "./ToastStyled";
import { Button, IconButton } from "../../Buttons";
import { defaultToast } from "./types";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import { ButtonVariants, Direction, ToastProps, ToastTypes } from "../../../types";
interface Props {
	toast: ToastProps;
	onClose?: () => void;
	direction?: Direction;
}

export const Toast = ({ toast = defaultToast, onClose, direction }: Props) => {
	const DEFAULT_TOAST_TYPE = ToastTypes.neutral;

	const [scope, animate] = useAnimate();

	function handleDragEnd(event: any, info: any) {
		const offset = info.offset.x;
		const velocity = info.velocity.x;

		if (offset < -100 || velocity < -500) {
			animate(scope.current, { x: "-100%" }, { duration: 0.2 });
			setTimeout(() => onClose?.(), 200);
		} else {
			animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.5 });
		}
	}

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
			drag="x"
			dragDirectionLock
			onDragEnd={handleDragEnd}
			ref={scope}
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
