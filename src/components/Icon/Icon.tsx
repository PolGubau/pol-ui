import { ColorTypes, Sizes } from "../../common";
import { getIcon } from "../../utils";
import { iconStyles } from "./Icon.styles";
import { IconType } from "./types.d";

interface IconProps {
	icon: IconType;
	color?: ColorTypes;
	size?: Sizes;
	className?: string;
	id?: string;
	alwaysRender?: boolean;
}

const Icon = ({ icon, color, size, className, id, alwaysRender }: IconProps) => {
	const getStringIcon = (icon: string) => {
		return getIcon(icon) ?? alwaysRender ? icon : null;
	};

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;
	return (
		<div role="img" id={id} className={`${iconStyles({ size, color })} ${className}`}>
			{resultIcon}
		</div>
	);
};
export default Icon;
