import React from "react";
import { Icon } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import { applyBgColorInChecked, applyDisabled, applyRounded, applyTextSize } from "../../../style";
import { ColorTypes, Identifier, Sizes, SizesComplete } from "../../../types";

interface Props {
	label?: Identifier;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	color?: ColorTypes;
	checkIcon?: React.JSX.Element | string;
	className?: string;
	name?: string;
	iconColor?: ColorTypes;
	size?: Sizes;
	rounded?: SizesComplete;
}

const Checkbox: React.FC<Props> = ({
	label,
	value,
	onChange,
	disabled = false,
	errorMessage,
	color = "accent",
	checkIcon = "check",
	iconColor = "contrast",
	className,
	name,
	rounded,
	size = "md",
}) => {
	const handleChange = (event: { target: { checked: boolean } }) => {
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
					checked={value}
					onChange={handleChange}
					disabled={disabled}
					className={`
					transition-all duration-100 w-full h-full  appearance-none  cursor-pointer bg-primary/10 ring-0 ring-transparent 
					${applyBgColorInChecked(color)}
   					disabled:bg-primary/10 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
					active:brightness-90 active:checked:brightness-90
					focus:brightness-75
				${applyRounded(rounded ?? size)}
				 `}
				/>
				<Transition
					className={`text-primary absolute transition-all duration-100 user-select-none pointer-events-none ${applyTextSize(
						size
					)} `}
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

			<span className="text-primary/80">{label}</span>

			{errorMessage && <span className="text-danger">{errorMessage}</span>}
		</div>
	);
};

export default Checkbox;
