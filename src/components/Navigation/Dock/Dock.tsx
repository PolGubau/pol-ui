import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { applyBgColor, applyBgOpacity, applyFullWidth, applyRounded } from "../../../style";
import { Colors, Color, IconType, SizesComplete, Sizes, Ten, Tens } from "../../../types";
import { Icon } from "../../Base";

export interface DockItemProps {
	icon: IconType;
	name: string;
	href?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export interface DockProps {
	data?: DockItemProps[];
	bgColor?: Color;
	bgOpacity?: Ten;
	fullWidth?: boolean;
	itemColor?: Color;
	itemBgColor?: Color;
	rounded?: SizesComplete;
	itemRounded?: SizesComplete;
}
const Dock: React.FC<DockProps> = ({
	data = [],
	fullWidth = true,
	rounded = Sizes.xl,
	bgColor = Colors.primary,
	bgOpacity = Tens.twenty,
	itemColor = Colors.accent,
	itemBgColor = Colors.background,
	itemRounded = "full",
}) => {
	let mouseX = useMotionValue(Infinity);

	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={`flex h-16 items-end gap-4 ${applyRounded(rounded)} ${applyBgColor(
				bgColor
			)} px-4 pb-3  justify-center ${applyFullWidth(fullWidth)} ${applyBgOpacity(bgOpacity)}  `}
		>
			{data.map((i) => (
				<AppIcon
					mouseX={mouseX}
					key={i.name}
					item={i}
					color={itemColor}
					itemBgColor={itemBgColor}
					rounded={itemRounded}
				/>
			))}
		</motion.div>
	);
};

function AppIcon({
	mouseX,
	color,
	item,
	itemBgColor,
	rounded,
}: {
	mouseX: MotionValue;
	color: Color;
	item: DockItemProps;
	itemBgColor: Color;
	rounded: SizesComplete;
}) {
	const ref = useRef<HTMLAnchorElement>(null);

	const distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
	const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
	const itemWidth = useTransform(width, (val) => val / 30);

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (item.onClick) {
			item.onClick?.(event);
		}
		window.history.pushState({}, "", item.href);
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<motion.a
			onClick={handleClick}
			href={item.href}
			ref={ref}
			style={{ width }}
			className={`aspect-square w-10 ${applyRounded(rounded)} ${applyBgColor(
				color
			)} flex items-center justify-center cursor-pointer   `}
		>
			<motion.div style={{ scale: itemWidth }}>
				<Icon icon={item.icon} color={itemBgColor} />
			</motion.div>
		</motion.a>
	);
}
export default Dock;
