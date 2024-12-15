import type { Meta } from "@storybook/react";
import { useState } from "react";
import { TbArrowLeft, TbUser } from "react-icons/tb";

import { Button } from "../Button";
import { Divider } from "../Divider";
import { IconButton } from "../IconButton";
import { toast } from "../Toaster";
import { OverButton } from "./OverButton";

export default {
  title: "Components/OverButton",
  component: OverButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center ">
        <div className="max-w-2xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

export function Default() {
  const [note, setNote] = useState("");

  return (
    <OverButton>
      {(props) => (
        <form
          className="flex h-full flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            props.onClose();
            toast.success("Note added");
            setNote("");
          }}
        >
          <textarea
            className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none"
            autoFocus={true}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <footer key="close" className="flex justify-between px-3 py-2">
            <IconButton type="button" size={"sm"} onClick={props.onClose}>
              <TbArrowLeft size={16} />
            </IconButton>
            <Button>Submit Note</Button>
          </footer>
        </form>
      )}
    </OverButton>
  );
}
export function Example() {
  return (
    <ul className="flex flex-col gap-4 items-center">
      <li className="flex gap-2 items-center">
        Note 1: <Default />
      </li>
      <li className="flex gap-2 items-center">
        Note 2: <Default />
      </li>
    </ul>
  );
}

export function UserInfo() {
  return (
    <OverButton
      trigger={{
        className: "bg-red-200 text-3xl gap-4 p-8 rounded-2xl",
        children: (
          <>
            <TbUser size={24} />
            <span>Pol Gubau</span>
          </>
        ),
      }}
    >
      {() => (
        <section className="p-4">
          <h3>Name</h3>
          <h2>Pol Gubau Amores</h2>
          <Divider />

          <p>
            <strong>Role:</strong> Software Engineer
          </p>
          <p>
            <strong>Location:</strong> Barcelona, Spain
          </p>
          <p>
            <strong>Skills:</strong> React, TypeScript, TailwindCSS
          </p>
        </section>
      )}
    </OverButton>
  );
}
