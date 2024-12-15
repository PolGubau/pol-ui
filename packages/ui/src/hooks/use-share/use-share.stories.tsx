import type { Meta } from "@storybook/react";
import type React from "react";

import { Toaster, toast } from "../../components";
import { type ShareParams, useShare } from "./use-share";

const Test = () => {
  return "test";
};

export default {
  title: "Hooks/useShare",
  component: Test,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],

  tags: ["autodocs"],
} as Meta;
export const Default: React.FC = () => {
  const { share, isSupported, isReady, isShared } = useShare({
    onShare: (content: ShareParams) => {
      toast("Sharing content:", { description: content.text });
    },
    onSuccess: (content: ShareParams) => {
      toast("Successfully shared content:", { description: content.text });
    },
    onError: (error: unknown) => {
      console.error("Error sharing content:", error);
    },
    fallback: () => {
      alert("Web Share API is not supported. Falling back to another method.");
    },
    successTimeout: 3000,
  });

  const handleShare = () => {
    void share({
      title: "Check this website",
      text: "Check how cool Pol's portfolio is! 🚀",
      url: "https://polgubau.com",
    });
  };

  if (!isReady) {
    return <p>Checking support for the Web Share API...</p>;
  }

  return (
    <div>
      <button onClick={handleShare} disabled={!isSupported}>
        {isSupported ? "Share this content" : "Sharing not supported"}
      </button>
      {isShared && <p>Content has been shared!</p>}
    </div>
  );
};
