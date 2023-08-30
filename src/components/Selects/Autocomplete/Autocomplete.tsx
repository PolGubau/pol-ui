import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import { SelectItems } from "./types";
import { IconName } from "../../../model/icons.model";
import { ButtonVariant } from "../../Buttons/Button/Button";
import { applyFullWidth } from "../../../style";
import { applyButtonVariant } from "../../Buttons/Button/Button.styles";
import { ColorTypes } from "../../../types";

interface Props {
	label?: string;
	fullWidth?: boolean;
	items: SelectItems[];
	placeholder?: string;
	variant?: ButtonVariant;
	buttonIcon?: IconName;
	keyField?: string;
	value?: SelectItems;
	onChange?: (value: SelectItems) => void;
	noFoundMessage?: string;
	color: ColorTypes;
}

export default function Autocomplete({
	label,
	placeholder = "Search",
	fullWidth,
	items = [],
	variant = "filled",
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	value,
	color = "primary",
	noFoundMessage = "Nothing found.",
	onChange,
}: Props) {
	const [selected, setSelected] = useState<undefined | SelectItems>(value ?? undefined);
	const [query, setQuery] = useState("");
	const firstFieldNotNullOrUndefined = (item: SelectItems): string => {
		return (
			Object.values(item)
				.find((value) => value !== null && value !== undefined)
				?.toString() ?? ""
		);
	};
	const takingFielWithDesired = (item: SelectItems): string => {
		const validField = item[keyField]?.toString() ?? firstFieldNotNullOrUndefined(item);
		return validField;
	};
	const filteredItems =
		query === ""
			? items
			: items.filter((item) =>
					takingFielWithDesired(item)
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	const handleChanges = (value: SelectItems) => {
		setSelected(value);
		onChange?.(value);
	};

	const buttonValue = (selected && takingFielWithDesired(selected)) ?? placeholder;

	return (
		<Combobox value={selected} onChange={handleChanges}>
			<div className="relative mt-1">
				{label && (
					<Combobox.Label className="block text-sm font-medium text-gray-700">
						{label}
					</Combobox.Label>
				)}

				<div
					className={`relative 
					cursor-pointer 
					rounded-lg    
					pr-10 text-left 
					transition-all
					
					
					focus:outline-none 
					focus-visible:border-accent
					focus-visible:ring-2 
					focus-visible:ring-white 
					focus-visible:ring-opacity-75 
					focus-visible:ring-offset-2 
					focus-visible:ring-offset-accent 
				
					active:ring-2
					active:ring-offset-2
					active:ring-offset-accent
					active:ring-white
					
					sm:text-sm
 					${applyButtonVariant({ variant, color })} 
					${applyFullWidth(fullWidth)}`}
				>
					<Combobox.Input
						className={`py-2 pl-3 w-full border-none text-sm focus:ring-0 focus:border-none bg-transparent focus:outline-none placeholder:text-current focus-within:ring-2`}
						displayValue={(person: any) => person.name}
						onChange={(event) => setQuery(event.target.value)}
						placeholder={buttonValue}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<Icon icon={buttonIcon} aria-hidden="true" />
					</Combobox.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition-all duration-150"
					enterFrom="-translate-y-1 opacity-0"
					enterTo="translate-y-0 opacity-100"
					leave="transition-all duration-150"
					leaveFrom="opacity-100 translate-y-1"
					leaveTo="opacity-0 translate-y-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className="absolute mt-1 max-h-60 w-fit min-w-[20vw] overflow-auto rounded-xl z-50 bg-white py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm focus:ring-4 focus-ring-accent">
						{filteredItems.length === 0 && query !== "" ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								{noFoundMessage}
							</div>
						) : (
							filteredItems.map((item) => {
								// the key is used to identify the item in the list
								// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
								const key =
									item[keyField]?.toString() ??
									item.name?.toString() ??
									firstFieldNotNullOrUndefined(item);
								return (
									<Combobox.Option
										key={key}
										className={({ active }) =>
											`relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
												active ? "bg-accent/20 " : ""
											}`
										}
										value={item}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
												>
													{key}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer text-accent `}
													>
														<Icon icon={IconNames.check} aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								);
							})
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}