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
	textAfterCopied?: string;
}
const CopyButton: React.FC<Props> = ({
	value,
	valueToCopy,
	icon = IconNames.copy,
	hasConfetti = true,
	variant,
	textAfterCopied,
	...props
}) => {
	const printableValueToCopy =
		typeof valueToCopy === "object" ? JSON.stringify(valueToCopy) : valueToCopy;

	const textBeforeCopied = value ?? printableValueToCopy;

	const [copied, setCopied] = React.useState(false);
	const handleCopy = () => {
		copyToClipboard(printableValueToCopy);
		setCopied(true);
	};

	return (
		<Button
			className={`truncate`}
			variant={variant}
			iconPosition="right"
			icon={
				<>
					{copied && hasConfetti && (
						<ConfettiExplosion
							force={0.4}
							duration={2200}
							particleCount={15}
							width={200}
							zIndex={999}
						/>
					)}
					{copied ? (
						<Transition
							show={copied}
							enter="transition-all duration-1000 "
							enterFrom="opacity-0 transform scale-0"
							enterTo="opacity-100 transform scale-100"
							leave="transition-all duration-1000"
							leaveFrom="opacity-100 transform scale-100"
							leaveTo="opacity-0 	transform scale-0"
						>
							<Icon icon={IconNames.check} />
						</Transition>
					) : (
						<Icon icon={icon} />
					)}
				</>
			}
			{...props}
			onClick={handleCopy}
		>
			{copied ? textAfterCopied ?? textBeforeCopied : textBeforeCopied}
		</Button>
	);
};

export default CopyButton;
