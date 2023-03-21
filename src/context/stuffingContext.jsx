import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  deleteIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const stuffingsContext = createContext();

export function StuffingsProvider({ children }) {
  const [stuffings, setStuffings] = useState([]);
  const { token } = useAuth();

  const stuffingToItemTable = (stuffing) => {
    return {
      id: stuffing._id,
      imgURL: stuffing.imgURL,
      nombre: stuffing.stuffing,
      precio: stuffing.price,
      status: stuffing.status,
    };
  };

  useEffect(() => {
    (async () => {
      const resStuffings = await getIngredientRequest("/stuffings/1/10", token);
      setStuffings(
        [...resStuffings.data.stuffings.docs].map((element) => {
          return stuffingToItemTable(element);
        })
      );
    })();
  }, []);

  const createStuffing = async (form) => {
    const res = await createIngredientRequest("/stuffing", form, token);
    setStuffings([...stuffings, stuffingToItemTable(res.data)]);
    return res;
  };

  const getStuffing = (id) => {
    return getIngredientRequest(`/stuffing/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        stuffing: res.data.stuffing,
        price: res.data.price,
      };
    });
  };

  const updateStuffing = async (id, form) => {
    const res = await updateIngredientRequest(`/stuffing/${id}`, form, token);
    setStuffings(
      stuffings.map((stuffing) =>
        stuffing.id === id ? stuffingToItemTable(res.data) : stuffing
      )
    );
    return res;
  };

  const deleteStuffing = async (id) => {
    const res = await deleteIngredientRequest(`/stunffingS/${id}`, token);

    setStuffings(
      stuffings.map((stuffing) =>
        stuffing.id === id ? stuffingToItemTable(res.data) : stuffing
      )
    );
    return res;
  };

  return (
    <stuffingsContext.Provider
      value={{
        stuffings,
        createStuffing,
        getStuffing,
        updateStuffing,
        deleteStuffing,
      }}
    >
      {children}
    </stuffingsContext.Provider>
  );
}
