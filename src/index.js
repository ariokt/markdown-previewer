import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MarkdownPreviewer from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MarkdownPreviewer />
  </StrictMode>
);
