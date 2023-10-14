import React from "react";
import { Icon, IconNames } from "../../Base/Icon";
import { Button } from "../Button";
import { Transition } from "@headlessui/react";
import ConfettiExplosion from "react-confetti-explosion";
import { ButtonVariant, IconType, Side, Sides, Variants } from "../../../types";
import { IconButton } from "../IconButton";

interface Props {
	label?: string;
	liked?: boolean;
	onLike?: () => void;
	iconLiked?: IconType;
	iconNotLiked?: IconType;
	variant?: ButtonVariant;
	iconPosition?: Side;
	hasConfetti?: boolean;
}
const CopyButton: React.FC<Props> = ({
	label,
	liked = false,
	onLike,
	iconLiked = IconNames.heart,
	iconNotLiked = IconNames.heartOutline,
	variant = Variants.filled,
	iconPosition = Sides.right,
	hasConfetti = true,

	...props
}) => {
	const [isLiked, setIsLiked] = React.useState(false);

	const handleLike = () => {
		setIsLiked((prev) => !prev);
	};

	return label ? (
		<Button
			variant={variant}
			iconPosition={iconPosition}
			icon={
				<>
					{liked && hasConfetti && (
						<ConfettiExplosion
							force={0.4}
							duration={2200}
							particleCount={15}
							width={200}
							zIndex={999}
						/>
					)}
					{liked ? (
						<Transition
							show={liked}
							enter="transition-all duration-1000 "
							enterFrom="opacity-0 transform scale-0"
							enterTo="opacity-100 transform scale-100"
							leave="transition-all duration-1000"
							leaveFrom="opacity-100 transform scale-100"
							leaveTo="opacity-0 	transform scale-0"
						>
							<Icon icon={iconLiked} />
						</Transition>
					) : (
						<Icon icon={iconNotLiked} />
					)}
				</>
			}
			{...props}
			onClick={handleLike}
		></Button>
	) : (
		<IconButton icon={isLiked ? iconLiked : iconNotLiked} onClick={handleLike} />
	);
};

export default CopyButton;
