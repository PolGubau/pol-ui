import { type ComponentProps, forwardRef, useId } from "react";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum } from "../../types";
import { makeLabelContent } from "../Input/Input";
import type { BaseInputsProps } from "../Input/props";
import type { InputTheme } from "../Input/theme";

export interface TextAreaProps
	extends Omit<
			ComponentProps<"textarea">,
			"ref" | "color" | "size" | "placeholder"
		>,
		BaseInputsProps {
	wrapperClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			className,
			error,
			color = error ? ColorsEnum.error : ColorsEnum.primary,
			helperText,
			icon: Icon,
			iconPosition = "left",
			size = MainSizesEnum.md,
			theme: customTheme = {},
			label,
			wrapperClassName,
			rightContent,
			leftContent,
			labelClassName = "",
			onChangeEnd,
			onChangeValue,
			...props
		},
		ref,
	) => {
		const theme: InputTheme = mergeDeep(getTheme().textInput, customTheme);
		const ui = useId();
		return (
			<div className="pt-1 flex-1">
				<div className={cn(theme.base, wrapperClassName)}>
					{Icon && (
						<div
							className={cn(
								theme.icon.base,
								theme.textarea.icon,
								theme.icon.position[iconPosition],
							)}
						>
							<Icon data-testid="icon" />
						</div>
					)}
					{leftContent && <div className={cn("pl-2")}>{leftContent}</div>}

					<textarea
						autoComplete={props.autoComplete ?? "off"}
						autoCapitalize={props.autoCapitalize ?? "off"}
						ref={ref}
						name={props.name ?? ui}
						onChange={(e) => {
							onChangeValue?.(e.target.value);
							props.onChange?.(e);
						}}
						onBlur={(e) => {
							onChangeEnd?.(e.target.value);
							props.onBlur?.(e);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								onChangeEnd?.(e.currentTarget.value);
							}
							props.onKeyDown?.(e);
						}}
						{...props}
						className={cn(
							"field-sizing-content min-h-20 max-h-48",
							theme.input.base,
							theme.input.size[size],
							theme.input.hasLeftIcon[
								Icon && iconPosition === "left" ? "on" : "off"
							],
							className,
						)}
						placeholder=" "
					/>
					{rightContent && <div className={cn("pr-2")}>{rightContent}</div>}

					<label
						className={cn(
							theme.label.base,
							theme.label.colors[color],
							theme.label.hasLeftContent[label && leftContent ? "on" : "off"],
							theme.label.hasLeftIcon[
								Icon && iconPosition === "left" ? "on" : "off"
							],
							// theme.textarea.label,
							theme.textarea[label && leftContent ? "null" : "label"],

							labelClassName,
						)}
						htmlFor={props.name ?? ui}
					>
						{makeLabelContent(label, props.required ?? false)}
					</label>

					{/* Field when no hover */}
					<fieldset
						className={cn(
							theme.field.base,
							theme.field.unfilled,
							theme.field.color[color],
						)}
					>
						<legend
							className={cn(
								theme.field.legend.base,
								theme.field.legend.unfilled,
								theme.field.legend.static[leftContent ? "on" : "off"],
							)}
						>
							{makeLabelContent(label, props.required ?? false)}
						</legend>
					</fieldset>

					{/* Fieldset when input is filled */}
					<fieldset
						className={cn(
							theme.field.base,
							theme.field.filled,
							theme.field.color[color],
						)}
					>
						<legend
							className={cn(theme.field.legend.base, theme.field.legend.filled)}
						>
							{makeLabelContent(label, props.required ?? false)}
						</legend>
					</fieldset>
				</div>
				{(error || helperText) && (
					<p
						className={cn(
							theme.helperText.base,
							color === "error" && theme.helperText.error,
						)}
					>
						{error ?? helperText}
					</p>
				)}
			</div>
		);
	},
);
