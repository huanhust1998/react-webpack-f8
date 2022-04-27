import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import App from "./App";

// Render component App vào #root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
