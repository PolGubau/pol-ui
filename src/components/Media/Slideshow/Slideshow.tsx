import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { IconButton } from "../../Buttons";
import { IconNames } from "../../Base";
import { SlideShowStyled } from "./SlideshowStyled";
import { ButtonVariant } from "../../Buttons/Button/Button";
import { SizesComplete } from "../../../types";
import { applyRounded } from "../../../style";

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
			zIndex: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface Props {
	items: React.ReactNode[];
	hasPagination?: boolean;
	hasNavigation?: boolean;
	navigationVariant?: ButtonVariant;
	rounded?: SizesComplete;
}
const Slideshow: React.FC<Props> = ({
	items,
	hasNavigation = true,
	navigationVariant = "filled",
	hasPagination = true,
	rounded = "md",
}) => {
	const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

	// We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
	// then wrap that within 0-2 to find our image ID in the array below. By passing an
	// absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
	// detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
	const imageIndex = wrap(0, items.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<SlideShowStyled className={`  ${applyRounded(rounded)}`}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={page}
					custom={direction}
					variants={variants}
					initial="enter"
					className="slideshow"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);
						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				>
					<div className="item">{items[imageIndex]}</div>
				</motion.div>
				{hasNavigation && (
					<>
						<IconButton
							variant={navigationVariant}
							className="prev"
							icon={IconNames.arrowleft}
							onClick={() => paginate(-1)}
						/>
						<IconButton
							variant={navigationVariant}
							className="next"
							icon={IconNames.arrowright}
							onClick={() => paginate(1)}
						/>
					</>
				)}
			</AnimatePresence>
		</SlideShowStyled>
	);
};

export default Slideshow;
