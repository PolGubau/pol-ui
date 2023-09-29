import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import { Sizes, Colors, Variants, SelectOption, JustifyContents } from "../../../types";
import { selectStyles } from "../selectStyles";
import { useGetLabels } from "../../../hooks/useGetLabels";
import { BaseButtonProps, labelClasses, popupStyles } from "../types";

interface Props extends BaseButtonProps {
	options: SelectOption[];
	keyField?: string;
	values?: SelectOption[];
	onChange?: (values: SelectOption[]) => void;
	labelLimit?: number;
	and?: string;
}

export const MultiSelectDefaultPlaceholder = "Select Multiple";
export default function MultiSelect({
	label,
	placeholder = MultiSelectDefaultPlaceholder,
	options = [],
	variant = Variants.filled,
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	color = Colors.primary,
	values = [],
	rounded = Sizes.lg,
	labelLimit = 3,
	className,
	and,
	onChange,
	fullWidth = false,
	nullable = false,
	disabled = false,
	size = Sizes.md,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	justify = JustifyContents.center,
	position = "relative",
}: Props) {
	const [selected, setSelected] = useState<SelectOption[]>(values);

	const { getLabelFromOption, getProperLabel } = useGetLabels();

	const valueString: string = getProperLabel({
		options: selected,
		keyField,
		limit: labelLimit,
		placeholder,
		and,
	});

	const handleChanges = (values: SelectOption[]) => {
		setSelected(values);
		onChange?.(values);
	};

	return (
		<Listbox value={selected} onChange={handleChanges} multiple>
			{label && <Listbox.Label className={labelClasses}>{label}</Listbox.Label>}
			<Listbox.Button
				className={`
				${selectStyles({
					rounded,
					size,
					fullWidth,
					disabled,
					centered,
					padding,
					variant,
					color,
					justify,
					className,
					position,
				})}

					${className}`}
				role="button"
			>
				<span className="block truncate pr-4">{valueString}</span>
				<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<Icon icon={buttonIcon} aria-hidden="true" />
				</span>
			</Listbox.Button>

			<Transition
				as={Fragment}
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<Listbox.Options className={`${popupStyles} ${fullWidth ? "w-full" : "w-fit"} `}>
					{options.map((obj) => {
						const label = getLabelFromOption(obj, keyField);

						// the key is used to identify the item in the list
						// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
						return (
							<Listbox.Option
								key={label}
								className={({ active }) =>
									`relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
										active ? "bg-accent/30 " : "text-primary/90"
									}`
								}
								value={obj}
							>
								{({ active, selected }) => (
									<>
										<span
											className={`block truncate ${selected ? "font-medium" : "font-normal"} ${
												active ? "text-accent brightness-50" : "text-primary/90"
											}`}
										>
											{label}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
												<Icon icon={IconNames.check} aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						);
					})}
				</Listbox.Options>
			</Transition>
		</Listbox>
	);
}
