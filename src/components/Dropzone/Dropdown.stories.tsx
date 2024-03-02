import type { Meta } from '@storybook/react'
import { useCallback, useState } from 'react'
import { Dropzone } from './Dropzone'
import { FileList } from './FileList'

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Example = () => {
  // Create "active" state for dropzone:
  // Create state for dropped files:
  const [files, setFiles] = useState<File[]>([])

  // Create handler for dropzone's onFilesDrop:
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles])
    },
    [files],
  )

  return (
    <Dropzone onFilesDrop={onFilesDrop}>
      <h2>Drop your files here</h2>

      {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}

      {/* Render the file list */}
      <FileList files={files} setFiles={setFiles} />
    </Dropzone>
  )
}

export const CustomClass = () => {
  const [files, setFiles] = useState<File[]>([])
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles])
    },
    [files],
  )
  return (
    <div className="flex flex-col gap-4 w-full">
      <Dropzone onFilesDrop={onFilesDrop} className="bg-red-300 w-full rounded-full border-red-800 border-solid">
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone
        onFilesDrop={onFilesDrop}
        className="bg-primary-900 border-sm border-none text-white h-[200px] flex justify-center items-center"
      >
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone onFilesDrop={onFilesDrop} disabled>
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
    </div>
  )
}
