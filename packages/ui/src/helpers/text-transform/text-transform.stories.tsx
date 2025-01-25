import type { Meta } from "@storybook/react";

import { Skeleton } from "../../components";
import {
	capitalize,
	formatString,
	lowerAndNoSpace,
	randomString,
	removeWhitespace,
	reverseString,
	toCamelCase,
	toKebabCase,
	toLowerCase,
	toTitleCase,
	toUpperCase,
	truncateString,
} from "./text-transform";

export default {
	title: "Helpers/Text Transform",
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
	const text = "pol Gubau Amores";

	return (
		<div className="flex gap-4 flex-col w-full">
			<span>Original: {text}</span>
			<span>Capitalize: {capitalize(text)}</span>
			<span>Format: {formatString(text)}</span>
			<span>Lower and No Space: {lowerAndNoSpace(text)}</span>
			<span>Random String: {randomString(10)}</span>
			<span>Remove Whitespace: {removeWhitespace(text)}</span>
			<span>Reverse: {reverseString(text)}</span>
			<span>To Camel Case: {toCamelCase(text)}</span>
			<span>To Kebab Case: {toKebabCase(text)}</span>
			<span>To Lower Case: {toLowerCase(text)}</span>
			<span>To Title Case: {toTitleCase(text)}</span>
			<span>To Upper Case: {toUpperCase(text)}</span>
			<span>Truncate: {truncateString(text, 5)}</span>
		</div>
	);
};
