import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { tooltipStylePosition } from "./Tooltip.styles";
import { BaseProps, Placement, Placements } from "../../../types";
import { useHover } from "../../../hooks";

interface Props extends BaseProps {
	content: React.ReactNode | string;
	position?: Placement;
	enterDelay?: number;
	leaveDelay?: number;
	tooltipClassName?: string;
	tooltipStyle?: React.CSSProperties;
	children: React.ReactNode;
	className?: string;
}

const Tooltip = ({
	children,
	content,
	position = Placements.top,
	className,
	id,
	style,
	enterDelay,
	leaveDelay,
	tooltipClassName,
	tooltipStyle,
}: Props) => {
	const { isHovering, hoverProps } = useHover({ enterDelay, leaveDelay });

	return (
		<div className="relative">
			<Transition
				as={Fragment}
				show={isHovering}
				enter="transition-all duration-150"
				enterFrom="scale-0 opacity-0"
				enterTo="scale-100 opacity-100"
				leave="transition-all duration-150"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-0"
			>
				<div
					className={`${tooltipStylePosition({
						position,
					})} ${tooltipClassName ?? ""}`}
					style={tooltipStyle}
				>
					{content}
				</div>
			</Transition>

			<div {...hoverProps} className={`min-w-[20px] w-full ${className}`} id={id} style={style}>
				{children}
			</div>
		</div>
	);
};

export default Tooltip;
