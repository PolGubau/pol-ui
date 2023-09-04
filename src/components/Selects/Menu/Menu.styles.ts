import { Positions } from "../../../types";

interface Props {
	direction: Positions;
}

export const menuStyles = ({ direction = "bottom" }: Props) => {
	const base =
		"absolute w-56 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ";

	const directions = {
		top: "bottom-full mb-2 origin-bottom-right",
		bottom: "top-full mt-2 origin-top-right",
		left: `right-full origin-left`,
		right: `left-full origin-center`,
	};

	return base + directions[direction];
};
