import React from "react";

//

export const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

//

interface Props {
	label?: string;
	name?: string;
	checked?: boolean;
	onChange?: (value: boolean) => void;
	error?: string;
	className?: string;
	disabled?: boolean;
	helperText?: string;
	size?: "small" | "normal" | "large";
}

export const Switch: React.FC<Props> = ({
	label,
	checked = false,
	onChange,
	disabled,
	error,
	helperText,
	className,
	size = "normal",
}) => {
	const toggleSwitch = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onChange?.(!checked);
	};

	return (
		<div className={`flex gap-3 ${className} items-center `} onClick={toggleSwitch}>
			<input
				checked={checked}
				className={`
				flex
				items-center
				p-1
				h-fit 
				w-10 
				${size === "small" ? "w-8" : ""}
				${size === "large" ? "w-12" : ""}
				appearance-none 
				rounded-full
				bg-neutral-500 
				
				
				before:pointer-events-none 
				before:h-3.5 
				before:w-3.5 
				before:rounded-full 
			
				before:content-[''] 
				
 				after:z-[2] 
 				after:h-5 
				after:w-5 
				after:rounded-full 
				after:border-none 
				after:bg-neutral-100 
				after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
				after:transition-[background-color_0.2s,transform_0.2s] 
				after:content-[''] 
				
				checked:bg-accent 
 				checked:after:z-[2] 
				checked:after:-mt-[3px] 
				checked:after:ml-[1.0625rem] 
				checked:after:h-5 
				checked:after:w-5 
				checked:after:rounded-full 
				checked:after:border-none 
				checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
				checked:after:transition-[background-color_0.2s,transform_0.2s] 
				checked:after:content-[''] 
				
				hover:cursor-pointer 
				focus:outline-none 
				
				focus:ring-0 
				focus:before:scale-100 
				focus:before:opacity-[0.12] 
				focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
				focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
				focus:after:absolute 
				focus:after:z-[1] 
				focus:after:block 
				focus:after:h-6 
				focus:after:w-6 
				focus:after:rounded-full 
				focus:after:content-[''] 
				
				checked:focus:border-primary 
				checked:focus:bg-primary 
				checked:focus:before:ml-[1.0625rem] 
				checked:focus:before:scale-100 
				checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
				checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
				
				disabled:opacity-50
				
				dark:bg-neutral-600 
				dark:after:bg-neutral-400 
				dark:checked:bg-primary 
				dark:checked:after:bg-primary 
				dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
				dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
			/>
			{label && (
				<label
					className={`inline-block pl-[0.15rem] hover:cursor-pointer ${
						error ? "text-red-400" : ""
					}`}
					htmlFor="flexSwitchCheckDefault"
				>
					{label}
				</label>
			)}
		</div>
	);
};
