"use client";

import { cn } from "../../helpers";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { Button, type ButtonProps } from "../Button";
import { Tooltip } from "../Tooltip";
import type { IconButtonTheme } from "./theme";

export interface IconButtonProps extends ButtonProps {
	theme?: DeepPartial<IconButtonTheme>;
	label?: string;
	allowTooltip?: boolean;
}

/**
 * @name IconButton
 *
 * @description Base component for displaying icons as button with ripple effect, tooltip, and loading state
 *
 *
 * @returns React.FC IconButton component
 *
 * @example ```
 * <IconButton label="Search" color="primary" size="md" rounded="full" isLoading={false} outline={false}>
 *    <TbSearch />
 * </IconButton>
 *
 * <IconButton>
 *    <MdFilter />
 * </IconButton>
 *
 * <IconButton color="info" size="xl" rounded="none">
 *    <LogoIcon />
 * </IconButton>
 * ```
 *
 * @see https://ui.polgubau.com/docs/iconButton
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const IconButton = ({
	className,
	variant = "ghost",
	rounded = "full",
	theme: customTheme = {},
	label = undefined,
	allowTooltip = true,
	...props
}: IconButtonProps) => {
	const theme = mergeDeep(getTheme().iconButton, customTheme);

	return (
		<Tooltip label={allowTooltip && label}>
			<Button
				{...props}
				variant={variant}
				type={props.type ?? "button"}
				rounded={rounded}
				className={cn(theme.base, className)}
			/>
		</Tooltip>
	);
};
