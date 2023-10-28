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
	selectedValue = 0,
	groupName,
}) => {
	const isThisChecked = (item: string | number) => {
		return typeof selectedValue === "number"
			? item === selectedValue
			: item.toString() === selectedValue;
	};
	const [indexChecked, setIndexChecked] = React.useState<number>(
		value.findIndex((item) => isThisChecked(item))
	);

	const handleChange = (newSelectedValue: string | number) => {
		setIndexChecked(value.findIndex((item) => isThisChecked(item)));
		onChange(newSelectedValue);
	};

	return (
		<div className="flex flex-col gap-2">
			{label && <Text isMarkdown value={label} />}
			<div className={`flex  gap-3 ${axis === Directions.x ? "flex-row" : "flex-col"}`}>
				{value.map((item: string | number, index: number) => {
					return (
						<Radio
							key={item}
							label={item.toString()}
							value={indexChecked === index}
							name={groupName}
							onChange={() => handleChange(item)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RadioGroup;
