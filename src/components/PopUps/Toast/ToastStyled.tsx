import { applyBgColor, applyBgOpacity, applyColor } from "../../../style";
import { Colors, Direction, ToastVariant, ToastVariants } from "../../../types";

interface Props {
	variant?: ToastVariant;
	defaultType?: ToastVariant;
	direction?: Direction;
}

export const toastStyles = ({ variant, defaultType = ToastVariants.neutral }: Props) => {
	const base =
		"h-fit w-fit flex justify-center items-center gap-2 py-4 pr-4 pl-6 rounded-xl shadow-lg transition-all truncate min-w-fit max-w-full ml-4";
	const vars = {
		success: `${applyBgColor(Colors.success)}`,
		danger: `${applyBgColor(Colors.danger)}`,
		neutral: `${applyBgColor(Colors.primary)} ${applyBgOpacity(30)} ${applyColor(
			Colors.background
		)}`,
	};

	return `${base} ${vars[variant ?? defaultType]} `;
};
