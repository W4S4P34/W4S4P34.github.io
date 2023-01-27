// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Libraries
import $ from "jquery";

// Self-defined Components
import App from "./App";

// CSS
import "./index.css";
import "./fonts.css";

const root = ReactDOM.createRoot($("#root").get(0));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
