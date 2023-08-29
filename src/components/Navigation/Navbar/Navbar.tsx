import { Button } from "../../Buttons";
import { Field } from "../../Inputs";
import React from "react";
import { Shadow, SizesWithNone } from "../../../types";
import { Link } from "../../Buttons/Link";
import { navbar } from "./NavBar.styles";

interface Props {
	children?: React.ReactNode;
	backgroundColor?: string;
	logo?: React.ReactNode;
	shadow?: Shadow;
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
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
	padding = { x: "sm", y: "sm" },
	cta,
	handleSearch,
	customRight,
	position = "relative",
	className,
}) => {
	return (
		<div
			className={`${navbar({ position, padding, shadow, className })} `}
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			<div>{logo}</div>
			<div>{children}</div>
			{(cta || handleSearch || customRight) && (
				<div className="flex gap-1">
					{cta &&
						(cta.href ? (
							<Link color="accent" href={cta.href ?? ""} onClick={cta.onClick}>
								{cta.label}
							</Link>
						) : (
							<Button color="accent" onClick={cta.onClick}>
								{cta.label}
							</Button>
						))}
					{handleSearch && <Field type="search" label="Search" onChange={handleSearch} />}
					{customRight}
				</div>
			)}
		</div>
	);
};

export default Navbar;
