import { Card } from "../Card";
import { Switch } from "../Switch";

export const BooleanLoadingCard = () => {
  return (
    <Card className="opacity-60 animate-pulse">
      <div className="flex justify-between gap-4 w-full">
        <header className="flex flex-col gap-1 w-full">
          <h4 className="bg-secondary/40 w-fit rounded-full text-transparent">lorem pisum lorem</h4>
          <h5 className="text-sm w-fit bg-secondary/20 rounded-full text-transparent">lorem pisum lorem epson</h5>
        </header>

        <Switch disabled={true} checked={false} onChange={() => null} />
      </div>
    </Card>
  );
};
