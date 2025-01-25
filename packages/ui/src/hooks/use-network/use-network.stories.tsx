import type { Meta } from "@storybook/react";
import type React from "react";

import { Toaster } from "../../components";
import { useNetwork } from "./use-network";

const Test = () => {
	return "test";
};

export default {
	title: "Hooks/useNetwork",
	component: Test,

	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
				<Story />
				<Toaster />
			</div>
		),
	],
	parameters: {
		docs: {
			description: {
				story: ` 
  > Props 
  - The downlinkMax attribute represents the maximum downlink speed estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per second.
      - downlink?: number | null
 
  - The effectiveType attribute represents the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
      
      - effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | null
 
  - The rtt attribute represents the effective round-trip time estimate in milliseconds.
   
      - rtt?: number | null
 
  - The saveData attribute is a boolean that is true if the user has requested a reduced data usage mode from the user agent.
   
      - saveData?: boolean | null
 
  - The isOnline attribute is a boolean that is true if the user is connected to the internet.
      - isOnline: boolean`,
			},
		},
		layout: "fullscreen",
	},
} as Meta;
export const Default: React.FC = () => {
	// Example media query for screen widths less than 600px
	const networkState = useNetwork();

	return (
		<div>
			<h1>useNetwork Example</h1>
			<pre>
				<code>{JSON.stringify(networkState, null, 2)}</code>
			</pre>
		</div>
	);
};
