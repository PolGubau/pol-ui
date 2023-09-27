import { motion } from "framer-motion";
import { useState } from "react";
import { Text } from "../../Text";
import Box from "../../Base/Box/Box";
import { Stack } from "../Stack";
import { Color, Colors, Sizes, SizesComplete } from "../../../types";
import { applyBgColor, applyRounded } from "../../../style";

interface Props {
	style?: React.CSSProperties;
	data: string[];
	defaultSelected?: number;
	onChange?: (index: number) => void;
	rounded?: SizesComplete;
	colorSelected?: Color;
	invertTextOnSelected?: boolean;
	colorText?: Color;
}

export default function NavigationBar({
	defaultSelected = 0,
	style = {},
	onChange,
	data = [],
	rounded = Sizes.lg,
	colorSelected = Colors.accent,
	invertTextOnSelected = false,
	colorText = Colors.primary,
}: Props) {
	const [selected, setSelected] = useState(defaultSelected);

	const goPrevious = () => {
		if (selected > 0) {
			setSelected(selected - 1);
			onChange?.(selected - 1);
		}
	};
	const goNext = () => {
		if (selected < data.length - 1) {
			setSelected(selected + 1);
			onChange?.(selected + 1);
		}
	};

	return (
		<div style={style}>
			<Stack>
				{data.map((name, i) => {
					const isSelected = i === selected;
					return (
						<motion.button
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									goNext();
								} else if (e.key === " ") {
									goNext();
								}
								// if arrow Left or arrow Right is pressed toggle the switch on or off
								else if (e.key === "ArrowLeft") {
									goPrevious();
								} else if (e.key === "ArrowRight") {
									goNext();
								}
							}}
							className={`relative  ${applyRounded(
								rounded
							)} focus-visible:outline-none focus-visible:ring-2   ring-primary transition-all
                            
                            ${!isSelected && `hover:bg-primary/10`}
                            `}
							key={name}
							transition={{ duration: 0.2 }}
							onTap={() => {
								setSelected(i);
								onChange?.(i);
							}}
						>
							<Box
								style={{ zIndex: 1 }}
								className={`relative py-1 px-3 ${applyRounded(rounded)}  `}
							>
								<Text color={colorText} invertColor={invertTextOnSelected && isSelected}>
									{name}
								</Text>
							</Box>

							{isSelected && (
								<motion.div
									className={`absolute w-full h-full top-0 left-0  ${applyRounded(
										rounded
									)} ${applyBgColor(colorSelected)}`}
									layoutId="selected"
								/>
							)}
						</motion.button>
					);
				})}
			</Stack>
		</div>
	);
}
