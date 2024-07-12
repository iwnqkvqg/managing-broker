import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/montserrat/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
