import { Sizes } from "../../../types";

export const applyAvatarSizes = (size?: Sizes) => {
	switch (size) {
		case "xs":
			return `w-4 max-h-4`;
		case "sm":
			return `w-6 max-h-6`;
		case "lg":
			return `w-10 max-h-10`;
		case "xl":
			return `w-12 max-h-12`;
		default:
			return `w-8 max-h-8`;
	}
};
