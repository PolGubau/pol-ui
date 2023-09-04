import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Button, { ButtonVariant } from "../../Buttons/Button/Button";
import useClickOutside from "../../../hooks/useClickOutside";
import { formatString } from "../../../utils";
import { Link } from "../../Buttons/Link";
import { Positions, Side } from "../../../types";
import { menuStyles } from "./Menu.styles";

export interface MenuItem {
	id?: string;
	label: string;
	icon?: string;
	onClick?: () => void;
	href?: string;
}

interface Props {
	label?: string;
	items: MenuItem[];
	variant?: ButtonVariant;
	iconSide?: Side;
	openIcon?: string;
	closeIcon?: string;
	dividers?: boolean;
	direction?: Positions;
	fullWidth?: boolean;
}

export default function Menu({
	label,
	items = [],
	variant = "filled",
	iconSide = "right",
	openIcon = "arrowDown",
	closeIcon = openIcon ?? "arrowDown",
	dividers = false,
	direction = "bottom",
	fullWidth = false,
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
				variant={variant}
				onClick={() => {
					if (!items.length) return;
					setOpen((prev) => !prev);
				}}
				icon={Boolean(items.length) && (open ? closeIcon : openIcon)}
				iconPosition={iconSide}
				ref={modalRef}
				fullWidth={fullWidth}
			>
				{label}
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
							<Link key={item.label} icon={item.icon} variant="text" fullWidth href={item.href}>
								{formatString(item.label)}
							</Link>
						) : (
							<Button
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
