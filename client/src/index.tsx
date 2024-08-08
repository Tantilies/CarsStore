import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RootStore from "./stores/root-store";
import { RootStoreContext } from './stores/root-store-context'


const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootStoreContext.Provider value={new RootStore()}>
        <App />
      </RootStoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
