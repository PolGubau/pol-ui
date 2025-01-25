import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Skeleton } from "../../components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { decrypt, encrypt } from "./encryption";

export default {
	title: "Helpers/encryption",
	component: Skeleton,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => {
	const [value, setValue] = useState("Hello there");
	const supersecretkey = "supersecretkey";
	const handleEncrypt = () => {
		const encrypted = encrypt(value, supersecretkey);
		setValue(encrypted);
	};
	const handleDecrypt = () => {
		const decrypted = decrypt(value, supersecretkey);
		setValue(decrypted);
	};
	return (
		<div className="flex flex-col gap-4 max-w-sm w-full">
			Current value: {value}
			<div>
				<Input
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
			</div>
			<Button onClick={handleEncrypt}>Encrypt</Button>
			<Button onClick={handleDecrypt} color="secondary" disabled={!value}>
				Decrypt
			</Button>
		</div>
	);
};
