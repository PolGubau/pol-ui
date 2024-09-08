import React from "react";
import Menu from "./menu";

const example = () => {
  const defaultLinks = [
    { href: "_///_", label: "Home" },
    { href: "_///_", label: "About Me" },
    { href: "_///_", label: "Projects" },
  ];
  return <Menu links={defaultLinks} />;
};

export default example;
