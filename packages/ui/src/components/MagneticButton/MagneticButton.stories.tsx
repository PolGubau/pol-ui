import type { Meta } from "@storybook/react";

import { MagneticButton } from "./MagneticButton";

export default {
	title: "Components/MagneticButton",
	component: MagneticButton,
	decorators: [
		(Story) => (
			<div className="flex p-6 items-center justify-center w-full">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => {
	return <MagneticButton>Test</MagneticButton>;
};

/**
 * Using the freedom prop, customize the attachment amount of the magnet background
 */
export const CustomFreedom = () => {
	return (
		<div className="flex gap-2 items-center">
			<MagneticButton freedom={0.5}>Slow</MagneticButton>
			<MagneticButton freedom={2}>Fast</MagneticButton>
		</div>
	);
};

/**
 * You can always customize the magnet part (by default a div with the following tailwind classes:
 *
 * - "absolute bottom-0 left-0 h-full w-full rounded-lg bg-secondary/60 transition-opacity opacity-0 group-hover:opacity-100"
 *
 * *Note that has a opacity-0 by default when not hovering!*
 */
export const CustomMagnet = () => {
	return (
		<div className="flex gap-2 items-center">
			<MagneticButton
				magnet={{
					className: "bg-primary/50 opacity-100",
				}}
			>
				Funky button
			</MagneticButton>
		</div>
	);
};
