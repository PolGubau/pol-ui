import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Button } from "../Button";
import { copyToClipboard } from "../../../utils";
import { Transition } from "@headlessui/react";
import ConfettiExplosion from "react-confetti-explosion";
import { ButtonVariant } from "../Button/Button";

interface Props {
	value?: string | number;
	valueToCopy: string | number | object;
	icon?: string;
	hasConfetti?: boolean;
	variant?: ButtonVariant;
}
const CopyButton: React.FC<Props> = ({
	value,
	valueToCopy,
	icon = IconNames.copy,
	hasConfetti = true,
	variant,
	...props
}) => {
	const printableValueToCopy =
		typeof valueToCopy === "object" ? JSON.stringify(valueToCopy) : valueToCopy;

	const text = value ?? printableValueToCopy;

	const [copied, setCopied] = React.useState(false);
	const handleCopy = () => {
		copyToClipboard(printableValueToCopy);
		setCopied(true);
	};

	return (
		<Button className={`truncate`} variant={variant} {...props} onClick={handleCopy}>
			{text}
			{!copied && <Icon className="ml-2" icon={icon} />}
			<Transition
				show={copied}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0 scale-50"
				enterTo="opacity-100 scale-100"
				leave="transition-opacity duration-500"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-50"
			>
				{hasConfetti && (
					<ConfettiExplosion
						force={0.4}
						duration={2200}
						particleCount={15}
						width={200}
						zIndex={999}
					/>
				)}
				<Icon className="ml-2" icon={IconNames.check} />
			</Transition>
		</Button>
	);
};

export default CopyButton;
