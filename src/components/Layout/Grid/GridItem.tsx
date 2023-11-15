import { ReactNode } from "react";

interface GridItemProps {
	howManyColumns?: string;
	howManyRows?: string;
	children: ReactNode;
	className?: string;
}

const GridItem: React.FC<GridItemProps> = ({
	children,
	howManyRows,
	howManyColumns,
	className,
}) => {
	return (
		<div
			className={className}
			style={{
				gridColumn: `span ${howManyColumns}`,
				gridRow: `span ${howManyRows}`,
			}}
		>
			{children}
		</div>
	);
};
export default GridItem;
