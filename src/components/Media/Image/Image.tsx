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
	width = "100%",
	height = "100%",
	rounded = "none",
	aspectRatio,
	renderOnError = (
		<span
			className={`aspect-square flex items-center justify-center bg-gray-300 dark:bg-gray-700 ${applyAspectRatio(
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
		<figure>
			{hasError ? (
				renderOnError
			) : (
				<>
					<img
						className={` flex items-center justify-center overflow-hidden object-cover 
						
 						${applyRounded(rounded)} 
						
						${className}`}
						height={height}
						width={width}
						src={src}
						alt={alt}
						onError={() => setHasError(true)}
						style={aspectRatio && applyAspectRatio(aspectRatio)}
					/>
				</>
			)}
		</figure>
	);
};

export default Image;
