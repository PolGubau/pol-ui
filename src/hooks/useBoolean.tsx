import { useState, useCallback } from "react";

const useBoolean = (initialValue: boolean) => {
	const [current, setCurrent] = useState(initialValue);

	const toggle = useCallback(() => {
		setCurrent((prevValue) => !prevValue);
	}, []);

	const setFalse = useCallback(() => {
		setCurrent(false);
	}, []);

	const setTrue = useCallback(() => {
		setCurrent(true);
	}, []);

	return { current, toggle, setFalse, setTrue };
};

export default useBoolean;
