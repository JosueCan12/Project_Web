import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { OrdersProvider } from "./context/ordersContext";
import { SizesProvider } from "./context/sizesContext";
import { DesignsProvider } from "./context/designContext";
import { FlavorsProvider } from "./context/flavorContext";
import { StuffingsProvider } from "./context/stuffingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <OrdersProvider>
        <DesignsProvider>
          <SizesProvider>
            <FlavorsProvider>
              <StuffingsProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </StuffingsProvider>
            </FlavorsProvider>
          </SizesProvider>
        </DesignsProvider>
      </OrdersProvider>
    </AuthProvider>
  </React.StrictMode>
);
