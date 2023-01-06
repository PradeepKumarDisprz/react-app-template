
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalContextWrapper from "./Context/GlobalContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextWrapper>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GlobalContextWrapper>
);

