// Common Components
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Pages
import App from "./App";

// CSS
import "./index.css";

const root = ReactDOM.createRoot($("#root")[0]);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
