import { isCompletelyVisible } from "./isCompletelyVisible";

function scrollSliderTo(slider: HTMLElement, horizontalPosition: number): void {
	const verticalPosition = 0;

	slider.scrollTo(horizontalPosition, verticalPosition);
}

export function scrollSliderNext(slider: HTMLElement): void {
	const slides = slider.querySelectorAll<HTMLElement>(`.slide`);

	let firstNotVisibleSlideAfterVisibleSlide, firstVisibleSlide;

	for (const slide of Array.from(slides)) {
		if (!firstVisibleSlide && isCompletelyVisible(slide)) {
			firstVisibleSlide = slide;
		}
		if (firstVisibleSlide && !isCompletelyVisible(slide)) {
			firstNotVisibleSlideAfterVisibleSlide = slide;
			break;
		}
	}

	const initialScrollPosition = 0;
	const position = firstNotVisibleSlideAfterVisibleSlide?.offsetLeft ?? initialScrollPosition;

	scrollSliderTo(slider, position);
}

export function scrollSliderPrevious(slider: HTMLElement): void {
	if (slider.scrollLeft === 0) {
		scrollSliderTo(slider, slider.scrollWidth);

		return;
	}

	const slides = slider.querySelectorAll<HTMLElement>(`.slide`);

	let firstVisibleSlideIndex = null;

	if (firstVisibleSlideIndex === null) {
		return;
	}

	if (!slider.parentElement) {
		throw new Error("Could not find carousel div");
	}

	const carouselWidth = slider.parentElement.clientWidth;
	let accumulatedWidth = 0;
	let slideToScrollTo = slides[firstVisibleSlideIndex];

	for (let i = firstVisibleSlideIndex; i >= 0; i--) {
		accumulatedWidth += slides[i].clientWidth;
		slideToScrollTo = slides[i];

		if (accumulatedWidth > carouselWidth) {
			break;
		}
	}

	const position = slideToScrollTo.offsetLeft;
	scrollSliderTo(slider, position);
}
