import { Placement, Placements } from "../../../types";

interface Props {
	placement: Placement;
}

export const menuStyles = ({ placement = Placements.bottom }: Props) => {
	const base =
		"absolute min-w-[180px] w-fit rounded-2xl  max-h-60 overflow-auto p-1 gap-1 bg-background dark:bg-background-inverted text-background-inverted dark:text-background shadow-lg ring-1 ring-background-inverted ring-opacity-5 focus:outline-none sm:text-sm z-50";

	const directions = {
		top: "bottom-full mb-2 origin-bottom-right",
		bottom: "top-full mt-2 origin-top-right",
		left: `right-full origin-left`,
		right: `left-full origin-center`,
	};

	return base + directions[placement];
};
