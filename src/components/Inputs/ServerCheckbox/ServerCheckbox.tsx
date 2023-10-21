import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Transition } from "@headlessui/react";
import {
	applyBgColorInChecked,
	applyColor,
	applyDisabled,
	applyRounded,
	applyTextSize,
} from "../../../style";
import {
	BaseProps,
	Color,
	Colors,
	IconType,
	Identifier,
	Size,
	Sizes,
	SizesComplete,
} from "../../../types";
import { Text } from "../../Text";

interface Props extends BaseProps {
	label?: Identifier;
	disabled?: boolean;
	errorMessage?: string;
	color?: Color;
	checkIcon?: IconType;
	name?: string;
	iconColor?: Color;
	size?: Size;
	rounded?: SizesComplete;
}

const ServerCheckbox: React.FC<Props> = ({
	label,
	disabled = false,
	errorMessage,
	color = Colors.accent,
	checkIcon = IconNames.check,
	iconColor = Colors.background,
	name,
	rounded = Sizes.sm,
	size = Sizes.md,
	id,
	ariaLabel = "Checkbox",
	style = {},
	className = "",
}) => {
	return (
		<>
			<div className="flex items-center">
				<input
					checked
					id="checked-checkbox"
					type="checkbox"
					value=""
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					htmlFor="checked-checkbox"
					className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Checked state
				</label>
			</div>

			{label && <Text>{label?.toString()}</Text>}

			{errorMessage && (
				<Text size={12} className={applyColor(Colors.danger)}>
					{errorMessage}
				</Text>
			)}
		</>
	);
};

export default ServerCheckbox;
