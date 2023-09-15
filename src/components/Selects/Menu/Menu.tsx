import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Button from "../../Buttons/Button/Button";
import useClickOutside from "../../../hooks/useClickOutside";
import { formatString } from "../../../utils";
import { Link } from "../../Buttons/Link";
import { ButtonVariant, ColorType, IconType, Positions, Side, SizesComplete } from "../../../types";
import { menuStyles } from "./Menu.styles";
import { selectStyles } from "../selectStyles";
import { Icon } from "../../Base";

export interface MenuItem {
	id?: string;
	label: string;
	icon?: IconType;
	onClick?: () => void;
	href?: string;
}

interface Props {
	label?: string;
	items: MenuItem[];
	variant?: ButtonVariant;
	iconSide?: Side;
	openIcon?: IconType;
	closeIcon?: IconType;
	dividers?: boolean;
	direction?: Positions;
	fullWidth?: boolean;
	color?: ColorType;
	rounded?: SizesComplete;
	className?: string;
}

export default function Menu({
	label,
	items = [],
	variant = "filled",
	iconSide = "right",
	openIcon = "arrowdown",
	closeIcon = openIcon ?? "arrowDown",
	dividers = false,
	direction = "bottom",
	fullWidth = false,
	color = "primary",
	rounded = "lg",
	className = "",
}: Props) {
	const [open, setOpen] = useState(false);
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
					fullWidth,
					variant,
					color,
					rounded,
				})}
					${className}`}
				variant={variant}
				onClick={() => {
					if (!items.length) return;
					setOpen((prev) => !prev);
				}}
				iconPosition={iconSide}
				customRef={modalRef}
				fullWidth={fullWidth}
			>
				{label}
				{items.length > 0 && (
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<Icon icon={open ? closeIcon : openIcon} aria-hidden="true" />
					</span>
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
				<div className={`p-1 ${dividers ? "divide-y divide-gray-100" : ""} gap-col gap-0.5`}>
					{items.map((item) =>
						item.href ? (
							<Link
								justify="start"
								key={item.label}
								icon={item.icon}
								variant="text"
								fullWidth
								href={item.href}
							>
								{formatString(item.label)}
							</Link>
						) : (
							<Button
								justify="start"
								key={item.label}
								icon={item.icon}
								variant="text"
								fullWidth
								onClick={item.onClick}
							>
								{formatString(item.label)}
							</Button>
						)
					)}
				</div>
			</Transition>
		</div>
	);
}
