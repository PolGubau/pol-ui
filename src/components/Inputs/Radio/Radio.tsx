import React from "react";
import { Icon } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import { applyBgColorInChecked, applyDisabled, applyRounded, applyTextSize } from "../../../style";
import { ColorTypes, Sizes, SizesComplete } from "../../../types";

interface Props {
	label?: string;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	colorChecked?: ColorTypes;
	iconColor?: ColorTypes;
	checkIcon?: React.JSX.Element | string;
	className?: string;
	name?: string;
	size?: Sizes;
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
	colorChecked = "accent",
	iconColor = "contrast",
	size = "md",
}) => {
	const handleChange = (event: { target: { checked: boolean } }) => {
		if (onChange) {
			onChange(event.target.checked);
		}
	};

	return (
		<div
			className={`inline-flex items-center space-x-2 text-contrast text-sm  cursor-pointer ${applyDisabled(
				disabled
			)} ${className}`}
		>
			<div
				className={`relative aspect-square flex items-center justify-center text-primary overflow-hidden   rounded-full
 
				${size === "xs" && "h-3 "}
				${size === "sm" && "h-4  "}
				${size === "md" && "h-5  "}
				${size === "lg" && "h-8  "}
				${size === "xl" && "h-12  "}
				`}
			>
				<input
					name={name}
					type="radio"
					checked={value}
					onChange={handleChange}
					disabled={disabled}
					className={`
					transition-all duration-100 w-full h-full  appearance-none bg-gray-300 cursor-pointer    rounded-full
 					
 					${applyBgColorInChecked(colorChecked)}
					
					disabled:bg-gray-300 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
					
					active:brightness-90 active:checked:brightness-90
					
					focus:ring-4 focus:ring-primary focus:ring-inset focus:ring-opacity-50
					
 				 `}
				/>
				<Transition
					className={`text-primary absolute transition-all duration-100 user-select-none pointer-events-none ${applyTextSize(
						size
					)}`}
					show={value}
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

			<span className="text-contrast">{label}</span>

			{errorMessage && <span className="text-red-500">{errorMessage}</span>}
		</div>
	);
};

export default Radio;
