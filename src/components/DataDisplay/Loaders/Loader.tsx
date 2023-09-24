import React from "react";
import { Color, Size } from "../../../types";
import { spinnerStyled } from "./Loader.styles";
import { Dots, Bars, Pulse } from "./Loaders";
import Spinner from "./Loaders/Spinner/Spinner";

interface LoaderProps {
	type?: "spinner" | "dots" | "bars" | "pulse";
	size?: Size;
	color?: Color;
}

const Loader: React.FC<LoaderProps> = ({ type = "spinner", color, size }) => {
	switch (type) {
		case "pulse":
			return <Pulse className={spinnerStyled(size)} color={color ?? "accent"} />;
		case "bars":
			return <Bars size={size} color={color ?? "accent"} amount={3} />;
		case "dots":
			return <Dots size={size} color={color ?? "accent"} amount={3} />;

		default:
			return (
				<Spinner className={spinnerStyled(size)} size={size ?? "md"} color={color ?? "accent"} />
			);
	}
};

export default Loader;
