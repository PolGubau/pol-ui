import React from "react";
import { Colors, SizesComplete, Ten } from "../../../../types";
import { applyBgColor, applyBgOpacity, applyRounded } from "../../../../style";
import { Stack } from "../../../Layout";

// Define interface for component props/api:
export interface DropZoneProps {
	onDragStateChange?: (isDragActive: boolean) => void;
	onDrag?: () => void;
	onDragIn?: () => void;
	onDragOut?: () => void;
	onDrop?: () => void;
	onFilesDrop?: (files: File[]) => void;
	hasBorder?: boolean;
	bgColor?: Colors;
	bgOpacity?: Ten;
	rounded?: SizesComplete;
	className?: string;
	disabled: boolean;
}

export const DropArea = React.memo((props: React.PropsWithChildren<DropZoneProps>) => {
	const { onDragStateChange, onFilesDrop, onDrag, onDragIn, onDragOut, onDrop } = props;

	// Create state to keep track when dropzone is active/non-active:
	const [isDragActive, setIsDragActive] = React.useState(false);
	// Prepare ref for dropzone element:
	const dropZoneRef = React.useRef<null | HTMLLabelElement>(null);

	// Create helper method to map file list to array of files:
	const mapFileListToArray = (files: FileList) => {
		const array = [];

		for (let i = 0; i < files.length; i++) {
			array.push(files.item(i));
		}

		return array;
	};

	// Create handler for dragenter event:
	const handleDragIn = React.useCallback(
		(event: any) => {
			event.preventDefault();
			event.stopPropagation();
			onDragIn?.();

			if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
				setIsDragActive(true);
			}
		},
		[onDragIn]
	);

	// Create handler for dragleave event:
	const handleDragOut = React.useCallback(
		(event: any) => {
			event.preventDefault();
			event.stopPropagation();
			onDragOut?.();

			setIsDragActive(false);
		},
		[onDragOut]
	);

	// Create handler for dragover event:
	const handleDrag = React.useCallback(
		(event: any) => {
			event.preventDefault();
			event.stopPropagation();

			onDrag?.();
			if (!isDragActive) {
				setIsDragActive(true);
			}
		},
		[isDragActive, onDrag]
	);

	// Create handler for drop event:
	const handleDrop = React.useCallback(
		(event: any) => {
			event.preventDefault();
			event.stopPropagation();

			setIsDragActive(false);
			onDrop?.();

			if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
				const files = mapFileListToArray(event.dataTransfer.files);

				files && onFilesDrop?.(files as File[]);
				event.dataTransfer.clearData();
			}
		},
		[onDrop, onFilesDrop]
	);

	// Obser active state and emit changes:
	React.useEffect(() => {
		onDragStateChange?.(isDragActive);
	}, [isDragActive]);

	// Attach listeners to dropzone on mount:
	React.useEffect(() => {
		const tempZoneRef = dropZoneRef?.current;
		if (tempZoneRef) {
			tempZoneRef.addEventListener("dragenter", handleDragIn);
			tempZoneRef.addEventListener("dragleave", handleDragOut);
			tempZoneRef.addEventListener("dragover", handleDrag);
			tempZoneRef.addEventListener("drop", handleDrop);
		}

		// Remove listeners from dropzone on unmount:
		return () => {
			tempZoneRef?.removeEventListener("dragenter", handleDragIn);
			tempZoneRef?.removeEventListener("dragleave", handleDragOut);
			tempZoneRef?.removeEventListener("dragover", handleDrag);
			tempZoneRef?.removeEventListener("drop", handleDrop);
		};
	}, []);

	// Render <div> with ref and children:
	return (
		<>
			<label
				htmlFor="fileInput"
				ref={dropZoneRef}
				className={`flex flex-col items-center justify-center w-full h-64 cursor-pointer transition-all  overflow-hidden
        ${
					isDragActive
						? "  border-accent dark:border-accent-inverted"
						: "border-primary dark:border-primary-inverted"
				}

             ${props.hasBorder && "border-2 border-dashed border-opacity-40 dark:border-opacity-40"}
             ${applyRounded(props.rounded)}
             ${!isDragActive && applyBgColor(props.bgColor)}
             ${applyBgOpacity(props.bgOpacity)}

              ${props.className}`}
			>
				<Stack direction="column" alignItems="center" justify="center">
					{props.children}
				</Stack>
				<input
					name="file"
					multiple
					onChange={(e) => {
						e.persist();
						const files = e.currentTarget.files;
						const filesArray = (files && Array.from(files)) ?? [];
						e.currentTarget.files && onFilesDrop?.(filesArray);
					}}
					id="fileInput"
					type="file"
					className="hidden w-full h-full"
					disabled={props.disabled}
				/>
			</label>
		</>
	);
});
