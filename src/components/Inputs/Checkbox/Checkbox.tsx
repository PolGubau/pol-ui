import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import {
	applyBgColorInChecked,
	applyColor,
	applyDisabled,
	applyRounded,
	applyTextSize,
} from "../../../style";
import { Color, Colors, IconType, Identifier, Size, Sizes, SizesComplete } from "../../../types";
import { Text } from "../../Text";

interface Props {
	label?: Identifier;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	color?: Color;
	checkIcon?: IconType;
	className?: string;
	name?: string;
	iconColor?: Color;
	size?: Size;
	rounded?: SizesComplete;
}

const Checkbox: React.FC<Props> = ({
	label,
	value,
	onChange,
	disabled = false,
	errorMessage,
	color = Colors.accent,
	checkIcon = IconNames.check,
	iconColor = Colors.background,
	className,
	name,
	rounded = Sizes.sm,
	size = Sizes.md,
}) => {
	const [isSelected, setIsSelected] = React.useState<boolean>(value);
	const handleChange = (event: { target: { checked: boolean } }) => {
		setIsSelected((prev) => !prev);
		if (onChange) {
			onChange(event.target.checked);
		}
	};

	return (
		<div
			className={`
			   space-x-2 text-black flex  text-sm items-center cursor-pointer
			${applyDisabled(disabled)}
			${className ?? ""}
			`}
		>
			<div
				className={`relative aspect-square flex items-center justify-center text-primary overflow-hidden 
				
				
				${size === "xs" && "h-3"}
				${size === "sm" && "h-4"}
				${size === "md" && "h-5"}
				${size === "lg" && "h-8"}
				${size === "xl" && "h-12"}
				
				${applyRounded(rounded ?? size)}
 				`}
			>
				<input
					name={name}
					type="checkbox"
					checked={isSelected}
					onChange={handleChange}
					disabled={disabled}
					className={`
					transition-all duration-100 w-full h-full  appearance-none  cursor-pointer  focus:scale-90 
					
					
					bg-background-inverted/30 dark:bg-background/30   
					
					${applyBgColorInChecked(color)}
					
					
					
   					disabled:bg-primary/10 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
 				${applyRounded(rounded ?? size)}
				 `}
				/>
				<Transition
					className={`text-primary absolute transition-all duration-100 user-select-none pointer-events-none ${applyTextSize(
						size
					)} `}
					show={isSelected}
					enter="transition-all duration-200"
					enterFrom="translate-y-8"
					enterTo="translate-y-0"
					leave="transition-all duration-200"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-8"
				>
					<Icon icon={checkIcon} color={iconColor} />
				</Transition>
			</div>

			{label && <Text onClick={handleChange}>{label?.toString()}</Text>}

			{errorMessage && (
				<Text size={12} className={applyColor(Colors.danger)}>
					{errorMessage}
				</Text>
			)}
		</div>
	);
};

export default Checkbox;
