import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type FC, useState } from "react";
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { describe, expect, it, vi } from "vitest";

import { Alert, type AlertProps } from "./Alert";

describe.concurrent("Components / Alert", () => {
	describe.concurrent("A11y", () => {
		it('should have `role="alert"`', () => {
			render(<TestAlert />);

			expect(alert()).toBeInTheDocument();
		});
	});
});

const TestAlert: FC<AlertProps> = (props: AlertProps) => {
	const [isDismissed, setDismissed] = useState(false);

	return (
		<Alert
			{...props}
			additionalContent={
				<>
					<div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
						More info about this info alert goes here. This example text is
						going to run a bit longer so that you can see how spacing within an
						alert works with this kind of content.
					</div>
					<div className="flex">
						<button
							type="button"
							className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
						>
							<HiEye className="-ml-0.5 mr-2 h-4 w-4" />
							View more
						</button>
						<button
							type="button"
							className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
						>
							Dismiss
						</button>
					</div>
				</>
			}
			color="info"
			icon={HiInformationCircle}
			onDismiss={() => {
				setDismissed(!isDismissed);
			}}
			bordered={true}
		>
			{isDismissed ? "dismissed" : "waiting"}
		</Alert>
	);
};

const alert = () => screen.getByRole("alert");
