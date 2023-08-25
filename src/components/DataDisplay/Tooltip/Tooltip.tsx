import React, { Fragment } from "react";
import { useHover } from "../../../hooks";
import { Transition } from "@headlessui/react";
import { tooltipContainerStyle, tooltipStylePosition } from "./Tooltip.styles";
import { BasicProps } from "../../../types";

interface Props extends BasicProps {
	content: React.ReactNode | string;
	position?: "top" | "bottom" | "left" | "right";
	enterDelay?: number;
	leaveDelay?: number;
	tooltipClassName?: string;
	tooltipStyle?: React.CSSProperties;
}

const Tooltip = ({
	children,
	content,
	position = "top",
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
		<div className={tooltipContainerStyle()}>
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
						isJustText: typeof content === "string",
					})} ${tooltipClassName ?? ""}`}
					style={tooltipStyle}
				>
					{content}
				</div>
			</Transition>

			<div {...hoverProps} className={className} id={id} style={style}>
				{children}
			</div>
		</div>
	);
};

export default Tooltip;
