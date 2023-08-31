import icons from "../../model/icons.model";

export const getIcon = (name: string): React.ReactNode | null => {
	const icon = icons.find((icon) => icon.name.toLowerCase() === name.toLowerCase()) ?? null;
	return icon?.icon;
};
