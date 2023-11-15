import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import {
	Color,
	SizesComplete,
	ButtonVariant,
	IconType,
	SelectOption,
	Variants,
	Colors,
	Sizes,
	Size,
	PaddingOneOrBothValues,
	Position,
	JustifyContent,
	JustifyContents,
} from "../../../types";
import { selectStyles } from "../selectStyles";
import { labelClasses, popupStyles } from "../types";

interface Props {
	label?: string;
	fullWidth?: boolean;
	items: SelectOption[];
	placeholder?: string;
	variant?: ButtonVariant;
	buttonIcon?: IconType;
	keyField?: string;
	value?: SelectOption;
	rounded?: SizesComplete;
	color?: Color;
	onChange?: (value: SelectOption) => void;
	nullable?: boolean;
	className?: string;
	disabled?: boolean;
	size?: Size;
	centered?: boolean;
	padding?: PaddingOneOrBothValues;
	justify?: JustifyContent;
	position?: Position;
}
export default function Select({
	label,
	placeholder = "Select",
	fullWidth = false,
	items = [],
	variant = Variants.filled,
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	value,
	color = Colors.primary,
	rounded = Sizes.lg,
	onChange,
	nullable = false,
	className = "",
	disabled = false,
	size = Sizes.md,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	justify = JustifyContents.center,
	position = "relative",
}: Props) {
	const [selected, setSelected] = useState<undefined | SelectOption>(value ?? undefined);

	const handleChanges = (value: SelectOption) => {
		setSelected(value);
		onChange?.(value);
	};

	const firstFieldNotNullOrUndefined = (item: SelectOption): string => {
		return (
			Object.values(item)
				.find((value) => value !== null && value !== undefined)
				?.toString() ?? ""
		);
	};

	const returnObjectIfNotNumberString = (item: SelectOption): string | number => {
		if (typeof item === "string") return item;
		if (typeof item === "number") return item;

		return item[keyField]?.toString() ?? firstFieldNotNullOrUndefined(item);
	};

	const takingFielWithDesired = (item: SelectOption): string | number => {
		return returnObjectIfNotNumberString(item);
	};

	const buttonValue = (selected && takingFielWithDesired(selected)) ?? placeholder ?? "Select";

	return (
		<Listbox value={selected} onChange={handleChanges}>
			<div className="relative">
				{label && <Listbox.Label className={labelClasses}>{label}</Listbox.Label>}
				<Listbox.Button
					className={`${selectStyles({
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
					 `}
				>
					<span className="block truncate pr-4">{buttonValue}</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<Icon icon={buttonIcon} aria-hidden="true" />
					</span>
				</Listbox.Button>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className={`${popupStyles} ${fullWidth ? "w-full" : "w-fit"} `}>
						{nullable && (
							<Listbox.Option
								className={({ active }) =>
									`relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
										active ? "bg-accent/30 text-accent" : "text-primary/90"
									}`
								}
								value={undefined}
							>
								{({ active, selected }) => (
									<>
										<span
											className={`block truncate ${selected ? "font-medium" : "font-normal"} ${
												active ? "text-accent brightness-50" : "text-primary/90"
											}`}
										>
											{"None"}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
												<Icon icon={IconNames.check} aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						)}
						{items.map((person) => {
							// the key is used to identify the item in the list
							// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
							const key =
								returnObjectIfNotNumberString(person) ?? firstFieldNotNullOrUndefined(person);
							return (
								<Listbox.Option
									key={key}
									className={({ active }) =>
										`relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
											active ? "bg-accent/30 text-accent" : "text-gray-900"
										}`
									}
									value={person}
								>
									{({ active, selected }) => (
										<>
											<span
												className={`block truncate ${selected ? "font-medium" : "font-normal"} ${
													active ? "text-accent brightness-50" : "text-gray-900"
												}`}
											>
												{key}
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
			</div>
		</Listbox>
	);
}
