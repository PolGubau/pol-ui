interface Props {
	justifyItems?: "center" | "end" | "start" | "stretch";
	alignItems?: "center" | "end" | "start" | "stretch" | "baseline";
	className?: string;
}
export const gridStyles = ({
	justifyItems = "stretch",
	alignItems = "stretch",
	className,
}: Props) => {
	const base = "grid";

	const justify = {
		center: "justify-items-center",
		end: "justify-items-end",
		start: "justify-items-start",
		stretch: "justify-items-stretch",
	};
	const align = {
		center: "align-items-center",
		end: "align-items-end",
		start: "align-items-start",
		stretch: "align-items-stretch",
		baseline: "align-items-baseline",
	};

	return `${base} ${justify[justifyItems]} ${align[alignItems]} ${className}`;
};
