import React from "react";
import { imageStyle } from "./image.styles";
import { Rounded } from "../../../common";
interface Props {
	src: string;
	alt: string;
	renderOnError?: React.ReactNode;
	className?: string;
	height?: string;
	width?: string;
	rounded?: Rounded;
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
}) => {
	const [hasError, setHasError] = React.useState(false);

	return (
		<div className={`${imageStyle({ rounded })} ${className}`}>
			{hasError ? (
				renderOnError
			) : (
				<img height={height} width={width} src={src} alt={alt} onError={() => setHasError(true)} />
			)}
		</div>
	);
};

export default Image;
