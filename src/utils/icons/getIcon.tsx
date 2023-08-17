import icons from "../../components/Icon/model/icons";

export const getIcon = (name: string) => {
	const icon = icons.find((icon) => icon.name.toLowerCase() === name.toLowerCase());
	return icon?.icon ?? null;
};
