import React from "react";
import { Text } from "../../Text";

interface Props {
	label?: string;
	checked?: boolean;
	onChange?: (value: boolean) => void;
	error?: string;
	className?: string;
	disabled?: boolean;
	size?: "small" | "normal" | "large";
}

export const Switch: React.FC<Props> = ({
	label,
	checked = false,
	onChange,
	disabled,
	error,
	className,
	size = "normal",
}) => {
	const [isChecked, setIsCheck] = React.useState(checked);

	const toggleSwitch = () => {
		setIsCheck(!isChecked);
		onChange?.(!isChecked);
	};
	const toggleTrue = () => {
		setIsCheck(true);
		onChange?.(true);
	};
	const toggleFalse = () => {
		setIsCheck(false);
		onChange?.(false);
	};

	return (
		<div className={`flex gap-3 items-center`}>
			<input
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						toggleSwitch();
					} else if (e.key === " ") {
						toggleSwitch();
					}
					// if arrow Left or arrow Right is pressed toggle the switch on or off
					else if (e.key === "ArrowLeft") {
						if (isChecked) toggleFalse();
					} else if (e.key === "ArrowRight") {
						if (!isChecked) toggleTrue();
					}
				}}
				role="switch"
				disabled={disabled}
				checked={isChecked}
				onChange={toggleSwitch}
				className={`
				flex
				items-center
				p-1
				h-fit 
				w-10 
				${size === "small" ? "w-9" : ""}
				${size === "large" ? "w-12" : ""}
				appearance-none 
				rounded-full
				
				
				before:pointer-events-none 
				before:h-0 
				before:w-0
				before:rounded-full 
 				before:content-[''] 
				
 				after:z-[2] 
 				after:h-5 
				after:w-5 
				${size === "small" ? "after:h-4 after:w-4" : ""}
				${size === "large" ? "after:h-6 after:w-6" : ""}
				after:rounded-full 
				after:border-none 
				after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
				after:transition-[background-color_0.2s,transform_0.2s] 
				after:content-[''] 
				
 				checked:after:z-[2] 
 				checked:after:ml-[0.8rem] 
 				${size === "large" ? "checked:after:ml-[1rem] " : ""}
			 
				checked:after:rounded-full 
				checked:after:border-none 
				checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
				checked:after:transition-[background-color_0.2s,transform_0.2s] 
				checked:after:content-[''] 
				transition-all
				hover:cursor-pointer 
				focus:outline-none 
				focus:ring-accent
				focus:ring-2
				disabled:opacity-50
				disabled:cursor-not-allowed
				
				
				bg-primary/30
				after:bg-background
				
				checked:bg-accent/60
				checked:after:bg-primary

				
				dark:bg-background/30
				dark:after:bg-primary-inverted
				dark:checked:bg-accent 
				dark:checked:after:bg-primary 
				
				
				${error ? "ring-danger ring-2" : ""}
				
				 ${className}`}
				type="checkbox"
				id="flexSwitchCheckDefault"
			/>
			{label && (
				<Text
					role="heading"
					as="label"
					aria-level={4}
					className={`
					${disabled ? "text-neutral-400 hover:cursor-not-allowed" : "text-primary hover:cursor-pointer "}
					${size === "small" ? "text-sm" : ""}
					${size === "large" ? "text-lg" : ""}
					${error ? "text-danger" : ""}`}
					htmlFor="flexSwitchCheckDefault"
					value={label}
				/>
			)}
			{error && <small className="text-danger">{`(${error})`}</small>}
		</div>
	);
};
