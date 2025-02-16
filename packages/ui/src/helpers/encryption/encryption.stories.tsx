import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Skeleton } from "../../components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/Input";
import { decrypt, encrypt } from "./encryption";

export default {
  title: "Helpers/encryption",
  component: Skeleton,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => {
  const [value, setValue] = useState("Hello there");
  const superSecretKey = "superSecretKey";
  const handleEncrypt = async () => {
    const encrypted = await encrypt(value, superSecretKey);
    setValue(encrypted);
  };
  const handleDecrypt = async () => {
    const decrypted = await decrypt(value, superSecretKey);
    setValue(decrypted);
  };
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      Current value: {value}
      <div>
        <Input
          label="Value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <Button onClick={handleEncrypt}>Encrypt</Button>
      <Button onClick={handleDecrypt} color="secondary" disabled={!value}>
        Decrypt
      </Button>
    </div>
  );
};
