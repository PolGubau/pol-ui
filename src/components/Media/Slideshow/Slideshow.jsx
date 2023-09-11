import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideShowStyled } from "./SlideshowStyled";
import { IconButton } from "../../Buttons";

const Slideshow = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const slideVariants = {
		hiddenRight: {
			x: "100%",
			opacity: 0,
		},
		hiddenLeft: {
			x: "-100%",
			opacity: 0,
		},
		visible: {
			x: "0",
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.2,
			},
		},
	};

	const dotsVariants = {
		initial: {
			y: 0,
		},
		animate: {
			y: -10,
			scale: 1.2,
			transition: { type: "spring", stiffness: 1000, damping: "10" },
		},
		hover: {
			scale: 1.1,
			transition: { duration: 0.2 },
		},
	};

	const handleNext = () => {
		setDirection("right");
		setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
	};

	const handlePrevious = () => {
		setDirection("left");

		setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
	};

	const handleDotClick = (index) => {
		setDirection(index > currentIndex ? "right" : "left");
		setCurrentIndex(index);
	};

	return (
		<SlideShowStyled>
			<div className="carousel">
				<div className="carousel-images">
					<AnimatePresence>
						<motion.img
							key={currentIndex}
							src={images[currentIndex]}
							initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
							animate="visible"
							exit="exit"
							variants={slideVariants}
						/>
					</AnimatePresence>

					<div className="slide_direction">
						<IconButton onClick={handlePrevious} icon="arrowleft" className="left" />
						<IconButton onClick={handleNext} icon="arrowright" className="right" />
					</div>
				</div>
				<div className="carousel-indicator">
					{images.map((_, index) => (
						<motion.div
							key={index}
							className={`dot ${currentIndex === index ? "active" : ""}`}
							onClick={() => handleDotClick(index)}
							initial="initial"
							animate={currentIndex === index ? "animate" : ""}
							whileHover="hover"
							variants={dotsVariants}
						></motion.div>
					))}
				</div>
			</div>
		</SlideShowStyled>
	);
};
export default Slideshow;
