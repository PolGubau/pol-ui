interface Props {
	position: "top" | "bottom" | "left" | "right";
	isJustText: boolean;
}
export const tooltipStylePosition = (props: Props) => {
	const base = `text-background text-xs bg-contrast rounded-md absolute pointer-events-none`;

	const position = {
		// each position shows in which direction the tooltip is pointing, it's all relative to the tooltip container and it's outside the tooltip itself
		top: `bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1`,
		bottom: `top-full left-1/2 transform -translate-x-1/2 translate-y-1`,
		left: `right-full top-1/2 transform translate-x-1 -translate-y-1/2`,
		right: `left-full top-1/2 transform -translate-x-1 -translate-y-1/2`,
	};

	const isJustTextClasses = `p-1 bg-dark rounded-md text-light`;

	return `${base} ${position[props.position]} ${props.isJustText && isJustTextClasses}`;
};
