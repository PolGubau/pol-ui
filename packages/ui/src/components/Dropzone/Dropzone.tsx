import React, { useEffect, useId } from "react";
import { RiUploadCloudFill } from "react-icons/ri";
import { mimeTypesMap } from "../../constants/mimeTypesMap";
import { cn, mergeDeep } from "../../helpers";
import { useTranslate } from "../../hooks";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { toast } from "../Toaster/Toaster";
import type { DropzoneTheme } from "./theme";

export interface ImportErrorState {
  type: "fileType" | "upload" | "network" | null; // The error type
  message: string | null; // The error message
}

// Define interface for component props/api:
export interface DropzoneProps {
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrag?: () => void;
  onDragIn?: () => void;
  onDragOut?: () => void;
  onDrop?: (e: DragEvent) => void;
  onFilesDrop?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  className?: string;
  disabledClassName?: string;
  activeClassName?: string;
  title?: string;
  theme?: DeepPartial<DropzoneTheme>;
  error?: ImportErrorState | null;
  setError?: (error: ImportErrorState | null) => void;
}

/**
 * Dropzone component
 * @description The Dropzone component is used to create a drag and drop area for files, where the user can drop files to upload them.
 * @returns React.FC<DropzoneProps>
 */
export const Dropzone = React.memo((props: React.PropsWithChildren<DropzoneProps>) => {
  const {
    onDragStateChange,
    onFilesDrop,
    children = null,
    onDrag,
    onDragIn,
    onDragOut,
    onDrop,
    multiple = true,
    accept,
    disabled = false,
    className,
    disabledClassName,
    activeClassName = "",
    theme: customTheme = {},
    title,
    error,
    setError,
  } = props;

  // Create state to keep track when dropzone is active/non-active:
  const [isDragActive, setIsDragActive] = React.useState(false);
  // Prepare ref for dropzone element:
  const dropZoneRef = React.useRef<null | HTMLLabelElement>(null);

  const { t } = useTranslate();

  // Create helper method to map file list to array of files:
  const mapFileListToArray = (files: FileList) => {
    const array: File[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        array.push(file);
      }
    }

    return array;
  };

  // Create handler for dragenter event:
  const handleDragIn = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled) {
        onDragIn?.();

        if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
          setIsDragActive(true);
        }
      }
    },
    [disabled, onDragIn],
  );

  // Create handler for dragleave event:
  const handleDragOut = React.useCallback(
    (event: { preventDefault: () => void; stopPropagation: () => void }) => {
      event.preventDefault();
      event.stopPropagation();
      onDragOut?.();

      setIsDragActive(false);
    },
    [onDragOut],
  );

  // Create handler for dragover event:
  const handleDrag = React.useCallback(
    (event: { preventDefault: () => void; stopPropagation: () => void }) => {
      event.preventDefault();
      event.stopPropagation();

      onDrag?.();
      if (!isDragActive) {
        setIsDragActive(true);
      }
    },
    [isDragActive, onDrag],
  );

  // Create handler for drop event:

  const handleDrop = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (!disabled) {
        setIsDragActive(false);
        onDrop?.(event);

        if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
          const files = mapFileListToArray(event.dataTransfer.files);

          // exclude the nulls
          const filteredFiles = files.filter((file: File | null) => file !== null) as File[];

          // filtering the accept files

          if (accept) {
            // Convert accept string into an array of valid extensions (e.g., .csv, .pdf)
            const acceptedExtensions = accept.split(",").map((ext) => ext.trim());

            // Define the corresponding MIME types for each extension

            const acceptedFiles = filteredFiles.filter((file) => {
              // Check if the file matches either the extension or the MIME type
              const matchesExtension = acceptedExtensions.some((ext) => file.name.endsWith(ext));
              const matchesMimeType = acceptedExtensions.some((ext) => file.type === mimeTypesMap[ext]);

              return matchesExtension || matchesMimeType; // Only accept files that match either condition
            });

            const rejectedFiles = filteredFiles.filter((file) => {
              // Reject files that do not match either the extension or the MIME type
              const matchesExtension = acceptedExtensions.some((ext) => file.name.endsWith(ext));
              const matchesMimeType = acceptedExtensions.some((ext) => file.type === mimeTypesMap[ext]);

              return !(matchesExtension || matchesMimeType); // Reject if neither condition matches
            });

            if (rejectedFiles.length > 0) {
              setError?.({
                type: "fileType",
                message: `Only ${accept} files allowed.`,
              });

              toast.error(`Only ${accept} files allowed.`, {
                description: `Rejected files: ${rejectedFiles.map((f) => f.name).join(", ")}`,
              });
            } else {
              // Clear error if no rejected files
              setError?.(null);
            }

            if (acceptedFiles.length > 0) {
              onFilesDrop?.(multiple ? acceptedFiles : acceptedFiles.slice(0, 1));
            }
          } else if (filteredFiles) {
            onFilesDrop?.(multiple ? filteredFiles : filteredFiles.slice(0, 1));
          }

          event.dataTransfer.clearData();
        }
      }
    },
    [accept, disabled, multiple, onDrop, onFilesDrop],
  );

  const id = useId();

  // Obser active state and emit changes:

  useEffect(() => {
    onDragStateChange?.(isDragActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragActive]);

  // Attach listeners to dropzone on mount:

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme: DropzoneTheme = mergeDeep(getTheme().dropzone, customTheme);

  return (
    <>
      <input
        onChange={(e) => {
          const fileList = e.target.files;
          if (fileList) {
            const newFiles = Array.from(fileList).filter((file) => file !== null) as File[];
            onFilesDrop?.(newFiles);
          }
        }}
        className="hidden"
        type="file"
        name="files[]"
        id={id}
        data-multiple-caption="{count} files selected"
        multiple={multiple}
        accept={accept}
        disabled={disabled}
      />

      <label
        ref={dropZoneRef}
        htmlFor={id}
        className={cn(
          theme.base,
          className,
          disabled && theme.disabled,
          disabled && disabledClassName,
          !disabled && isDragActive && theme.active,
          !disabled && isDragActive && activeClassName,
        )}
      >
        {!children && (
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2
              className={cn(
                "text-secondary-300 dark:text-primary-300", // Default styles
                error && "text-red-600 dark:text-red-400", // Error styles
              )}
            >
              {error ? t("Error uploading file") : (title ?? t("Drop your file here or click to upload"))}
            </h2>
            <RiUploadCloudFill
              className={cn(
                "w-10 h-10 text-secondary-300 dark:text-primary-300", // Default styles
                error && "text-red-600 dark:text-red-400", // Error styles
              )}
            />
          </div>
        )}
        {children}
      </label>
    </>
  );
});

Dropzone.displayName = "Dropzone";
