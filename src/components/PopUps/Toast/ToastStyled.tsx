import { Direction, ToastVariant } from "../../../types";

interface Props {
	variant?: ToastVariant;
	defaultType: ToastVariant;
	direction?: Direction;
}

export const toastStyles = ({ variant, defaultType, direction }: Props) => {
	const base =
		"h-fit w-fit flex justify-center items-center gap-4 bg-gradient-to-r px-4 py-3 pl-6 rounded-xl shadow-lg border transition-all truncate min-w-fit";
	const toastVariants = {
		success:
			"text-background-inverted dark:text-background from-background to-success border-success",
		danger:
			"  text-background-inverted dark:text-background from-background to-danger border-danger",
		neutral:
			"text-background-inverted dark:text-background from-background to-primary/30 border-primary dark:border-primary-inverted dark:from-background-inverted dark:to-primary-inverted/30",
	};

	const animationSide = {
		x: "hover:mb-1",
		y: "hover:ml-1",
	};

	return `${base} ${toastVariants[variant ?? defaultType]} ${animationSide[direction ?? "y"]}`;
};
