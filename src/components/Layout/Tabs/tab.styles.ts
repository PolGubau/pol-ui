interface Props {
	hasDivider?: boolean;
	hasBorder?: boolean;
}

export const tabStyles = ({ hasDivider = true, hasBorder = true }: Props) => {
	const base = "flex flex-col ";

	const divider = hasDivider ? "divide-y divide-gray-200 dark:divide-gray-700" : "divide-none";

	const border = hasBorder ? "border border-gray-200 dark:border-gray-700" : "border-none";

	return `${base} ${divider} ${border}`;
};
