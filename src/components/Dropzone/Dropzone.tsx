import React, { useId } from 'react'
import { cn } from '../../helpers'

// Define interface for component props/api:
export interface DropZoneProps {
  onDragStateChange?: (isDragActive: boolean) => void
  onDrag?: () => void
  onDragIn?: () => void
  onDragOut?: () => void
  onDrop?: () => void
  onFilesDrop?: (files: File[]) => void

  multiple?: boolean
  accept?: string
  disabled?: boolean
}

export const Dropzone = React.memo((props: React.PropsWithChildren<DropZoneProps>) => {
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
      onDragIn?.()

      if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
        setIsDragActive(true)
      }
    },
    [onDragIn],
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

      setIsDragActive(false)
      onDrop?.()

      if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
        const files = mapFileListToArray(event.dataTransfer.files)

        // exclude the nulls
        const filteredFiles = files.filter((file: File | null) => file !== null) as File[]
        files && onFilesDrop?.(filteredFiles)
        event.dataTransfer.clearData()
      }
    },
    [onDrop, onFilesDrop],
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

  // Render <div> with ref and children:
  return (
    <>
      <input
        onChange={e => {
          const fileList = e.target.files
          if (fileList) {
            const newFiles = Array.from(fileList).filter(file => file !== null) as File[]
            onFilesDrop?.([...newFiles])
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
        className={cn('flex flex-col gap-1 bg-secondary-200 w-full h-full text-center p-4 transition-all', {
          'bg-primary-400': isDragActive,
        })}
      >
        {children}
      </label>
    </>
  )
})

// Define display name for component:
Dropzone.displayName = 'Dropzone'
