// Common Components
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// Self-defined Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
