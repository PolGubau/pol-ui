import React from "react";
import { Stack } from "../../../Layout";
import { truncateString } from "../../../../utils";
import { applyBgColor } from "../../../../style";
import { Colors, Sizes, Variants } from "../../../../types";
import { Text } from "../../../Text";
import { IconButton } from "../../../Buttons";
import { IconNames } from "../../../Base";

export interface FileListProps {
	files: File[];
	maxFiles?: number;
	onFilesChanged?: (files: File[]) => void;
}

export const FileList: React.FC<FileListProps> = ({
	files = [],
	maxFiles = 3,
	onFilesChanged = () => null,
}) => {
	const linkToPreviewFile = (file: File) => {
		return URL.createObjectURL(file);
	};

	const filteredFiles = maxFiles ? files.slice(0, maxFiles) : files;

	return (
		<Stack as="ul" justify="center" gap={6}>
			{filteredFiles.map((file: File) => (
				<Stack
					wrap="nowrap"
					gap={6}
					as="li"
					key={`${file.name}_${file.lastModified}`}
					className={`${applyBgColor(Colors.primary)} bg-opacity-20 rounded-xl overflow-hidden p-1`}
				>
					{/* preview the image */}
					{linkToPreviewFile(file) && (
						<img
							src={linkToPreviewFile(file)}
							alt={file.name}
							className=" object-cover max-h-[40px] aspect-square rounded-lg "
						/>
					)}
					<Stack direction="column" justify="center" alignItems="start" gap={0} className="pr-2">
						<Text className="truncate">{truncateString(file.name, 25)}</Text>
						<Text size={12} value={`${Math.round(file.size / 1000)} kb`} />
					</Stack>

					<IconButton
						icon={IconNames.close}
						variant={Variants.text}
						size={Sizes.sm}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onFilesChanged(files.filter((f) => f.name !== file.name));
						}}
					/>
				</Stack>
			))}
			{files.length > maxFiles && <Text size={12} value={`+ ${files.length - maxFiles} more`} />}
		</Stack>
	);
};
