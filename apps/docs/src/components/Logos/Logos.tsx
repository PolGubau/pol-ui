"use client";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import React from "react";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "@/assets/icons/arrow-icon";
import { StarIcon } from "@/assets/icons/star-icon";
import { SwitchIcon } from "@/assets/icons/switch-icon";
import { PopoverIcon } from "@/assets/icons/popover-icon";
gsap.registerPlugin(Draggable);

const Logos = () => {
  useGSAP(() => {
    Draggable.create(".logo", {
      type: "rotation",
    });
    Draggable.create(".logo2", {
      type: "y",
    });
    Draggable.create(".logo3", {
      type: "x",
    });
    Draggable.create(".logo4", {});
  });

  return (
    <div className="flex items-center fill-white gap-4 scale-50 md:scale-100">
      <SwitchIcon className="logo" />
      <StarIcon className="logo2" />
      <ArrowIcon className="logo3" />
      <PopoverIcon className="logo4" />
    </div>
  );
};

export default Logos;
