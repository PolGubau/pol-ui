import { IconData } from "../../components";
import icons from "../../model/icons.model";

export const getIcon = (name: string, iconList?: IconData[]) => {
	const allIcons = iconList ?? icons;
	const icon = allIcons.find((icon) => icon.name.toLowerCase() === name.toLowerCase());
	return icon?.icon ?? null;
};
