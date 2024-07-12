import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "../src/styles/main.scss";

const element = document.getElementById("root") ?? new Element();

if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
