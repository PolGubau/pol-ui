import React, { useEffect, useRef } from "react";

interface ClickOutsideWrapperProps {
	onClickOutside: () => void;
	children: React.ReactNode;
	className?: string;
}

const ClickOutsideWrapper = ({ onClickOutside, children, className }: ClickOutsideWrapperProps) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [onClickOutside]);

	return (
		<div className={className} ref={wrapperRef}>
			{children}
		</div>
	);
};
export default ClickOutsideWrapper;
