interface Props {
	pointerPosition?: "top" | "bottom";
	vertical?: boolean;
}

export const pointerPB = ({ pointerPosition = "top", vertical = false }: Props) => {
	const base = `absolute p-1 transform -translate-x-1/2  w-8 h-5 z-10 bg-primary text-background dark:text-background-inverted text-xs flex items-center justify-center rounded-md animate-fade-in-down`;

	if (pointerPosition === "bottom") {
		return `${base} -bottom-5`;
	}

	if (vertical) return `${base} left-1/2 -top-5`;

	return `${base} -top-5`;
};
export const arrowPointerPB = ({ pointerPosition = "top", vertical = false }: Props) => {
	const base = `absolute  transform  -translate-x-1/2  w-3 h-3 z-10 rotate-45 bg-primary text-white text-xs flex items-center justify-center rounded-none`;

	if (pointerPosition === "bottom") {
		return `${base} -bottom-2`;
	}
	if (vertical) return `${base} left-1/2 -top-2`;

	return `${base} -top-2`;
};
