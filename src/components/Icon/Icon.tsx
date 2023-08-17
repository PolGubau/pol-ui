import { getIcon } from "../../utils";
import { IconType } from "./types.d";

export type colorTypes = "neutral" | "success" | "danger" | "main";
interface IconProps {
	icon: IconType;
	color?: colorTypes;
	size?: string;
	className?: string;
	id?: string;
}

const Icon = ({ icon, color, size, className, id }: IconProps) => {
	const resultIcon = typeof icon === "string" ? getIcon(icon) : icon;
	return (
		<div
			role="img"
			style={{ fontSize: size }}
			id={id}
			className={`
			${color === "neutral" ? "text-primary" : ""}
			${color === "success" ? "text-green-500" : ""}
			${color === "danger" ? "text-red-500" : ""}
			${color === "main" ? "text-accent" : ""}
		${className}`}
		>
			{resultIcon}
		</div>
	);
};
export default Icon;
