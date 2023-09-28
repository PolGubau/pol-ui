import React from "react";
import { Icon } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import { applyBgColorInChecked, applyColor, applyDisabled, applyTextSize } from "../../../style";
import { Color, Colors, IconType, Size, Sizes } from "../../../types";
import { Text } from "../../Text";

interface Props {
	label?: string;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	colorChecked?: Color;
	iconColor?: Color;
	checkIcon?: IconType;
	className?: string;
	name?: string;
	size?: Size;
}

const Radio: React.FC<Props> = ({
	label,
	value,
	onChange,
	disabled = false,
	errorMessage,
	checkIcon = "check",
	className,
	name,
	colorChecked = Colors.accent,
	iconColor = Colors.background,
	size = Sizes.md,
}) => {
	const [isSelected, setIsSelected] = React.useState<boolean>(value);

	const handleChange = (event: any) => {
		setIsSelected((prev) => !prev);

		if (onChange) {
			onChange(event.target.checked);
		}
	};
	console.log(isSelected);
	return (
		<div
			className={`inline-flex items-center gap-2   cursor-pointer ${applyDisabled(
				disabled
			)} ${className}`}
		>
			<div
				className={`relative aspect-square flex items-center justify-center text-primary overflow-hidden   rounded-full 
 
				${size === Sizes.xs && "h-3 "}
				${size === Sizes.sm && "h-4  "}
				${size === Sizes.md && "h-5  "}
				${size === Sizes.lg && "h-8  "}
				${size === Sizes.xl && "h-12  "}
				`}
			>
				<input
					name={name}
					type="radio"
					checked={isSelected}
					onClick={handleChange}
					disabled={disabled}
					className={`
					transition-all   w-full h-full  appearance-none bg-background-inverted/20 dark:bg-background/20      rounded-full
 					
 					${applyBgColorInChecked(colorChecked)}
					
					disabled:bg-primary/30 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
					
 				transition-all focus:scale-90
				hover:cursor-pointer 
				
				disabled:opacity-50
				disabled:cursor-not-allowed
				  
					
 				 `}
				/>
				<Transition
					show={isSelected}
					enter="transition-all duration-200"
					enterFrom="translate-y-8"
					enterTo="translate-y-0"
					leave="transition-all duration-200"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-8"
					className={`flex justify-center items-center absolute transition-all duration-100 user-select-none pointer-events-none ${applyTextSize(
						size
					)}   ring-accent rounded-full`}
				>
					<button
						className={` ring-accent focus:outline-none 
				focus:ring-accent
				dark:focus:ring-accent-inverted
				focus:ring-2 rounded-full`}
					>
						<Icon icon={checkIcon} color={iconColor} />
					</button>
				</Transition>
			</div>
			{label && <Text onClick={handleChange}>{label}</Text>}
			{errorMessage && (
				<Text size={12} className={applyColor(Colors.danger)}>
					{errorMessage}
				</Text>
			)}
		</div>
	);
};

export default Radio;
