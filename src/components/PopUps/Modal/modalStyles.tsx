import {
	applyCentered,
	applyAlignCenter,
	applyMaxWidth,
	applySamePadding,
	applyRoundedLarge,
	applyShadow,
	applyTransition,
	applyJustifyContent,
} from "../../../style";
import { Shadow, SizesComplete, SizesWithFull, SizesWithNone, Transition } from "../../../types";

interface Props {
	centered?: boolean;
	maxWidth?: SizesWithFull;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
	shadow?: Shadow;
	transitionType?: Transition;
	transitionDuration?: SizesWithNone;
}
export const modalStyles = ({
	centered,
	maxWidth,
	padding,
	rounded,
	shadow = "xl",
	transitionType = "slideBottom",
	transitionDuration = "md",
}: Props): string => {
	const layout = `flex flex-col gap-4 relative    w-full bg-white dark:bg-gray-800 dark:ring-gray-700 dark:text-gray-200   justify-center  shadow-2xl   md:max-w-3xl `;

	const base = ` ${layout}`;
	const transitionClass = applyTransition({
		transition: transitionType,
		duration: transitionDuration,
	});
	const shadowClass = applyShadow(shadow);
	const centeredClass = applyCentered(centered);
	const alignedClass = applyAlignCenter(centered);
	const maxWidthClass = applyMaxWidth(maxWidth);
	const paddingClass = applySamePadding(padding);
	const roundedClass = applyRoundedLarge(rounded);

	return `${base} ${centeredClass} ${alignedClass} ${maxWidthClass} ${paddingClass} ${roundedClass} ${shadowClass} ${transitionClass}`;
};

interface Props {
	centered?: boolean;
}
export const closeButton = ({ centered }: Props) => {
	const notCentered = "absolute right-4 top-4";
	const centeredClass = "relative ";

	return centered ? centeredClass : notCentered;
};
