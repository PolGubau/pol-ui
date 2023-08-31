import styled, { keyframes } from "styled-components";
import { ToastVariant } from "./types";
import { motion } from "framer-motion";

interface ToastStyledProps {
	duration: number;
}

const bgLoadingAnimation = keyframes`
    from{
        background-position: 100% 100%; 
    } 
    to{
        background-position: 0 0;
    }
`;

const ToastStyled = styled(motion.li)<ToastStyledProps>`
	animation: ${bgLoadingAnimation} ${({ duration }) => duration}ms linear;
	background-size: 200% 200%;
`;

export default ToastStyled;

interface Props {
	variant?: ToastVariant;
	defaultType: ToastVariant;
}

export const toastStyles = ({ variant, defaultType }: Props) => {
	const base =
		"h-fit w-fit flex justify-center items-center gap-4 bg-gradient-to-r px-4 py-3 pl-6 rounded-xl shadow-md from-background-light to-background-contrast text-background border border-dark";
	const toastVariants = {
		success: "bg-success text-contrast",
		danger: "bg-danger text-contrast",
		neutral: "bg-primary/10 text-contrast",
	};

	return `${base} ${toastVariants[variant ?? defaultType]}`;
};
