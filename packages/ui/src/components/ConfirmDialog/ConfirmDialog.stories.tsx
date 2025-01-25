import type { Meta } from "@storybook/react";

import { toast } from "../Toaster";
import { ConfirmDialog } from "./ConfirmDialog";

export default {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  decorators: [
    (Story) => (
      <div className="flex p-6 justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => {
  const fakePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, 1000);
    });
  };

  const handleConfirm = async () => {
    toast.promise(fakePromise, {
      loading: "Loading...",
      success: () => {
        return "Data deleted";
      },
      error: "Error",
    });
    await fakePromise();
  };

  return <ConfirmDialog onConfirm={handleConfirm} onCancel={() => toast.info("Cancelled")} />;
};

export const Hold = () => {
  const fakePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, 1000);
    });
  };

  const handleConfirm = async () => {
    toast.promise(fakePromise, {
      loading: "Loading...",
      success: () => {
        return "Data deleted";
      },
      error: "Error",
    });
    await fakePromise();
  };

  return (
    <ConfirmDialog
      hold={true}
      onConfirm={handleConfirm}
      onCancel={() => toast.info("Cancelled")}
      confirmText="Hold to delete"
    />
  );
};
