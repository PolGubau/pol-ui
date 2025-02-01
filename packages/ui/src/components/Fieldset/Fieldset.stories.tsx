import type { Meta } from "@storybook/react";
import { TbReload } from "react-icons/tb";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Input } from "../Input/Input";
import { PasswordInput } from "../PasswordInput";
import { toast } from "../Toaster";
import Fieldset from "./Fieldset";

export default {
	title: "Components/Fieldset",
	component: Fieldset,

	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const keyValue = JSON.stringify(data);

		toast.success("Form submitted", {
			description: keyValue,
		});
	};

	const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.currentTarget.form?.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Fieldset legend="Form">
				<Input
					required={true}
					placeholder="Pol Gub..."
					label="Name"
					name="name"
				/>
				<PasswordInput required={true} name="password" label="Password" />

				<footer className="flex gap-1 items-center justify-end">
					<IconButton
						label="Reset"
						color={"warning"}
						variant={"ghost"}
						onClick={handleReset}
					>
						<TbReload size={18} />
					</IconButton>
					<Button>Submit</Button>
				</footer>
			</Fieldset>
		</form>
	);
};
