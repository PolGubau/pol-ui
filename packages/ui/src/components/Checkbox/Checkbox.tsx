"use client";

import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { ColorsEnum } from "../../types/enums";
import type { DeepPartial } from "../../types/types";
import { Label } from "../Label";
import type { CheckboxProps } from "./props";
import type { CheckboxTheme } from "./theme";

const AnimatedCheckIcon = ({
	initial = true,
	isVisible = false,
	theme: customTheme = {},
	color = ColorsEnum.primary,
}: {
	initial?: boolean;
	isVisible?: boolean;
	theme?: DeepPartial<CheckboxTheme>;
	color?: CheckboxProps["color"];
}): React.ReactNode => {
	const theme = mergeDeep(getTheme().checkbox, customTheme);

	return (
		<AnimatePresence initial={initial} mode="wait">
			{isVisible && (
				<div className={cn(theme.floating.base)}>
					<svg
						width="24"
						height="18"
						viewBox="0 0 24 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={cn(
							theme.floating.svg,
							theme.check.color[color],
							"stroke-current",
						)}
					>
						<title>Check Icon</title>
						<motion.path
							d="M2.5 9.5L8.5 15.5L21.5 2.5"
							animate={{ pathLength: 1 }}
							initial={{ pathLength: 0 }}
							exit={{ pathLength: 0 }}
							strokeWidth="5"
							strokeLinecap="round"
							strokeLinejoin="round"
							transition={{
								type: "tween",
								duration: 0.3,
								ease: isVisible ? "easeOut" : "easeIn",
							}}
						/>
					</svg>
				</div>
			)}
		</AnimatePresence>
	);
};
const AnimatedIntermediateIcon = ({
	initial = true,
	isVisible = false,
	theme: customTheme = {},
	color = ColorsEnum.primary,
}: {
	initial?: boolean;
	isVisible?: boolean;
	theme?: DeepPartial<CheckboxTheme>;
	color?: CheckboxProps["color"];
}): React.ReactNode => {
	const theme = mergeDeep(getTheme().checkbox, customTheme);

	return (
		<AnimatePresence initial={initial} mode="wait">
			{isVisible && (
				<div className={cn(theme.floating.base)}>
					<svg
						width="24"
						height="18"
						viewBox="0 0 24 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={cn(
							theme.floating.svg,
							theme.check.color[color],
							"stroke-current",
						)}
					>
						<title>Intermediate Icon</title>
						<motion.path
							d="M2.5 9.5L21.5 9.5"
							animate={{ pathLength: 1 }}
							initial={{ pathLength: 0 }}
							exit={{ pathLength: 0 }}
							strokeWidth="5"
							strokeLinecap="round"
							strokeLinejoin="round"
							transition={{
								type: "tween",
								duration: 0.3,
								ease: isVisible ? "easeOut" : "easeIn",
							}}
						/>
					</svg>
				</div>
			)}
		</AnimatePresence>
	);
};

/**
 * @name Checkbox
 *
 * @description Checkbox component for user input, it can be used to select multiple options from a list. It can be used in forms, surveys, etc.
 *
 * @param {CheckboxProps} props - Props for the Checkbox component.
 *
 * @param {string} props.className - Additional class names for styling.
 *
 * @param {string} props.label - Label text for the checkbox.
 *
 * @param {Colors} props.color - Color of the checkbox.
 *
 * @param {DeepPartial<CheckboxTheme>} props.theme - Custom theme for the checkbox.
 *
 * @author Pol Gubau - Mesalvo, SUS
 *
 * @returns {React.ReactNode} - Rendered Checkbox component.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			checked = false,
			className,
			label,
			color = ColorsEnum.primary,
			theme: customTheme = {},
			onChange,
			...props
		},
		ref,
	) => {
		const theme = mergeDeep(getTheme().checkbox, customTheme);

		const [value, setValue] = useState(checked);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setValue(event.target.checked);
			onChange?.(event);
		};

		useEffect(() => {
			// just update the value if the checked prop changes
			if (checked === value) {
				return;
			}
			// if it's uncontrolled, update the value
			if (typeof checked !== "undefined") {
				setValue(checked);
			}
		}, [checked]);

		const state = {
			isFalse: Boolean(value) === false,
			isTrue: Boolean(value) === true && checked !== "indeterminate",
			isIntermediate: value === "indeterminate",
		};

		return (
			<div className="inline-flex items-center gap-3 relative ">
				<input
					id={props.id ?? label}
					{...props}
					checked={state.isTrue || state.isIntermediate}
					onChange={handleChange}
					className={cn(
						theme.base,
						theme.before,
						theme.color[color],
						className,
					)}
					ref={ref}
					type="checkbox"
				/>

				<>
					<AnimatedCheckIcon isVisible={state.isTrue ?? false} color={color} />
					<AnimatedIntermediateIcon
						isVisible={state.isIntermediate ?? false}
						color={color}
					/>
				</>
				{label && <Label htmlFor={props.id ?? label}>{label}</Label>}
			</div>
		);
	},
);

Checkbox.displayName = "Checkbox";
