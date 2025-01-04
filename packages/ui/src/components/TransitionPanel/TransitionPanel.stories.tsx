import type { Meta } from "@storybook/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

import { Button } from "../Button";
import { TransitionPanel } from "./TransitionPanel";

export default {
	title: "Components/TransitionPanel",
	component: TransitionPanel,
	decorators: [
		(Story) => (
			<div className="flex p-6 grid place-items-center min-h-[200px] bg-secondary-50">
				<Story />
			</div>
		),
	],
} as Meta;

export function Default() {
	const [activeIndex, setActiveIndex] = useState(0);

	const items = [
		{
			title: "Aesthetics",
			subtitle: "Refining Visual Harmony",
			content:
				"Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.",
		},
		{
			title: "Art",
			subtitle: "Narrative and Expression",
			content:
				"Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.",
		},
		{
			title: "Technique",
			subtitle: "Mastering Motion Tools",
			content:
				"Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.",
		},
	];

	return (
		<div>
			<div className="mb-4 flex space-x-2">
				{items.map((item, index) => (
					<button
						type="button"
						key={item.title}
						onClick={() => setActiveIndex(index)}
						className={`rounded-md px-3 py-1 text-sm font-medium ${
							activeIndex === index
								? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
								: "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
						}`}
					>
						{item.title}
					</button>
				))}
			</div>
			<div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
				<TransitionPanel
					activeIndex={activeIndex}
					transition={{ duration: 0.2, ease: "easeInOut" }}
					variants={{
						enter: { opacity: 0, y: -50, filter: "blur(4px)" },
						center: { opacity: 1, y: 0, filter: "blur(0px)" },
						exit: { opacity: 0, y: 50, filter: "blur(4px)" },
					}}
				>
					{items.map((item) => (
						<div key={item.content} className="py-2">
							<h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
								{item.subtitle}
							</h3>
							<p className="text-zinc-600 dark:text-zinc-400">{item.content}</p>
						</div>
					))}
				</TransitionPanel>
			</div>
		</div>
	);
}

export function TransitionPanelCard() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [ref, bounds] = useMeasure();

	const features = [
		{
			title: "Brand",
			description:
				"Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.",
		},
		{
			title: "Product",
			description:
				"Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.",
		},
		{
			title: "Website",
			description:
				"Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.",
		},
		{
			title: "Design System",
			description:
				"Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.",
		},
	];

	const handleSetActiveIndex = (newIndex: number) => {
		setDirection(newIndex > activeIndex ? 1 : -1);
		setActiveIndex(newIndex);
	};

	useEffect(() => {
		if (activeIndex < 0) {
			setActiveIndex(0);
		}
		if (activeIndex >= features.length) {
			setActiveIndex(features.length - 1);
		}
	}, [activeIndex]);

	return (
		<div className="w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700">
			<TransitionPanel
				activeIndex={activeIndex}
				variants={{
					enter: (direction) => ({
						x: direction > 0 ? 364 : -364,
						opacity: 0,
						height: bounds.height > 0 ? bounds.height : "auto",
						position: "initial",
					}),
					center: {
						zIndex: 1,
						x: 0,
						opacity: 1,
						height: bounds.height > 0 ? bounds.height : "auto",
					},
					exit: (direction) => ({
						zIndex: 0,
						x: direction < 0 ? 364 : -364,
						opacity: 0,
						position: "absolute",
						top: 0,
						width: "100%",
					}),
				}}
				transition={{
					x: { type: "spring", stiffness: 300, damping: 30 },
					opacity: { duration: 0.2 },
				}}
				custom={direction}
			>
				{features.map((feature, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="px-4 pt-4" ref={ref}>
						<h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
							{feature.title}
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							{feature.description}
						</p>
					</div>
				))}
			</TransitionPanel>
			<div className="flex justify-between p-4">
				{activeIndex > 0 ? (
					<Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
						Previous
					</Button>
				) : (
					<div />
				)}
				<Button
					onClick={() =>
						activeIndex === features.length - 1
							? null
							: handleSetActiveIndex(activeIndex + 1)
					}
				>
					{activeIndex === features.length - 1 ? "Close" : "Next"}
				</Button>
			</div>
		</div>
	);
}
