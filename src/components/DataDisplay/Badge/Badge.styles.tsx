import { Side, Sizes } from "../../../types";
export const baseStyles =
	"absolute flex justify-center items-center text-white text-xs font-bold bg-accent transition-all backdrop-blur-md p-1 truncate";

export const applyHorizontalPlacement = (v: Side) => (v === "left" ? "-left-2" : "-right-1");
export const applyVerticalPlacement = (v: "top" | "bottom") =>
	v === "top" ? "-top-1" : "-bottom-0";
export const clickableStyles = (v: boolean) =>
	v ? "cursor-pointer hover:ring-2 active:animated-pulse" : "cursor-auto";
export const badgeSizeStyles = (v: Sizes) => {
	switch (v) {
		case "xs":
			return "min-w-[0.75rem] h-3 text-xs";
		case "sm":
			return "min-w-[1rem] h-4 text-xs";
		case "md":
			return "min-w-[1.25rem] h-5 text-xs";
		case "lg":
			return "min-w-[1.5rem] h-6 text-md";
		case "xl":
			return "min-w-[2rem] h-8 text-md";
		default:
			return "min-w-[1.25rem] h-5 text-xs";
	}
};

interface Props {
	size?: Sizes;
	horizontal?: Side;
	vertical?: "top" | "bottom";
	clickable?: boolean;
	className?: string;
}

export const badgeStyles = ({
	size = "md",
	horizontal = "right",
	vertical = "top",
	clickable = false,
	className,
}: Props) => {
	return `${baseStyles} ${badgeSizeStyles(size)} ${applyHorizontalPlacement(
		horizontal
	)} ${applyVerticalPlacement(vertical)} ${clickableStyles(clickable)} ${className}}`;
};
