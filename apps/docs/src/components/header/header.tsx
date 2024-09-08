import React from "react";
import Logos from "../Logos/Logos";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 justify-center items-center w-full px-10 text-center text-pretty ">
      <Logos />
      <h1 className="text-6xl md:text-9xl font-bold m-0">
        <span className="text-secondary-700">POL/</span>
        LAB
      </h1>
      <h3 className="text-lg">Experimental UI I created for cool projects.</h3>
    </header>
  );
};

export default Header;
