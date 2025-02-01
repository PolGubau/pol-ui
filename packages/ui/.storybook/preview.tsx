import type { Preview } from "@storybook/react";
import type { PropsWithChildren } from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../src/components";
import { DarkThemeToggle } from "../src/components/DarkThemeToggle/DarkThemeToggle";
import { Toolbox } from "../src/components/Toolbox/Toolbox";
import {
	type Locale,
	defaultLanguage,
	getSupportedLanguages,
} from "../src/i18n";
import { PoluiProvider } from "../src/providers/PoluiProvider/PoluiProvider";
import "./style.css";

const Provider = ({ children }: PropsWithChildren) => {
	const availableLocales: Locale[] = ["en", "es", "de"];
	const allLangs = getSupportedLanguages(availableLocales);
	return (
		<PoluiProvider defaultLanguage={defaultLanguage} allLanguages={allLangs}>
			<main className="relative grid h-full min-h-[300px] w-full bg-secondary-50 p-4 pt-6 dark:bg-secondary-900">
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel defaultSize={99} minSize={5}>
						{children}
					</ResizablePanel>

					<ResizableHandle className="bg-transparent hover:bg-secondary/30 active:bg-secondary/30 w-1 transition-colors" />
					<ResizablePanel>
						<div className="invisible" />
					</ResizablePanel>
				</ResizablePanelGroup>

				<Toolbox>
					<DarkThemeToggle className="text-white dark:text-white" />
				</Toolbox>
			</main>
		</PoluiProvider>
	);
};

const preview: Preview = {
	decorators: [
		(Story) => (
			<Provider>
				<Story />
			</Provider>
		),
	],

	parameters: {
		actions: { argTypesRegex: "^on.*" },
		layout: "fullscreen",

		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	tags: ["autodocs"],
};

export default preview;
