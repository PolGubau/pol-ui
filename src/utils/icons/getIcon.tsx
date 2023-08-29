import { IconData } from "../../components";
import icons from "../../model/icons.model";

export const getIcon = (name: string, iconGroup: IconData[] = icons) => {
	const icon = iconGroup.find((icon) => icon.name.toLowerCase() === name.toLowerCase());
	return icon?.icon ?? null;
};
