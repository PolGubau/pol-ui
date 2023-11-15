export const copyToClipboard = (text: string | number): void => {
	const toCopy = text.toString();
	void navigator.clipboard.writeText(toCopy);
};
