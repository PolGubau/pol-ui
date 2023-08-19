import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Button, { ButtonType } from "../../Buttons/Button/Button";
import useClickOutside from "../../../hooks/useClickOutside";
import { Side } from "../../../common";
import { formatString } from "../../../utils";
import { Link } from "../../Buttons/Link";

export interface MenuItem {
	id: string;
	label: string;
	icon?: string;
	onClick?: () => void;
	href?: string;
}

interface Props {
	label?: string;
	items: MenuItem[];
	buttonType?: ButtonType;
	iconSide?: Side;
	openIcon?: string;
	closeIcon?: string;
	dividers?: boolean;
}

export default function Menu({
	label,
	items = [],
	buttonType = "normal",
	iconSide = "right",
	openIcon = "arrowDown",
	closeIcon = openIcon ?? "arrowDown",
	dividers = false,
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
				onlyIcon={!label}
				type={buttonType}
				onClick={() => {
					setOpen((prev) => !prev);
				}}
				icon={open ? closeIcon : openIcon}
				iconPosition={iconSide}
				ref={modalRef}
			>
				{label}
			</Button>
			<Transition
				show={open}
				enter="transition-all duration-75"
				enterFrom="translate-y-0 opacity-0"
				enterTo="translate-y-1 opacity-100"
				leave="transition-all duration-150"
				leaveFrom="opacity-100 translate-y-1"
				leaveTo="opacity-0 translate-y-0"
				className={`absolute left-0 mt-2 w-56 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 `}
			>
				<div className={`p-1 ${dividers ? "divide-y divide-gray-100" : ""} gap-col gap-0.5`}>
					{items.map((item) =>
						item.href ? (
							<Link key={item.id} icon={item.icon} type="text" fullWidth href={item.href}>
								{formatString(item.label)}
							</Link>
						) : (
							<Button key={item.id} icon={item.icon} type="text" fullWidth onClick={item.onClick}>
								{formatString(item.label)}
							</Button>
						)
					)}
				</div>
			</Transition>
		</div>
	);
}
