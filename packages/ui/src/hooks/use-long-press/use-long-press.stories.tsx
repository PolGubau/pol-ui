import type { Meta } from "@storybook/react";
import type React from "react";

import { Button, Toaster, toast } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useLongPress } from "./use-long-press";

export default {
	title: "Hooks/useLongPress",
	component: PoluiProvider,

	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center pt-20   ">
				<Story />
				<Toaster />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;
export const Default: React.FC = () => {
	const { onMouseDown, onTouchStart, onMouseUp, onTouchEnd } = useLongPress({
		delay: 1000,
		onLongPress: () => {
			toast("pressed for 1 second");
		},
	});

	return (
		<div className="flex justify-center flex-col gap-2 dark:text-secondary-50">
			<h1>useLongPress Example</h1>
			<Button
				className="active:scale-90 transition-transform duration-200 ease-in-out"
				onMouseDown={onMouseDown}
				onTouchStart={onTouchStart}
				onMouseUp={onMouseUp}
				onTouchEnd={onTouchEnd}
			>
				Press and hold for 1 second
			</Button>
		</div>
	);
};
