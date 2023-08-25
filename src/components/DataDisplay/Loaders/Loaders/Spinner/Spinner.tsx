import { TbLoader2 } from "react-icons/tb";
import { ColorTypes, Sizes } from "../../../../../types";
import { textVariant } from "../../../../../style";
import { Icon } from "../../../../Icon";

const Spinner = ({
	className,
	size,
	variant,
}: {
	className: string;
	size: Sizes;
	variant: ColorTypes;
}) => {
	return (
		<div className={`flex justify-center items-center w-fit scale-150 ${textVariant({ variant })}`}>
			<Icon
				icon={<TbLoader2 />}
				size={size}
				color={variant}
				className={`w-fit h-fit   animate-spin animate-infinite animate-duration-[1400ms] animate-ease-in-out animate-fill-forwards ${className}`}
			/>
		</div>
	);
};

export default Spinner;
