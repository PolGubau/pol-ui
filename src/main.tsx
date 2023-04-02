import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PolUiRoot } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PolUiRoot>
      <App />
    </PolUiRoot>
  </React.StrictMode>
);
