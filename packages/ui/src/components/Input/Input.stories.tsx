import type { Meta, StoryObj } from "@storybook/react";
import { TbAt } from "react-icons/tb";
import type { Colors, MainSizes } from "../../types";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import { Input } from "./Input";
import { inputExampleProps } from "./test/props";
import {
  helperTextClassesShouldBeCorrect,
  justErrorLabelColored,
  shouldBeRequired,
  shouldHandleError,
  shouldHaveCustomLabelClasses,
  shouldHaveHelperText,
  shouldHaveIcon,
  testInputLogic,
} from "./test/utils";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: "Components/Inputs/Input",
  component: Input,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: Object.keys(ColorsEnum),
      },
    },
    size: {
      control: {
        type: "select",
        options: Object.keys(MainSizesEnum),
      },
    },
  },
} as Meta;
export default meta;

export const Default: Story = {
  args: inputExampleProps.default,
  play: async ({ args, canvasElement, step }) => {
    await step("Basic Usage", async () => {
      await testInputLogic(canvasElement, args);
    });
  },
};

export const WithIcon: Story = {
  args: inputExampleProps.withIcon,

  play: ({ args, canvasElement, step }) => {
    step("Should have an icon", () => {
      shouldHaveIcon(canvasElement, args);
    });
  },
};
export const ErrorInput: Story = {
  args: inputExampleProps.error,
  play: ({ args, canvasElement, step }) => {
    step("Basic Usage", () => {
      testInputLogic(canvasElement, args);
    });
    step("Should Handle Errors", () => {
      shouldHandleError(canvasElement, args);
    });
  },
};

export const Required: Story = {
  args: inputExampleProps.required,
  play: ({ args, canvasElement, step }) => {
    step("Should be required", () => {
      shouldBeRequired(canvasElement, args);
    });
  },
};
export const CustomLabel: Story = {
  args: inputExampleProps.customLabelClass,
  play: ({ args, canvasElement, step }) => {
    step("Basic Usage", () => {
      testInputLogic(canvasElement, args);
    });
    step("Should have Custom Label Class", () => {
      shouldHaveCustomLabelClasses(canvasElement, args);
    });
  },
};
export const WithHelperText: Story = {
  args: inputExampleProps.withHelperText,
  play: ({ args, canvasElement, step }) => {
    step("Should have helper text", () => {
      shouldHaveHelperText(canvasElement, args);
    });
    step("Helper text should style correctly", () => {
      helperTextClassesShouldBeCorrect(canvasElement, args);
    });
  },
};
export const Colored: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 ">
      {Object.keys(ColorsEnum).map((color) => (
        <Input key={color} label={color} id={color} color={color as Colors} icon={TbAt} />
      ))}
    </div>
  ),
  play: ({ canvasElement, step }) => {
    step("If no focus -> Only error should have red label", () => {
      justErrorLabelColored(canvasElement);
    });
  },
};

export const AllColors = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(ColorsEnum).map((color) => (
      <Input key={color} label={color} color={color as Colors} icon={TbAt} />
    ))}
  </div>
);
export const AllSizes = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(MainSizesEnum).map((size) => (
      <Input key={size} label={size} size={size as MainSizes} />
    ))}
  </div>
);
export const AllColorsFilled = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(ColorsEnum).map((color) => (
      <Input key={color} label={color} color={color as Colors} icon={TbAt} defaultValue="I am in light mode" />
    ))}
  </div>
);

export const Comparison = () => (
  <div className="flex flex-col gap-4 p-4 ">
    <Input label="React UI" />
    {/* <TextField label="Material UI" /> */}
  </div>
);
