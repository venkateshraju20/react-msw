import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Users from "./components/Users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);
reportWebVitals();
