import React from "react";
import { Text } from "../../../Text";
import Radio from "../../Radio/Radio";
import { Direction, Directions } from "../../../../types";

// Example of value prop:
// const value = ['key1', 'key2', 'key3'];
// selectedValue = 'key1';

// So the value prop is an array of strings, and the selectedValue is a string.

interface Props {
	label?: string;
	value: string[] | number[];
	selectedValue: string | number;
	onChange: (newSelectedValue: string | number) => void;
	axis?: Direction;
	groupName: string;
}

const RadioGroup: React.FC<Props> = ({
	label,
	value = [],
	onChange,
	axis = Directions.y,
	selectedValue,
	groupName,
}) => {
	const handleChange = (newSelectedValue: string | number) => {
		onChange(newSelectedValue);
	};

	return (
		<div className={`flex  gap-3 ${axis === Directions.x ? "flex-row" : "flex-col"}`}>
			{label && <Text value={label} />}
			{value.map((item: string | number, index: number) => {
				const checked =
					typeof selectedValue === "number"
						? index === selectedValue
						: item.toString() === selectedValue;
				return (
					<Radio
						key={item}
						label={item.toString()}
						value={checked}
						name={groupName}
						onChange={() => handleChange(item)}
					/>
				);
			})}
		</div>
	);
};

export default RadioGroup;
