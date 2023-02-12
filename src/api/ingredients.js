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
      Authorization: token,
    },
  });
};

export const getIngredientRequest = async (route, token) =>
  api.get(route, {
    headers: {
      Authorization: token,
    },
  });

export const updateIngredientRequest = async (route, body, token) => {
  const form = createForm(body);

  return api.put(route, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  });
};
