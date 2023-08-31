import { applyColor, applyTextSize } from "../../../style";
import { ColorTypes, Sizes } from "../../../types";
import { getIcon } from "../../../utils";
import { IconType } from "./types";

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
		const iconResult = getIcon(icon);
		if (iconResult === null) {
			return alwaysRender ? icon : null;
		}
		return iconResult;
	};

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;
	return (
		<div
			role="img"
 			id={id}
			className={`${applyTextSize(size)} ${applyColor(color)}  ${className}`}
		>
			{resultIcon}
		</div>
	);
};
export default Icon;
