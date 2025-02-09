"use client";

import type { ComponentProps, FC } from "react";
import { TbTrash } from "react-icons/tb";

import { cn } from "../../helpers";
import { useTranslate } from "../../hooks/use-translate";
import { Button, type ButtonProps } from "../Button";
import {
	DialogClose,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../Dialog";
import { DrawerDialog } from "../DrawerDialog";
import { IconButton } from "../IconButton";

type OptionalProps = {
	icon?: FC<ComponentProps<"svg">>;
	className?: string;
	label?: string;
	triggerProps?: ButtonProps;
};
export type DeleteButtonProps = OptionalProps & {
	onConfirm: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
	onConfirm,
	icon: Icon = TbTrash,
	className,
	label,
	...rest
}) => {
	const { t } = useTranslate();

	return (
		<>
			<DrawerDialog
				{...rest}
				trigger={
					label ? (
						<Button
							{...rest.triggerProps}
							label={t(label ?? "delete")}
							color="error"
							variant={"ghost"}
							className={cn("text-error", className)}
						>
							<Icon size={17} />
							{label && <span className="hidden  md:flex">{label}</span>}
						</Button>
					) : (
						<IconButton
							{...rest.triggerProps}
							label={t("delete")}
							color="error"
							size="sm"
							className={`text-error ${className}`}
						>
							<Icon size={17} />
						</IconButton>
					)
				}
			>
				<>
					<DialogHeader>
						<DialogTitle>{t("delete")}</DialogTitle>
						{t("thisItemWillBeDeletedForeverALotOfTime")}
					</DialogHeader>
					<DialogFooter className="pt-8">
						<DialogClose>
							<Button
								variant={"ghost"}
								color="secondary"
								type="button"
								name="cancel-button"
								data-testid="cancel-button"
							>
								{t("cancel")}
							</Button>
						</DialogClose>
						<DialogClose>
							<Button
								autoFocus={true}
								onClick={onConfirm}
								color="error"
								type="button"
								name="delete-button"
								data-testid="delete-button"
							>
								{t("delete")}
							</Button>
						</DialogClose>
					</DialogFooter>
				</>
			</DrawerDialog>
		</>
	);
};
