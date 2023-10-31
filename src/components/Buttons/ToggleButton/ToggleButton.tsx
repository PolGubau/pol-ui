import useToggle from "../../../hooks/useToggle";
import { IconType, Variants } from "../../../types";
import { Button } from "../Button";

interface Props {
	onChange?: (value: string) => void;
	isActive?: boolean;
	label: string | string[];
	icon?: IconType;
}

const ToggleButton = ({ onChange, isActive = false, label, icon }: Props) => {
	const { currentOption, toggle } = useToggle({
		values: [true, false],
	});
	const handleChange = () => {
		toggle();
		onChange?.(currentOption);
	};

	const getLabel = () => {
		// If label is an array, return the 0 in false and 1 in true
		// if is an string, return always the same
		if (typeof label === "string") {
			return label;
		}

		if (Array.isArray(label)) {
			return label[currentOption ? 0 : 1];
		}
		return label;
	};

	return (
		<Button
			icon={icon}
			onClick={handleChange}
			variant={currentOption ? Variants.filled : Variants.text}
		>
			{getLabel()}
		</Button>
	);
};

export default ToggleButton;
