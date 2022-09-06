// React
import React from "react";
import ReactDOM from "react-dom/client";

// Libraries
import $ from "jquery";
import { BrowserRouter } from "react-router-dom";

// Self-defined Components
import App from "./App";

// CSS
import "./index.css";

const root = ReactDOM.createRoot($("#root").get(0));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
