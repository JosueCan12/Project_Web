import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const sizesContext = createContext();

export function SizesProvider({ children }) {
  const [sizes, setSizes] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      const resSizes = await getIngredientRequest("/breadsizes", token);
      setSizes(
        [...resSizes.data].map((element) => {
          return {
            id: element._id,
            imgURL: element.imgURL,
            nombre: element.size,
            precio: element.price,
          };
        })
      );
    })();
  }, []);

  const createSize = async (form) => {
    const res = await createIngredientRequest("/breadsize", form, token);
    console.log(res);
    setSizes([
      ...sizes,
      {
        id: res.data._id,
        imgURL: res.data.imgURL,
        nombre: res.data.size,
        precio: res.data.price,
      },
    ]);
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
    setSizes([...flavors, res]);
    return res;
  };

  return (
    <sizesContext.Provider
      value={{
        sizes,
        createSize,
        getSize,
        updateSize,
      }}
    >
      {children}
    </sizesContext.Provider>
  );
}
