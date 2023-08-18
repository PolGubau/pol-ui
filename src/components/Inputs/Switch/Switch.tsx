import React from "react";

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
	const toggleSwitch = () => {
		onChange?.(!checked);
	};

	return (
		<div className={`flex gap-3  items-center`}>
			<input
				role="switch"
				disabled={disabled}
				defaultChecked={checked}
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
				bg-neutral-500 
				
				
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
				after:bg-neutral-100 
				after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
				after:transition-[background-color_0.2s,transform_0.2s] 
				after:content-[''] 
				
				checked:bg-accent/60
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
				focus:ring-4
				active:outline-none 
 				active:ring-accent/50
				active:ring-4
				disabled:opacity-50
				disabled:cursor-not-allowed
				dark:bg-neutral-600 
				dark:after:bg-neutral-400 
				dark:checked:bg-primary 
				dark:checked:after:bg-primary 
				 ${className}`}
				type="checkbox"
				id="flexSwitchCheckDefault"
			/>
			{label && (
				<label
					role="heading"
					onClick={toggleSwitch}
					aria-level={4}
					className={`
					hover:cursor-pointer 
					
					${disabled ? "text-neutral-400 hover:cursor-not-allowed" : "text-primary hover:cursor-pointer "}
					${size === "small" ? "text-sm" : ""}
					${size === "large" ? "text-lg" : ""}
					${error ? "text-red-400" : ""}`}
					htmlFor="flexSwitchCheckDefault"
				>
					{label}
				</label>
			)}
			{error && <small className="text-red-400">{`(${error})`}</small>}
		</div>
	);
};
