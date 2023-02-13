import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  deleteIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const sizesContext = createContext();

export function SizesProvider({ children }) {
  const [sizes, setSizes] = useState([]);
  const { token } = useAuth();

  const sizeToItemTable = (item) => {
    return {
      id: item._id,
      imgURL: item.imgURL,
      nombre: item.size,
      precio: item.price,
      status: item.status,
    };
  };

  useEffect(() => {
    (async () => {
      const resSizes = await getIngredientRequest("/breadsizes", token);
      setSizes([...resSizes.data].map((element) => sizeToItemTable(element)));
    })();
  }, []);

  const createSize = async (form) => {
    const res = await createIngredientRequest("/breadsize", form, token);
    setSizes([...sizes, sizeToItemTable(res.data)]);
    return res;
  };

  const getSize = (id) => {
    return getIngredientRequest(`/breadsize/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        size: res.data.size,
        price: res.data.price,
      };
    });
  };

  const updateSize = async (id, form) => {
    const res = await updateIngredientRequest(`/breadsize/${id}`, form, token);
    setSizes(
      sizes.map((size) => (size.id === id ? sizeToItemTable(res.data) : size))
    );
    return res;
  };

  const deleteSize = async (id) => {
    const res = await deleteIngredientRequest(`/breadSizeS/${id}`, token);
    setSizes(
      sizes.map((size) => (size.id === id ? sizeToItemTable(res.data) : size))
    );
    return res;
  };

  return (
    <sizesContext.Provider
      value={{
        sizes,
        createSize,
        getSize,
        updateSize,
        deleteSize,
      }}
    >
      {children}
    </sizesContext.Provider>
  );
}
