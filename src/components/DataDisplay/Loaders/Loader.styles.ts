import { Sizes } from "../../../types";

export const spinnerStyled = (size?: Sizes) => {
	switch (size) {
		case "xs":
			return "h-2 w-2";
		case "sm":
			return "h-5 w-5";
		case "md":
			return "h-10 w-10";
		case "lg":
			return "h-16 w-16";
		case "xl":
			return "h-20 w-20";
		default:
			return "h-10 w-10";
	}
};
