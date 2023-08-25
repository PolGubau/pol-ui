import { tv } from "tailwind-variants";
import { Shadow, SizesWithNone } from "../../../common";
import { applyPadding, applyShadow } from "../../../style";
import { Button } from "../../Buttons";
import { Field } from "../../Inputs";
import React from "react";

export const navbar = tv({
	base: "  w-full h-16 flex justify-between items-center p-4",
	variants: {
		position: {
			fixed: "fixed top-0 left-0 w-full",
			relative: "relative",
			absolute: "absolute",
			sticky: "sticky top-0 left-0 w-full",
			static: "static",
			inherit: "inherit",
			initial: "initial",
			unset: "unset",
		},
	},
	defaultVariants: {
		position: "relative",
	},
});

interface Props {
	children?: React.ReactNode;
	backgroundColor?: string;
	logo?: React.ReactNode;
	shadow?: Shadow;
	padding?: SizesWithNone;
	cta?: {
		label: string;
		href: string;
		onClick?: () => void;
	};
	className?: string;
	handleSearch?: (newValue: string) => void;
	customRight?: React.ReactNode;
	position?:
		| "fixed"
		| "relative"
		| "absolute"
		| "sticky"
		| "static"
		| "inherit"
		| "initial"
		| "unset";
}

const Navbar: React.FC<Props> = ({
	backgroundColor = "#ffffff",
	logo,
	children,
	shadow,
	padding,
	cta,
	handleSearch,
	customRight,
	position = "relative",
	className,
}) => {
	return (
		<div
			className={`${navbar({ position })} ${applyPadding({ padding })} ${applyShadow({
				shadow,
			})}${className ?? ""}`}
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			<div>{logo}</div>
			<div>{children}</div>
			{(cta || handleSearch || customRight) && (
				<div className="flex gap-1">
					{cta && (
						<Button type="main" href={cta.href ?? ""} onClick={cta.onClick}>
							{cta.label}
						</Button>
					)}
					{handleSearch && <Field type="search" label="Search" onChange={handleSearch} />}
					{customRight}
				</div>
			)}
		</div>
	);
};

export default Navbar;
