"use client";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import tailwindConfig from "../../../tailwind.config";

const ComponentFrame = ({
  children: Component,
}: {
  children: React.ReactNode;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // const Component = require(path).default;

  useEffect(() => {
    const doc = iframeRef.current!.contentDocument;
    const body = doc!.body;

    if (!doc || !body) {
      console.error("Document or body not found");
      return;
    }

    // Clear existing content
    body.innerHTML = "";

    // Add Tailwind CSS via CDN
    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    doc.head.appendChild(link);

    // Ensure the Tailwind script is loaded and configure it
    const script = doc.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.onload = () => {
      // Configure Tailwind after it is loaded
      const tailwindConfigScript = doc.createElement("script");
      tailwindConfigScript.innerHTML = `
        tailwind.config = ${JSON.stringify(tailwindConfig)};
      `;
      doc.head.appendChild(tailwindConfigScript);

      // Add the custom Tailwind styles
      const style = doc.createElement("style");
      style.innerHTML = `
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
      `;
      doc.head.appendChild(style);

      // Create a div to mount the React component
      const mountDiv = doc.createElement("div");
      body.appendChild(mountDiv);

      // Render the component inside the iframe using createRoot
      const root = createRoot(mountDiv);
      root.render(Component as JSX.Element);
    };
    doc.head.appendChild(script);
  }, [Component]);

  return (
    <iframe
      className="overflow-hidden"
      ref={iframeRef}
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  );
};

export default ComponentFrame;
