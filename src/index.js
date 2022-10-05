import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //esto es codigo jsx, fusiona javascript con html

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
