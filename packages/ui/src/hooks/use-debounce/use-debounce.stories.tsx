import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Input } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useDebounce } from "./use-debounce";

export default {
	title: "Hooks/useDebounce",
	component: PoluiProvider,
} as Meta;
export const Default: React.FC = () => {
	const [text, setText] = useState<string>("");
	const delayed = useDebounce(text, 500);

	return (
		<div className="flex justify-center flex-col gap-2">
			<h1>Debounce Example</h1>
			<Input label="Enter a value" value={text} onChangeValue={setText} />

			<p>Debounced value: {delayed}</p>
		</div>
	);
};
