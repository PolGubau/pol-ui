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
			aria-label={ariaLabel}
			id={id}
			style={{
				minHeight: "30px",
				minWidth: "30px",
				...style,
			}}
			className={`flex w-fit ${className ?? ""}  `}
		>
			{children}
		</BoxStyled>
	);
};

export default Box;
