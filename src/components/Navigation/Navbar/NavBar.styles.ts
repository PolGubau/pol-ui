import { applyPadding, applyShadow } from "../../../style";
import { Shadow, SizesWithNone } from "../../../types";

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
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
}
export const navbar = ({
	position = "relative",
	shadow = "md",
	padding = { x: "sm", y: "sm" },
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
