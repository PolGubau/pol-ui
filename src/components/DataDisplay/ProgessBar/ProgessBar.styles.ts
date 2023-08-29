import { Sizes } from "../../../types";

export const backgroundBar = ({ size }: { size: Sizes }) => {
	const baseStyles =
		" bg-primary/10   w-full relative  outline-2  max-w-full transition-all duration-300 ease-in-out";
	switch (size) {
		case "xs":
			return `${baseStyles} h-2`;
		case "sm":
			return `${baseStyles} h-4`;

		case "lg":
			return `${baseStyles} h-8`;
		case "xl":
			return `${baseStyles} h-12`;
		default:
			return `${baseStyles} h-6`;
	}
};
