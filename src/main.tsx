import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store/store.ts";
import { ActualCurrencyPage } from "./pages/ActualCurrencyPage.tsx";
import { CurrencyPage } from "./pages/CurrencyPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "currency",
    element: <CurrencyPage />,
  },
  {
    path: "actual-currency",
    element: <ActualCurrencyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
