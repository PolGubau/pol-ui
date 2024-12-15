import type { Meta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Toaster } from "../Toaster";
import { Dropzone } from "./Dropzone";
import { FileList } from "./FileList";

export default {
  title: "Components/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Example = () => {
  // Create "active" state for dropzone:
  // Create state for dropped files:
  const [files, setFiles] = useState<File[]>([]);

  // Create handler for dropzone's onFilesDrop:
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles]);
    },
    [files],
  );

  return (
    <Dropzone onFilesDrop={onFilesDrop}>
      <h2>Drop your files here</h2>

      {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}

      {/* Render the file list */}
      <FileList files={files} setFiles={setFiles} />
    </Dropzone>
  );
};

export const CustomClass = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles]);
    },
    [files],
  );
  return (
    <div className="flex flex-col gap-4 w-full">
      <Dropzone onFilesDrop={onFilesDrop} className="bg-lime-200 w-full rounded-full border-lime-400 border-solid">
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone
        onFilesDrop={onFilesDrop}
        className="bg-primary-200 border-sm border-none  h-[200px] flex justify-center items-center"
      >
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone
        onFilesDrop={onFilesDrop}
        className="bg-transparent border border-neutral-400 border-solid"
        activeClassName="bg-neutral-200"
      >
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone onFilesDrop={onFilesDrop} disabled={true}>
        <h2>I am disabled!</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
    </div>
  );
};

export const Single = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onFilesDrop = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
  }, []);
  return (
    <Dropzone onFilesDrop={onFilesDrop} multiple={false}>
      <h2>You can only take 1 file as MULTIPLE is setted to false</h2>
      <FileList files={files} setFiles={setFiles} />
    </Dropzone>
  );
};
export const CustomAccepts = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onFilesDrop = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
  }, []);
  return (
    <Dropzone onFilesDrop={onFilesDrop} multiple={false} accept=".pdf">
      <h2>You can only import PDFs here</h2>
      <FileList files={files} setFiles={setFiles} />
    </Dropzone>
  );
};
