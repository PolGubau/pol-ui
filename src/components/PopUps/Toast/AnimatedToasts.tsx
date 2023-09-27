import { useAnimate, motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";
import { ToastProps } from "../../../types";

const height = 70;
const gap = 10;
const size = 180;

function Item({ total, index, onDelete }: any) {
	const [scope, animate] = useAnimate();

	function handleDragEnd(event: any, info: any) {
		const offset = info.offset.x;
		const velocity = info.velocity.x;

		if (offset < -100 || velocity < -500) {
			animate(scope.current, { x: "-100%" }, { duration: 0.2 });
			setTimeout(() => onDelete(index), 200);
		} else {
			animate(scope.current, { x: 0, opacity: 1 }, { duration: 0.5 });
		}
	}

	return (
		<motion.div
			style={{
				width: 150,
				height: height,
				borderRadius: 20,
				overflow: "hidden",
				marginBottom: total - 1 === index ? 0 : 10,
				willChange: "transform",
				cursor: "grab",
			}}
			whileTap={{ cursor: "grabbing" }}
			layout
			transition={{ type: "spring", stiffness: 600, damping: 30 }}
		>
			<motion.div
				style={{
					width: size,
					height: height,
					borderRadius: 20,
					backgroundColor: "#ff4",
				}}
				drag="x"
				dragDirectionLock
				onDragEnd={handleDragEnd}
				ref={scope}
			/>
		</motion.div>
	);
}

interface Props {
	toasts: ToastProps[];
	onChange?: (toasts: ToastProps[]) => void;
}

export default function AnimatedToasts({ toasts = [], onChange }): Props {
	const y = useMotionValue(0);

	const [items, setItems] = useState(toasts);
	const { top, bottom } = useConstraints(items);
	const totalScroll = getHeight(items);
	const scrollContainer = 150;

	function onDelete(index: number) {
		const newItems = [...items];
		newItems.splice(index, 1);

		const newScrollHeight = getHeight(newItems);
		const bottomOffset = -y.get() + scrollContainer;
		const bottomWillBeVisible = newScrollHeight < bottomOffset;
		const isScrollHeightLarger = newScrollHeight >= scrollContainer;

		if (bottomWillBeVisible && isScrollHeightLarger) {
			animate(y, -newScrollHeight + scrollContainer);
		}

		setItems(newItems);
	}

	return (
		<motion.ul
			className="w-full p-3  fixed bottom-1 left-1"
			style={{ y: y, height: totalScroll, bottom: "22px" }}
			drag="y"
			dragDirectionLock
			dragConstraints={{ top, bottom }}
		>
			{items.map((value, index) => {
				return <Item total={items.length} index={index} onDelete={onDelete} key={value} />;
			})}
		</motion.ul>
	);
}

function getHeight(items: ToastProps[]) {
	const totalHeight = items.length * height;
	const totalPadding = (items.length - 1) * gap;
	const totalScroll = totalHeight + totalPadding;
	return totalScroll;
}

function useConstraints(items: ToastProps[]) {
	const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

	useEffect(() => {
		setConstraints({ top: size - getHeight(items), bottom: 0 });
	}, [items]);

	return constraints;
}
