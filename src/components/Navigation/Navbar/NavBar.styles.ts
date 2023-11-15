import { applyPadding, applyShadow } from "../../../style";
import { PaddingOneOrBothValues, Shadow, Sizes } from "../../../types";

interface Props {
	position:
		| "fixed"
		| "relative"
		| "absolute"
		| "sticky"
		| "static"
		| "inherit"
		| "initial"
		| "unset";

	className?: string;
	shadow?: Shadow;
	padding?: PaddingOneOrBothValues;
}
export const navbar = ({
	position = "relative",
	shadow = Sizes.md,
	padding = { x: Sizes.sm, y: Sizes.sm },
	className,
}: Props) => {
	const base = "w-full h-16 flex justify-between items-center p-4";
	const positions = {
		fixed: "fixed top-0 left-0 w-full",
		relative: "relative",
		absolute: "absolute",
		sticky: "sticky top-0 left-0 w-full",
		static: "static",
		inherit: "inherit",
		initial: "initial",
		unset: "unset",
	};

	return `${base} ${positions[position]} ${applyPadding(padding)} ${applyShadow(shadow)}${
		className ?? ""
	}`;
};
