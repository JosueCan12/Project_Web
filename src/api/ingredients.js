import api from "./base";

const createForm = (body) => {
  const form = new FormData();
  for (const key in body) {
    form.append(key, body[key]);
  }

  return form;
};

export const createIngredientRequest = async (route, body, token) => {
  const form = createForm(body);

  return api.post(route, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getIngredientRequest = async (route, token) =>
  api.get(`${route}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateIngredientRequest = async (route, body, token) => {
  return api.put(route, body, {
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateIngredientImageRequest = async (route, body, token) => {
  const form = createForm(body);

  return api.put(route, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteIngredientRequest = async (route, token) =>
  api.put(
    route,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
