import { links } from "@/data/links";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t gap-4 border-t-secondary/10 p-6 flex justify-center text-center text-xs fixed bottom-0 left-0 bg-secondary-900/70 backdrop-blur-md">
      <p>
        Powered by{" "}
        <a
          href={links.polui}
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Pol-ui
        </a>
      </p>
      |
      <p>
        Made by{" "}
        <a
          href={links.author}
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Pol Gubau Amores
        </a>
      </p>
    </footer>
  );
};

export default Footer;
