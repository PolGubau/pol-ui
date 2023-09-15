import { applyColor, applyTextSize } from "../../../style";
import { ColorType, Size } from "../../../types";
import { getIcon } from "../../../utils";
import { IconType } from "./types";

interface IconProps {
	icon: IconType;
	color?: ColorType;
	size?: Size;
	className?: string;
	id?: string;
	alwaysRender?: boolean;
}

const Icon = ({ icon, color, size, className, id, alwaysRender }: IconProps) => {
	const getStringIcon = (icon: string): React.ReactNode => {
		const iconResult = getIcon(icon);
		if (!iconResult) {
			return alwaysRender ? icon : null;
		}
		return iconResult;
	};

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;

	return (
		<div role="img" id={id} className={`${applyTextSize(size)} ${applyColor(color)}  ${className}`}>
			{resultIcon}
		</div>
	);
};
export default Icon;
