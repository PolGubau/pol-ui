import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Button from "../../Buttons/Button/Button";
import useClickOutside from "../../../hooks/useClickOutside";
import { formatString } from "../../../utils";
import { Link } from "../../Buttons/Link";
import {
	ButtonVariants,
	ColorTypes,
	IconType,
	JustifyContents,
	Positions,
	Side,
	Sides,
	Sizes,
} from "../../../types";
import { menuStyles } from "./Menu.styles";
import { selectStyles } from "../selectStyles";
import { Icon, IconNames } from "../../Base";
import { BaseButtonProps } from "../types";

export interface MenuItem {
	id?: string;
	label?: string;
	icon?: IconType;
	onClick?: () => void;
	href?: string;
}

interface Props extends BaseButtonProps {
	options: MenuItem[];
	iconSide?: Side;
	openIcon?: IconType;
	closeIcon?: IconType;
	dividers?: boolean;
	direction?: Positions;
	icon?: IconType;
}

export default function Menu({
	label,
	options = [],
	variant = ButtonVariants.filled,
	iconSide = Sides.left,
	openIcon = IconNames.expand,
	closeIcon = openIcon ?? IconNames.expand,
	dividers = false,
	direction = "bottom",
	fullWidth = false,
	color = ColorTypes.primary,
	rounded = Sizes.lg,
	className = "",
	size = Sizes.md,
	disabled = false,
	centered = false,
	buttonIcon,
	icon,
	padding = { x: Sizes.md, y: Sizes.sm },
	justify = "center",
	position = "relative",
}: Props) {
	const [open, setOpen] = useState<boolean>(false);

	const modalRef = useRef(null);
	useClickOutside(modalRef, () => {
		setOpen(false);
	});

	useEffect(() => {
		// if you press esc key, close menu
		window.addEventListener("keydown", keyDownHandler);
		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	const keyDownHandler = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			setOpen(false);
		}
	};

	return (
		<div className="relative" ref={modalRef}>
			<Button
				className={`${selectStyles({
					rounded,
					fullWidth,
					variant,
					color,
					size,
					disabled,
					centered,
					padding,
					justify,
					className,
					position,
				})}
					${className}`}
				variant={variant}
				icon={icon}
				onClick={() => {
					if (!options.length) return;
					setOpen((prev) => !prev);
				}}
				iconPosition={iconSide}
				customRef={modalRef}
				fullWidth={fullWidth}
			>
				{label}
				{options.length > 0 && (
					<Icon
						icon={open ? closeIcon : openIcon}
						aria-hidden="true"
						className="pointer-events-none inset-y-0 flex items-center "
					/>
				)}
			</Button>
			<Transition
				show={open}
				enter="transition-all duration-150"
				enterFrom="translate-y-0 opacity-0"
				enterTo="translate-y-1 opacity-100"
				leave="transition-all duration-150"
				leaveFrom="opacity-100 translate-y-1"
				leaveTo="opacity-0 translate-y-0"
				className={menuStyles({ direction })}
			>
				<>
					{options.map((item) => (
						<>
							{item.href ? (
								<Link
									justify={JustifyContents.start}
									key={item.label}
									icon={item.icon}
									variant="text"
									fullWidth
									href={item.href}
								>
									{item.label && formatString(item.label)}
								</Link>
							) : (
								<Button
									justify={JustifyContents.start}
									key={item.label}
									icon={item.icon}
									variant="text"
									fullWidth
									onClick={item.onClick}
								>
									{item.label && formatString(item.label)}
								</Button>
							)}
							{dividers && <div className="h-px bg-primary/20" />}
						</>
					))}
				</>
			</Transition>
		</div>
	);
}
