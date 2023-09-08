import { Direction } from "../../../types";
import { ToastVariant } from "./types";

interface Props {
	variant?: ToastVariant;
	defaultType: ToastVariant;
	direction?: Direction;
}

export const toastStyles = ({ variant, defaultType, direction }: Props) => {
	const base =
		"h-fit w-fit flex justify-center items-center gap-4 bg-gradient-to-r px-4 py-3 pl-6 rounded-xl shadow-md border transition-all truncate min-w-fit";
	const toastVariants = {
		success: "text-contrast from-success/10 to-success border-success",
		danger: "  text-contrast from-danger/10 to-danger border-danger",
		neutral: "text-contrast from-primary/10 to-primary/30 border-primary",
	};

	const animationSide = {
		x: "hover:mb-1",
		y: "hover:ml-1",
	};

	return `${base} ${toastVariants[variant ?? defaultType]} ${animationSide[direction ?? "y"]}`;
};
