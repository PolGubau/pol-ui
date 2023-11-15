import { Icon, IconNames } from "../../Base/Icon";
import { Button } from "../Button";
import { Transition } from "@headlessui/react";
import ConfettiExplosion from "react-confetti-explosion";
import { ButtonVariant, Colors, IconType, Side, Sides, Variants } from "../../../types";
import { IconButton } from "../IconButton";
import React from "react";
import useBoolean from "../../../hooks/useBoolean";

interface Props {
	label?: string;
	liked?: boolean;
	onLike?: () => void;
	iconLiked?: IconType;
	iconNotLiked?: IconType;
	variant?: ButtonVariant;
	iconPosition?: Side;
	hasConfetti?: boolean;
	colorLiked?: Colors;
	colorNotLiked?: Colors;
	colors?: string[];
}
const CopyButton: React.FC<Props> = ({
	label,
	liked = false,
	onLike,
	iconLiked = IconNames.heartFilled,
	iconNotLiked = IconNames.heart,
	variant = Variants.filled,
	iconPosition = Sides.right,
	hasConfetti = true,
	colorLiked = Colors.accent,
	colorNotLiked = Colors.primary,
	colors,
}) => {
	const { current, toggle } = useBoolean(liked);

	const handleLike = () => {
		toggle();
		onLike?.();
	};

	return label ? (
		<Button
			className="relative"
			color={current ? colorLiked : colorNotLiked}
			variant={variant}
			iconPosition={iconPosition}
			icon={
				<>
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
			onClick={handleLike}
		>
			{hasConfetti && current && (
				<ConfettiExplosion
					className="absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%]"
					force={0.4}
					duration={2200}
					particleCount={15}
					colors={colors}
					width={200}
					zIndex={999}
				/>
			)}
			{label}
		</Button>
	) : (
		<>
			<IconButton
				icon={current ? iconLiked : iconNotLiked}
				color={current ? colorLiked : colorNotLiked}
				variant={variant}
				onClick={handleLike}
			/>

			{hasConfetti && current && (
				<ConfettiExplosion
					force={0.4}
					duration={2200}
					colors={colors}
					particleCount={15}
					width={200}
					zIndex={999}
				/>
			)}
		</>
	);
};

export default CopyButton;
