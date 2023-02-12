import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const flavorsContext = createContext();

export function FlavorsProvider({ children }) {
  const [flavors, setFlavors] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      const resFlavors = await getIngredientRequest("/breadflavors", token);
      setFlavors(
        [...resFlavors.data].map((element) => {
          return {
            id: element._id,
            imgURL: element.imgURL,
            nombre: element.flavor,
            precio: element.price,
          };
        })
      );
    })();
  }, []);

  const createFlavor = async (form) => {
    const res = await createIngredientRequest("/breadflavor", form, token);
    setFlavors([...flavors, res]);
    return res;
  };

  const getFlavor = (id) => {
    return getIngredientRequest(`/breadflavor/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        flavor: res.data.size,
        price: res.data.price,
      };
    });
  };

  return (
    <flavorsContext.Provider
      value={{
        flavors,
        createFlavor,
        getFlavor,
      }}
    >
      {children}
    </flavorsContext.Provider>
  );
}
