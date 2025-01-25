import type { Meta } from "@storybook/react";
import { TbBold, TbHome, TbItalic, TbUnderline } from "react-icons/tb";
import { useBoolean } from "../../hooks";
import { Button } from "../Button";
import { Toggle } from "./Toggle";

export default {
	title: "Components/Toggle",
	component: Toggle,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col justify-center items-center">
				<div className="max-w-xl">
					<Story />
				</div>
			</div>
		),
	],
} as Meta;

export const Default = () => {
	const { value, toggle } = useBoolean(false);
	const { value: v2, toggle: t2 } = useBoolean(false);
	const { value: v3, toggle: t3 } = useBoolean(false);

	return (
		<div className="flex gap-2">
			<Toggle onClick={toggle} active={value}>
				<TbBold />
			</Toggle>
			<Toggle onClick={t2} active={v2}>
				<TbItalic />
			</Toggle>
			<Toggle onClick={t3} active={v3}>
				<TbUnderline />
			</Toggle>
		</div>
	);
};

export const AllColors = () => {
	const { value: v1, toggle: t1 } = useBoolean(false);
	const { value: v2, toggle: t2 } = useBoolean(false);
	const { value: v3, toggle: t3 } = useBoolean(false);
	const { value: v4, toggle: t4 } = useBoolean(false);
	const { value: v5, toggle: t5 } = useBoolean(false);
	const { value: v6, toggle: t6 } = useBoolean(false);
	return (
		<div className="flex flex-col gap-2 flex-wrap">
			<div className="flex gap-2 flex-wrap p-2 bg-secondary-50">
				<Toggle onClick={t1} active={v1} color="primary">
					<TbHome />
				</Toggle>
				<Toggle onClick={t2} active={v2} color="secondary">
					<TbHome />
				</Toggle>
				<Toggle onClick={t3} active={v3} color="warning">
					<TbHome />
				</Toggle>
				<Toggle onClick={t4} active={v4} color="info">
					<TbHome />
				</Toggle>
				<Toggle onClick={t5} active={v5} color="success">
					<TbHome />
				</Toggle>
				<Toggle onClick={t6} active={v6} color="error">
					<TbHome />
				</Toggle>
				<Button>Click me</Button>
			</div>
			<div className="flex gap-2 flex-wrap dark bg-secondary-900 p-2">
				<Toggle onClick={t1} active={v1} color="primary">
					<TbHome />
				</Toggle>
				<Toggle onClick={t2} active={v2} color="secondary">
					<TbHome />
				</Toggle>
				<Toggle onClick={t3} active={v3} color="warning">
					<TbHome />
				</Toggle>
				<Toggle onClick={t4} active={v4} color="info">
					<TbHome />
				</Toggle>
				<Toggle onClick={t5} active={v5} color="success">
					<TbHome />
				</Toggle>
				<Toggle onClick={t6} active={v6} color="error">
					<TbHome />
				</Toggle>
			</div>
		</div>
	);
};
