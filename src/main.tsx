import "@fontsource/montserrat/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import "@/index.css";
import App from "@/App";
import theme from "@/Theme";
import { store } from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
