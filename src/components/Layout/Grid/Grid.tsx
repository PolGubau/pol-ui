import React, { ReactNode } from "react";
 import { gridStyles } from "./Grid.styles";

interface GridProps {
	children: ReactNode;
	columns?: string;
	rows?: string;
	gap?: string | [string, string];
	justifyItems?: "center" | "end" | "start" | "stretch";
	alignItems?: "center" | "end" | "start" | "stretch" | "baseline";
	className?: string;
	id?: string;
	styles?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
	children,
	columns,
	gap,
	rows,
	justifyItems,
	alignItems,
	className,
	id,
	styles,
}) => {
	const gapX = Array.isArray(gap) ? gap[0] : gap;
	const gapY = Array.isArray(gap) ? gap[1] : gap;
	return (
		<section
			id={id}
			className={`${gridStyles({ justifyItems, alignItems })} ${className ?? ""}`}
			style={{
				gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
				gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
				gap: `${gapY} ${gapX}`,
				...styles,
			}}
		>
			{children}
		</section>
	);
};

export default Grid;
