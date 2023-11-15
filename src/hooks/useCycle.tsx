import { useState, useCallback } from "react";

type UseCycleOptions = {
	values: any[];
};

const useCycle = ({ values }: UseCycleOptions) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = useCallback(
		(step = 1) => {
			setCurrentIndex((prevIndex) => (prevIndex + step) % values.length);
		},
		[values]
	);

	const previous = useCallback(
		(step = 1) => {
			setCurrentIndex((prevIndex) => {
				let newIndex = prevIndex - step;
				if (newIndex < 0) {
					newIndex += values.length;
				}
				return newIndex;
			});
		},
		[values]
	);

	const currentOption = values[currentIndex];

	return { currentOption, next, previous };
};

export default useCycle;
