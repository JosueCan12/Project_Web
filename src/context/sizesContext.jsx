import { createContext, useEffect, useState } from "react";
import {
  createIngredientRequest,
  getIngredientRequest,
} from "../api/ingredients";
import { useAuth } from "../hooks/useAuth";

export const sizesContext = createContext();

export function SizesProvider({ children }) {
  const [sizes, setSizes] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const [stuffings, setStuffings] = useState([]);
  const [designs, setDesigns] = useState([]);
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

  const createSize = async (form) => {
    const res = await createIngredientRequest("/breadsize", form, token);
    setSizes([...sizes, res]);
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
  const createDesign = async (form) => {
    const res = await createIngredientRequest("/cakedesign", form, token);
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
    <sizesContext.Provider
      value={{
        sizes,
        flavors,
        stuffings,
        designs,
        createSize,
        getSize,
        createFlavor,
        getFlavor,
        createStuffing,
        getStuffing,
        createDesign,
        getDesign
      }}
    >
      {children}
    </sizesContext.Provider>
  );
}
