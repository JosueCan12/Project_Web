import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { OrdersProvider } from "./context/ordersContext";
import { SizesProvider } from "./context/sizesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <OrdersProvider>
        <SizesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SizesProvider>
      </OrdersProvider>
    </AuthProvider>
  </React.StrictMode>
);
