import React from "react";
import { Text } from "../../../Text";
import Checkbox from "../../Checkbox/Checkbox";
import { Direction } from "../../../../types";

// Example of value prop:
// const value = [
// 	{ key: "key1", value: true },
// 	{ key: "key2", value: false },
// 	{ key: "key3", value: true },
// ];

interface NameValueBoolean {
	name: string;
	value: boolean;
}

interface Props {
	label?: string;
	value: NameValueBoolean[];
	onChange: (newValue: NameValueBoolean[]) => void;
	axis?: Direction;
}

const CheckboxGroup: React.FC<Props> = ({ label, value = [], onChange, axis = "y" }) => {
	const handleChange = (newItem: NameValueBoolean) => {
		const newValue = value.map((item) => {
			if (item.name === newItem.name) {
				return { ...item, value: !item.value };
			}
			return item;
		});

		onChange(newValue);
	};

	return (
		<div className={`flex  gap-3 ${axis === "x" ? "flex-row" : "flex-col"}`}>
			{label && <Text value={label} />}
			{value.map((item) => (
				<Checkbox
					key={item.name}
					label={item.name}
					value={item.value}
					onChange={() => handleChange(item)}
				/>
			))}
		</div>
	);
};

export default CheckboxGroup;
