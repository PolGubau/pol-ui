import React from "react";
import { Color, Colors, LoaderType, LoaderTypes } from "../../../types";
import { Dots, Pulse } from "./Loaders";
import Spinner from "./Loaders/Spinner/Spinner";
import { LightSaber } from "./Loaders/LightSaber";

interface LoaderProps {
	type?: LoaderType;
	size?: number;
	color?: Color;
	className?: string;
	animationDuration?: number;
	colors?: string[];
}

const Loader: React.FC<LoaderProps> = ({
	type = LoaderTypes.Spinner,
	color,
	size = 20,
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

		case LoaderTypes.Dots:
			return <Dots className={className} animationDuration={animationDuration} colors={colors} />;
		case LoaderTypes.LightSaber:
			return <LightSaber size={size} color={color ?? Colors.accent} amount={3} />;

		default:
			return <Spinner size={size} color={color ?? Colors.accent} />;
	}
};

export default Loader;
