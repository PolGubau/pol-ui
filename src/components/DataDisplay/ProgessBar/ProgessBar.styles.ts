import { Size } from "../../../types";

export const backgroundBar = ({ size, vertical }: { size: Size; vertical: boolean }) => {
	const baseStyles = ` relative  outline-2  transition-all duration-300 ease-in-out
	
	${vertical ? " max-h-full min-h-[60px]" : "w-full max-w-full min-w-[60px] "}
	
	`;

	switch (size) {
		case "xs":
			return `${baseStyles} ${vertical ? "w-2" : "h-2"} `;
		case "sm":
			return `${baseStyles}  ${vertical ? "w-4" : "h-4"}`;

		case "lg":
			return `${baseStyles}  ${vertical ? "w-8" : "h-8"}`;
		case "xl":
			return `${baseStyles}  ${vertical ? "w-12" : "h-12"}`;
		default:
			return `${baseStyles}   ${vertical ? "w-6" : "h-6"}`;
	}
};
