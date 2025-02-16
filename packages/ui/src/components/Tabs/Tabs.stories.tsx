import type { Meta } from "@storybook/react";
import { useStep } from "../../hooks";
import { Button } from "../Button";
import { Card } from "../Card";
import type { TabsProps } from "./Tabs";
import { Tabs } from "./Tabs";
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col min-h-[400px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

const tabs = [
  {
    name: "Product",
    content: (
      <Card className="flex-col">
        <h2 className="text-xl text-secondary-900 pb-2">Product</h2>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
        </p>
      </Card>
    ),
  },
  {
    name: "Features",
    content: (
      <Card className="flex-col">
        <h2 className="text-xl text-secondary-900 pb-2">Features</h2>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
        </p>
      </Card>
    ),
  },
  {
    name: "Reviews",
    content: (
      <Card className="flex-col">
        <h2 className="text-xl text-secondary-900 pb-2"> Reviews</h2>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
        </p>
      </Card>
    ),
  },
  {
    name: "Customers",
    content: (
      <Card className="flex-col">
        <h2 className="text-xl text-secondary-900 pb-2"> Customers</h2>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur
          adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem
          ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
        </p>
      </Card>
    ),
  },
];
export const TabsExample = (args: TabsProps): React.ReactNode => (
  <div className=" relative flex flex-col mx-auto w-full  items-start justify-start">
    <Tabs {...args} />
  </div>
);
TabsExample.args = {
  tabs: tabs,
};
export const ContainedMode = (args: TabsProps): React.ReactNode => TabsExample.bind({})(args);
ContainedMode.args = {
  tabs: tabs,
  mode: "contained",
};

export const Disabled = (args: TabsProps): React.ReactNode => TabsExample.bind({})(args);
Disabled.args = {
  tabs: [
    {
      name: "Enabled",
      content: (
        <div className="bg-background-onPrimary p-6 rounded-2xl">
          <h2 className="text-3xl text-secondary-900 font-bold">Enabled Tab</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur
          </p>
        </div>
      ),
    },
    {
      name: "Disabled",
      disabled: true,
      content: (
        <div className="bg-background-onPrimary p-6 rounded-2xl">
          <h2 className="text-3xl text-secondary-900 font-bold">Disabled Tab</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas.
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Ipsam, quas. Lorem ipsum dolor sit amet consecte
            tur
          </p>
        </div>
      ),
    },
  ],
};

export const Controlled = (): React.ReactNode => {
  const [currentStep, { goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep, setStep, reset }] = useStep(
    tabs.length,
  );
  return (
    <div className=" relative flex flex-col gap-8">
      <header className="flex flex-wrap gap-2">
        <Button onClick={goToPrevStep} disabled={!canGoToPrevStep}>
          Previous
        </Button>
        <Button onClick={goToNextStep} disabled={!canGoToNextStep}>
          Next
        </Button>

        <Button onClick={reset}>Reset</Button>

        <Button onClick={() => setStep(1)}>Go to second</Button>
      </header>
      Current step: {currentStep.toString()}
      <Tabs value={currentStep} onTabChange={setStep} tabs={tabs} />
    </div>
  );
};
