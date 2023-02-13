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

  const flavorToItemTable = (flavor) => {
    return {
      id: flavor._id,
      imgURL: flavor.imgURL,
      nombre: flavor.flavor,
      precio: flavor.price,
      status: flavor.status,
    };
  };

  useEffect(() => {
    (async () => {
      const resFlavors = await getIngredientRequest("/breadflavors", token);
      setFlavors(
        [...resFlavors.data].map((element) => {
          return flavorToItemTable(element);
        })
      );
    })();
  }, []);

  const createFlavor = async (form) => {
    const res = await createIngredientRequest("/breadflavor", form, token);
    setFlavors([...flavors, flavorToItemTable(res.data)]);
    return res;
  };

  const getFlavor = (id) => {
    return getIngredientRequest(`/breadflavor/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        flavor: res.data.flavor,
        price: res.data.price,
      };
    });
  };

  const updateFlavor = async (id, form) => {
    const res = await updateIngredientRequest(
      `/breadflavor/${id}`,
      form,
      token
    );
    setFlavors(
      flavors.map((flavor) =>
        flavor.id === id ? flavorToItemTable(res.data) : flavor
      )
    );
    return res;
  };

  return (
    <flavorsContext.Provider
      value={{
        flavors,
        createFlavor,
        getFlavor,
        updateFlavor,
      }}
    >
      {children}
    </flavorsContext.Provider>
  );
}
