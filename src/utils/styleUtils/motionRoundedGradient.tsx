import { MotionValue, useMotionTemplate } from "framer-motion";

export interface MotionRoundedGradientProps {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
	color?: string;
	opacity?: number;
	size?: number;
}
export const motionRoundedGradient = ({
	mouseX,
	mouseY,
	color = "rgba(25, 14, 233, 0.25)",
	opacity = 20,
	size = 550,
}: MotionRoundedGradientProps) => {
	const style = {
		background: useMotionTemplate`
            radial-gradient(
              ${size}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent ${opacity}%
            )
          `,
	};

	return style;
};
