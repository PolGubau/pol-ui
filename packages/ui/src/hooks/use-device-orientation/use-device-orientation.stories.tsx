import type { Meta } from "@storybook/react";

import { PoluiProvider } from "../../providers/PoluiProvider";
import { useDeviceOrientation } from "./use-device-orientation";

export default {
	title: "Hooks/useDeviceOrientation",
	component: PoluiProvider,

	parameters: {
		layout: "fullscreen",
	},
} as Meta;
export const Default: React.FC = () => {
	const { orientation, requestPermission, isPermissionGranted, isSupported } =
		useDeviceOrientation();

	return (
		<div className="flex justify-center flex-col gap-2">
			<h1>Device Orientation Example</h1>
			<p>Orientation: {JSON.stringify(orientation)}</p>
			<p>Permission granted: {isPermissionGranted ? "Yes" : "No"}</p>
			<p>Supported: {isSupported ? "Yes" : "No"}</p>
			<button type="button" onClick={() => requestPermission()}>
				Request permission
			</button>

			<p>
				Note: This hook will only work on devices that support the
				DeviceOrientationEvent API.
			</p>
			<p>
				If you are on a desktop, you can use the Chrome DevTools to simulate
				device orientation events.
			</p>
		</div>
	);
};
