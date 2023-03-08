import { createContext, useEffect, useState } from "react";
import { getOrders, changeStatusRequest } from "../api/orders";
import { useAuth } from "../hooks/useAuth";

export const ordersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      const res = await getOrders(token);
      console.log(res.data.orders);
      setOrders(res.data.orders);
    })();
  }, []);

  const changeStatus = async (id) => {
    const res = await changeStatusRequest(id, token);
    // console.log(res.data);
    setOrders(
      orders.map((order) => {
        return order.orderId === id ? res.data : order;
      })
    );
    return res;
  };

  return (
    <ordersContext.Provider value={{ orders, changeStatus }}>
      {children}
    </ordersContext.Provider>
  );
}
