import { tv } from "tailwind-variants";

export const labelStyles = (isUp: boolean) => {
	const base = `label transition-all absolute text-primary/60 top-0 left-2 translate-y-1 p-1 pointer-events-none `;
	const isUpClasses = isUp
		? `text-primary/80 py-0 translate-y-[-50%] bg-white text-sm focus:text-accent`
		: ``;

	return `${base} ${isUpClasses}`;
};

interface Props {
	multiline: boolean;
	fullWidth: boolean;
}

export const inputStyles = ({ multiline, fullWidth }: Props) => {
	const base =
		"transition-all outline-none rounded-lg p-2 invalid:ring-1 invalid:ring-red-500 ring-1 ring-primary/60 hover:ring-accent focus:ring-accent peer";
	const multilineClasses = multiline
		? "input peer min-h-[100px] max-h-[300px] resize-y"
		: "input peer";
	const fullWidthClasses = fullWidth ? "w-full" : "w-fit min-w-max";

	return `${base} ${multilineClasses} ${fullWidthClasses}`;
};
