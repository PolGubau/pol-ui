import { applyMaxWidth, applyPadding, applyRounded } from "../../../style";
import { Direction, Directions, SizesComplete, SizesWithFull, SizesWithNone } from "../../../types";
import { Checkbox, Field, Radio, RadioGroup, Range, Switch } from "../../Inputs";
import { Autocomplete, MultiSelect } from "../../Selects";
import Form from "../Form/Form";

export type Input = {
	label?: string;
	name?: string;
	items?: string[];
	type?:
		| "text"
		| "number"
		| "date"
		| "select"
		| "radio"
		| "checkbox"
		| "switch"
		| "textarea"
		| "selectMultiple"
		| "autocomplete"
		| "range"
		| "color"
		| "radioGroup";
	value?: string | number | boolean;
	onChange?: () => void;
	min?: number;
	max?: number;
	step?: number;
	placeholder?: string;
	selectedValue?: string | number;
	direction?: Direction;
};

interface Props {
	inputs: Input[];
	maxWidth?: SizesWithFull;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
	direction?: "row" | "column";
	onSubmit?: () => void;
}
const AutoForm: React.FC<Props> = ({
	inputs,
	maxWidth = "full",
	padding = "none",
	rounded = "none",
	direction = "column",
	onSubmit,
}) => {
	return (
		<Form
			onSubmit={onSubmit ?? (() => null)}
			direction={direction}
			className={`flex gap-4 ${applyRounded(rounded)} ${applyPadding(padding)} ${applyMaxWidth(
				maxWidth
			)}`}
		>
			{inputs.map((input) => {
				switch (input.type) {
					case "number":
						return (
							<Field
								label={input.label}
								name={input.name}
								type="number"
								value={Number(input.value)}
								onChange={() => input.onChange?.()}
							/>
						);
					case "date":
						return (
							<Field
								type="date"
								label={input.label}
								name={input.name}
								value={input.value?.toString()}
								onChange={() => input.onChange?.()}
							/>
						);
					case "select":
						return (
							<select>
								{input.items?.map((item) => (
									<option value={item}>{item}</option>
								))}
							</select>
						);
					case "radio":
						return (
							<Radio
								label={input.label}
								value={Boolean(input.value)}
								onChange={() => input.onChange?.()}
							/>
						);
					case "radioGroup":
						return (
							<RadioGroup
								label={input.label}
								onChange={() => input.onChange?.()}
								value={input.items ?? []}
								groupName={input.label ?? "radioGroup"}
								selectedValue={input.selectedValue ?? 0}
								axis={input.direction ?? Directions.x}
							/>
						);
					case "checkbox":
						return (
							<Checkbox
								label={input.label}
								value={Boolean(input.value)}
								onChange={() => input.onChange?.()}
							/>
						);
					case "switch":
						return (
							<Switch
								label={input.label}
								checked={Boolean(input.value)}
								onChange={() => input.onChange?.()}
							/>
						);
					case "textarea":
						return (
							<Field
								multiline
								label={input.label}
								name={input.name}
								value={input.value?.toString()}
								onChange={() => input.onChange?.()}
							/>
						);
					case "selectMultiple":
						return (
							<MultiSelect
								options={input.items ?? []}
								label={input.label}
								onChange={() => null}
								placeholder={input.placeholder}
							/>
						);
					case "autocomplete":
						return (
							<Autocomplete
								options={input.items ?? []}
								label={input.label}
								onChange={() => null}
								placeholder={input.placeholder}
							/>
						);

					case "range":
						return (
							<Range
								value={Number(input.value)}
								label={input.label}
								onChange={() => input.onChange?.()}
								min={input.min}
								max={input.max}
								step={input.step}
							/>
						);
					default:
						return (
							<Field
								label={input.label}
								name={input.name}
								value={input.value?.toString()}
								onChange={() => input.onChange?.()}
							/>
						);
				}
			})}
		</Form>
	);
};

export default AutoForm;
