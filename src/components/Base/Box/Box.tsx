import React from "react";
import { BaseProps } from "../../../types";
import styled from "styled-components";

const BoxStyled = styled.div``;

interface Props extends BaseProps {
	children: React.ReactNode;
	as?: React.ElementType;
}
const Box: React.FC<Props> = ({ children, as = "div", className, ariaLabel, id, style }) => {
	return (
		<BoxStyled
			as={as}
			className={`${className ? className : ""} flex `}
			aria-label={ariaLabel}
			id={id}
			style={{
				...style,
				minHeight: "100px",
				minWidth: "100px",
			}}
		>
			{children}
		</BoxStyled>
	);
};

export default Box;
