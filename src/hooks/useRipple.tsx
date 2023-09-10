//hooks/useRipple.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "usehooks-ts";
import { ColorTypes } from "../types";
import { applyBgColor } from "../style";
interface RippleStyledProps {
	$duration: number;
	$opacity: number;
}

const RippleStyled = styled.span<RippleStyledProps>`
	overflow: hidden;
	pointer-events: none;
	width: 100%;
	height: 100%;
	position: absolute;
	opacity: ${(props) => props.$opacity};
	border-radius: 50%;
	transform: scale(0);
	animation-duration: ${(props) => props.$duration}s;
	animation-name: ripple;
	animation-timing-function: ease-in-out;
	@keyframes ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
`;

/**
 * This hook accepts a ref to any element and adds a click event handler that creates ripples when click
 */

interface RippleProps {
	ref: React.RefObject<HTMLElement>;
	duration?: number;
	color?: ColorTypes;
	hasRipple?: boolean;
	opacity?: number;
}

const useRipple = ({
	hasRipple = true,
	ref,
	duration = 0.5,
	color = "background",
	opacity = 0.3,
}: RippleProps) => {
	//ripples are just styles that we attach to span elements
	const [ripples, setRipples] = useState<React.CSSProperties[]>([]);

	useEffect(() => {
		if (!hasRipple) return;

		//check if there's a ref
		if (ref.current) {
			const elem = ref.current;

			//add a click handler for the ripple
			const clickHandler = (e: MouseEvent) => {
				//calculate the position and dimensions of the ripple.
				//based on click position and button dimensions
				const rect = elem.getBoundingClientRect();
				const left = e.clientX - rect.left;
				const top = e.clientY - rect.top;
				const height = elem.clientHeight;
				const width = elem.clientWidth;
				const diameter = Math.max(width, height);
				setRipples([
					...ripples,
					{
						top: top - diameter / 2,
						left: left - diameter / 2,
						height: Math.max(width, height),
						width: Math.max(width, height),
					},
				]);
			};

			//add an event listener to the button
			elem.addEventListener("click", clickHandler);

			//clean up when the component is unmounted
			return () => {
				elem.removeEventListener("click", clickHandler);
			};
		} else {
			console.warn("No ref provided to useRipple");
		}
	}, [ref, ripples]);

	//add a debounce so that if the user doesn't click after 1s, we remove the ripples
	const _debounced = useDebounce(ripples, 1000);
	useEffect(() => {
		if (_debounced.length) {
			setRipples([]);
		}
	}, [_debounced.length]);

	if (!hasRipple) return null;

	//map through the ripples and return span elements.
	//this will be added to the button component later
	return ripples?.map((style, i) => {
		return (
			<RippleStyled
				key={i}
				style={style}
				$duration={duration}
				$opacity={opacity}
				className={`brightness-90 z-10 ${applyBgColor(color)}`}
			/>
		);
	});
};

export default useRipple;
