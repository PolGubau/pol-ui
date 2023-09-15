import { ColorType, Shadow, Size, SizesComplete } from "../../../types";
import { applyMaxWidth, applyShadow, applyRounded, applyBgColor } from "../../../style";

interface Props {
	hasBorder?: boolean;
	maxWidth?: Size | "full";
	shadow?: Shadow;
	rounded: SizesComplete;
	color: ColorType;
	className?: string;
}

export const cardStyle = ({
	hasBorder = true,
	maxWidth = "full",
	shadow = "none",
	rounded,
	color,
	className,
}: Props) => {
	const base = " flex flex-col gap-2 w-fit";
	const border = hasBorder ? "ring-2 ring-gray-200" : "";

	return `${base} ${border} ${applyMaxWidth(maxWidth)} ${applyShadow(shadow)} ${applyRounded(
		rounded
	)} ${applyBgColor(color)} ${className}`;
};
