import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Button, Skeleton } from "../../components";
import { shuffle } from "./shuffle";

export default {
	title: "Helpers/shuffle",
	component: Skeleton,
	decorators: [
		(Story) => (
			<div className="p-6 flex">
				<Story />
			</div>
		),
	],
} as Meta;

export const Default = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [shuffled, setShuffled] = useState(shuffle(arr));

	const handleShuffle = () => {
		setShuffled(shuffle(arr));
	};

	return (
		<div className="flex gap-4">
			<div>
				<h2>Original</h2>
				<ul>
					{arr.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			<div>
				<h2>Shuffled</h2>
				<ul>
					{shuffled.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>

			<Button onClick={handleShuffle}>Shuffle</Button>
		</div>
	);
};
