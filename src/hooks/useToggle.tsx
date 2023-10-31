import { useState, useCallback } from "react";

type UseToggleOptions = {
	values: any[];
};

const useToggle = ({ values }: UseToggleOptions) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const toggle = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
	}, [values]);

	const currentOption = values[currentIndex];

	return { currentOption, toggle };
};

export default useToggle;
