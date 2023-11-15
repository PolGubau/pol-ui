import {
	applyCentered,
	applyAlignCenter,
	applyMaxWidth,
	applySamePadding,
	applyRoundedLarge,
	applyShadow,
} from "../../../style";
import { Shadow, SizesComplete, SizesWithFull, SizesWithNone } from "../../../types";

interface Props {
	centered?: boolean;
	maxWidth?: SizesWithFull;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
	shadow?: Shadow;
}
export const modalStyles = ({
	centered,
	maxWidth,
	padding,
	rounded,
	shadow = "xl",
}: Props): string => {
	const layout = `flex flex-col gap-4 relative w-full bg-background dark:bg-background-inverted  text-background-inverted dark:text-background justify-center shadow-2xl md:max-w-3xl z-50`;

	const base = ` ${layout}`;

	const shadowClass = applyShadow(shadow);
	const centeredClass = applyCentered(centered);
	const alignedClass = applyAlignCenter(centered);
	const maxWidthClass = applyMaxWidth(maxWidth);
	const paddingClass = applySamePadding(padding);
	const roundedClass = applyRoundedLarge(rounded);

	return `${base} ${centeredClass} ${alignedClass} ${maxWidthClass} ${paddingClass} ${roundedClass} ${shadowClass} `;
};

interface Props {
	centered?: boolean;
}
export const closeButton = ({ centered }: Props) => {
	const notCentered = "absolute right-4 top-4";
	const centeredClass = "relative ";

	return centered ? centeredClass : notCentered;
};
