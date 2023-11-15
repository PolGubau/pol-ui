import { copyToClipboard } from "./clipboardUtils";

test("copyToClipboard copies text correctly", () => {
	// Mock the clipboard API
	const clipboardWriteTextMock = jest.fn();
	Object.assign(navigator, {
		clipboard: {
			writeText: clipboardWriteTextMock,
		},
	});

	// Text to copy
	const textToCopy = "Hello, world!";

	// Call the function
	copyToClipboard(textToCopy);

	// Check if clipboard.writeText was called with the correct argument
	expect(clipboardWriteTextMock).toHaveBeenCalledWith(textToCopy);
});
