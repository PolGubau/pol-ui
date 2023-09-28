import { applyColor, applyTextSize } from "../../../style";
import { Color, Size } from "../../../types";
import { getIcon } from "../../../utils";
 interface IconProps {
	icon: string | React.JSX.Element;
	color?: Color;
	size?: Size;
	className?: string;
	id?: string;
	alwaysRender?: boolean;
	style?: any;
}

const Icon = ({ icon, color, size, className, id, alwaysRender, style }: IconProps) => {
	const getStringIcon = (icon: string): React.ReactNode => {
		const iconResult = getIcon(icon);
		if (!iconResult) {
			return alwaysRender ? icon : null;
		}
		return iconResult;
	};

	const resultIcon = typeof icon === "string" ? getStringIcon(icon) : icon;

	return (
		<div
			role="img"
			id={id}
			className={`${applyTextSize(size)} ${applyColor(color)} 			
 ${className}`}
			style={style}
		>
			{resultIcon}
		</div>
	);
};
export default Icon;
