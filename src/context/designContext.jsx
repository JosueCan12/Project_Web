import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  deleteIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const designsContext = createContext();

export function DesignsProvider({ children }) {
  const [designs, setDesigns] = useState([]);
  const { token } = useAuth();

  const designToItemTable = (item) => {
    return {
      id: item._id,
      imgURL: item.imgURL,
      nombre: item.description,
      precio: item.price,
      status: item.status,
    };
  };

  useEffect(() => {
    (async () => {
      const resDesigns = await getIngredientRequest("/cakedesigns", token);
      setDesigns(
        [...resDesigns.data].map((element) => {
          return designToItemTable(element);
        })
      );
    })();
  }, []);

  const createDesign = async (form) => {
    const res = await createIngredientRequest("/cakedesign", form, token);
    setDesigns([...designs, designToItemTable(res.data)]);
    return res;
  };

  const getDesign = (id) => {
    return getIngredientRequest(`/cakedesign/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        description: res.data.description,
        price: res.data.price,
      };
    });
  };

  const updateDesign = async (id, form) => {
    const res = await updateIngredientRequest(`/cakedesign/${id}`, form, token);
    setDesigns(
      designs.map((design) =>
        design.id === id ? designToItemTable(res.data) : design
      )
    );
    return res;
  };

  const deleteDesign = async (id) => {
    const res = await deleteIngredientRequest(`/cakedesignS/${id}`, token);
    setDesigns(
      designs.map((design) =>
        design.id === id ? designToItemTable(res.data) : design
      )
    );

    return res;
  };

  return (
    <designsContext.Provider
      value={{
        designs,
        createDesign,
        getDesign,
        updateDesign,
        deleteDesign,
      }}
    >
      {children}
    </designsContext.Provider>
  );
}
