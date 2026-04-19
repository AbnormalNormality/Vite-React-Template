import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const element = document.querySelector<HTMLDivElement>("#app");
if (!element) throw new Error("No #app element found");

const root = createRoot(element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
