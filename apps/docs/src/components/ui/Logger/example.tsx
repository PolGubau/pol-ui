"use client";
import { useState } from "react";
import Logger, { Log } from "./Logger";

const LoggerExample = () => {
  const mockLogs: Log[] = [
    {
      message: "This is a info message",
      type: "info",
      date: new Date(),
    },
    {
      message: "This is a error message",
      type: "error",
      date: new Date(),
    },
    {
      message: "This is a warning message",
      type: "warning",
      date: new Date(),
    },
    {
      message: "This is a success message",
      type: "success",
      date: new Date(),
    },
  ];
  const [logs, setLogs] = useState<Log[]>(mockLogs);
  return (
    <div className="flex justify-center min-h-[400px] items-center dark:text-black">
      <Logger logs={logs} setLogs={setLogs} />;
    </div>
  );
};

export default LoggerExample;
