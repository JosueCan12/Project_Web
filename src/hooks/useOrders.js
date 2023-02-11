import { useContext } from "react";
import { ordersContext } from "../context/ordersContext"

export const useOrders = () => {
  const context = useContext(ordersContext);
  if (!context) throw new Error("No se encuentra el contexto orders");
  return context;
};
