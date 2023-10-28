import React from "react";
import { BaseProps } from "../../../types";
interface Props extends BaseProps {
	onSubmit: () => void;
	children: React.ReactNode;
	direction?: "row" | "column";
}
const Form: React.FC<Props> = ({
	onSubmit,
	children,
	id,
	className,
	style,
	ariaLabel,
	direction,
}) => {
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (onSubmit) {
			onSubmit();
		}
	};

	return (
		<form
			className={`gap-4 flex ${direction === "row" ? "flex-row" : "flex-col"}  ${className}`}
			id={id}
			style={style}
			aria-label={ariaLabel}
			onSubmit={handleSubmit}
		>
			{children}
		</form>
	);
};

export default Form;
