"use client";

import { Drawer, DrawerDialog, Popover } from "pol-ui";

/**
 * @name Logger drawer
 * @description A easy way to see your log messages
 */

export interface Log {
  message: string;
  type: "info" | "error" | "warning" | "success";
  date: Date;
}

interface LoggerProps {
  logs: Log[];
  setLogs: React.Dispatch<React.SetStateAction<Log[]>>;
}

const LogList = (props: LoggerProps) => {
  const { logs, setLogs } = props;
  return (
    <div className="flex flex-col gap-4">
      {logs.map((log, index) => (
        <div key={index} className="flex gap-4">
          <p>{log.message}</p>
          <p>{log.type}</p>
          {/* <p>{log.date.toLocaleDateString()}</p> */}
        </div>
      ))}
    </div>
  );
};

const Logger = (props: LoggerProps) => {
  return (
    <div className="text-black dark flex gap-4">
      <DrawerDialog>
        <LogList {...props} />
      </DrawerDialog>
      <Popover>
        <LogList {...props} />
      </Popover>
      <Drawer direction="right">
        <div className="mt-10">
          <LogList {...props} />
        </div>
      </Drawer>
    </div>
  );
};

export default Logger;
