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
      if (token !== "") {
        const resSizes = await getIngredientRequest("/breadsizes/1/10", token);
        console.log(resSizes.data.breadSizes.docs);
        setSizes(
          [...resSizes.data.breadSizes.docs].map((element) =>
            sizeToItemTable(element)
          )
        );
      }
    })();
  }, [token]);

  const createSize = async (form) => {
    const res = await createIngredientRequest("/breadsize", form, token);
    console.log(size);
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
