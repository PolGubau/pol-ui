interface Props {
	hasDivider?: boolean;
	hasBorder?: boolean;
}

export const tabStyles = ({ hasDivider = true, hasBorder = true }: Props) => {
	const base = "flex flex-col ";

	const divider = hasDivider ? "divide-y divide-primary/30 dark:divide-gray-700" : "divide-none";

	const border = hasBorder
		? "border border-primary/30 dark:border-primary-inverted"
		: "border-none";

	return `${base} ${divider} ${border}`;
};
