import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, vi } from "vitest";

expect.extend(matchers);

// Polyfill for ResizeObserver
Object.defineProperty(window, "matchMedia", {
	writable: true,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	value: (query: any) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	}),
});
