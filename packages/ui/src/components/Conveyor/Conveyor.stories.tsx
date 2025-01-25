import type { Meta } from "@storybook/react";

import { Card } from "../Card";
import { Rating } from "../Rating";
import { Conveyor, type ConveyorProps } from "./Conveyor";

export default {
	title: "Components/Conveyor",
	component: Conveyor,
} as Meta;
const testimonials = [
	{
		review:
			"This product is amazing! I bought it for my husband and he loves it!, also the customer service is great and they helped me with all my questions.",
		name: "Paulina G.",
		stars: 5,
	},
	{
		review:
			"Based on my experience, I would recommend this product to anyone. The only thing I would change is the price, it is a little bit expensive.",
		name: "John D.",
		stars: 4,
	},
	{
		stars: 2,
		review:
			"I will never buy this product again, it is not worth the money. I would recommend you to buy another product.",
		name: "Robert S.",
	},
	{
		stars: 5,
		name: "Paulina G.",
		review:
			"I bought this profuct again because I love it! I would recommend it to anyone. 🚀🤘",
	},
	{
		review:
			"Truly amazing product, Powerfull and easy to use. I strongly recommend it.",
		name: "Samantha R.",
		stars: 5,
	},
];

//

export const Default = (): React.ReactNode => {
	return (
		<Conveyor duration={30}>
			{testimonials.map((testimonial) => (
				<Card key={testimonial.name} className="w-[350px] flex flex-col gap-4">
					<Rating
						stars={5}
						filled={testimonial.stars}
						starClassName="fill-secondary"
					/>
					<p className="text mb-4">{testimonial.review}</p>
					<p className="text-sm">{testimonial.name}</p>
				</Card>
			))}
		</Conveyor>
	);
};

//

export const Vertical = (args: ConveyorProps): React.ReactNode => {
	return (
		<Conveyor {...args} className="max-h-[400px] overflow-hidden">
			{testimonials.map((testimonial) => (
				<Card key={testimonial.name} className="w-[350px] flex flex-col gap-4">
					<Rating
						stars={5}
						filled={testimonial.stars}
						starClassName="fill-secondary"
					/>
					<p className="text mb-4">{testimonial.review}</p>
					<p className="text-sm">{testimonial.name}</p>
				</Card>
			))}
		</Conveyor>
	);
};
Vertical.args = {
	duration: 30,
	direction: "vertical",
};

//

export const Words = (args: ConveyorProps): React.ReactNode => {
	return (
		<Conveyor
			{...args}
			className="bg-secondary-900 text-secondary-50 flex items-center justify-center"
		>
			{["polgubau", "annacamps", "yuvilaseca"].map((word) => (
				<span key={word} className="text-7xl font-mono font-light">
					@{word} -{"  "}
				</span>
			))}
		</Conveyor>
	);
};
Words.args = {
	duration: 15,
	durationOnHover: 80,
};
export const Stress = (): React.ReactNode => {
	return (
		<Conveyor
			className="flex items-center justify-center"
			duration={2}
			renders={20}
		>
			{Array.from({ length: 2 }).map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<span key={i} className="text-2xl">
					{i} -{"  "}
				</span>
			))}
		</Conveyor>
	);
};
