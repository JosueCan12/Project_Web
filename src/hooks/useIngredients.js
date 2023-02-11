import { useContext } from "react";
import { sizesContext } from "../context/sizesContext";

export const useSizes = () => {
  const context = useContext(sizesContext);
  if (!context) throw new Error("No se encuentra el contexto");
  return context;
};
