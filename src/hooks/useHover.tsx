import { useEffect, useRef, useState } from "react";

interface HoverOptions {
	enterDelay?: number;
	leaveDelay?: number;
}

const DEFAULT_DELAY = 0;

const useHover = ({
	enterDelay = DEFAULT_DELAY,
	leaveDelay = DEFAULT_DELAY,
}: HoverOptions = {}) => {
	const [isHovering, setIsHovering] = useState(false);
	const timeoutRef = useRef<number | null>(null);
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	const handleMouseEnter = () => {
		clearTimeout(timeoutRef.current!);
		if (isMounted.current) {
			timeoutRef.current = window.setTimeout(() => {
				setIsHovering(true);
			}, enterDelay);
		}
	};

	const handleMouseLeave = () => {
		clearTimeout(timeoutRef.current!);
		if (isMounted.current) {
			timeoutRef.current = window.setTimeout(() => {
				setIsHovering(false);
			}, leaveDelay);
		}
	};

	const hoverProps = {
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
	};

	return { isHovering, hoverProps };
};

export default useHover;
