import React, { useId } from 'react'
import { cn, mergeDeep } from '../../helpers'
import type { DropzoneTheme } from './theme'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { toast } from '../Toaster'

// Define interface for component props/api:
export interface DropzoneProps {
  onDragStateChange?: (isDragActive: boolean) => void
  onDrag?: () => void
  onDragIn?: () => void
  onDragOut?: () => void
  onDrop?: (e: DragEvent) => void
  onFilesDrop?: (files: File[]) => void
  multiple?: boolean
  accept?: string
  disabled?: boolean
  className?: string
  disabledClassName?: string
  activeClassName?: string
  theme?: DeepPartial<DropzoneTheme>
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
    activeClassName = '',
    theme: customTheme = {},
  } = props

  // Create state to keep track when dropzone is active/non-active:
  const [isDragActive, setIsDragActive] = React.useState(false)
  // Prepare ref for dropzone element:
  const dropZoneRef = React.useRef<null | HTMLLabelElement>(null)

  // Create helper method to map file list to array of files:
  const mapFileListToArray = (files: FileList) => {
    const array = []

    for (let i = 0; i < files.length; i++) {
      array.push(files.item(i))
    }

    return array
  }

  // Create handler for dragenter event:
  const handleDragIn = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (!disabled) {
        onDragIn?.()

        if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
          setIsDragActive(true)
        }
      }
    },
    [disabled, onDragIn],
  )

  // Create handler for dragleave event:
  const handleDragOut = React.useCallback(
    (event: { preventDefault: () => void; stopPropagation: () => void }) => {
      event.preventDefault()
      event.stopPropagation()
      onDragOut?.()

      setIsDragActive(false)
    },
    [onDragOut],
  )

  // Create handler for dragover event:
  const handleDrag = React.useCallback(
    (event: { preventDefault: () => void; stopPropagation: () => void }) => {
      event.preventDefault()
      event.stopPropagation()

      onDrag?.()
      if (!isDragActive) {
        setIsDragActive(true)
      }
    },
    [isDragActive, onDrag],
  )

  // Create handler for drop event:
  const handleDrop = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()

      if (!disabled) {
        setIsDragActive(false)
        onDrop?.(event)

        if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
          const files = mapFileListToArray(event.dataTransfer.files)

          // exclude the nulls
          const filteredFiles = files.filter((file: File | null) => file !== null) as File[]

          // filtering the accept files

          if (accept) {
            const acceptedFiles = filteredFiles.filter(file => file.type.match(accept))
            const rejectedFiles = filteredFiles.filter(file => !file.type.match(accept))

            rejectedFiles.length > 0 &&
              toast({
                title: 'Only ' + accept + ' files allowed.',
                description: `Rejected files: ${rejectedFiles.map(f => f.name)} `,
                type: 'error',
              })

            onFilesDrop?.(multiple ? acceptedFiles : acceptedFiles.slice(0, 1))
          } else filteredFiles && onFilesDrop?.(multiple ? filteredFiles : filteredFiles.slice(0, 1))

          event.dataTransfer.clearData()
        }
      }
    },
    [accept, disabled, multiple, onDrop, onFilesDrop],
  )

  const id = useId()

  // Obser active state and emit changes:
  React.useEffect(() => {
    onDragStateChange?.(isDragActive)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragActive])

  // Attach listeners to dropzone on mount:
  React.useEffect(() => {
    const tempZoneRef = dropZoneRef?.current
    if (tempZoneRef) {
      tempZoneRef.addEventListener('dragenter', handleDragIn)
      tempZoneRef.addEventListener('dragleave', handleDragOut)
      tempZoneRef.addEventListener('dragover', handleDrag)
      tempZoneRef.addEventListener('drop', handleDrop)
    }

    // Remove listeners from dropzone on unmount:
    return () => {
      tempZoneRef?.removeEventListener('dragenter', handleDragIn)
      tempZoneRef?.removeEventListener('dragleave', handleDragOut)
      tempZoneRef?.removeEventListener('dragover', handleDrag)
      tempZoneRef?.removeEventListener('drop', handleDrop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const theme: DropzoneTheme = mergeDeep(getTheme().dropzone, customTheme)

  return (
    <>
      <input
        onChange={e => {
          const fileList = e.target.files
          if (fileList) {
            const newFiles = Array.from(fileList).filter(file => file !== null) as File[]
            onFilesDrop?.(newFiles)
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
        {children}
      </label>
    </>
  )
})

Dropzone.displayName = 'Dropzone'
