import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const stuffingsContext = createContext();

export function StuffingsProvider({ children }) {
  const [stuffings, setStuffings] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      const resStuffings = await getIngredientRequest("/stuffings", token);
      setStuffings(
        [...resStuffings.data].map((element) => {
          return {
            id: element._id,
            imgURL: element.imgURL,
            nombre: element.stuffing,
            precio: element.price,
          };
        })
      );
    })();
  }, []);

  const createStuffing = async (form) => {
    const res = await createIngredientRequest("/stuffing", form, token);
    setStuffings([...stuffings, res]);
    return res;
  };

  const getStuffing = (id) => {
    return getIngredientRequest(`/stuffing/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        stuffing: res.data.size,
        price: res.data.price,
      };
    });
  };

  return (
    <stuffingsContext.Provider
      value={{
        stuffings,
        createStuffing,
        getStuffing,
      }}
    >
      {children}
    </stuffingsContext.Provider>
  );
}
