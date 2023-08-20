import React from "react";
import { imageStyle } from "./image.styles";
interface Props {
	src: string;
	alt: string;
	renderOnError?: React.ReactNode;
	className?: string;
	height?: string;
	width?: string;
	rounded?: "circular" | "square" | "rounded";
}

const Image: React.FC<Props> = ({
	src,
	alt,
	renderOnError = <span>{alt[0]}</span>,
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
