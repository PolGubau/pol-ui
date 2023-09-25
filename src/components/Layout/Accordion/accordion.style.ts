interface Props {
	hasDividers?: boolean;
	hasBorder?: boolean;
}

export const accordionStyles = ({ hasBorder = true }: Props) => {
	const base = "flex flex-col w-full min-w-md overflow-hidden ";
	const border = hasBorder ? "border " : "border-none";
	return `${base}  ${border}`;
};
