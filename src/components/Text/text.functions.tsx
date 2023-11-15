export const shorterText = ({ value, maxLength }: { value: string; maxLength: number }): string => {
	if (value.length > maxLength) {
		return value.substring(0, maxLength) + "...";
	}
	return value;
};
