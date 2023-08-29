import { TbLoader2 } from "react-icons/tb";
import { ColorTypes, Sizes } from "../../../../../types";
import { applyColor } from "../../../../../style";
import { Icon } from "../../../../Base/Icon";

const Spinner = ({
	className,
	size,
	color,
}: {
	className: string;
	size: Sizes;
	color: ColorTypes;
}) => {
	return (
		<div className={`flex justify-center items-center w-fit scale-150 ${applyColor(color)}`}>
			<Icon
				icon={<TbLoader2 />}
				size={size}
				color={color}
				className={`w-fit h-fit   animate-spin animate-infinite animate-duration-[1400ms] animate-ease-in-out animate-fill-forwards ${className}`}
			/>
		</div>
	);
};

export default Spinner;
