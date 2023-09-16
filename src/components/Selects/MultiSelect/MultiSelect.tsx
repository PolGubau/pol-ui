import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import {
	ColorType,
	SizesComplete,
	ButtonVariant,
	IconType,
	Sizes,
	ColorTypes,
	ButtonVariants,
	SelectOption,
} from "../../../types";
import { selectStyles } from "../selectStyles";
import { useGetLabels } from "../../../hooks/useGetLabels";

interface Props {
	label?: string;
	fullWidth?: boolean;
	options: SelectOption[];
	placeholder?: string;
	variant?: ButtonVariant;
	color?: ColorType;
	buttonIcon?: IconType;
	keyField?: string;
	values?: SelectOption[];
	onChange?: (values: SelectOption[]) => void;
	rounded?: SizesComplete;
	className?: string;
	labelLimit?: number;
	and?: string;
}

export const MultiSelectDefaultPlaceholder = "Select Multiple";
export default function MultiSelect({
	label,
	placeholder = MultiSelectDefaultPlaceholder,
	fullWidth,
	options = [],
	variant = ButtonVariants.filled,
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	color = ColorTypes.primary,
	values = [],
	rounded = Sizes.lg,
	labelLimit = 3,
	className,
	and,
	onChange,
}: Props) {
	const [selected, setSelected] = useState<SelectOption[]>(values);

	const { getLabelFromOption, getLabelsString } = useGetLabels();

	const valueString: string = getLabelsString({
		options: selected,
		keyField,
		limit: labelLimit,
		placeholder,
		and,
	});

	console.log(valueString);

	const handleChanges = (values: SelectOption[]) => {
		setSelected(values);
		onChange?.(values);
	};

	return (
		<Listbox value={selected} onChange={handleChanges} multiple>
			{label && (
				<Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
			)}
			<Listbox.Button
				className={`${selectStyles({
					fullWidth,
					variant,
					color,
					rounded,
				})}
					${className}`}
				role="button"
			>
				<span className="block truncate">{valueString}</span>
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
				<Listbox.Options
					className={`absolute mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  z-80`}
				>
					{options.map((obj) => {
						const label = getLabelFromOption(obj, keyField);

						// the key is used to identify the item in the list
						// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
						return (
							<Listbox.Option
								key={label}
								className={({ active }) =>
									`relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
										active ? "bg-accent/30 text-accent" : "text-gray-900"
									}`
								}
								value={obj}
							>
								{({ active, selected }) => (
									<>
										<span
											className={`block truncate ${selected ? "font-medium" : "font-normal"} ${
												active ? "text-accent brightness-50" : "text-gray-900"
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
