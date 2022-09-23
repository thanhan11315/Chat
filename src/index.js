import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Image } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Image.PreviewGroup>
      <App />
    </Image.PreviewGroup>
  </React.StrictMode>
);
