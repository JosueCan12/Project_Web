import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  getIngredientRequest,
  updateIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const designsContext = createContext();

export function DesignsProvider({ children }) {
  const [designs, setDesigns] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      const resDesigns = await getIngredientRequest("/cakedesigns", token);
      setDesigns(
        [...resDesigns.data].map((element) => {
          return {
            id: element._id,
            imgURL: element.imgURL,
            nombre: element.description,
            precio: element.price,
          };
        })
      );
    })();
  }, []);

  const createDesign = async (form) => {
    const res = await createIngredientRequest("/cakedesign", form, token);
    console.log(res);
    setDesigns([...designs, res]);
    return res;
  };

  const getDesign = (id) => {
    return getIngredientRequest(`/cakedesign/${id}`, token).then((res) => {
      return {
        id: res.data._id,
        imagen: res.data.imgURL,
        design: res.data.size,
        price: res.data.price,
      };
    });
  };

  return (
    <designsContext.Provider
      value={{
        designs,
        createDesign,
        getDesign,
      }}
    >
      {children}
    </designsContext.Provider>
  );
}
