import { useState } from "react";
import { TbDeviceFloppy, TbTrash, TbX } from "react-icons/tb";

import { useTranslate } from "../../hooks";
import { Button } from "../Button";
import { DialogClose } from "../Dialog";
import { IconButton } from "../IconButton";
import type { DrawerArrayProps } from "./DrawerArray";

interface DrawerContentProps<T> extends Pick<DrawerArrayProps<T>, "form"> {
  item: T;
  handelRemove: () => void;
  handleUpdate: (e: T) => void;
}
export const DrawerArrayContent = <T extends object>({
  form,
  item,
  handleUpdate,
  handelRemove,
}: DrawerContentProps<T>) => {
  const { t } = useTranslate();

  const [innerState, setInnerState] = useState<T>(item);

  return (
    <form
      className="grid h-full grid-rows-[1fr_auto] gap-4  min-w-[350px] pt-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(innerState);
      }}
    >
      <div className="flex flex-col gap-2">{form({ value: innerState, onChange: (e) => setInnerState(e) })}</div>

      <footer className="flex gap-1 items-center justify-end py-4">
        <DialogClose asChild={true}>
          <Button variant="ghost" color={"secondary"} type="button">
            <TbX size={15} />
            {t("cancel")}
          </Button>
        </DialogClose>
        <DialogClose disabled={innerState === item} asChild={true}>
          <Button type="submit">
            <TbDeviceFloppy size={15} />
            {t("save")}
          </Button>
        </DialogClose>
        <IconButton size={"sm"} color={"error"} type="button" label={t("delete")} onClick={handelRemove}>
          <TbTrash size={15} />
        </IconButton>
      </footer>
    </form>
  );
};

export default DrawerArrayContent;
