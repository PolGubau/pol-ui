import { defaultToast } from "./types";
import React from "react";
import { motion } from "framer-motion";
import {
	Color,
	Colors,
	Direction,
	ToastProps,
	ToastVariant,
	ToastVariants,
	Variants,
} from "../../../types";
import { IconButton } from "../../Buttons";
import { Icon, IconNames } from "../../Base";
import { applyBgColor, applyBgOpacity } from "../../../style";
interface Props {
	toast: ToastProps;
	onClose?: () => void;
	direction?: Direction;
}

export const Toast = ({ toast = defaultToast, onClose }: Props) => {
	// autoClose when toast.duration is set
	React.useEffect(() => {
		if (toast.duration) {
			const timer = setTimeout(() => {
				onClose?.();
			}, toast.duration);

			return () => clearTimeout(timer);
		}
	}, [toast.duration, onClose]);

	const getColorByToastVariant = (varinat?: ToastVariant): Color => {
		switch (varinat) {
			case ToastVariants.success:
				return Colors.success;
			case ToastVariants.danger:
				return Colors.danger;
			case ToastVariants.neutral:
				return Colors.primary;
			default:
				return Colors.primary;
		}
	};

	return (
		<motion.div
		// className={toastStyles({
		// 	variant: toast.variant,
		// 	defaultType: DEFAULT_TOAST_TYPE,
		// 	direction,
		// })}
		>
			<li
				id="toast-default"
				className="flex items-center w-full max-w-xs p-4 text-contrast/80 bg-background-inverted/10 rounded-lg shadow justify-between dark:text-background/80 dark:bg-background/10"
				role="alert"
			>
				<header className="flex items-center">
					<div
						className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${applyBgColor(
							getColorByToastVariant(toast.variant)
						)} ${applyBgOpacity(20)} rounded-lg dark:bg-blue-800 dark:text-blue`}
					>
						{toast.variant === ToastVariants.neutral && (
							<Icon
								icon={toast.icon ?? IconNames.info}
								color={getColorByToastVariant(toast.variant)}
							/>
						)}
						{toast.variant === ToastVariants.success && (
							<Icon
								icon={toast.icon ?? IconNames.check}
								color={getColorByToastVariant(toast.variant)}
							/>
						)}
						{toast.variant === ToastVariants.danger && (
							<Icon
								icon={toast.icon ?? IconNames.close}
								color={getColorByToastVariant(toast.variant)}
							/>
						)}
					</div>
					<div className="ml-3 text-sm font-normal">{toast.message}</div>
				</header>
				<IconButton icon={IconNames.close} onClick={onClose} variant={Variants.text} />
			</li>
		</motion.div>
	);
};
