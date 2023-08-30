import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import { IconName } from "../../../model/icons.model";
import { SelectItems } from "./types";
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
	color?: ColorTypes;
	buttonIcon?: IconName;
	keyField?: string;
	values?: SelectItems[];
	onChange?: (values: SelectItems[]) => void;
}
export default function MultiSelect({
	label,
	placeholder = "Select",
	fullWidth,
	items,
	variant = "filled",
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	color = "primary",
	values = [],
	onChange,
}: Props) {
	const [selected, setSelected] = useState<SelectItems[]>(values);

	const handleChanges = (values: SelectItems[]) => {
		console.log("values", values);
		setSelected(values);

		onChange?.(values);
	};

	const firstFieldNotNullOrUndefined = (item: SelectItems): string => {
		return (
			Object.values(item)
				.find((value) => value !== null && value !== undefined)
				?.toString() ?? ""
		);
	};
	const takingFielWithDesired = (items: SelectItems[] = []): string => {
		const allSelectedNames = items.map(
			(item) => item[keyField]?.toString() ?? firstFieldNotNullOrUndefined(item)
		);
		return allSelectedNames.join(", ");
	};

	const takeButtonName = (): string => {
		if (selected?.length === 0 || selected === undefined) return placeholder ?? "Select";
		if (selected.length >= 1) return takingFielWithDesired(selected);

		return "Select";
	};
	return (
		<Listbox value={selected} onChange={handleChanges} multiple>
			{label && (
				<Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
			)}
			<Listbox.Button
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
					${applyFullWidth(fullWidth)}
					
					`}
				role="button"
			>
				<span className="block truncate">{takeButtonName()}</span>
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
					className={`absolute mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  `}
				>
					{items.map((person) => {
						// the key is used to identify the item in the list
						// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
						const key =
							person[keyField]?.toString() ??
							person.name?.toString() ??
							firstFieldNotNullOrUndefined(person);
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
		</Listbox>
	);
}