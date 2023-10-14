import React from "react";
import { Colors, IconType, PaddingOneOrBothValues, Sizes, SizesComplete } from "../../../types";
import { Icon } from "../../Base";
import { Text } from "../../Text";
import { applyBgColor, applyPadding, applyRounded } from "../../../style";
interface Props {
	label?: string;
	value: string;
	icon?: IconType;
	onClick?: () => void;
	padding?: PaddingOneOrBothValues;
	rounded?: SizesComplete;

	labelClassName?: string;
	valueClassName?: string;
	iconClassName?: string;
}
const Datacard: React.FC<Props> = ({
	label,
	value,
	icon,
	onClick,
	padding = Sizes.md,
	rounded = Sizes.lg,
	labelClassName = "",
	valueClassName = "",
	iconClassName = "",
}) => {
	return (
		<div
			className={`flex gap-3 items-center justify-center w-fit p-2 pr-4  bg-transparent transition-all duration-200 ease-in-out
        ${onClick && "cursor-pointer hover:shadow-lg hover:bg-background-inverted/10"}
                            ${applyRounded(rounded)}
        `}
			onClick={onClick}
		>
			{icon && (
				<div
					className={`flex h-full flex-col gap-2 justify-center  bg-opacity-50 items-center  aspect-square w-full
                    ${applyBgColor(Colors.accent)}
            		${applyPadding(padding)}
                    ${applyRounded(rounded)}
                    
                    ${iconClassName}
                    
                    `}
				>
					<Icon size="xl" className="scale-150" icon={icon} />
				</div>
			)}

			<div className="flex flex-col justify-center">
				{label && (
					<Text
						as="span"
						color="primary"
						value={label}
						className={`text-sm truncate  ${labelClassName}`}
					/>
				)}
				{value && (
					<Text color="accent" value={value} className={`truncate text-2xl ${valueClassName}`} />
				)}
			</div>
		</div>
	);
};

export default Datacard;