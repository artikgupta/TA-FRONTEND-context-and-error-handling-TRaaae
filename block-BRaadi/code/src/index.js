import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import ErrorBoundaries from "./components/ErrorBoundaries";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaries>
      <App />
    </ErrorBoundaries>
  </React.StrictMode>,
  document.getElementById("root")
);
