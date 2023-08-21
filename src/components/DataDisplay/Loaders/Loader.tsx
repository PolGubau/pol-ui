import React from "react";
import { ColorTypes, Sizes } from "../../../common";
import { spinnerStyled } from "./Loader.styles";
import { Dots, Bars, Pulse } from "./Loaders";
import Spinner from "./Loaders/Spinner/Spinner";

interface LoaderProps {
	type?: "spinner" | "dots" | "bars" | "pulse";
	size?: Sizes;
	variant?: ColorTypes;
}

const Loader: React.FC<LoaderProps> = ({ type = "spinner", variant, size }) => {
	switch (type) {
		case "pulse":
			return <Pulse className={spinnerStyled({ size })} variant={variant ?? "accent"} />;
		case "bars":
			return <Bars size={size} variant={variant ?? "accent"} amount={3} />;
		case "dots":
			return <Dots size={size} variant={variant ?? "accent"} amount={3} />;

		default:
			return (
				<Spinner
					className={spinnerStyled({ size })}
					size={size ?? "md"}
					variant={variant ?? "accent"}
				/>
			);
	}
};

export default Loader;
