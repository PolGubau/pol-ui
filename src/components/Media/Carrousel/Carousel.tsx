import { useRef } from "react";
import { scrollSliderNext, scrollSliderPrevious } from "./functions/scroll";
import { Icon, IconNames } from "../../Base";
import { CarrouselStyled } from "./CarouselStyled";
import { IconButton } from "../../Buttons";
import { IconType } from "../../../types";

/**
 * Props for the Carousel component.
 */
export interface CarouselProps {
	children: React.JSX.Element[];
	prevAriaLabel?: string;
	nextAriaLabel?: string;
	prevButtonContent?: IconType;
	nextButtonContent?: IconType;
	gap?: number;
}

/**
 * A carousel component for displaying a list of items.
 */
export function Carousel({
	children,
	prevAriaLabel = "Previous",
	nextAriaLabel = "Next",
	prevButtonContent = <Icon icon={IconNames.arrowleft} />,
	nextButtonContent = <Icon icon={IconNames.arrowright} />,
	gap = 0,
}: CarouselProps) {
	const slider = useRef<HTMLDivElement>(null);

	/**
	 * Get the slider element or throw an error if it doesn't exist.
	 * @throws Error if the slider element is not found.
	 * @returns The slider element.
	 */
	function getSliderOrThrow() {
		if (!slider.current) {
			throw new Error("Slider not found");
		}
		return slider.current;
	}

	/**
	 * Scroll to the next item in the carousel.
	 */
	function scrollNext() {
		const slider = getSliderOrThrow();
		scrollSliderNext(slider);
	}

	/**
	 * Scroll to the previous item in the carousel.
	 */
	function scrollPrevious() {
		const slider = getSliderOrThrow();
		scrollSliderPrevious(slider);
	}

	return (
		<CarrouselStyled $gap={gap}>
			<section ref={slider} className="slider">
				{children.map((child) => (
					<article key={child.key} className="slide">
						{child}
					</article>
				))}
			</section>

			<div className="nav">
				<IconButton onClick={scrollPrevious} aria-label={prevAriaLabel} icon={prevButtonContent} />
				<IconButton onClick={scrollNext} aria-label={nextAriaLabel} icon={nextButtonContent} />
			</div>
		</CarrouselStyled>
	);
}
