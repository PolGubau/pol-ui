import type { Meta } from "@storybook/react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input/Input";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useLocalStorage } from "./use-local-storage";

export default {
  title: "Hooks/useLocalStorage",
  component: PoluiProvider,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => {
  const [value, setValue] = useLocalStorage("polUIStorybook", "initialValue");
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      Current value decrypted from local storage:{value}
      <Input label="Enter a value" value={value} onChangeValue={setValue} />
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </Button>
    </div>
  );
};
export const Encrypted = () => {
  const [value, setValue] = useLocalStorage("polUIStorybook", "initialValue", "supersecretkey");
  console.info(value);
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      Current value decrypted from local storage:{value}
      <span> Check the application tab in the devtools to see the encrypted value</span>
      <Input label="Enter a value" value={value} onChangeValue={setValue} />
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </Button>
    </div>
  );
};
