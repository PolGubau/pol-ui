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
}

const Icon = ({ icon, color = "info", size, className, id }: IconProps) => {
	const resultIcon = typeof icon === "string" ? getIcon(icon) : icon;
	return (
		<div role="img" id={id} className={`${iconStyles({ size, color })} ${className}`}>
			{resultIcon}
		</div>
	);
};
export default Icon;
