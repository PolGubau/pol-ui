import type { Meta } from "@storybook/react";
import type React from "react";

import { PoluiProvider } from "../../providers/PoluiProvider";
import { useMeasure } from "./use-measure";

export default {
	title: "Hooks/useMeasure",
	component: PoluiProvider,

	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
				<Story />
			</div>
		),
	],
} as Meta;
export const Default: React.FC = () => {
	const { ref, bounds } = useMeasure<HTMLDivElement>();

	return (
		<div className="flex flex-col gap-4">
			<div
				ref={ref}
				className="flex justify-center items-center outline bg-primary-100 text-primary-900 rounded-md p-4"
				style={{
					width: "200px",
					height: "200px",
					resize: "both",
					overflow: "auto",
				}}
			>
				Resize me!
			</div>
			<div>
				<p>Width: {bounds.width}px</p>
				<p>Height: {bounds.height}px</p>
			</div>
		</div>
	);
};
