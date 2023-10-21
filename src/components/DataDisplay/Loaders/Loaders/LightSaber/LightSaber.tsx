import { Color } from "../../../../../types";

import "./LightSaber.css";

interface Props {
	className?: string;
	color?: Color;
	amount?: number;
	size?: number;
}

// By @samvgm

const LightSaber: React.FC<Props> = ({ className, color, amount = 3, size = 35 }) => {
	return (
		<div className="flex gap-1">
			<div id="loader">
				<div className="ls-particles ls-part-1"></div>
				<div className="ls-particles ls-part-2"></div>
				<div className="ls-particles ls-part-3"></div>
				<div className="ls-particles ls-part-4"></div>
				<div className="ls-particles ls-part-5"></div>
				<div className="lightsaber ls-left ls-green"></div>
				<div className="lightsaber ls-right ls-red"></div>
			</div>
		</div>
	);
};

export default LightSaber;
