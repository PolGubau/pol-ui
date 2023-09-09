import React from "react";
import { applyAspectRatio, applyRounded } from "../../../style";
import { AspectRatios, SizesComplete } from "../../../types";
interface Props {
	src: string;
	alt: string;
	renderOnError?: React.ReactNode;
	className?: string;
	height?: string;
	width?: string;
	rounded?: SizesComplete;
	aspectRatio?: AspectRatios;
}

const Image: React.FC<Props> = ({
	src,
	alt,
	className,
	width = "100px",
	height = "100px",
	rounded = "none",
	aspectRatio,
	renderOnError = (
		<span
			className={`aspect-square flex items-center justify-center  ${applyAspectRatio(
				aspectRatio
			)} ${applyRounded(rounded)} ${className}`}
			style={{
				width,
				height,
			}}
		>
			{alt[0]}
		</span>
	),
}) => {
	const [hasError, setHasError] = React.useState(false);

	return (
		<div
			className={`w-fit h-fit inline-flex items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-700 object-cover ${applyAspectRatio(
				aspectRatio
			)} ${applyRounded(rounded)} ${className}`}
		>
			{hasError ? (
				renderOnError
			) : (
				<img height={height} width={width} src={src} alt={alt} onError={() => setHasError(true)} />
			)}
		</div>
	);
};

export default Image;
