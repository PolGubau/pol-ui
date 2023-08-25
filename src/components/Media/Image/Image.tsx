import React from "react";
import { imageStyle } from "./image.styles";
import { Rounded } from "../../../types";
interface Props {
	src: string;
	alt: string;
	renderOnError?: React.ReactNode;
	className?: string;
	height?: string;
	width?: string;
	rounded?: Rounded;
	aspectRatio?: "1/1" | "4/3" | "16/9" | "9/16" | "3/4" | "8/5";
}

const Image: React.FC<Props> = ({
	src,
	alt,
	renderOnError = (
		<span className="w-[100px] aspect-square flex items-center justify-center">{alt[0]}</span>
	),
	className,
	width = "100px",
	height = "100px",
	rounded,
	aspectRatio,
}) => {
	const [hasError, setHasError] = React.useState(false);

	return (
		<div className={`${imageStyle({ rounded, aspectRatio })} ${className}`}>
			{hasError ? (
				renderOnError
			) : (
				<img height={height} width={width} src={src} alt={alt} onError={() => setHasError(true)} />
			)}
		</div>
	);
};

export default Image;
