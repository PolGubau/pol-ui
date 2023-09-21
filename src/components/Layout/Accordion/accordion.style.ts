interface Props {
	hasDividers?: boolean;
	hasBorder?: boolean;
}

export const accordionStyles = ({ hasDividers = true, hasBorder = true }: Props) => {
	const base = "flex flex-col  w-full min-w-md";
	const divider = hasDividers ? "divide-y" : "divide-none";
	const border = hasBorder ? "border " : "border-none";
	return `${base} ${divider} ${border}`;
};
