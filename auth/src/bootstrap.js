import React from "react";
import { createRoot } from "react-dom/client";
import { createRouter } from "./routing/router-factory";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const mount = ({ mountPoint, initialPathname, routingStrategy }) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(<App router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

console.log(process.env);

var localRoot = document.getElementById("_auth-dev-root");

if (localRoot) {
  mount({
    mountPoint: localRoot,
    routingStrategy: "browser",
  });
}

export { mount };

reportWebVitals();
