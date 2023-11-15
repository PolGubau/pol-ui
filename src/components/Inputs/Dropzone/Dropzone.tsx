import React from "react";
import { BaseProps, Colors, IconType, Sizes, SizesComplete, Ten, Tens } from "../../../types";
import { Icon, IconNames } from "../../Base";
import { Text } from "../../Text";
import { DropArea } from "./components/DropArea";
import { FileList } from "./components/Filelist";

interface Props extends BaseProps {
	icon?: IconType;
	children?: React.ReactNode;
	bgColor?: Colors;
	bgOpacity?: Ten;
	label?: string;
	helperText?: string;
	hasBorder?: boolean;
	rounded?: SizesComplete;
	onDrop?: (files: File[]) => void;
	onDropActive?: (isActive: boolean) => void;
	nofilesLabel?: string;
	filesToUploadLabel?: string;
}
const Dropzone = ({
	icon = IconNames.upload,

	disabled = false,
	className = "",
	bgColor = Colors.primary,
	bgOpacity = Tens.ten,
	label = "Drop or click to upload",
	nofilesLabel = "No files to upload",
	hasBorder = true,
	rounded = Sizes.xl,
	onDrop,
	onDropActive,
}: Props &
	React.HTMLAttributes<HTMLDivElement> &
	React.InputHTMLAttributes<HTMLInputElement> & {}) => {
	const [files, setFiles] = React.useState<File[]>([]);
	const onDragStateChange = React.useCallback((dragActive: boolean) => {
		onDropActive?.(dragActive);
	}, []); // Create handler for dropzone's onFilesDrop:
	const onFilesDrop = React.useCallback((newFiles: File[]) => {
		setFiles((prev) => [...prev, ...newFiles]);
		onDrop?.([...files, ...newFiles]);
	}, []);

	return (
		<DropArea
			disabled={disabled}
			onDragStateChange={onDragStateChange}
			onFilesDrop={onFilesDrop}
			hasBorder={hasBorder}
			bgColor={bgColor}
			bgOpacity={bgOpacity}
			rounded={rounded}
			className={className}
		>
			<Icon icon={icon} size={"xl"} className="scale-150" />
			<Text as="h4">{label}</Text>
			{files.length === 0 && <Text>{nofilesLabel}</Text>}
			<FileList
				files={files}
				onFilesChanged={(newArray) => {
					setFiles(newArray);
				}}
			/>
		</DropArea>
	);
};

export default Dropzone;
