import { useContext } from "react";
import { designsContext } from "../context/designContext";
import { flavorsContext } from "../context/flavorContext";
import { sizesContext } from "../context/sizesContext";
import { stuffingsContext } from "../context/stuffingContext";

export const useSizes = () => {
  const context = useContext(sizesContext);
  if (!context) throw new Error("No se encuentra el contexto de tamaños");
  return context;
};

export const useFlavors = () => {
  const context = useContext(flavorsContext);
  if (!context) throw new Error("No se encuentra el contexto de sabores");
  return context;
};

export const useDesigns = () => {
  const context = useContext(designsContext);
  if (!context) throw new Error("No se encuentra el contexto de diseños");
  return context;
};

export const useStuffings = () => {
  const context = useContext(stuffingsContext);
  if (!context) throw new Error("No se encuentra el contexto de rellenos");
  return context;
};
