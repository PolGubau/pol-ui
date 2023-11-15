import { Color, Shadow, Size, SizesComplete } from "../../../types";
import { applyMaxWidth, applyShadow, applyRounded, applyBgColor } from "../../../style";

interface Props {
	hasBorder?: boolean;
	maxWidth?: Size | "full";
	shadow?: Shadow;
	rounded: SizesComplete;
	color?: Color;
	className?: string;
}

export const cardStyle = ({
	hasBorder = false,
	maxWidth = "full",
	shadow = "none",
	rounded,
	color,
	className,
}: Props) => {
	const base = " flex flex-col gap-2 w-fit";
	const border = hasBorder ? "ring ring-primary" : "";

	return `${base} ${border} ${applyMaxWidth(maxWidth)} ${applyShadow(shadow)} ${applyRounded(
		rounded
	)} ${applyBgColor(color)} ${className}`;
};
