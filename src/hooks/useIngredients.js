import { useContext } from "react";
import { flavorsContext } from "../context/flavorContext";
import { sizesContext } from "../context/sizesContext";

export const useSizes = () => {
  const context = useContext(sizesContext);
  if (!context) throw new Error("No se encuentra el contexto");
  return context;
};

export const useFlavors = () => {
  const context = useContext(flavorsContext);
  if (!context) throw new Error("No se encuentra el contexto");
  return context;
};
