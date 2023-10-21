import React from "react";
import { Color, Colors } from "../../../types";
import { Dots, Bars, Pulse } from "./Loaders";
import Spinner from "./Loaders/Spinner/Spinner";
import { LightSaber } from "./Loaders/LightSaber";

interface LoaderProps {
	type?: "spinner" | "dots" | "bars" | "pulse" | "lightSaber";
	size?: number;
	color?: Color;
	className?: string;
	animationDuration?: number;
	colors?: string[];
}

const Loader: React.FC<LoaderProps> = ({
	type = "spinner",
	color,
	size = 35,
	className = "",
	animationDuration = 2,
	colors = ["#ff4", "#4f4", "#44f", "#f44"],
}) => {
	switch (type) {
		case "pulse":
			return (
				<Pulse
					style={{
						width: size,
						height: size,
					}}
					color={color ?? Colors.accent}
				/>
			);
		case "bars":
			return <Bars size={size} color={color ?? Colors.accent} amount={3} />;
		case "dots":
			return <Dots className={className} animationDuration={animationDuration} colors={colors} />;
		case "lightSaber":
			return <LightSaber size={size} color={color ?? Colors.accent} amount={3} />;

		default:
			return <Spinner size={size} color={color ?? Colors.accent} />;
	}
};

export default Loader;
