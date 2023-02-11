import { createContext, useEffect, useState } from "react";
import { getOrders } from "../api/orders";
import { useAuth } from "../hooks/useAuth";

export const ordersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
    (async () => {
      const res = await getOrders(token);
      setOrders(res.data);
    })();
  }, []);

  return (
    <ordersContext.Provider value={orders}>{children}</ordersContext.Provider>
  );
}
