import React from "react";
import { checkIconBySize, checkboxContainer, roundedBySize } from "./Checkbox.styles";
import { Icon } from "../../Base/Icon";
import { Transition } from "@headlessui/react";

interface Props {
	label?: string;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	color?: string;
	checkIcon?: React.JSX.Element | string;
	className?: string;
	name?: string;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Checkbox: React.FC<Props> = ({
	label,
	value,
	onChange,
	disabled = false,
	errorMessage,
	checkIcon = "check",
	className,
	name,
	size = "md",
}) => {
	const handleChange = (event: { target: { checked: boolean } }) => {
		if (onChange) {
			onChange(event.target.checked);
		}
	};

	return (
		<div
			className={
				checkboxContainer({
					disabled,
				}) + className
			}
		>
			<div
				className={`relative aspect-square flex items-center justify-center text-primary overflow-hidden 
				
				
				${size === "xs" && "h-3 "}
				${size === "sm" && "h-4  "}
				${size === "md" && "h-5  "}
				${size === "lg" && "h-8  "}
				${size === "xl" && "h-12  "}
				
				
				${roundedBySize({ size })}
				`}
			>
				<input
					name={name}
					type="checkbox"
					checked={value}
					onChange={handleChange}
					disabled={disabled}
					className={`
					transition-all duration-100 w-full h-full  appearance-none bg-gray-300 cursor-pointer
					
					checked:bg-accent  
					
					disabled:bg-gray-300 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
					
					active:brightness-90 active:checked:brightness-90
					
					focus:ring-4 focus:ring-primary focus:ring-inset focus:ring-opacity-50
					
				${roundedBySize({ size })}
				 `}
				/>
				<Transition
					className={` ${checkIconBySize({ size })}`}
					show={value}
					enter="transition-all duration-200"
					enterFrom="translate-y-8"
					enterTo="translate-y-0"
					leave="transition-all duration-200"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-8"
				>
					<Icon icon={checkIcon} />
				</Transition>
			</div>

			<span className="text-gray-700">{label}</span>

			{errorMessage && <span className="text-red-500">{errorMessage}</span>}
		</div>
	);
};

export default Checkbox;
