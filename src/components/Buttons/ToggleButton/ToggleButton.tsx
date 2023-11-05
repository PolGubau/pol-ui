import { BaseProps, IconType, Variants } from "../../../types";
import { Button } from "../Button";
import useBoolean from "../../../hooks/useBoolean";

interface Props extends BaseProps {
	onChange?: (value: boolean) => void;
	onChangeValue?: (value: any) => void;
	isActive?: boolean;
	content: any;
	icon?: IconType;
}

const ToggleButton = ({
	onChange,
	onChangeValue,
	isActive = false,
	content,
	icon,
	className = "",
	style = {},
	id,
	ariaLabel,
}: Props) => {
	const { current, toggle } = useBoolean(isActive);
	const getLabel = () => {
		// If label is an array, return the 0 in false and 1 in true
		// if it's one element, return always the same

		if (Array.isArray(content)) {
			return content[current ? 0 : 1];
		} else {
			return content;
		}
	};
	const handleChange = () => {
		toggle();
		onChange?.(current);
		onChangeValue?.(getLabel());
	};

	return (
		<Button
			style={style}
			ariaLabel={ariaLabel}
			id={id}
			className={className}
			icon={icon}
			onClick={handleChange}
			variant={current ? Variants.filled : Variants.text}
		>
			{getLabel()}
		</Button>
	);
};

export default ToggleButton;
