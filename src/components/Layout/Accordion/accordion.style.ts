interface Props {
	hasDividers?: boolean;
	hasBorder?: boolean;
}

export const accordionStyles = ({ hasDividers = true, hasBorder = true }: Props) => {
	const base = "flex flex-col overflow-hidden w-full";
	const divider = hasDividers ? "divide-y" : "divide-none";
	const border = hasBorder ? "border border-gray-200 dark:border-gray-700" : "border-none";
	return `${base} ${divider} ${border}`;
};
