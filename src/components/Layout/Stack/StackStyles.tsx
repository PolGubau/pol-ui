import styled from "styled-components";
import { AlignItem, FlexDirection, FlexWrap, JustifyContent } from "../../../types";
interface Props {
	$gap?: string;
	$alignItems?: AlignItem;
	$grow?: number;
	$wrap?: FlexWrap;
	$direction?: FlexDirection;
	$justify?: JustifyContent;
	$width?: number | string;
}
export const StackStyled = styled.div<Props>`
	display: flex;
	flex-direction: ${(props) => props.$direction};
	flex-wrap: ${(props) => props.$wrap};
	justify-content: ${(props) => props.$justify};
	align-items: ${(props) => props.$alignItems};
	gap: ${(props) => props.$gap};
	width: ${(props) => props.$width};
	& > * {
		flex-grow: ${(props) => props.$grow};
	}
`;
