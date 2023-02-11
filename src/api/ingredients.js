import api from "./base";

export const createIngredientRequest = async (route, body, token) => {
  const form = new FormData();

  for (let key in body) {
    form.append(key, body[key]);
  }

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
