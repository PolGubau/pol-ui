import React, { useMemo } from "react";
import { checkboxContainer } from "./Checkbox.styles";
import { Icon } from "../../Icon";
import { Transition } from "@headlessui/react";

interface Props {
	label?: string;
	value: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	errorMessage?: string;
	color?: string;
	checkIcon?: React.JSX.Element;
	className?: string;
}

const Checkbox: React.FC<Props> = ({
	label,
	value,
	onChange,
	disabled = false,
	errorMessage,
	checkIcon = "check",
	className,
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
			<div className="w-4 h-4 relative flex items-center justify-center  rounded-md text-primary overflow-clip">
				<input
					type="checkbox"
					checked={value}
					onChange={handleChange}
					disabled={disabled}
					className="
					transition-all duration-100 rounded-md w-4 h-4 aspect-square appearance-none bg-gray-300 cursor-pointer
					
					checked:bg-accent  
					
					disabled:bg-gray-300 disabled:border-transparent disabled:ring-0 disabled:ring-transparent
					
					active:brightness-90 active:checked:brightness-90
					
					focus:ring-8 focus:ring-primary focus:ring-inset focus:ring-opacity-50
					

				 "
				/>
				<Transition
					className={`absolute pointer-events-none`}
					show={value}
					enter="transition-all duration-200"
					enterFrom="translate-y-4"
					enterTo="translate-y-0"
					leave="transition-all duration-200"
					leaveFrom="translate-y-0"
					leaveTo="-translate-y-4"
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
